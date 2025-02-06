const express = require('express');
const route = express.Router();
const newsletterController = require('../controllers/newsletterController');

route.post('/api/newsletter', newsletterController.subscribeToNewsletter);
route.get('/api/all_newsletters', newsletterController.getAllNewsletters);
route.delete('/api/newsletter/:id', newsletterController.deleteNewsletter);

module.exports = route;
