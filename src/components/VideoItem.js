import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video }) => {
  return (
    // We gave the div a class in the VideoItem component a class of "item" instead of in the VideoList component where we called the VideoItem component (even though that would work too). So now when a VideoItem component is rendered (a video is rendered) it will have the style of item
    <div class="video-item item">
      <img className="ui image" src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
