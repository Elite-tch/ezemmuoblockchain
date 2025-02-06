const BadRequestError = require("../errors/BadRequestError");
const Gallery = require("../models/blogModel");

exports.createGallery = async (req, res) => {
  if (!req.body) throw new BadRequestError("No body in the request");

  const gallery = new Gallery({
    ...req.body,
  });
  await gallery.save();
  res.status(200).json({ message: "Data saved successfully" });
};

exports.updateGallery = async (req, res) => {
  const gallery = await Gallery.findById(req.params.id);
  if (gallery.username === req.body.username) {
    const updatedGallery = await Gallery.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedGallery);
  } else 
    if (!gallery)
      throw new NotFoundError(`No blog with the id ${req.params.id}`);
};

exports.getAllGalleries = async (req, res) => {
  const galleries = await Gallery.find().sort({ createdAt: -1 });
  res.status(200).json({ gallery: galleries });
};

exports.getGalleryById = async (req, res) => {
  const gallery = await Gallery.findById(req.params.id);
  if (!gallery) {
    return res.status(404).json({ error: "Gallery not found" });
  }
  res.status(200).json({ gallery });
};

exports.addComment = async (req, res) => {
  const galleryId = req.params.id;
  const comment = req.body.comments;
  const gallery = await Gallery.findById(galleryId);
  if (!gallery) {
    return res.status(404).json({ error: "Gallery not found" });
  }
  gallery.comments.push(comment);
  await gallery.save();
  res.status(200).json(gallery);
};

exports.getComments = async (req, res) => {
  const galleryId = req.params.id;
  const gallery = await Gallery.findById(galleryId);
  if (!gallery) {
    return res.status(404).json({ error: "Gallery not found" });
  }
  const comments = gallery.comments;
  res.status(200).json(comments);
};

exports.addReply = async (req, res) => {
  const { galleryId, commentId } = req.params;
  const gallery = await Gallery.findById(galleryId);
  if (!gallery) {
    return res.status(404).json({ error: "Gallery not found" });
  }
  const comment = gallery.comments.id(commentId);
  if (!comment) {
    return res.status(404).json({ error: "Comment not found" });
  }
  comment.replies.push({ replier: req.body.replier, text: req.body.text });
  await gallery.save();
  res.status(201).json(gallery);
};

exports.getReplies = async (req, res) => {
  const { galleryId, commentId } = req.params;
  const gallery = await Gallery.findById(galleryId);
  if (!gallery) {
    return res.status(404).json({ error: "Gallery not found" });
  }
  const comment = gallery.comments.id(commentId);
  if (!comment) {
    return res.status(404).json({ error: "Comment not found" });
  }
  const replies = comment.replies;
  res.status(200).json(replies);
};

exports.deleteGallery = async (req, res) => {
  await Gallery.findByIdAndDelete(req.params.id);
  res.json({ redirect: "/gallery" });
};
