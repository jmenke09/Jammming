import React, { useState } from 'react';
import './App.css';
import SearchResults from '../SearchResults/SearchResults';

function App () {
  const [searchResults, setSearchResults] = useState([
    {
      name: 'example song 1',
      artist: 'example artist 1',
      album: 'example album 1',
      id: 1,
    },
    {
      name: 'example song 2',
      artist: 'example artist 2',
      album: 'example album 2',
      id: 2,
    },
    {
      name: 'example song 3',
      artist: 'example artist 3',
      album: 'example album 3',
      id: 3,
    }
  ]);
  return (
      <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        {/* <!-- Add a SearchBar component --> */}
        <SearchResults userSearchResults={searchResults}/>
        <div className="App-playlist">
          {/* <!-- Add a SearchResults component --> */}
          {/* <!-- Add a Playlist component --> */}
        </div>
      </div>
    </div>
      );
}

export default App;
