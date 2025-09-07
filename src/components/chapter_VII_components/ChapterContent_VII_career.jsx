import React, { useContext, useState, useEffect } from "react";
import DiceButtonComponent from "../utils/buttons/kDice/DiceButtonComponent";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import { careerData_ClassN } from "./chp7_career_class_N_data";
import { careerData_ClassS } from "./chp7_career_class_S_data";
import { careerData_ClassW } from "./chp7_career_class_W_data";

import { CopyChapterContent_VII_career } from "./Copy_ChapterContent_VII";

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

  const start = context.getCharsFromKey(context.socialClass, 1, "start");
  const end = context.getCharsFromKey(context.socialClass, 1, "end");

  const careerMap = {
    N: careerData_ClassN,
    Ś: careerData_ClassS,
    W: careerData_ClassW,
  };

  let j = 0;

  function adjustK(k, start) {
    if (start === "N") return Math.max(1, k - 10);
    if (start === "W") return Math.min(100, k + 10);
    if (start === "E") return Math.min(100, k + 20);
    return k;
  }

  function resolveCareer(sourceClass, k) {
    const fn = careerMap[sourceClass]; //ustawia pod fn odpowiedną funkcję do listy zawodów
    if (!fn) return null;
    return fn(k); //zwraca zawód z odpowiedniej listy, nastepuje tu właściwe losowanie
  }

  const careerResolveDiceRoll = (path, k) => {
    // najpierw oblicz k na podstawie start
    const adjustDiceRoll = adjustK(k, start); //(+/-)10 w zależności od N/W...

    // wybór klasy na podstawie end (czy losujemy z klasy N,Ś, czy W)
    const fn = careerMap[end];
    if (fn) {
      const career = fn(adjustDiceRoll);
      context.updateCareer(career);
    }
  };

  // const careerResolveDiceRoll = (path, k) => {
  //   const index = context.getIndexFromKey(path);

  //   // najpierw oblicz k na podstawie start
  //   adjustDiceRoll = adjustK(k, start);

  //   // wybór klasy na podstawie end
  //   const fn = careerMap[end];
  //   if (fn) {
  //     const career = fn(adjustDiceRoll);
  //     context.updateCareer(index, career);
  //   }
  // };

  const careerResolveDiceRollClassN = (path, k) => {
    const index = context.getIndexFromKey(path);
    const career = careerData_ClassN(k);

    console.log(career.name);
    context.updateCareerChild(career);
  };
  const careerResolveDiceRollClassS = (path, k) => {
    const index = context.getIndexFromKey(path);
    const career = careerData_ClassS(k);

    console.log(career.name);
    context.updateCareerChild(career);
  };
  const careerResolveDiceRollClassW = (path, k) => {
    const index = context.getIndexFromKey(path);
    const career = careerData_ClassW(k);

    console.log(career.name);
    context.updateCareerChild(career);
  };

  const renderCareerDiceButtonComponent = (resolveDiceRoll, i) => {
    return (
      <>
        <DiceButtonComponent
          n={1}
          k={100}
          diceRollResult={context.diceRollResult.career[`result${i}`]}
          clicked={context.isClicked.career[`result${i}`]}
          disabled={context.isClicked.career[`result${i}`]}
          path={["career", `result${i}`]}
          toggleClick={context.toggleClick}
          updateDiceRollResult={context.updateDiceRollResult}
          resolveDiceRoll={resolveDiceRoll}
          className={context.btnStyle2}
        />{" "}
        <span>{context.career[i]?.name}</span>{" "}
        <>
          {context.career[i]?.statsModifierKey ? (
            <>
              {context.svgArrowRight}
              <span>{` ${context.career[i]?.statsModifierKey} + ${context.career[i]?.statsModifier}`}</span>{" "}
              {context.career[i]?.n ? " + " : ""}
              <DiceButtonComponent
                n={context.career[i]?.n}
                k={context.career[i]?.k}
                isPremium={context.career[i]?.isPremium}
                diceRollResult={
                  context.diceRollResult?.careerStatsModifier[
                    context.career[i]?.statsModifierKey
                  ][`result${i}`]
                }
                clicked={
                  context.isClicked?.careerStatsModifier[
                    context.career[i]?.statsModifierKey
                  ][`result${i}`]
                }
                disabled={
                  context.isClicked?.careerStatsModifier[
                    context.career[i]?.statsModifierKey
                  ][`result${i}`]
                }
                path={[
                  "careerStatsModifier",
                  context.career[i]?.statsModifierKey,
                  `result${i}`,
                ]}
                toggleClick={context.toggleClick}
                updateDiceRollResult={context.updateDiceRollResult}
                resolveDiceRoll
                className={context.btnStyle2}
              />
            </>
          ) : (
            ""
          )}
        </>
      </>
    );
  };

  const renderCareerChildDiceButtonComponent = (resolveDiceRoll, i) => {
    return (
      <>
        <DiceButtonComponent
          n={1}
          k={100}
          diceRollResult={context.diceRollResult.careerChild[`result${i}`]}
          clicked={context.isClicked.careerChild[`result${i}`]}
          disabled={context.isClicked.careerChild[`result${i}`]}
          path={["careerChild", `result${i}`]}
          toggleClick={context.toggleClick}
          updateDiceRollResult={context.updateDiceRollResult}
          resolveDiceRoll={resolveDiceRoll}
          className={context.btnStyle2}
        />{" "}
        <span>{context.careerChild[i]?.name}</span>{" "}
        <>
          {context.careerChild[i]?.statsModifierKey ? (
            <>
              {context.svgArrowRight}
              <span>{` ${context.careerChild[i]?.statsModifierKey} + ${context.careerChild[i]?.statsModifier}`}</span>{" "}
              {context.careerChild[i]?.n ? " + " : ""}
              <DiceButtonComponent
                n={context.careerChild[i]?.n}
                k={context.careerChild[i]?.k}
                isPremium={context.careerChild[i]?.isPremium}
                diceRollResult={
                  context.diceRollResult?.careerChildStatsModifier[
                    context.careerChild[i]?.statsModifierKey
                  ][`result${i}`]
                }
                clicked={
                  context.isClicked?.careerChildStatsModifier[
                    context.careerChild[i]?.statsModifierKey
                  ][`result${i}`]
                }
                disabled={
                  context.isClicked?.careerChildStatsModifier[
                    context.careerChild[i]?.statsModifierKey
                  ][`result${i}`]
                }
                path={[
                  "careerChildStatsModifier",
                  context.careerChild[i]?.statsModifierKey,
                  `result${i}`,
                ]}
                toggleClick={context.toggleClick}
                updateDiceRollResult={context.updateDiceRollResult}
                resolveDiceRoll
                className={context.btnStyle2}
              />
            </>
          ) : (
            ""
          )}
        </>
      </>
    );
  };

  return (
    <article className="text-brown-100 ">
      <h3>VII. ZAWODY</h3>

      <div className="rounded p-4 text-brown-100  text-xs backdrop-blur-lg shadow-2xl mb-4">
        {`liczba zawodów to ((MD = ${valueMD}) -`}{" "}
        <DiceButtonComponent
          n={1}
          k={100}
          diceRollResult={context.diceRollResult.careerNumber}
          clicked={context.isClicked.careerNumber}
          disabled={
            context.isClicked.careerNumber || context.socialClass === ""
          }
          path={["careerNumber"]}
          toggleClick={context.toggleClick}
          updateDiceRollResult={context.updateDiceRollResult}
          resolveDiceRoll
          className={context.btnStyle2}
        />{" "}
        {`)/20 (cecha górna): `} <span>{`${careerNumber}`}</span>
      </div>
      <div className="rounded p-4 text-brown-100  text-xs backdrop-blur-lg shadow-2xl mb-4">
        Zawody z listy zawodów klasy{" "}
        {end === "N"
          ? "niższej"
          : end === "Ś"
          ? "średniej"
          : end === "W"
          ? "wyższej"
          : "(nie wylosowano KLASY SPOŁECZNEJ)"}
        :
        <div hidden={!context.isClicked.careerNumber}>
          <ul className="pt-2 pb-6 pl-4">
            {Array.from({ length: careerNumber }, (_, i) => {
              return (
                <li key={i}>
                  {i + 1}.{" "}
                  {renderCareerDiceButtonComponent(careerResolveDiceRoll, i)}
                  <>
                    {context.career[i]?.name ===
                    "rzuć jeszcze raz  i sprawdź na liście zawodów klasy średniej" ? (
                      <>
                        {context.svgArrowRight}
                        {renderCareerChildDiceButtonComponent(
                          careerResolveDiceRollClassS,
                          j++
                        )}
                      </>
                    ) : (
                      ""
                    )}
                    {context.career[i]?.name ===
                    "rzuć jeszcze raz  i sprawdź na liście zawodów klasy wyższej" ? (
                      <>
                        {context.svgArrowRight}
                        {renderCareerChildDiceButtonComponent(
                          careerResolveDiceRollClassW,
                          j++
                        )}
                      </>
                    ) : (
                      ""
                    )}
                    {context.career[i]?.name ===
                    "rzuć jeszcze raz  i sprawdź na liście zawodów klasy niższej" ? (
                      <>
                        {context.svgArrowRight}
                        {renderCareerChildDiceButtonComponent(
                          careerResolveDiceRollClassN,
                          j++
                        )}
                      </>
                    ) : (
                      ""
                    )}
                  </>
                </li>
              );
            })}
          </ul>
        </div>{" "}
      </div>
    </article>
  );
};
