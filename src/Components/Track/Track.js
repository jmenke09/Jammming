import React from "react";
import "./Track.css";

function Track (props) {
  function renderAction () {
    if (!props.isRemoval) {
      return <button className="Track-action" onClick={passTrack}>+</button>;
    } else {
      return <button className="Track-action" onClick={passTrackToRemove}>-</button>;
    }
  };
  
  function passTrack() {
    props.onAdd(props.track);
  }

  function passTrackToRemove() {
    props.onRemove(props.track);
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>{props.track.artist} | {props.track.album}</p>
      </div>
      {renderAction()}
    </div>
  );
}

export default Track;