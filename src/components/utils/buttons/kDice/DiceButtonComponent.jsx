import React from "react";
import kDice from "./kDice";

const DiceButtonComponent = (props) => {
  const {
    n,
    k,
    isPremium,
    diceRollResult,
    clicked,
    disabled,
    path,
    toggleClick,
    updateDiceRollResult,
    resolveDiceRoll,
    className,
  } = props;

  const handleClick = () => {
    if (!clicked) {
      // Sprawdzenie, czy przycisk nie jest już kliknięty
      // Zmiana stanu przez context
      const diceRoll = kDice(n, k, isPremium); // Rzut kością i uzyskanie wyniku

      toggleClick(path); // Zmiana stanu kliknięcia przycisku
      updateDiceRollResult(path, diceRoll); // updateDiceRollResult(["baseStatsDice", "SF", "value2"], 15);
      console.log(`Rolling from button ${n}d${k}: ${diceRoll}`); // Logowanie informacji o rzucie

      resolveDiceRoll(diceRoll, path[1]); // Wywołanie funkcji resolveDiceRoll z wynikiem rzutu
    }
  };

  return (
    <button disabled={disabled} className={className} onClick={handleClick}>
      {clicked ? diceRollResult : `${n}k${k}${isPremium ? "+" : ""}`}
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
      props.resolveDiceRoll(kDice(props.n, props.k)); // Call the kDice function to roll the dice end get the result
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
      {`${props.diceRollResult}`}
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
