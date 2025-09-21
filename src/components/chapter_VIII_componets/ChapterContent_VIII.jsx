import React, { useContext, useState, useEffect } from "react";
import DiceButtonComponent from "../utils/buttons/kDice/DiceButtonComponent";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import { proficiencyData } from "./Chp8_data";

export const ChapterContent_VIII = () => {
  const context = useContext(CharacterStatsContext);

  const selectChangeHandler = (event, index) => {
    //setProficiency((prev) => [...prev, event.target.value]);
    context.updateProficiency(event.target.value, index);
    //context.filterAvailableProficiency(event.target.value);
  };

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

  function raceProficiencyBonus(proficiencyName) {
    const item = context.raceData.proficiency.find(
      (element) => element.weaponGroupName === proficiencyName
    );

    return item?.weaponBonus || 0;
  }

  const maxProficiencyValue = (i) => {
    const maxValue = Math.max(
      context.diceRollResult.proficiency[`result${i}`] ?? 0,
      context.diceRollResult.proficiency_KNIGHT[`result${i}`] ?? 0
    );

    return Math.max(maxValue, proficiencyMinValue);
  };

  const renderedProficienciesButton = (i) => {
    return (
      <>
        {` ${context.proficiency[i].toUpperCase()}: `}{" "}
        {context.firstProfessionData.castName.toUpperCase() === "RYCERSKA" ||
        context.secondProfessionData.castName.toUpperCase() === "RYCERSKA" ? (
          <>
            <DiceButtonComponent
              n={1}
              k={100}
              diceRollResult={
                (context.diceRollResult.proficiency_KNIGHT[`result${i}`] =
                  Math.max(
                    context.diceRollResult.proficiency_KNIGHT[`result${i}`] ??
                      0,
                    proficiencyMinValue
                  ))
              }
              clicked={context.isClicked.proficiency_KNIGHT[`result${i}`]}
              disabled={context.isClicked.proficiency_KNIGHT[`result${i}`]}
              path={["proficiency_KNIGHT", `result${i}`]}
              toggleClick={context.toggleClick}
              updateDiceRollResult={context.updateDiceRollResult}
              resolveDiceRoll
              className={context.btnStyle2}
            />{" "}
            /
          </>
        ) : (
          ""
        )}{" "}
        <DiceButtonComponent
          n={1}
          k={100}
          diceRollResult={
            (context.diceRollResult.proficiency[`result${i}`] = Math.max(
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
          className={context.btnStyle2}
        />{" "}
        + {`${proficiencyBonusValue}`}
        {context.raceProficiencyBonus(context.proficiency[i])
          ? ` + ${context.raceProficiencyBonus(context.proficiency[i])}`
          : ""}{" "}
        ={" "}
        {`${
          proficiencyBonusValue +
          context.raceProficiencyBonus(context.proficiency[i]) +
          maxProficiencyValue(i)
        }`}{" "}
        / TR
        {`(${
          proficiencyBonusValue +
          context.raceProficiencyBonus(context.proficiency[i]) +
          maxProficiencyValue(i) +
          contributionSF +
          contributionZR
        })`}{" "}
      </>
    );
  };

  const isHidden = (i) => {
    if (
      context.firstProfessionData.castName.toUpperCase() === "RYCERSKA" ||
      context.secondProfessionData.castName.toUpperCase() === "RYCERSKA"
    ) {
      return context.isClicked.proficiency[`result${i}`] &&
        context.isClicked.proficiency_KNIGHT[`result${i}`]
        ? true
        : false;
    } else {
      return context.isClicked.proficiency[`result${i}`] ? true : false;
    }
  };

  return (
    <article className="text-brown-100">
      <h3>VII. BIEGŁOŚCI</h3>

      <div className="rounded p-4 text-brown-100  text-xs backdrop-blur-lg shadow-2xl mb-4">
        Premia do biegłości wynikajaca z rasy postaci{" "}
        {`(${context.raceData.raceName.toUpperCase()})`}:
        <ul className="pt-2 pb-6 pl-4">
          {Array.from(context.raceData.proficiency, (item) => (
            <li>
              {item.weaponGroupName}: +{item.weaponBonus}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded p-4 text-brown-100  text-xs backdrop-blur-lg shadow-2xl mb-4">
        <form>
          <ul>
            {Array.from({ length: proficiencyNumber }, (_, i) => {
              return (
                <li key={i} className="pb-4">
                  {i + 1}.<label for="proficiency"></label>
                  <select
                    hidden={
                      isHidden(i)
                      //context.isClicked.proficiency[`result${i}`]
                    } //tODO: && context.isClicked.proficiency_KNIGHT[`result${i}`]
                    value={context.proficiency[i] || ""}
                    onChange={(event) => selectChangeHandler(event, i)}
                    class="w-52bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-1 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-xs focus:shadow-md appearance-none cursor-pointer text-brown-700"
                  >
                    <option>Wybierz z listy...</option>
                    {context.availableProficiency.map((proficiency, idx) => {
                      return (
                        <option key={idx} value={proficiency.weaponGroupName}>
                          {proficiency.weaponGroupName.toUpperCase()}
                        </option>
                      );
                    })}
                  </select>
                  {context.proficiency[i] ? renderedProficienciesButton(i) : ""}
                </li>
              );
            })}
          </ul>
        </form>
      </div>
    </article>
  );
};
