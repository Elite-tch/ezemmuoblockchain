
const Newsletter = require('../models/newsletters');

exports.subscribeToNewsletter = async (body) => {
  const newSubscription = new Newsletter(body);
  return newSubscription.save();
};

exports.getAllNewsletters = async () => {
  return Newsletter.find();
};

exports.deleteNewsletter = async (id) => {
  return Newsletter.findByIdAndDelete(id);
};