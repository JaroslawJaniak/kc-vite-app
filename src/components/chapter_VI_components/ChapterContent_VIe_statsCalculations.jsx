import React, { useEffect, useContext, useState } from "react";
import chp6_table_immunity_stats_0 from "./chp6_table-race-immunity-stats_0";
import { chp6_table_prof_stats2 } from "./chp6_table-prof-stats2";
import chp6_table_race_immunity_stats from "./chp6_table-race-immunity-stats";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import DiceButtonComponent from "../utils/buttons/kDice/DiceButtonComponent";

const calculateStat = (base, diceRoll, firstProf, secondProf, bonus) => {
  return base + diceRoll + Math.max(firstProf, secondProf) + (bonus || 0);
};

const renderStatCell = (stat, k10Stat) => {
  if (stat === 0) {
    return k10Stat ? "+" : "-";
  }
  return stat + (k10Stat ? "+" : "");
};



const ChapterContent_VIe_statsCalculations = () => {
  const context = useContext(CharacterStatsContext);

   const btnStyle =
     "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300  rounded text-xxs md:text-xs p-0.5 md:p-2  mb-2 w-8 md:w-12 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700";


  const stats = [
    { key: "ŻYW", label: "ŻYW", diceRoll: null },
    {
      key: "SF",
      label: "SF",
      diceRoll: Math.max(
        context.diceRollResult.baseStatsDice.SF.result1,
        context.diceRollResult.baseStatsDice.SF.result2
      ),
    },
    {
      key: "ZR",
      label: "ZR",
      diceRoll: Math.max(
        context.diceRollResult.baseStatsDice.ZR.result1,
        context.diceRollResult.baseStatsDice.ZR.result2
      ),
    },
    {
      key: "SZ",
      label: "SZ",
      diceRoll: context.diceRollResult.baseStatsDice.SZ,
    },
    {
      key: "INT",
      label: "INT",
      diceRoll: context.diceRollResult.baseStatsDice.INT,
    },
    {
      key: "MD",
      label: "MD",
      diceRoll: context.diceRollResult.baseStatsDice.MD,
    },
    {
      key: "UM",
      label: "UM",
      diceRoll: Math.max(
        context.diceRollResult.baseStatsDice.UM.result1,
        context.diceRollResult.baseStatsDice.UM.result2
      ),
    },
    {
      key: "WI",
      label: "WI",
      diceRoll: Math.max(
        context.diceRollResult.baseStatsDice.WI.result1,
        context.diceRollResult.baseStatsDice.WI.result2
      ),
    },
    {
      key: "ZW",
      label: "ZW",
      diceRoll: Math.max(
        context.diceRollResult.baseStatsDice.ZW.result1,
        context.diceRollResult.baseStatsDice.ZW.result2
      ),
    },
    {
      key: "CH",
      label: "CH",
      diceRoll: context.diceRollResult.baseStatsDice.CH,
    },
    {
      key: "PR",
      label: "PR",
      diceRoll: context.diceRollResult.baseStatsDice.PR,
    },
  ];

  const immunity = [
    {
      key: "Odp1",
      label: "Odp1",
      diceRoll: context.diceRollResult.baseStatsDice.CH,
    },
    {
      key: "Odp2",
      label: "Odp2",
      diceRoll: context.diceRollResult.baseStatsDice.CH,
    },
    {
      key: "Odp3",
      label: "Odp3",
      diceRoll: context.diceRollResult.baseStatsDice.CH,
    },
    {
      key: "Odp4",
      label: "Odp4",
      diceRoll: context.diceRollResult.baseStatsDice.SZ,
    },
    {
      key: "Odp5",
      label: "Odp5",
      diceRoll: context.diceRollResult.baseStatsDice.INT,
    },
    {
      key: "Odp6",
      label: "Odp6",
      diceRoll: context.diceRollResult.baseStatsDice.MD,
    },
    {
      key: "Odp7",
      label: "Odp7",
      diceRoll: context.diceRollResult.baseStatsDice.CH,
    },
    {
      key: "  Odp8",
      label: "Odp8",
      diceRoll: context.diceRollResult.baseStatsDice.CH,
    },
    {
      key: "Odp9",
      label: "Odp9",
      diceRoll: context.diceRollResult.baseStatsDice.CH,
    },
    {
      key: "Odp10",
      label: "  Odp10",
      diceRoll: context.diceRollResult.baseStatsDice.CH,
    },
  ];

  const defaultViewImmunityCalculations = (
    <>
      <div className="mt-2">
        <b>ODPORNOŚCI:</b>
        <div className="">
          <span>BPsych</span> <span>{`(1/20ŻYW + 1/10INT + 1/10MD + `}</span>
          <DiceButtonComponent
            n={1}
            k={10}
            isPremium={true}
            diceRollResult={context.diceRollResult.bonusImmunityDice.bFiz}
            clicked={context.isClicked.bonusImmunityDice.bFiz}
            disabled={context.isClicked.bonusImmunityDice.bFiz}
            path={["bonusImmunityDice", "bFiz"]}
            toggleClick={context.toggleClick}
            updateDiceRollResult={context.updateDiceRollResult}
            resolveDiceRoll={context.calculateStat1}
            className={btnStyle}
          />
          {"):"}
          <span className="ml-2">
            {" "}
            {Math.ceil(
              calculateStat(
                context.baseRaceStats["ŻYW"],
                stats[0].diceRoll,
                context.firstProfessionData.stats["ŻYW"],
                context.secondProfessionData.stats["ŻYW"],
                context.diceRollResult.bonusBaseStatsDice["ŻYW"]
              ) / 20
            ) +
              Math.ceil(
                calculateStat(
                  context.baseRaceStats["INT"],
                  stats[4].diceRoll,
                  context.firstProfessionData.stats["INT"],
                  context.secondProfessionData.stats["INT"],
                  context.diceRollResult.bonusBaseStatsDice["INT"]
                ) / 10
              ) +
              Math.ceil(
                calculateStat(
                  context.baseRaceStats["MD"],
                  stats[5].diceRoll,
                  context.firstProfessionData.stats["MD"],
                  context.secondProfessionData.stats["MD"],
                  context.diceRollResult.bonusBaseStatsDice["MD"]
                ) / 10
              ) +
              context.diceRollResult.bonusImmunityDice.bFiz}{" "}
          </span>
        </div>
        <div className="">
          <span>BFiz</span> <span>{`(1/10ŻYW + 1/10SF + `}</span>
          <DiceButtonComponent
            n={1}
            k={10}
            isPremium={true}
            diceRollResult={context.diceRollResult.bonusImmunityDice.bPsych}
            clicked={context.isClicked.bonusImmunityDice.bPsych}
            disabled={context.isClicked.bonusImmunityDice.bPsych}
            path={["bonusImmunityDice", "bPsych"]}
            toggleClick={context.toggleClick}
            updateDiceRollResult={context.updateDiceRollResult}
            resolveDiceRoll={context.calculateStat1}
            className={btnStyle}
          />
          {"):"}
          <span className="ml-2">
            {" "}
            {Math.ceil(
              calculateStat(
                context.baseRaceStats["ŻYW"],
                stats[0].diceRoll,
                context.firstProfessionData.stats["ŻYW"],
                context.secondProfessionData.stats["ŻYW"],
                context.diceRollResult.bonusBaseStatsDice["ŻYW"]
              ) / 10
            ) +
              Math.ceil(
                calculateStat(
                  context.baseRaceStats["SF"],
                  stats[1].diceRoll,
                  context.firstProfessionData.stats["SF"],
                  context.secondProfessionData.stats["SF"],
                  context.diceRollResult.bonusBaseStatsDice["SF"]
                ) / 10
              ) +
              context.diceRollResult.bonusImmunityDice.bPsych}{" "}
          </span>
        </div>
      </div>

      <table className="  text-xxs md:text-xs dark:text-gray-400 [&_*]:border-hidden bg-transparent ">
        <thead>
          <tr>
            <th>odporność</th>
            <th>{"1/10"}</th>
            <th>{context.race}</th>

            <th>{context.firstProfessionData.profName}</th>
            <th>{context.secondProfessionData.profName}</th>

            <th>k10+</th>
            <th>sum</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>odporność nr1: iluzja i hipnoza {"(+1/10 INT)"}</td>
            <td className="text-center">
              {Math.ceil(
                calculateStat(
                  context.baseRaceStats["INT"],
                  stats[4].diceRoll,
                  context.firstProfessionData.stats["INT"],
                  context.secondProfessionData.stats["INT"],
                  context.diceRollResult.bonusBaseStatsDice["INT"]
                ) / 10
              )}
            </td>
            <td>race</td>
            <td className="text-center">
              {context.firstProfessionData.stats.Odp1}
            </td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
          </tr>
          <tr>
            <td>odporność nr2: sugestia i uroki {"(+1/10 MD)"}</td>
            <td className="text-center">
              {Math.ceil(
                calculateStat(
                  context.baseRaceStats["MD"],
                  stats[5].diceRoll,
                  context.firstProfessionData.stats["MD"],
                  context.secondProfessionData.stats["MD"],
                  context.diceRollResult.bonusBaseStatsDice["MD"]
                ) / 10
              )}
            </td>
            <td>race</td>
            <td className="text-center">
              {context.firstProfessionData.stats.Odp2}
            </td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
          </tr>
          <tr>
            <td>
              odporność nr3: zaklęcia, przekleństwa i uroki {"(+1/10 WI)"}
            </td>
            <td className="text-center">
              {Math.ceil(
                calculateStat(
                  context.baseRaceStats["WI"],
                  stats[9].diceRoll,
                  context.firstProfessionData.stats["WI"],
                  context.secondProfessionData.stats["WI"],
                  context.diceRollResult.bonusBaseStatsDice["WI"]
                ) / 10
              )}
            </td>
            <td>race</td>
            <td className="text-center">
              {context.firstProfessionData.stats.Odp3}
            </td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
          </tr>
          <tr>
            <td>odporność nr4: szok i paraliż umysłowy</td>
            <td className="text-center">-</td>
            <td>race</td>
            <td className="text-center">
              {context.firstProfessionData.stats.Odp4}
            </td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
          </tr>
          <tr>
            <td>odporność nr5: energia magiczna i efekty specjalne</td>
            <td className="text-center">-</td>
            <td>race</td>
            <td className="text-center">
              {context.firstProfessionData.stats.Odp5}
            </td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
          </tr>
          <tr>
            <td>odporność nr6: trucizny i paraliż fizyczny</td>
            <td className="text-center">-</td>
            <td>race</td>
            <td className="text-center">
              {context.firstProfessionData.stats.Odp6}
            </td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
          </tr>
          <tr>
            <td>odporność nr7: gazy i wyziewy</td>
            <td className="text-center">-</td>
            <td>race</td>
            <td className="text-center">
              {context.firstProfessionData.stats.Odp7}
            </td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
          </tr>
          <tr>
            <td>odporność nr8: temperatura {"(ogień, mróz)"} i kwasy</td>
            <td className="text-center">-</td>
            <td>race</td>
            <td className="text-center">
              {context.firstProfessionData.stats.Odp8}
            </td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
          </tr>
          <tr>
            <td>odporność nr9: elektryczność i magnetyzm</td>
            <td className="text-center">-</td>
            <td>race</td>
            <td className="text-center">
              {context.firstProfessionData.stats.Odp9}
            </td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
          </tr>
          <tr>
            <td>
              odporność nr10: polimorfia i petryfikacja {"(skamienienie)"}
            </td>
            <td className="text-center">-</td>
            <td>race</td>
            <td className="text-center">
              {context.firstProfessionData.stats.Odp10}
            </td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
          </tr>
        </tbody>
      </table>
    </>
  );

  const deafaultView = (
    <div>
      <table
        id="table_base-stats"
        className="[&>*]:p-0 [&>*]:m-0 text-xxs md:text-xs"
      >
        <tr>
          <td></td>
          <td colspan="10" className="text-center font-bold">
            ODPORNOŚĆ NR
          </td>
        </tr>
        <tr>
          {chp6_table_immunity_stats_0.map((item) => (
            <td key={item}>
              <b>{item}</b>
            </td>
          ))}
        </tr>
        {chp6_table_race_immunity_stats.map((immunity) => (
          <tr
            key={immunity.name}
            className={` ${
              context.race.toUpperCase() === immunity.race
                ? "bg-black text-white"
                : ""
            }`}
          >
            <td>{immunity.race}</td>
            <td>{renderStatCell(immunity.Odp1)}</td>
          </tr>
        ))}
      </table>
      <table
        id="table_base-stats_prof"
        className="[&>*]:p-0 [&>*]:m-0 text-xxs md:text-xs"
      >
        <tr>
          <td></td>
          <td colspan="10" className="text-center font-bold">
            ODPORNOŚĆ NR
          </td>
        </tr>
        <tr>
          {chp6_table_immunity_stats_0.map((item, index) =>
            index === 0 ? (
              <td key={item}>
                <b>{"PROFESJA"}</b>
              </td>
            ) : (
              <td key={item}>
                <b>{item}</b>
              </td>
            )
          )}
        </tr>
        {chp6_table_prof_stats2.map((profBonus) => (
          <tr
            key={profBonus.name}
            className={`${
              context.firstProfession === profBonus.name ||
              context.secondProfession === profBonus.name
                ? "bg-black text-white"
                : ""
            }`}
          >
            <td>{profBonus.name}</td>
            <td>{renderStatCell(profBonus.Odp1, profBonus.k10_Odp1)}</td>
          </tr>
        ))}
      </table>
    </div>
  );

  return defaultViewImmunityCalculations;
};

export default ChapterContent_VIe_statsCalculations;
