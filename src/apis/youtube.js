// NOTE: I had to uninstall axios (npm uninstall axios) and install a previous version of axios (npm install axios@0.18.0) b/c of this error: 400 error failure with the message "Required Parameter : part"
// See lecture 115 for info on that error
import axios from "axios";

// 'KEY' is capital b/c we will not be changing this variable
// On Google API's website we restricted access to this key to localhost:3000 so no one can steal the key to this API we are using
const KEY = "AIzaSyDMAnsLpiwjr1sR5LSrGH3QvIfEv63Z-yA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",

  // check this site for a list of params that the Youtube API requires:   https://developers.google.com/youtube/v3/docs/search/list
  // It requires "part", "maxResults", and "q"

  // NOTE: we don't define a "q" param here b/c that param is the search term used to find videos (Ex. cats, food, videogame)
  // We will pass in the "q" param when we actually search for something. This is just an axios.create() instance that we define and only has info that is common. When we make use of this instance, then we will pass in the 'q' param
  params: {
    // we set this to "snippet" to get all the data from the youtube videos(the title, the actual video, etc.)
    part: "snippet",
    // we just want 5 results max
    maxResults: 5,
    key: KEY // this isn't on their website but you need this key param. The key will appear in the URL as a query string
  }
});
