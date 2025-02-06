const userService = require('../services/userService');
const { handleError } = require('../utils/errorHandler');

exports.updateUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    const updatedUser = await userService.updateUser(req.body.userId, req.params, req.body);
    res.status(200).json(updatedUser);
  } else {
    res.status(401).json('You can only update your account');
  }
};

exports.getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.status(200).json({ users });
};

exports.getUserById = async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  if (!user) {
    return res.status(404).json('User not found');
  }
  const { password, ...others } = user._doc;
  res.status(200).json(others);
};

exports.getUserByEmail = async (req, res) => {
  const user = await userService.getUserByEmail(req.params.email);
  if (!user) {
    return res.status(404).json('User not found');
  }
  const { password, ...others } = user._doc;
  res.status(200).json(others);
};

exports.deleteUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    await userService.deleteUser(req.body.userId, req.params);
    res.status(200).json('User has been deleted');
  } else {
    res.status(401).json('You can only delete your account');
  }
};
