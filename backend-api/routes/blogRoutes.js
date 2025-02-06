const express = require('express');
const route = express.Router();
const blogController = require('../controllers/blogController');

route.get('/blogs/create', (req, res) => {
  res.render('newBlog', { title: 'Create a new blog' });
});
route.post('/api/blogs', blogController.createBlog);
route.put('/api/blogs/:id', blogController.updateBlog);
route.get('/blogs', blogController.getAllBlogs);
route.get('/blogs/:id', blogController.getBlogById);
route.post('/blogs/:id/comments', blogController.addComment);
route.get('/blogs/:id/comments', blogController.getComments);
route.post('/blogs/:blogId/comments/:commentId/reply', blogController.addReply);
route.get('/blogs/:blogId/comments/:commentId/replies', blogController.getReplies);
route.delete('/blogs/:id', blogController.deleteBlog);

module.exports = route;
