import React from "react";

const VideoDetail = ({ video }) => {
  // If the video is null, return a div that says Loading...
  // We need this b/c in our App component's state we set "selectedVideo" to null (b/c we had to initialize it to something and for objects & numbers, you default it to null). "selectedVideo" is what we pass in to this component under the field name "video". So when we try to access anything using video.[WHATEVERFIELD] we will get a null error
  if (!video) {
    return <div>Loading...</div>;
  }

  // A youtube video can be embedded by taking the base URL and appending the video's ID which we get from video.id.videoId
  // When you go to youtube click on a video and click share and then click embed to see for yourself
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
