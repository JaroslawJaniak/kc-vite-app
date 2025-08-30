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

  const start = context.getCharsFromKey(context.socialClass, 1, "start");
  const end = context.getCharsFromKey(context.socialClass, 1, "end");

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
    context.updateCareer(career);
  };
  const careerResolveDiceRollClassS = (path, k) => {
    const index = context.getIndexFromKey(path);
    const career = careerData_ClassS(k);
    context.updateCareer(career);
  };
  const careerResolveDiceRollClassW = (path, k) => {
    const index = context.getIndexFromKey(path);
    const career = careerData_ClassW(k);
    context.updateCareer(career);
  };

  return (
    <article>
      <h3>VII. ZAWODY</h3>

      <div>
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
          className={context.btnStyle}
        />{" "}
        {`)/20 (cecha górna): `} <span>{`${careerNumber}`}</span>
      </div>
      <div>
        Zawody z listy zawodów klasy{" "}
        {end === "N"
          ? "niższej"
          : end === "Ś"
          ? "średniej"
          : end === "W"
          ? "wyższej"
          : "(nie wylosowano KLASY SPOŁECZNEJ)"}
        :
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
              <span>{context.career[i]?.name}</span>{" "}
              <>
                {context.career[i]?.statsModifierKey}
                {context.career[i]?.statsModifierKey ? (
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
                    className={context.btnStyle}
                  />
                ) : (
                  ""
                )}
              </>
              <>
                {context.career[i]?.name ===
                "rzuć jeszcze raz  i sprawdź na liście zawodów klasy średniej" ? (
                  <DiceButtonComponent
                    n={1}
                    k={100}
                    diceRollResult={
                      context.diceRollResult.career[`result${careerNumber + i}`]
                    }
                    clicked={
                      context.isClicked.career[`result${careerNumber + i}`]
                    }
                    disabled={
                      context.isClicked.career[`result${careerNumber + i}`]
                    }
                    path={["career", `result${careerNumber + i}`]}
                    toggleClick={context.toggleClick}
                    updateDiceRollResult={context.updateDiceRollResult}
                    resolveDiceRoll={careerResolveDiceRollClassS}
                    className={context.btnStyle}
                  />
                ) : (
                  ""
                )}
              </>
              <>
                {context.career[i]?.name ===
                "rzuć jeszcze raz  i sprawdź na liście zawodów klasy wyższej" ? (
                  <DiceButtonComponent
                    n={1}
                    k={100}
                    diceRollResult={
                      context.diceRollResult.career[`result${careerNumber + i}`]
                    }
                    clicked={
                      context.isClicked.career[`result${careerNumber + i}`]
                    }
                    disabled={
                      context.isClicked.career[`result${careerNumber + i}`]
                    }
                    path={["career", `result${careerNumber + i}`]}
                    toggleClick={context.toggleClick}
                    updateDiceRollResult={context.updateDiceRollResult}
                    resolveDiceRoll={careerResolveDiceRollClassW}
                    className={context.btnStyle}
                  />
                ) : (
                  ""
                )}
              </>
              <>
                {context.career[i]?.name ===
                "rzuć jeszcze raz  i sprawdź na liście zawodów klasy niższej" ? (
                  <DiceButtonComponent
                    n={1}
                    k={100}
                    diceRollResult={
                      context.diceRollResult.career[`result${careerNumber + i}`]
                    }
                    clicked={
                      context.isClicked.career[`result${careerNumber + i}`]
                    }
                    disabled={
                      context.isClicked.career[`result${careerNumber + i}`]
                    }
                    path={["career", `result${careerNumber + i}`]}
                    toggleClick={context.toggleClick}
                    updateDiceRollResult={context.updateDiceRollResult}
                    resolveDiceRoll={careerResolveDiceRollClassN}
                    className={context.btnStyle}
                  />
                ) : (
                  ""
                )}
              </>{" "}
              <span>{context.career[careerNumber + i]?.name || ""}</span>
              <>
                {context.career[careerNumber + i]?.statsModifierKey}
                {context.career[careerNumber + i]?.statsModifierKey ? (
                  <DiceButtonComponent
                    n={context.career[i]?.n}
                    k={context.career[i]?.k}
                    isPremium={context.career[i]?.isPremium}
                    diceRollResult={
                      context.diceRollResult?.careerStatsModifier[
                        context.career[careerNumber + i]?.statsModifierKey
                      ][`result${careerNumber + i}`]
                    }
                    clicked={
                      context.isClicked?.careerStatsModifier[
                        context.career[careerNumber + i]?.statsModifierKey
                      ][`result${careerNumber + i}`]
                    }
                    disabled={
                      context.isClicked?.careerStatsModifier[
                        context.career[careerNumber + i]?.statsModifierKey
                      ][`result${careerNumber + i}`]
                    }
                    path={[
                      "careerStatsModifier",
                      context.career[careerNumber + i]?.statsModifierKey,
                      `result${careerNumber + i}`,
                    ]}
                    toggleClick={context.toggleClick}
                    updateDiceRollResult={context.updateDiceRollResult}
                    resolveDiceRoll
                    className={context.btnStyle}
                  />
                ) : (
                  ""
                )}
              </>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
