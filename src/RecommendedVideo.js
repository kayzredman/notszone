import React from "react";
import "./RecommendedVideo.css";

function RecommendedVideo() {
  return (
    <div className="recommendedVideo">
      <h2>Recommended</h2>
      <div className="recommendedVideo__videos">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}

export default RecommendedVideo;
