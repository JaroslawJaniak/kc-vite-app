import React, { useEffect, useContext } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import DiceButtonComponent from "../utils/buttons/kDice/DiceButtonComponent";

const TableRow = ({ statKey, context, btnStyle, k100RollResultSF }) => {
  const baseStat = context.baseRaceStats[statKey];
  const firstProfStat = context.firstProfessionData.stats[statKey];
  const secondProfStat = context.secondProfessionData.stats[statKey];
  const bonusStatKey = `k10_${statKey}`;

  return (
    <tr>
      <td>
        <b>{statKey}</b>
      </td>
      <td>{baseStat}</td>
      <td>
        <DiceButtonComponent
          n={1}
          k={50}
          diceRollResult={
            context.diceRollResult.baseStatsDice[statKey]?.result1
          }
          clicked={context.isClicked.baseStatsDice[statKey]}
          disabled={context.isClicked.baseStatsDice[statKey]}
          path={["baseStatsDice", statKey, "result1"]}
          toggleClick={context.toggleClick}
          updateDiceRollResult={context.updateDiceRollResult}
          resolveDiceRoll={k100RollResultSF}
          className={btnStyle}
        />
      </td>
      <td>{firstProfStat}</td>
      <td>{secondProfStat}</td>
      <td>
        {context.firstProfessionData.stats[bonusStatKey] ||
        context.secondProfessionData.stats[bonusStatKey] ? (
          <DiceButtonComponent
            n={1}
            k={10}
            diceRollResult={context.diceRollResult.bonusBaseStatsDice[statKey]}
            clicked={context.isClicked.bonusBaseStatsDice[statKey]}
            disabled={context.isClicked.bonusBaseStatsDice[statKey]}
            path={["bonusBaseStatsDice", statKey]}
            toggleClick={context.toggleClick}
            updateDiceRollResult={context.updateDiceRollResult}
            resolveDiceRoll={k100RollResultSF}
            className={btnStyle}
          />
        ) : (
          ""
        )}
      </td>
      <td>{baseStat + Math.max(firstProfStat, secondProfStat)}</td>
    </tr>
  );
};

export const ChapterContent_VI_statsCalculations = () => {
  const context = useContext(CharacterStatsContext);
  const btnStyle =
    "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300  rounded text-xxs md:text-xs p-0.5 md:p-2  mb-2 w-8 md:w-12 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700";

  const k100RollResultSF = (k) => {
    console.log("k100RollResultSF", k);
  };

  useEffect(() => {
    context.filterBaseRaceStatsByRaceName();
    context.filterProfStatsByFirstProf();
    context.filterProfStatsBySecondProf();
  }, []);

  const statsKeys = [
    "ŻYW",
    "SF",
    "ZR",
    "SZ",
    "INT",
    "MD",
    "UM",
    "CH",
    "PR",
    "WI",
    "ZW",
  ];

  return (
    <div>
      <button
        className={btnStyle}
        onClick={() => context.toggleClick("baseStatsDice", "ZR")}
      >
        toggle ZR
      </button>
      <div className="text-xxs md:text-xs">
        Toggle ZR (aktualnie:{" "}
        {context.isClicked.baseStatsDice.ZR ? "true" : "false"})
      </div>
      <button
        className={btnStyle}
        onClick={() => context.toggleClick("plcOfBirthDice")}
      >
        Toggle plcOfBirthDice (aktualnie:{" "}
        {context.isClicked.plcOfBirthDice ? "true" : "false"})
      </button>
      <div className="text-xxs md:text-xs">
        Toggle SF test (aktualnie:{" "}
        {context.isClicked.baseStatsDice.SF ? "true" : "false"})
      </div>

      <table className="w-full text-xxs md:text-xs dark:text-gray-400 [&_*]:border-hidden bg-transparent [&_*]:text-center">
        <caption className="text-left">
          ChapterContent_VI_statsSelection
        </caption>
        <thead>
          <tr>
            <th></th>
            <th>{context.race}</th>
            <th>k100/k50</th>
            <th>{context.firstProfessionData.profName}</th>
            <th>{context.secondProfessionData.profName}</th>
            <th>k10+</th>
            <th>sum</th>
          </tr>
        </thead>
        <tbody>
          {statsKeys.map((key) => (
            <TableRow
              key={key}
              statKey={key}
              context={context}
              btnStyle={btnStyle}
              k100RollResultSF={k100RollResultSF}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
