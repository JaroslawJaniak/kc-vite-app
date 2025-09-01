import React, { useContext } from "react";
import DiceButtonComponent from "../utils/buttons/kDice/DiceButtonComponent";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import { careerData_ClassN } from "./chp7_career_class_N_data";
import { careerData_ClassS } from "./chp7_career_class_S_data";
import { careerData_ClassW } from "./chp7_career_class_W_data";

export const CopyChapterContent_VII_career = () => {
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

  const start = context.getCharsFromKey(context.socialClass, 1, "start");
  const end = context.getCharsFromKey(context.socialClass, 1, "end");

  const careerMap = {
    N: careerData_ClassN,
    Ś: careerData_ClassS,
    W: careerData_ClassW,
  };

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

  function handleRoll(index, sourceClass, k) {
    const adjusted = adjustK(k, start);
    const career = resolveCareer(sourceClass, adjusted);
    if (!career) return;

    context.updateCareerAtIndex(index, career);

    if (career.name.includes("rzuć jeszcze raz")) {
      let redirectClass = "N";
      if (career.name.includes("średniej")) redirectClass = "Ś";
      if (career.name.includes("wyższej")) redirectClass = "W";
      context.addCareerSlot(redirectClass);
    }
  }

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
          toggleClick={context.toggleClickP}
          updateDiceRollResult={context.updateDiceRollResult}
          resolveDiceRoll={(path, k) => {
            const count = Math.max(0, Math.ceil((valueMD - k) / 20));
            context.initCareerSlots(count, end);
          }}
          className={context.btnStyle}
        />
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
          {context.career.map((careerItem, i) => (
            <li key={careerItem.id || i}>
              {i + 1}.{" "}
              {!careerItem.resolved ? (
                <DiceButtonComponent
                  n={1}
                  k={100}
                  diceRollResult={careerItem.diceResult}
                  clicked={careerItem.clicked}
                  disabled={careerItem.clicked}
                  path={["career", `result${i}`]}
                  toggleClick={context.toggleClickP}
                  updateDiceRollResult={context.updateDiceRollResult}
                  resolveDiceRoll={(path, k) =>
                    handleRoll(i, careerItem.sourceClass, k)
                  }
                  className={context.btnStyle}
                />
              ) : (
                <span>{careerItem.name}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
