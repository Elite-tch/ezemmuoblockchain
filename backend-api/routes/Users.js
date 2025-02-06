const express = require('express');
const route = express.Router();
const userController = require('../controllers/userController');

route.put('/admin_dashboard/:id', userController.updateUser);
route.get('/admin_dashboard/users', userController.getAllUsers);
route.get('/admin_dashboard/:id', userController.getUserById);
route.get('/admin_dashboard/userByEmail/:email', userController.getUserByEmail);
route.delete('/admin_dashboard/:id', userController.deleteUser);

module.exports = route;
