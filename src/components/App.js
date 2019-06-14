import React from "react";
import SearchBar from "./SearchBar";
// This file is a pre-configured instance of axios that we made with axios.create() and we will be able to start with data from there. Using this we can use youtube.get()
//"youtube" b/c that is the name we gave this import
// get() comes from axios package
import youtube from "../apis/youtube";

class App extends React.Component {
  // gets data from youtube when the SearchBar component below has a search term entered by the user and they press ENTER. We write this in the App component b/c the App component should be the one that communicates with the Youtube API
  onTermSubmit = term => {
    // param 1: the endpoint to be added onto baseURL from youtube.js
    // param 2: what you'll search by, the search term
    youtube.get("/search", {
      params: {
        q: term // see youtube.js for info on "q" which holds the search term (stands for "query"). We add the search term onto the baseURL from youtube.js right after "/search" is added from above. We don't need to restate the other params located in youtube.js b/c those are always going to be the same, that's why we put them in youtube.js and not everywhere we make calls to the Youtube API
      }
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
