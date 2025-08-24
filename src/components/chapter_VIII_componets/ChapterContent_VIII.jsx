import React, { useContext, useState, useEffect } from "react";
import DiceButtonComponent from "../utils/buttons/kDice/DiceButtonComponent";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import { proficiencyData } from "./Chp8_data";

export const ChapterContent_VIII = () => {
  const context = useContext(CharacterStatsContext);

  const proficiencyNumber = Math.max(
    context.firstProfessionData.proficiency.number,
    context.secondProfessionData.proficiency.number
  );

  const proficiencyBonusValue = Math.max(
    context.firstProfessionData.proficiency.bonusValue,
    context.secondProfessionData.proficiency.bonusValue
  );

  const proficiencyMinValue = Math.max(
    context.firstProfessionData.proficiency.minValue,
    context.secondProfessionData.proficiency.minValue
  );

  const contributionSF = Math.ceil(
    (context.baseRaceStats.SF +
      context.safeMax(
        context.diceRollResult?.baseStatsDice?.SF?.result1,
        context.diceRollResult?.baseStatsDice?.SF?.result2
      ) +
      Math.max(
        context.firstProfessionData.stats.SF,
        context.secondProfessionData.stats.SF
      ) +
      context.diceRollResult.bonusBaseStatsDice.SF) /
      10
  );
  const contributionZR = Math.ceil(
    (context.baseRaceStats.ZR +
      context.safeMax(
        context.diceRollResult?.baseStatsDice?.ZR?.result1,
        context.diceRollResult?.baseStatsDice?.ZR?.result2
      ) +
      Math.max(
        context.firstProfessionData.stats.ZR,
        context.secondProfessionData.stats.ZR
      ) +
      context.diceRollResult.bonusBaseStatsDice.ZR) /
      10
  );

  return (
    <article>
      <h3>VII. BIEGŁOŚCI</h3>

      <div>
        <form>
          <ul>
            {Array.from({ length: proficiencyNumber }, (_, i) => (
              <li key={i}>
                {i + 1}. <label for="proficiency"></label>
                <select class="w-48 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-1 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                  
                  {proficiencyData.map((proficiency, idx) => (
                    <option key={idx} value={proficiency.weaponGroupName}>
                      {proficiency.weaponGroupName.toUpperCase()}
                    </option>
                  ))}
                </select>{" "}
                <DiceButtonComponent
                  n={1}
                  k={100}
                  diceRollResult={
                    (context.diceRollResult.proficiency[`result${i}`] =
                      Math.max(
                        context.diceRollResult.proficiency[`result${i}`] ?? 0,
                        proficiencyMinValue
                      ))
                  }
                  clicked={context.isClicked.proficiency[`result${i}`]}
                  disabled={context.isClicked.proficiency[`result${i}`]}
                  path={["proficiency", `result${i}`]}
                  toggleClick={context.toggleClick}
                  updateDiceRollResult={context.updateDiceRollResult}
                  resolveDiceRoll
                  className={context.btnStyle}
                />{" "}
                + {`${proficiencyBonusValue}`} ={" "}
                {`${
                  proficiencyBonusValue +
                  Math.max(
                    context.diceRollResult.proficiency[`result${i}`] ?? 0,
                    proficiencyMinValue
                  )
                }`}{" "}
                + {`(ew. premia z rasy)`} / TR
                {`(${
                  proficiencyBonusValue +
                  Math.max(
                    context.diceRollResult.proficiency[`result${i}`] ?? 0,
                    proficiencyMinValue
                  ) +
                  contributionSF +
                  contributionZR
                })`}{" "}
                + {`(ew. premia z rasy)`}
              </li>
            ))}
          </ul>
        </form>
      </div>
    </article>
  );
};
