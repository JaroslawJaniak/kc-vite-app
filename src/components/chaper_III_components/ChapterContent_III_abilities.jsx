import React, { useContext, useState, useEffect } from "react";
import DiceButtonComponent from "../utils/buttons/kDice/DiceButtonComponent";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";

export const ChapterContent_III_abilities = () => {
  const context = useContext(CharacterStatsContext);

  const abilitiesChance = context.abilitiesChance;

  console.log("log from abilitiesChance:", abilitiesChance);

  useEffect(() => {
    return () => {};
  }, []);

  const btnStyle =
    "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300  rounded text-xxs md:text-xs p-0.5 md:p-2  mb-2 w-8 md:w-12 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700";

  return (
    <article>
      <h3>III.b Zdolności nadnaturalne</h3>
      Czy postać ma zdolność nadnaturalną {`(10 % szansa)`}{" "}
      <DiceButtonComponent
        n={1}
        k={100}
        diceRollResult={context.diceRollResult.abilitiesChanceDice.result1}
        clicked={context.isClicked.abilitiesChanceDice.result1}
        disabled={context.isClicked.abilitiesChanceDice.result1}
        path={["abilitiesChanceDice", "result1"]}
        toggleClick={context.toggleClick}
        updateDiceRollResult={context.updateDiceRollResult}
        resolveDiceRoll={context.updateAbilitiesData}
        className={btnStyle}
      />{" "}
      {context.diceRollResult.abilitiesChanceDice.result1 <=
      context.abilitiesChance ? (
        <>
          <span>
            {" : zdonlność "}
            <DiceButtonComponent
              n={1}
              k={100}
              diceRollResult={context.diceRollResult.abilitiesDice.result1}
              clicked={context.isClicked.abilitiesDice.result1}
              disabled={context.isClicked.abilitiesDice.result1}
              path={["abilitiesDice", "result1"]}
              toggleClick={context.toggleClick}
              updateDiceRollResult={context.updateDiceRollResult}
              resolveDiceRoll={context.updateAbilitiesData}
              className={btnStyle}
            />
          </span>
          <div>
            Czy postać ma drugą zdolność nadnaturalną {`(5 % szansa)`}{" "}
            <DiceButtonComponent
              n={1}
              k={100}
              diceRollResult={
                context.diceRollResult.abilitiesChanceDice.result2
              }
              clicked={context.isClicked.abilitiesChanceDice.result2}
              disabled={context.isClicked.abilitiesChanceDice.result2}
              path={["abilitiesChanceDice", "result2"]}
              toggleClick={context.toggleClick}
              updateDiceRollResult={context.updateDiceRollResult}
              resolveDiceRoll={context.updateAbilitiesData}
              className={btnStyle}
            />
            {context.diceRollResult.abilitiesChanceDice.result2 <=
            context.abilitiesChance ? (
              <span>
                {" : zdonlność "}
                <DiceButtonComponent
                  n={1}
                  k={100}
                  diceRollResult={context.diceRollResult.abilitiesDice.result2}
                  clicked={context.isClicked.abilitiesDice.result2}
                  disabled={context.isClicked.abilitiesDice.result2}
                  path={["abilitiesDice", "result2"]}
                  toggleClick={context.toggleClick}
                  updateDiceRollResult={context.updateDiceRollResult}
                  resolveDiceRoll={context.updateAbilitiesData}
                  className={btnStyle}
                />
              </span>
            ) : (
              ""
            )}
          </div>
        </>
      ) : (
        ""
      )}
    </article>
  );
};
