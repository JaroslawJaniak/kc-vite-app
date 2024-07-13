import React from "react";

export const OpenCloseButton = (props) => {
  return (
    <button
      className={props.className}
      onClick={() => {
        props.handleClick();
      }}
    >
      
      {props.text}
    </button>
  );
};
