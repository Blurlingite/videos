import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    // We gave the div a class in the VideoItem component a class of "item" instead of in the VideoList component where we called the VideoItem component (even though that would work too). So now when a VideoItem component is rendered (a video is rendered) it will have the style of item

    // for this div's onClick handler we want the onVideoSelect() to be invoked when the user clicks on this div and pass in the video so we can update the webpage to show that 1 video. That is why we CANNOT write this.onVideoSelect. We have to use an arrow function, use onVideoSelect() and pass in the video (which also comes in from the prop object we destructured above)
    // onVideoSelect was passed down from the App component to the VideoList component. The VideoList component passed it down further here to the VideoItem component. Since we attached onVideoSelect to an event handler like onClick, whenever the user clicks on 1 of the videos (in the VideoList component which just displays multiple VideoItem components), that video selection gets transmitted back up to where onVideoSelect was first defined (the App parent component). Once the video selection is in the App component, we will store it in App's state under the field "selectedVideo". We can then use "selectedVideo" to update the webpage to show just that 1 video by passing "selectedVideo" to a different component called "VideoDetail"
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
