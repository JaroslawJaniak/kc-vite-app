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
      onDiceRoll(kDice(n, k)); // Rzut kością
      toggleClick(mainKey, subKey); // Zmiana stanu przez context
    }
  };

  return (
    <button disabled={clicked} className={className} onClick={handleClick}>
      {clicked ? k100Result : `${n}k${k}`}
    </button>
  );
};

export default DiceButtonComponent;
