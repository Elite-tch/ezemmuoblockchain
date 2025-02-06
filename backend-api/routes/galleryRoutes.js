const express = require('express');
const route = express.Router();
const galleryController = require('../controllers/galleryController');

route.get('/gallery/create', (req, res) => {
  res.render('newGallery', { title: 'Create a new blog' });
});
route.post('/api/gallery', galleryController.createGallery);
route.put('/api/gallery/:id', galleryController.updateGallery);
route.get('/gallery', galleryController.getAllGalleries);
route.get('/gallery/:id', galleryController.getGalleryById);
route.post('/gallery/:id/comments', galleryController.addComment);
route.get('/gallery/:id/comments', galleryController.getComments);
route.post('/gallery/:galleryId/comments/:commentId/reply', galleryController.addReply);
route.get('/gallery/:galleryId/comments/:commentId/replies', galleryController.getReplies);
route.delete('/gallery/:id', galleryController.deleteGallery);

module.exports = route;
