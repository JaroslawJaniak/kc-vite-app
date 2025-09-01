import React, { useContext } from "react";
import kDice from "./kDice";
import { CharacterStatsContext } from "../../../../context/CharacterStatsContext";

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

  const context = useContext(CharacterStatsContext);

  const handleClick = () => {
    if (!clicked) {
      // Sprawdzenie, czy przycisk nie jest już kliknięty

      // Zmiana stanu przez context
      let diceRoll = kDice(n, k, isPremium); // Rzut kością i uzyskanie wyniku

      if (
        path[0] === "baseStatsDice" &&
        (path[1] === context.abilities[0].statsModifierKey ||
          path[1] === context.abilities[1].statsModifierKey)
      ) {
        const premiumDiceRoll = kDice(1, 10, true);

        updateDiceRollResult(
          ["abilitiesStatsModifier", path[1]],
          premiumDiceRoll
        );
      }
      toggleClick(path); // Zmiana stanu kliknięcia przycisku
      if (path) updateDiceRollResult(path, diceRoll); // updateDiceRollResult(["baseStatsDice", "SF", "value2"], 15);
      console.log(`Rolling2 from button ${n}d${k}: ${diceRoll}`); // Logowanie informacji o rzucie

      resolveDiceRoll(path[1], diceRoll); // Wywołanie funkcji resolveDiceRoll z wynikiem rzutu
      // console.log("path: ", path[1]);
      // console.log(
      //   "has path: ",
      //   context.career.some((el) => el.statsModifierKey === path[1])
      // );

      //const index = context.career.findIndex(el => el.statsModifierKey === path[1]);
      /*
      if (context.career.some((el) => el.statsModifierKey === path[1])) {
        const index = context.career.findIndex(
          (el) => el.statsModifierKey === path[1]
        );

        console.log("--- path inside if: ", path[1]);
        console.log(
          "--- career path inside if: ",
          context.career[index].n,
          context.career[index].k,
          context.career[index].isPremium
        );
        const premiumDiceRoll = kDice(
          context.career[index].n,
          context.career[index].k,
          context.career[index].isPremium
        );
        console.log("--- premiumDiceRoll inside if: ", premiumDiceRoll);
        updateDiceRollResult(["careerStatsModifier", path[1], `result${index}`], premiumDiceRoll);
      }
*/
    }
  };

  return (
    <button hidden={n===0 && k ===0} disabled={disabled} className={className} onClick={handleClick}>
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
