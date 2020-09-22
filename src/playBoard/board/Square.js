import React from "react";

const Square = (props) => {
  return (
    <div
      className={"memory-square"}
      onClick={() => (props.click ? props.change(props.index, props.id) : null)}
    >
      <div className={"front-square"} />
      <div
        className={props.flipped ? "back-square" : "back-square.flip"}
        style={props.color}
      />
    </div>
  );
};
export default Square;
