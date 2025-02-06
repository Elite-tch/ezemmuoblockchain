const newsletterService = require("../services/newsletterService");
const { handleError } = require("../utils/errorHandler");

exports.subscribeToNewsletter = async (req, res) => {
  await newsletterService.subscribeToNewsletter(req.body);
  res.status(200).json({ message: "Subscribed successfully!" });
};

exports.getAllNewsletters = async (req, res) => {
  const newsletters = await newsletterService.getAllNewsletters();
  res.status(200).json(newsletters);
};

exports.deleteNewsletter = async (req, res) => {
  await newsletterService.deleteNewsletter(req.params.id);
  res.status(200).json({ message: "Unsubscribed successfully!" });
};
