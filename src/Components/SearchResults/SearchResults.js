import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

function SearchResults(props) {
  return (
    <div className="SearchResults">
    <TrackList userSearchResults={props.userSearchResults}/>
  </div>
    );
}

export default SearchResults;