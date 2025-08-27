import React, { useContext, useState, useEffect } from "react";
import DiceButtonComponent from "../utils/buttons/kDice/DiceButtonComponent";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import { disabilitiesData } from "./chp3_disabilities_data";

export const ChapterContent_III_disabilities = () => {
  const context = useContext(CharacterStatsContext);

  const btnStyle =
    "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300  rounded text-xxs md:text-xs p-0.5 md:p-2  mb-2 w-8 md:w-12 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700";

  let disabilitieChance = 25;

  const resolveDisabilitiesDiceRoll = (path, k) => {
    const disabilitie = disabilitiesData(k);
    console.log("disabilitie: ", k, " - ", disabilitie);
    console.log("path: ", path);
    const index = context.getIndexFromKey(path);
    console.log("index from path: ", index);
    context.updateDisability(index - 1, disabilitie);
  };

  const renderDisabilitiesV02 = () => {
    if (context.disabilities.length) {
      return context.disabilities.map((disabilitie, index) => (
        <>
          <div
            hidden={
              index !== 0 &&
              !context.isClicked.disabilitiesChanceDice[`result${index}`] &&
              !(
                context.diceRollResult.disabilitiesChanceDice[
                  `result${index}`
                ] <= disabilitieChance
              )
            }
            key={index}
          >
            <div
              key={index}
              hidden={
                index !== 0 &&
                !(
                  context.diceRollResult.disabilitiesChanceDice[
                    `result${index}`
                  ] <= disabilitieChance
                )
              }
            >
              V02 Czy postać ma ułomność{" "}
              {`(${(disabilitieChance -= 5)} % szansa)`}
              <span>{`index: ${index}  ${disabilitieChance}%`}</span>
              <span>
                -
                {context.isClicked.disabilitiesChanceDice[
                  `result${index}`
                ]?.toString()}
                -
              </span>
              <span>
                {
                  context.diceRollResult.disabilitiesChanceDice[
                    `result${index}`
                  ]
                }
              </span>{" "}
              <DiceButtonComponent
                n={1}
                k={100}
                diceRollResult={
                  context.diceRollResult.disabilitiesChanceDice[
                    `result${index + 1}`
                  ]
                }
                clicked={
                  context.isClicked.disabilitiesChanceDice[`result${index + 1}`]
                }
                disabled={
                  context.isClicked.disabilitiesChanceDice[`result${index + 1}`]
                }
                path={["disabilitiesChanceDice", `result${index + 1}`]}
                toggleClick={context.toggleClick}
                updateDiceRollResult={context.updateDiceRollResult}
                resolveDiceRoll={(path, diceRoll) =>
                  context.updateDisabilitiesChanceData(diceRoll)
                } //wrapper
                className={btnStyle}
              />{" "}
              {context.diceRollResult.disabilitiesChanceDice[
                `result${index + 1}`
              ] <= disabilitieChance ? (
                <span>
                  {" "}
                  <span>
                    -{" "}
                    {
                      context.diceRollResult.disabilitiesChanceDice[
                        `result${index + 1}`
                      ]
                    }{" "}
                    {`<=`} {context.disabilitiesChance} || {`<=`}{" "}
                    {disabilitieChance}
                  </span>
                  {" : "}
                  <DiceButtonComponent
                    n={1}
                    k={100}
                    diceRollResult={
                      context.diceRollResult.disabilitiesDice[
                        `result${index + 1}`
                      ]
                    }
                    clicked={
                      context.isClicked.disabilitiesDice[`result${index + 1}`]
                    }
                    disabled={
                      context.isClicked.disabilitiesDice[`result${index + 1}`]
                    }
                    path={["disabilitiesDice", `result${index + 1}`]}
                    toggleClick={context.toggleClick}
                    updateDiceRollResult={context.updateDiceRollResult}
                    resolveDiceRoll={resolveDisabilitiesDiceRoll}
                    className={btnStyle}
                  />
                  {" - "}
                  {context.disabilities[index].disabilitieName}
                </span>
              ) : null}
            </div>
          </div>
        </>
      ));
    }
  };

  return (
    <article>
      <h3>III.a Ułomności</h3>

      {renderDisabilitiesV02()}
    </article>
  );
};

/*

<article>
      <h3>III.a Ułomności</h3>
      Czy postać ma ułomność {`(${context.disabilitiesChance} % szansa)`}
      <DiceButtonComponent
        n={1}
        k={100}
        diceRollResult={context.diceRollResult.disabilitiesChanceDice.result1}
        clicked={context.isClicked.disabilitiesChanceDice.result1}
        disabled={context.isClicked.disabilitiesChanceDice.result1}
        path={["disabilitiesChanceDice", "result1"]}
        toggleClick={context.toggleClick}
        updateDiceRollResult={context.updateDiceRollResult}
        resolveDiceRoll={context.updateAbilitiesData}
        className={btnStyle}
      />{" "}
      {context.diceRollResult.disabilitiesChanceDice.result1 <=
      context.disabilitiesChance ? (
        <>
          <span>
            {" : ułomność "}
            <DiceButtonComponent
              n={1}
              k={100}
              diceRollResult={context.diceRollResult.disabilitiesDice.result1}
              clicked={context.isClicked.disabilitiesDice.result1}
              disabled={context.isClicked.disabilitiesDice.result1}
              path={["disabilitiesDice", "result1"]}
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
                context.diceRollResult.disabilitiesChanceDice.result2
              }
              clicked={context.isClicked.disabilitiesChanceDice.result2}
              disabled={context.isClicked.disabilitiesChanceDice.result2}
              path={["disabilitiesChanceDice", "result2"]}
              toggleClick={context.toggleClick}
              updateDiceRollResult={context.updateDiceRollResult}
              resolveDiceRoll={context.updateAbilitiesData}
              className={btnStyle}
            />
            {context.diceRollResult.disabilitiesChanceDice.result2 <=
            context.abilitiesChance ? (
              <span>
                {" : ułomność "}
                <DiceButtonComponent
                  n={1}
                  k={100}
                  diceRollResult={
                    context.diceRollResult.disabilitiesDice.result2
                  }
                  clicked={context.isClicked.disabilitiesDice.result2}
                  disabled={context.isClicked.disabilitiesDice.result2}
                  path={["disabilitiesDice", "result2"]}
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

*/
