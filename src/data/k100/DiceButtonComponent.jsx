import React, { useState } from "react";
import kDice from "./kDice";

const DiceButtonComponent = (props) => {
  const [DiceButtonRollResult, setDiceButtonRollResult] = useState(0);
  const [clicked, setClicked] = useState(false);

  const DiceClickHandler = () => {
    if (clicked === false) {
      setDiceButtonRollResult(kDice(props.n, props.k));
      setClicked(true);
    }
  };

  props.onDiceRoll(DiceButtonRollResult);

  let defaultView = (
    <div>
      <button id={props.id} className="Dice_button" onClick={DiceClickHandler}>
        {" "}
        {"Dice@: "}
        {props.defaultDiceResult}
      </button>
    </div>
  );

  if (DiceButtonRollResult !== 0) {
    defaultView = (
      <div>
        <button
          id={props.id}
          className="Dice_button inline-block"
          onClick={DiceClickHandler}
        >
          {DiceButtonRollResult}
        </button>
      </div>
    );
  }

  return defaultView;
};

export default DiceButtonComponent;
