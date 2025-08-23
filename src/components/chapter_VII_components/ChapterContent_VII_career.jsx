import React, { useContext, useState, useEffect } from "react";
import DiceButtonComponent from "../utils/buttons/kDice/DiceButtonComponent";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";

export const ChapterContent_VII_career = () => {
  const context = useContext(CharacterStatsContext);

  const valueMD =
    context.baseRaceStats.MD +
    context.diceRollResult.baseStatsDice.MD +
    Math.max(
      context.firstProfessionData.stats.MD,
      context.secondProfessionData.stats.MD
    ) +
    context.diceRollResult.bonusBaseStatsDice.MD;

  const careerNumber = Math.max(
    0,
    Math.ceil((valueMD - context.diceRollResult.careerNumber) / 20)
  );

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
                resolveDiceRoll
                className={context.btnStyle}
              />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
