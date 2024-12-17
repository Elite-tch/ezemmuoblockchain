import React, { useEffect, useState } from "react";
import axios from "axios";
import "./VideoDetails.css";

const VideoDetails = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    // Fetch videos from the API
    axios
      .get("http://localhost:3000/api/all_videos")
      .then((res) => {
        setVideoData(res.data.video);
      })
      .catch((err) => {
        console.error("Error fetching video data:", err);
      });
  }, []);

  return (
    <div className="video-details">
      <h1 style={{ marginLeft: "3rem", fontFamily: "Monts bold", marginTop: "2rem", textAlign:'center' }}>
        All Videos
      </h1>
      <div className="videos">
        {videoData.map((item) => (
          <div key={item._id} className="video-card">
           
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${getYouTubeVideoId(item.videoLink)}`}
              title={item.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
             <h2 style={{ fontFamily: "Monts bold",  textAlign:'left' }}> {item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper function to extract the video ID from a YouTube URL
const getYouTubeVideoId = (url) => {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|embed)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

export default VideoDetails;
