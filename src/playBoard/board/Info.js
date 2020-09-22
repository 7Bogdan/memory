import React from "react";
import infoColors from "../infoGame/infoForBoard.js";

const Info = (props) => {
  let colors = infoColors;

  let infoColor = () => {
    let arr = [];
    colors.map((color) => arr.push(color.color));
    return Array.from(new Set(arr));
  };

  let color = infoColor();

  let listColors = () => {
    return (
      <ol>
        {" "}
        {color.map((color, index) => (
          <li key={index} className="mark" style={color} />
        ))}
      </ol>
    );
  };

  return (
    <div className="game-info">
      <div className="game-stape">Stape: {props.steps} </div>
      {listColors()}
    </div>
  );
};

export default Info;
