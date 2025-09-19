import "./TicTacToe.scss";
import MainButton from "../MainButton/MainButton";
import circle_icon from "../../../../assets/TicTacImg/circle.png";
import cross_icon from "../../../../assets/TicTacImg/cross.png";
import { useState } from "react";

export default function TicTacToe() {
  const [data, setData] = useState(Array(9).fill("")); // игровое поле
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [winner, setWinner] = useState("");

  function toggle(num: number) {
    if (lock || data[num] !== "") return;

    const newData = [...data];
    newData[num] = count % 2 === 0 ? "x" : "o";

    setData(newData);
    setCount(count + 1);

    checkWinner(newData);
  }

  function checkWinner(board: string[]) {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let [a, b, c] of winPatterns) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        setLock(true);
      }
    }
  }

  function reset() {
    setData(Array(9).fill(""));
    setCount(0);
    setLock(false);
    setWinner("");
  }

  return (
    <div className="tic-tac">
      <h1 className="tic-tac__title">
        {winner ? (
          <>
            Winner is{" "}
            <img src={winner === "x" ? cross_icon : circle_icon} alt="winner" />
          </>
        ) : (
          <>
            Tic Tac Toe in <span>React</span>
          </>
        )}
      </h1>

      <div className="tic-tac__board board">
        {data.map((cell, index) => (
          <div
            key={index}
            className="board__boxes"
            onClick={() => toggle(index)}
          >
            {cell === "x" && <img src={cross_icon} alt="x" />}
            {cell === "o" && <img src={circle_icon} alt="o" />}
          </div>
        ))}
      </div>

      <MainButton onClick={reset}>Reset</MainButton>
    </div>
  );
}
