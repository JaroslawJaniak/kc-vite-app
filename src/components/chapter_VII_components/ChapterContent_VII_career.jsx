import React, { useContext, useState, useEffect } from "react";
import DiceButtonComponent from "../utils/buttons/kDice/DiceButtonComponent";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import { careerData_ClassN } from "./chp7_career_class_N_data";
import { careerData_ClassS } from "./chp7_career_class_S_data";
import { careerData_ClassW } from "./chp7_career_class_W_data";

export const ChapterContent_VII_career = () => {
  const context = useContext(CharacterStatsContext);

  const valueMD =
    context.baseRaceStats.MD +
    context.safeMax(
      context.diceRollResult?.baseStatsDice?.MD?.result1,
      context.diceRollResult?.baseStatsDice?.MD?.result2
    ) +
    Math.max(
      context.firstProfessionData.stats.MD,
      context.secondProfessionData.stats.MD
    ) +
    context.diceRollResult.bonusBaseStatsDice.MD;

  const careerNumber = Math.max(
    0,
    Math.ceil((valueMD - context.diceRollResult.careerNumber) / 20)
  );

  function adjustK(k, start) {
    if (start === "N") {
      return Math.max(1, k - 10);
    }
    if (start === "W") {
      return Math.min(100, k + 10);
    }
    if (start === "E") {
      return Math.min(100, k + 20);
    }
    return k;
  }

  const careerMap = {
    N: careerData_ClassN,
    Ś: careerData_ClassS,
    W: careerData_ClassW,
  };

  const careerResolveDiceRoll = (path, k) => {
    const start = context.getCharsFromKey(context.socialClass, 1, "start");
    const end = context.getCharsFromKey(context.socialClass, 1, "end");
    const index = context.getIndexFromKey(path);

    // najpierw oblicz k na podstawie start
    k = adjustK(k, start);

    // wybór klasy na podstawie end
    const fn = careerMap[end];
    if (fn) {
      const career = fn(k);
      context.updateCareer(index, career);
    }

    
  };

  return (
    <article>
      <h3>VII. ZAWODY</h3>

      <div>
        {`liczba zawodów to (${valueMD} -`}{" "}
        <DiceButtonComponent
          n={1}
          k={100}
          diceRollResult={context.diceRollResult.careerNumber}
          clicked={context.isClicked.careerNumber}
          disabled={context.isClicked.careerNumber}
          path={["careerNumber"]}
          toggleClick={context.toggleClick}
          updateDiceRollResult={context.updateDiceRollResult}
          resolveDiceRoll
          className={context.btnStyle}
        />{" "}
        {`)/20 (cecha górna): `} <span>{`${careerNumber}`}</span>
      </div>
      <div hidden={!context.isClicked.careerNumber}>
        <ul>
          {Array.from({ length: careerNumber }, (_, i) => (
            <li key={i}>
              {i + 1}.{" "}
              <DiceButtonComponent
                n={1}
                k={100}
                diceRollResult={context.diceRollResult.career[`result${i}`]}
                clicked={context.isClicked.career[`result${i}`]}
                disabled={context.isClicked.career[`result${i}`]}
                path={["career", `result${i}`]}
                toggleClick={context.toggleClick}
                updateDiceRollResult={context.updateDiceRollResult}
                resolveDiceRoll={careerResolveDiceRoll}
                className={context.btnStyle}
              />{" "}
              <span>{context.career[i].name}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
