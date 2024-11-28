import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

function SearchResults(props) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList 
        userSearchResults={props.userSearchResults} 
        isRemoval={false} 
        onAdd={props.onAdd}/>
    </div>
    );
}

export default SearchResults;