const User = require('../models/UserModel');
const Blog = require('../models/blogModel');
const bcrypt = require('bcrypt');

exports.updateUser = async (userId, params, body) => {
  if (body.password) {
    const salt = await bcrypt.genSalt(10);
    body.password = await bcrypt.hash(body.password, salt);
  }
  return User.findByIdAndUpdate(params.id, { $set: body }, { new: true });
};

exports.getAllUsers = async () => {
  return User.find().sort({ createdAt: -1 });
};

exports.getUserById = async (id) => {
  return User.findById(id);
};

exports.getUserByEmail = async (email) => {
  return User.findOne({ email });
};

exports.deleteUser = async (userId, params) => {
  const user = await User.findById(params.id);
  await Blog.deleteMany({ username: user.username });
  return User.findByIdAndDelete(params.id);
};
