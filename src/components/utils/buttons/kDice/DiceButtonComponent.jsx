import React from "react";
import kDice from "./kDice";

const DiceButtonComponent = (props) => {
  const {
    n,
    k,
    k100Result,
    clicked,
    mainKey, 
    subKey,
    toggleClick,
    onDiceRoll,
    className,
  } = props;

  const handleClick = () => {
    if (!clicked) {
      // Rzut kością
      onDiceRoll(kDice(n, k));

      // Zmiana stanu przez context
      toggleClick(mainKey, subKey);
    }
  };

  return (
    <button disabled={clicked} className={className} onClick={handleClick}>
      {clicked ? k100Result : `${n}k${k}`}
    </button>
  );
};

export default DiceButtonComponent;

/*
import React, { useState } from "react";
import kDice from "./kDice";

const DiceButtonComponent = (props) => {
  const handleStateChange = (event) => {
    const newState = event.type;

    if (props.clicked === false) {
      props.onDiceRoll(kDice(props.n, props.k)); // Call the kDice function to roll the dice end get the result
      props.handleStateChange(true); // Update the clicked state to true
    }
  };

  const defaultView_ = (
    <button
      disabled={props.clicked}
      className={props.className}
      onClick={(event) => {
        handleStateChange(event);
        toggleClick(props.key, props.subKey);
      }}
    >
      {`${props.k100Result}`}
    </button>
  );

  if (!props.clicked) {
    return (
      <button
        className={props.className}
        onClick={(event) => {
          handleStateChange(event);
        }}
      >
        {props.n}k{props.k}
      </button>
    );
  } else return defaultView_;
};

export default DiceButtonComponent;
*/
