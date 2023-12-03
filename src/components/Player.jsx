import React, { useState } from "react";

function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  const editHandler = () => {
    setIsEditing((editing) => !editing);
  };
  const changeHandler = (e) => {
    setPlayerName(e.target.value);
  };

  let editableNamePlayer = !isEditing ? <span className="player-name">{playerName}</span> : <input type="text" required value={playerName} onChange={changeHandler} />;
  let buttonCaption = !isEditing ? "Edit" : "Save";

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editableNamePlayer}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editHandler}>{buttonCaption}</button>
    </li>
  );
}

export default Player;
