import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import { Spotify } from '../../util/Spotify/Spotify'

export default function App () {
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);

  function addTrack(track) {
    if (playlistTracks.find(t => t.id === track.id)) {
      console.log('Track already in playlist');
    } else {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  function removeTrack(track) {
    setPlaylistTracks(playlistTracks.filter(t => t.id!== track.id))
  };

  function updatePlaylistName(name) {
    setPlaylistName(name);
  };

  function savePlaylist() {
    const trackURIs = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackURIs).then(() => {
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
    });
  };

  function search(term) {
    Spotify.search(term).then((result) => setSearchResults(result));
    console.log(term)
  };

  return (
      <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar 
          onSearch={search}
          />
        <div className="App-playlist">
          <SearchResults 
            userSearchResults={searchResults}
            onAdd={addTrack}
            />
          <Playlist 
            playlistName={playlistName} 
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}
