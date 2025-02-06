const express = require("express");
const route = express.Router();
const VideoLinks = require("../models/Videos");

route.post("/api/video_tutorials", (req, res) => {
  const video = new VideoLinks(req.body);
  video
    .save()
    .then(() => {
      res.status(200).json({ message: "Saved!" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error saving video!" });
    });
});

route.get("/api/all_videos", (req, res) => {
  VideoLinks.find()
    .then((result) => {
      res.status(200).json({ video: result });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error" });
    });
});

route.delete("/api/videos/:id", (req, res) => {
  const id = req.params.id;
  VideoLinks.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/api/all_videos" });
    })
    .catch((err) => {
      console.log(err);
    });
});

route.put("/api/video_tutorials/:id", (req, res) => {
  const id = req.params.id;
  VideoLinks.findByIdAndUpdate(id, req.body, { new: true })
    .then((updatedVideo) => {
      res.status(200).json({ message: "Updated!", video: updatedVideo });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error updating video!" });
    });
});

module.exports = route;
