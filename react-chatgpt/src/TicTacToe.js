import { useState } from "react";
import Square from "./Square";
import EndGame from "./Endgame";
import { useOtterSettings } from "../data/otter"

const INITIAL = "";
const X_PLAYER = "X";
const O_PLAYER = "O";
var element = 0;
const winCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const TicTacToe = () => {
  const [grid, setGrid] = useState(Array(9).fill(INITIAL));
  const [player, setPlayer] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [draw, setDraw] = useState(false);
  const newGame = () => {
    setGrid(Array(9).fill(INITIAL));
    setGameFinished(false);
    setDraw(false);
  };
  function checkEmpty(element)
  {
    if (element === "")
    {
        return true;
    }
    else
    {
        return false;
    }
  }
  const handleClick = (id) => {
    if (player)
    {
        var place_id = grid.findIndex(checkEmpty);
        if(place_id !== -1)
        {
            id = place_id;
        }
    }
    setGrid(
      grid.map((item, index) => {
        if (index === id) {
            console.log(element);
            console.log(item);
          if (player) {
            return X_PLAYER;
          } else {
            return O_PLAYER;
          }
        } else {
          return item;
        }
      })
    );
      setPlayer(!player);
  };
  const isGameOver = () => {
    const { addCredit } = useOtterSettings();
    if (!gameFinished) {
      for (let i = 0; i < 8; i++) {
        if (
          grid[winCombination[i][0]] === X_PLAYER &&
          grid[winCombination[i][1]] === X_PLAYER &&
          grid[winCombination[i][2]] === X_PLAYER
        ) {
          setGameFinished(true);
          return;
        }
      }
      for (let i = 0; i < 8; i++) {
        if (
          grid[winCombination[i][0]] === O_PLAYER &&
          grid[winCombination[i][1]] === O_PLAYER &&
          grid[winCombination[i][2]] === O_PLAYER
        ) {
          setGameFinished(true);
          addCredit(1)
          return;
        }
      }
      if (!grid.includes(INITIAL)) {
        setDraw(true);
        setGameFinished(true);
      }
    }
  };
  isGameOver();

  return (
    <div>
      <div className="player-turn">
        Turn player: {player ? X_PLAYER : O_PLAYER}
      </div>
      {gameFinished && (
        <EndGame
          newGame={newGame}
          player={player}
          draw={draw}
          X_PLAYER={X_PLAYER}
          O_PLAYER={O_PLAYER}
        />
      )}
      <Square clickedArray={grid} handleClick={handleClick} />
    </div>
  );
};
export default TicTacToe;