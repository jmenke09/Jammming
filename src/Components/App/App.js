import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

export default function App () {
  const [playlistName, setPlaylistName] = useState('My Playlist');

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
  
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: 'example song 4',
      artist: 'example artist 4',
      album: 'example album 4',
      id: 4,
    },
    {
      name: 'example song 5',
      artist: 'example artist 5',
      album: 'example album 5',
      id: 5,
    },
    {
      name: 'example song 6',
      artist: 'example artist 6',
      album: 'example album 6',
      id: 6,
    }
  ]);

  function addTrack(track) {
    if (playlistTracks.find(t => t.id === track.id)) {
      console.log('Track already in playlist');
    } else {
      setPlaylistTracks([...playlistTracks, track]);
    }
  }

  function removeTrack(track) {
    setPlaylistTracks(playlistTracks.filter(t => t.id!== track.id))
  }

  function updatePlaylistName(name) {
    setPlaylistName(name);
  }

  function savePlaylist() {
    const trackURIs = playlistTracks.map(track => track.uri);
  }

  function search(term) {
    console.log(term)
  }

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
