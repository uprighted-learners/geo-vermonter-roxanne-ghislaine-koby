import "../styles/MoveButtons.css";
import { useState } from "react";

// I think this page might be all set now; the handleMove[direction] in App.js is doing the work now that these are set up.

function MoveButtons(props) {
  return (
    <div id="move-buttons-container">
      <div className="move-buttons-item"></div>
      <div className="move-buttons-item">
        <button
          className="direction"
          direction="north"
          onClick={props.handleMoveNorth}
          disabled={props.buttonDisabled}
        >
          Go North
        </button>
      </div>
      <div className="move-buttons-item"></div>
      <div className="move-buttons-item">
        <button
          className="direction"
          direction="west"
          onClick={props.handleMoveWest}
          disabled={props.buttonDisabled}
        >
          Go West
        </button>
      </div>
      <div className="move-buttons-item">
        <img
          src="https://media.istockphoto.com/vectors/compass-vector-id503891738?k=20&m=503891738&s=612x612&w=0&h=6cMzdwd0uf4l52G279_4eaM3IojFw2IeMjsgpCGVGnc="
          width="60px"
        />
      </div>
      <div className="move-buttons-item">
        <button
          className="direction"
          direction="east"
          onClick={props.handleMoveEast}
          disabled={props.buttonDisabled}
        >
          Go East
        </button>
      </div>
      <div className="move-buttons-item"></div>
      <div className="move-buttons-item">
        <button
          className="direction"
          direction="south"
          onClick={props.handleMoveSouth}
          disabled={props.buttonDisabled}
        >
          Go South
        </button>
      </div>
    </div>
  );
}

export default MoveButtons;
