const express = require('express');
const route = express.Router();
const Gallery = require('../models/blogModel');
const bodyParser = require('body-parser');

route.get('/gallery/create', (req,res)=>{
    res.render('newGallery', {title: 'Create a new blog'});
}); 
route.post('/api/gallery', (req, res) =>{
    const { title, snippet, body, image, hashtags, tagOne, tagTwo, tagThree, tagFour, tagFive, tagSix, author, readMins, categories, comments} = req.body;
    const gallery = new Gallery({ title, snippet, body, image, hashtags, tagOne, tagTwo, tagThree, tagFour, tagFive, tagSix, author, readMins, categories, comments});
    gallery.save()
    .then(() =>{
        res.status(200).json({message: 'Data saved sucessfully'});
    })
    .catch((err) => {
        res.status(500).json({message: 'Error saving data'});
    })
});

route.put('/api/gallery/:id', async (req, res) => {
  try{
     const gallery = await Gallery.findById(req.params.id);
     if(gallery.username === req.body.username){
      try{
      const updatedGallery = await Gallery.findByIdAndUpdate(req.params.id,
      {$set: req.body},
      {new: true}
       );
       res.status(200).json(updatedGallery);
    }catch(err){
      res.status(200).json(err)
     }
    } else{
      res.status(401).json('You can only update your blog');
      }
}catch(err){
      res.status(500).json(err)
}
});


route.get('/gallery', (req, res) =>{
    Gallery.find().sort({createdAt: -1})
    .then((result) =>{
        res.status(200).json({
            gallery:result
        });
    }).catch((err) => {
        console.log(err);
    })
})

route.get('/gallery/:id',(req, res) => {
    const id = req.params.id;
    Gallery.findById(id)
    .then((result) => {
        res.status(200).json({gallery: result});
    })
    .catch((err) => {
        console.log(err);
    });
})
route.post('/gallery/:id/comments', async (req, res) => {
    const galleryId = req.params.id;
    const comment = req.body.comments;

    try{
        const gallery = await Gallery.findById(galleryId);
        if(!gallery){
            return res.status(404).json({error: 'Blog post was not found'})
        }
        gallery.comments.push(comment);
        await gallery.save();
        res.status(200).json(gallery)
    }
    catch(error){
        res.status(500).json({error:'internal server error'})
    }
});

route.get('/gallery/:id/comments', async (req,res)=>{
    const galleryId = req.params.id;
    try{
        const gallery = await Gallery.findById(galleryId);
        if(!gallery){
            return res.status(404).json({error: 'Blog post was not found'});
        }const comments = gallery.comments;
        res.status(200).json(comments);
    }catch(error){
        res.status(500).json({error:'internal server error'});
    }
});

route.post('/gallery/:galleryId/comments/:commentId/reply', async (req, res) => {
  try {
    const { galleryId, commentId } = req.params;
    const gallery = await Gallery.findById(galleryId);

    if (!gallery) {
      return res.status(404).json({ error: 'gallery not found' });
    }

    const comment = gallery.comments.id(commentId);

    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    comment.replies.push({
      replier: req.body.replier,
      text: req.body.text,
    });

    await gallery.save();
    res.status(201).json(gallery);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


route.get('/gallery/:galleryId/comments/:commentId/replies', async (req, res) => {
  try {
    const { galleryId, commentId } = req.params;
    const gallery = await Gallery.findById(galleryId);

    if (!gallery) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    const comment =gallery.comments.id(commentId);

    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    const replies = comment.replies;
    res.status(200).json(replies);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

route.delete('/gallery/:id', (req, res) => {
    const id = req.params.id;
    Gallery.findByIdAndDelete(id)
    .then((result) => {
        res.json({redirect: '/gallery'});
    })
    .catch((err) => {
        console.log(err);
    })
});

module.exports = route;
