import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

function Playlist(props) {
  
  function handleNameChange(e) {
    props.onNameChange(e.target.value);
  }
  
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} onChange={handleNameChange}/>
      <TrackList 
        userSearchResults={props.playlistTracks} 
        onRemove={props.onRemove}
        isRemoval={true}
        />
      <button className="Playlist-save" onClick={props.onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;