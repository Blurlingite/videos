import React from "react";
import VideoItem from "./VideoItem";

// the props coming in is the one the App component passed to VideoList, which is "videos" when we wrote this.state.videos
// The "videos" from the App component comes from the App's state, and then we are just passing the "videos" field into VideoList using this.state.videos
// We also destructured the props object coming in so that we just take the "videos" field. So instead of saying const VideoList = (props) we say const VideoList = ({videos})
const VideoList = ({ videos }) => {
  // map over videos array that came in as a prop
  const renderedList = videos.map(video => {
    // pass VideoItem the current video we are on in the array as a prop called "video"
    return <VideoItem video={video} />;
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
