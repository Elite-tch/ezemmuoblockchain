const BadRequestError = require("../errors/BadRequestError");
const CustomAPIError = require("../errors/CustomAPIError");
const NotFoundError = require("../errors/NotFoundError");
const Blog = require("../models/blogModel");
const { handleError } = require("../utils/errorHandler");

exports.createBlog = async (req, res) => {
  if (!req.body) throw new BadRequestError();
  const blog = new Blog({
    ...req.body,
  });

  if (!blog) throw new CustomAPIError("Something went wrong");
  await blog.save();
  res.status(200).json({ message: "Data saved successfully" });
};

exports.updateBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (blog.username === req.body.username) {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedBlog);
  } else {
    throw new NotFoundError(`No blog with the id ${req.params.id}`);
  }
};

exports.getAllBlogs = async (req, res) => {
  const blogs = await Blog.find().limit(10);
  res.status(200).json({ blogs });
};

exports.getBlogById = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) throw new NotFoundError(`No blog with the id ${req.params.id}`);
  res.status(200).json({ blog });
};

exports.addComment = async (req, res) => {
  const blogId = req.params.id;
  const comment = req.body.comments;
  const blog = await Blog.findById(blogId);
  if (!blog) throw new NotFoundError(`No blog with the id ${blogId}`);
  blog.comments.push(comment);
  await blog.save();
  res.status(200).json(blog);
};

exports.getComments = async (req, res) => {
  const blogId = req.params.id;
  const blog = await Blog.findById(blogId);
  if (!blog) throw new NotFoundError(`No blog with the id ${blogId}`);
  const comments = blog.comments;
  res.status(200).json(comments);
};

exports.addReply = async (req, res) => {
  const { blogId, commentId } = req.params;
  const blog = await Blog.findById(blogId);
  if (!blog) throw new NotFoundError(`No blog with the id ${blogId}`);
  const comment = blog.comments.id(commentId);
  if (!comment) throw new NotFoundError(`No Comment with the id ${commentId}`);
  comment.replies.push({ replier: req.body.replier, text: req.body.text });
  await blog.save();
  res.status(201).json(blog);
};

exports.getReplies = async (req, res) => {
  const { blogId, commentId } = req.params;
  const blog = await Blog.findById(blogId);
  if (!blog) throw new NotFoundError(`No blog with the id ${blogId}`);
  const comment = blog.comments.id(commentId);
  if (!comment) throw new NotFoundError(`No comment with the id ${commentId}`);
  const replies = comment.replies;
  res.status(200).json(replies);
};

exports.deleteBlog = async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ redirect: "/blogs" });
};
