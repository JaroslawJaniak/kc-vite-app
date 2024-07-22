import React from 
import DiceButtonComponent from "../../../../../data/k100/DiceButtonComponent";

export const ChapterContent_V_k100 = () => {
  const k100WeightRollResult = (k) => {
    if (k !== 0) {
      console.log("weight result2: " + k);
    }
  };
  const k100HeightRollResult = (k) => {
    if (k !== 0) {
      console.log("height result2: " + k);
    }
  };

  return (
    <div>
      <DiceButtonComponent
        id="k100button2"
        n={1}
        k={100}
        defaultk100Result={0}
        onDiceRoll={k100WeightRollResult}
      />
      <span id="result4"></span>
      <div id="tmpl3"></div>
      <div>
        wzrost:
        <span id="height_character"></span>
      </div>
      <DiceButtonComponent
        id="k100button2"
        n={1}
        k={100}
        defaultk100Result={0}
        onDiceRoll={k100HeightRollResult}
      />

      <span id="result5"></span>
      <div id="tmpl4"></div>
      <div>
        waga:
        <span id="weight_character"></span>
      </div>
    </div>
  );
};
