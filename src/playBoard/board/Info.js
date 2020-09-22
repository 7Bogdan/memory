import React from "react";

const Info = (props) => {
  let propsColors = props.colors;

  let infoColor = () => {
    let arr = [];
    propsColors.map((color) =>
      color.found === false ? arr.push(color.color) : null
    );
    return Array.from(new Set(arr));
  };

  let colorsInfo = infoColor();

  let restOfColor = () => {
    return (
      <ol>
        {colorsInfo.map((color, index) => (
          <li key={index} className="needColor" style={color} />
        ))}
      </ol>
    );
  };

  let endGame = () => {
    return (
      <div className="winner">
        You won !<br />
        Will we play again? <br />
        <button className="game-refresh" onClick={props.refresh}>
          Refresh
        </button>
      </div>
    );
  };

  let listColors = () => {
    if (colorsInfo.length === 0) {
      return endGame();
    } else {
      return restOfColor();
    }
  };

  return (
    <div className="game-info">
      <div className="game-stape">Stape: {props.steps} </div>
      {listColors()}
    </div>
  );
};

export default Info;
