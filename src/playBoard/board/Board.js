import React, { useState, useEffect } from "react";
import Square from "./Square.js";
import Info from "./Info.js";
import infoSquares from "../infoGame/infoForBoard.js";

function Board() {
  let [infoForSquares, setInfoForSquares] = useState(infoSquares);
  let [firstSquare, setFirstSquare] = useState("firstSquare");
  let [secondSquare, setSecondSquare] = useState("secondSquare");
  let [steps, setSteps] = useState(0);
  let [click, setClick] = useState(true);

  let changeSquare = (index, id) => {
    makeStep();
    flipper(index);
    rememberSquare(index, id);
  };

  let makeStep = () => {
    setSteps(steps + 1);
  };

  let flipper = (index) => {
    let interimArr = infoForSquares;
    interimArr.map((square) =>
      square.index === index ? (square.flipped = !square.flipped) : null
    );
    setInfoForSquares(interimArr);
  };

  let rememberSquare = (index, id) => {
        firstSquare === "firstSquare"
        ? setFirstSquare({ index, id })
        : setSecondSquare({ index, id });
  };

  useEffect(() => {
    if (steps % 2 === 0) {
      setClick(false);
      setTimeout(compareColor, 1000);
    }
  }, [steps]);

  let compareColor = () => {
    if (firstSquare.id === secondSquare.id) {
      setClick(true);
      foundColor(firstSquare.id)
      setFirstSquare("firstSquare");
      setSecondSquare("secondSquare");
    } else {
      setClick(true);
      flipper(firstSquare.index);
      flipper(secondSquare.index);
      setFirstSquare("firstSquare");
      setSecondSquare("secondSquare");
    }
  };

  let foundColor = (id) => {
    let interimArr = infoForSquares;
    interimArr.map((square) =>
      square.id === id ? (square.found = !square.found) : null
    );
    setInfoForSquares(interimArr);
  };

  let refresh = () => {
    setInfoForSquares(infoSquares());
    setSteps(0);
  }
  return (
    <div className="game">
      <div className="memory-game">
        {infoForSquares.map((square) => (
          <Square
            click={click}
            change={changeSquare}
            key={square.index}
            color={square.color}
            flipped={square.flipped}
            index={square.index}
            id={square.id}
          />
        ))}
      </div>
      <Info refresh={refresh} colors = {infoForSquares} steps={steps} />
    </div>
  );
}

export default Board;
