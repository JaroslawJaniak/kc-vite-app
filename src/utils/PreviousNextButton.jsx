import React from "react";

export const PreviousNextButton = (props) => {
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
