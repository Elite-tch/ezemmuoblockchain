const blogRoutes = require("./blogRoutes");
const galleryRoutes = require("./galleryRoutes");
const dashAuthRoutes = require("./dashAuth");
const subscribeToNewsLetterRoutes = require("./subscribeToNewsLetter");
const youtubeVideosRoutes = require("./youtubeVideos");
const usersRoutes = require("./users");
const router = require("express").Router();

router
  .use(blogRoutes)
  .use(galleryRoutes)
  .use(dashAuthRoutes)
  .use(subscribeToNewsLetterRoutes)
  .use(youtubeVideosRoutes)
  .use(usersRoutes);

module.exports = router;