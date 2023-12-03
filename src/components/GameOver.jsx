import React from "react";

export default function GameOver({ winner, onGameEnd }) {
  const clickHandler = () => {
    onGameEnd();
  };
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} Won!</p>}
      {!winner && <p>It's a draw!</p>}
      <p>
        <button onClick={clickHandler}>Rematch!</button>
      </p>
    </div>
  );
}
