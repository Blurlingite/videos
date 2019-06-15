import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

// This file is a pre-configured instance of axios that we made with axios.create() and we will be able to start with data from there. Using this we can use youtube.get()
//"youtube" b/c that is the name we gave this import
// get() comes from axios package
import youtube from "../apis/youtube";

// selectedVideo will hold the video the user clicked on so we can update the webpage to show just that 1 video
class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  // gets data from youtube when the SearchBar component below has a search term entered by the user and they press ENTER. We write this in the App component b/c the App component should be the one that communicates with the Youtube API
  // since we are using an API request (youtube.get()) we need to use async await syntax.
  // "async" goes on the function before the parameter list (only 1 param is there, "term")
  // "await" goes on the API request call. We also assign it to a variable called "response" so we can make this API request using that variable
  onTermSubmit = async term => {
    // param 1: the endpoint to be added onto baseURL from youtube.js
    // param 2: what you'll search by, the search term
    const response = await youtube.get("/search", {
      params: {
        q: term // see youtube.js for info on "q" which holds the search term (stands for "query"). We add the search term onto the baseURL from youtube.js right after "/search" is added from above. We don't need to restate the other params located in youtube.js b/c those are always going to be the same, that's why we put them in youtube.js and not everywhere we make calls to the Youtube API
      }
    });
    // "response.data.items" is the list of youtube videos & data about them. We will add this to the App component's state so that we can pass it down to child components to determine how we will display them
    this.setState({ videos: response.data.items });
  };

  // when a video is selected, we perform this code and create the param "video" so when you pass in a video to this callback function, we can use that video within this callback function
  // We will pass onVideoSelect down to VideoList and VideoList will pass it down to VideoItem, so VideoItem will know which video to display
  onVideoSelect = video => {
    // Once onVideoSelect is called it will have the selected video so we can add that video to our App's state
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />

        <div className="ui grid">
          {/* ui row will make VideoDetail and VideoList appear on the same row */}
          <div className="ui row">
            {/* eleven wide column will make VideoDetail use up 11/16 colums */}
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            {/* We pass VideoList the list of videos we get from App's state (which gets updated when onTermSubmit runs) so it can format how we display each video */}
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
