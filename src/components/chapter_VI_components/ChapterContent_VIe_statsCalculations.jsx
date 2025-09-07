import React, { useEffect, useContext, useState } from "react";

import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import DiceButtonComponent from "../utils/buttons/kDice/DiceButtonComponent";

const calculateStat = (base, diceRoll, firstProf, secondProf, bonus) => {
  return base + diceRoll + Math.max(firstProf, secondProf) + (bonus || 0);
};

const ChapterContent_VIe_statsCalculations = () => {
  const context = useContext(CharacterStatsContext);

    const stats = [
    { key: "ŻYW", label: "ŻYW", diceRoll: null },
    {
      key: "SF",
      label: "SF",
      diceRoll: context.safeMax(
        context.diceRollResult?.baseStatsDice?.SF?.result1,
        context.diceRollResult?.baseStatsDice?.SF?.result2
      ),
    },
    {
      key: "ZR",
      label: "ZR",
      diceRoll: context.safeMax(
        context.diceRollResult?.baseStatsDice?.ZR?.result1,
        context.diceRollResult?.baseStatsDice?.ZR?.result2
      ),
    },
    {
      key: "SZ",
      label: "SZ",
      diceRoll: context.safeMax(
        context.diceRollResult?.baseStatsDice?.SZ?.result1,
        context.diceRollResult?.baseStatsDice?.SZ?.result2
      ),
    },
    {
      key: "INT",
      label: "INT",
      diceRoll: context.safeMax(
        context.diceRollResult?.baseStatsDice?.INT?.result1,
        context.diceRollResult?.baseStatsDice?.INT?.result2
      ),
    },
    {
      key: "MD",
      label: "MD",
      diceRoll: context.safeMax(
        context.diceRollResult?.baseStatsDice?.MD?.result1,
        context.diceRollResult?.baseStatsDice?.MD?.result2
      ),
    },
    {
      key: "UM",
      label: "UM",
      diceRoll: context.safeMax(
        context.diceRollResult?.baseStatsDice?.UM?.result1,
        context.diceRollResult?.baseStatsDice?.UM?.result2
      ),
    },
    {
      key: "WI",
      label: "WI",
      diceRoll: context.safeMax(
        context.diceRollResult?.baseStatsDice?.WI?.result1,
        context.diceRollResult?.baseStatsDice?.WI?.result2
      ),
    },
    {
      key: "ZW",
      label: "ZW",
      diceRoll: context.safeMax(
        context.diceRollResult?.baseStatsDice?.ZW?.result1,
        context.diceRollResult?.baseStatsDice?.ZW?.result2
      ),
    },
    {
      key: "CH",
      label: "CH",
      diceRoll: context.safeMax(
        context.diceRollResult?.baseStatsDice?.CH?.result1,
        context.diceRollResult?.baseStatsDice?.CH?.result2
      ),
    },
    {
      key: "PR",
      label: "PR",
      diceRoll: context.safeMax(
        context.diceRollResult?.baseStatsDice?.PR?.result1,
        context.diceRollResult?.baseStatsDice?.PR?.result2
      ),
    },
  ];

  const immunityProf = [
    {
      key: "Odp1",
      label: "Odp1",
      immunityStat: Math.max(
        context.firstProfessionData.stats.Odp1,
        context.secondProfessionData.stats.Odp1
      ),
    },
    {
      key: "Odp2",
      label: "Odp2",
      immunityStat: Math.max(
        context.firstProfessionData.stats.Odp2,
        context.secondProfessionData.stats.Odp2
      ),
    },
    {
      key: "Odp3",
      label: "Odp3",
      immunityStat: Math.max(
        context.firstProfessionData.stats.Odp3,
        context.secondProfessionData.stats.Odp3
      ),
    },
    {
      key: "Odp4",
      label: "Odp4",
      immunityStat: Math.max(
        context.firstProfessionData.stats.Odp4,
        context.secondProfessionData.stats.Odp4
      ),
    },
    {
      key: "Odp5",
      label: "Odp5",
      immunityStat: Math.max(
        context.firstProfessionData.stats.Odp5,
        context.secondProfessionData.stats.Odp5
      ),
    },
    {
      key: "Odp6",
      label: "Odp6",
      immunityStat: Math.max(
        context.firstProfessionData.stats.Odp6,
        context.secondProfessionData.stats.Odp6
      ),
    },
    {
      key: "Odp7",
      label: "Odp7",
      immunityStat: Math.max(
        context.firstProfessionData.stats.Odp7,
        context.secondProfessionData.stats.Odp7
      ),
    },
    {
      key: "  Odp8",
      label: "Odp8",
      immunityStat: Math.max(
        context.firstProfessionData.stats.Odp8,
        context.secondProfessionData.stats.Odp8
      ),
    },
    {
      key: "Odp9",
      label: "Odp9",
      immunityStat: Math.max(
        context.firstProfessionData.stats.Odp9,
        context.secondProfessionData.stats.Odp9
      ),
    },
    {
      key: "Odp10",
      label: "  Odp10",
      immunityStat: Math.max(
        context.firstProfessionData.stats.Odp10,
        context.secondProfessionData.stats.Odp10
      ),
    },
  ];

  const contributionINT = Math.ceil(
    calculateStat(
      context.baseRaceStats["INT"],
      stats[4].diceRoll,
      context.firstProfessionData.stats["INT"],
      context.secondProfessionData.stats["INT"],
      context.diceRollResult.bonusBaseStatsDice["INT"]
    ) / 10
  );

  const contributionMD = Math.ceil(
    calculateStat(
      context.baseRaceStats["MD"],
      stats[5].diceRoll,
      context.firstProfessionData.stats["MD"],
      context.secondProfessionData.stats["MD"],
      context.diceRollResult.bonusBaseStatsDice["MD"]
    ) / 10
  );
  const contributionWI = Math.ceil(
    calculateStat(
      context.baseRaceStats["WI"],
      stats[9].diceRoll,
      context.firstProfessionData.stats["WI"],
      context.secondProfessionData.stats["WI"],
      context.diceRollResult.bonusBaseStatsDice["WI"]
    ) / 10
  );

  const contributionŻYW = Math.ceil(
    calculateStat(
      context.baseRaceStats["ŻYW"],
      stats[0].diceRoll,
      context.firstProfessionData.stats["ŻYW"],
      context.secondProfessionData.stats["ŻYW"],
      context.diceRollResult.bonusBaseStatsDice["ŻYW"]
    ) / 20
  );

  const contributionSF = Math.ceil(
    calculateStat(
      context.baseRaceStats["SF"],
      stats[1].diceRoll,
      context.firstProfessionData.stats["SF"],
      context.secondProfessionData.stats["SF"],
      context.diceRollResult.bonusBaseStatsDice["SF"]
    ) / 10
  );

  const defaultViewImmunityCalculations = (
    <>
      <div className="mt-2 rounded p-4 text-brown-100  text-xs backdrop-blur-lg shadow-2xl mb-4">
        <b>ODPORNOŚCI:</b>
        <div className="">
          <span>BPsych</span> <span>{`(1/20ŻYW + 1/10INT + 1/10MD + `}</span>
          <DiceButtonComponent
            n={1}
            k={10}
            isPremium={true}
            diceRollResult={context.diceRollResult.bonusImmunityDice.BPsych}
            clicked={context.isClicked.bonusImmunityDice.BPsych}
            disabled={context.isClicked.bonusImmunityDice.BPsych}
            path={["bonusImmunityDice", "BPsych"]}
            toggleClick={context.toggleClick}
            updateDiceRollResult={context.updateDiceRollResult}
            resolveDiceRoll={context.calculateStat1}
            className={context.btnStyle2}
          />
          {"):"}
          <span className="ml-2">
            {" "}
            {contributionŻYW +
              contributionINT +
              contributionMD +
              context.diceRollResult.bonusImmunityDice.BPsych}{" "}
          </span>
        </div>
        <div className="">
          <span>BFiz</span> <span>{`(1/10ŻYW + 1/10SF + `}</span>
          <DiceButtonComponent
            n={1}
            k={10}
            isPremium={true}
            diceRollResult={context.diceRollResult.bonusImmunityDice.BFiz}
            clicked={context.isClicked.bonusImmunityDice.BFiz}
            disabled={context.isClicked.bonusImmunityDice.BFiz}
            path={["bonusImmunityDice", "BFiz"]}
            toggleClick={context.toggleClick}
            updateDiceRollResult={context.updateDiceRollResult}
            resolveDiceRoll={context.calculateStat1}
            className={context.btnStyle2}
          />
          {"):"}
          <span className="ml-2">
            {" "}
            {contributionŻYW * 2 +
              contributionSF +
              context.diceRollResult.bonusImmunityDice.BFiz}{" "}
          </span>
        </div>
      </div>

      <table className="  text-xxs md:text-xs dark:text-gray-400 [&_*]:border-hidden bg-transparent rounded p-4 text-brown-100  text-xs backdrop-blur-lg shadow-2xl mb-4">
        <thead>
          <tr>
            <th>odporność</th>
            <th>{"BPsych/BFiz"}</th>
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
            <td>
              {contributionŻYW +
                contributionINT +
                contributionMD +
                context.diceRollResult.bonusImmunityDice.BPsych}
            </td>
            <td className="text-center">{contributionINT}</td>
            <td>{context.raceData.immunity.Odp1}</td>
            <td className="text-center">
              {context.firstProfessionData.stats.Odp1}
            </td>
            <td className="text-center">
              {context.secondProfessionData.stats.Odp1}
            </td>
            <td className="text-center">
              {context.firstProfessionData.stats.k10_Odp1 ||
              context.secondProfessionData.stats.k10_Odp1 ? (
                <DiceButtonComponent
                  n={1}
                  k={10}
                  isPremium={true}
                  diceRollResult={context.diceRollResult.bonusImmunityDice.odp1}
                  clicked={context.isClicked.bonusImmunityDice.odp1}
                  disabled={context.isClicked.bonusImmunityDice.odp1}
                  path={["bonusImmunityDice", "odp1"]}
                  toggleClick={context.toggleClick}
                  updateDiceRollResult={context.updateDiceRollResult}
                  resolveDiceRoll={context.calculateStat1}
                  className={context.btnStyle2}
                />
              ) : (
                " "
              )}
            </td>
            <td className="text-center">
              {contributionŻYW +
                contributionINT +
                contributionMD +
                context.diceRollResult.bonusImmunityDice.BPsych +
                immunityProf[0].immunityStat +
                context.raceData.immunity.Odp1 +
                context.diceRollResult.bonusImmunityDice.odp1}
            </td>
          </tr>
          <tr>
            <td>odporność nr2: sugestia i uroki {"(+1/10 MD)"}</td>
            <td>
              {contributionŻYW +
                contributionINT +
                contributionMD +
                context.diceRollResult.bonusImmunityDice.BPsych}
            </td>
            <td className="text-center">{contributionMD}</td>
            <td>{context.raceData.immunity.Odp2}</td>
            <td className="text-center">
              {context.firstProfessionData.stats.Odp2}
            </td>
            <td className="text-center">
              {context.secondProfessionData.stats.Odp2}
            </td>
            <td className="text-center">
              {context.firstProfessionData.stats.k10_Odp2 ||
              context.secondProfessionData.stats.k10_Odp2 ? (
                <DiceButtonComponent
                  n={1}
                  k={10}
                  isPremium={true}
                  diceRollResult={context.diceRollResult.bonusImmunityDice.odp2}
                  clicked={context.isClicked.bonusImmunityDice.odp2}
                  disabled={context.isClicked.bonusImmunityDice.odp2}
                  path={["bonusImmunityDice", "odp2"]}
                  toggleClick={context.toggleClick}
                  updateDiceRollResult={context.updateDiceRollResult}
                  resolveDiceRoll={context.calculateStat1}
                  className={context.btnStyle2}
                />
              ) : (
                ""
              )}
            </td>
            <td className="text-center">
              {contributionŻYW +
                contributionINT +
                contributionMD +
                context.diceRollResult.bonusImmunityDice.BPsych +
                immunityProf[1].immunityStat +
                context.raceData.immunity.Odp2 +
                context.diceRollResult.bonusImmunityDice.odp2}
            </td>
          </tr>
          <tr>
            <td>
              odporność nr3: zaklęcia, przekleństwa i uroki {"(+1/10 WI)"}
            </td>
            <td>
              {contributionŻYW +
                contributionINT +
                contributionMD +
                context.diceRollResult.bonusImmunityDice.BPsych}
            </td>
            <td className="text-center">{contributionWI}</td>
            <td>{context.raceData.immunity.Odp3}</td>
            <td className="text-center">
              {context.firstProfessionData.stats.Odp3}
            </td>
            <td className="text-center">
              {context.secondProfessionData.stats.Odp3}
            </td>
            <td className="text-center">
              {context.firstProfessionData.stats.k10_Odp3 ||
              context.secondProfessionData.stats.k10_Odp3 ? (
                <DiceButtonComponent
                  n={1}
                  k={10}
                  isPremium={true}
                  diceRollResult={context.diceRollResult.bonusImmunityDice.odp3}
                  clicked={context.isClicked.bonusImmunityDice.odp3}
                  disabled={context.isClicked.bonusImmunityDice.odp3}
                  path={["bonusImmunityDice", "odp3"]}
                  toggleClick={context.toggleClick}
                  updateDiceRollResult={context.updateDiceRollResult}
                  resolveDiceRoll={context.calculateStat1}
                  className={context.btnStyle2}
                />
              ) : (
                ""
              )}
            </td>
            <td className="text-center">
              {contributionŻYW +
                contributionINT +
                contributionMD +
                context.diceRollResult.bonusImmunityDice.BPsych +
                immunityProf[2].immunityStat +
                context.raceData.immunity.Odp3 +
                context.diceRollResult.bonusImmunityDice.odp3}
            </td>
          </tr>
          <tr>
            <td>odporność nr4: szok i paraliż umysłowy</td>
            <td>
              {contributionŻYW +
                contributionINT +
                contributionMD +
                context.diceRollResult.bonusImmunityDice.BPsych}
            </td>
            <td className="text-center">-</td>
            <td>{context.raceData.immunity.Odp4}</td>
            <td className="text-center">
              {context.firstProfessionData.stats.Odp4}
            </td>
            <td className="text-center">
              {context.secondProfessionData.stats.Odp4}
            </td>
            <td className="text-center">
              {context.firstProfessionData.stats.k10_Odp4 ||
              context.secondProfessionData.stats.k10_Odp4 ? (
                <DiceButtonComponent
                  n={1}
                  k={10}
                  isPremium={true}
                  diceRollResult={context.diceRollResult.bonusImmunityDice.odp4}
                  clicked={context.isClicked.bonusImmunityDice.odp4}
                  disabled={context.isClicked.bonusImmunityDice.odp4}
                  path={["bonusImmunityDice", "odp4"]}
                  toggleClick={context.toggleClick}
                  updateDiceRollResult={context.updateDiceRollResult}
                  resolveDiceRoll={context.calculateStat1}
                  className={context.btnStyle2}
                />
              ) : (
                ""
              )}
            </td>
            <td className="text-center">
              {contributionŻYW +
                contributionINT +
                contributionMD +
                context.diceRollResult.bonusImmunityDice.BPsych +
                immunityProf[3].immunityStat +
                context.raceData.immunity.Odp4 +
                context.diceRollResult.bonusImmunityDice.odp4}
            </td>
          </tr>
          <tr>
            <td>odporność nr5: energia magiczna i efekty specjalne</td>
            <td>
              {contributionŻYW +
                contributionINT +
                contributionMD +
                context.diceRollResult.bonusImmunityDice.BPsych}
            </td>
            <td className="text-center">-</td>
            <td>{context.raceData.immunity.Odp5}</td>
            <td className="text-center">
              {context.firstProfessionData.stats.Odp5}
            </td>
            <td className="text-center">
              {context.secondProfessionData.stats.Odp5}
            </td>
            <td className="text-center">
              {context.firstProfessionData.stats.k10_Odp5 ||
              context.secondProfessionData.stats.k10_Odp5 ? (
                <DiceButtonComponent
                  n={1}
                  k={10}
                  isPremium={true}
                  diceRollResult={context.diceRollResult.bonusImmunityDice.odp5}
                  clicked={context.isClicked.bonusImmunityDice.odp5}
                  disabled={context.isClicked.bonusImmunityDice.odp5}
                  path={["bonusImmunityDice", "odp5"]}
                  toggleClick={context.toggleClick}
                  updateDiceRollResult={context.updateDiceRollResult}
                  resolveDiceRoll={context.calculateStat1}
                  className={context.btnStyle2}
                />
              ) : (
                ""
              )}
            </td>
            <td className="text-center">
              {contributionŻYW +
                contributionINT +
                contributionMD +
                context.diceRollResult.bonusImmunityDice.BPsych +
                immunityProf[4].immunityStat +
                context.raceData.immunity.Odp5 +
                context.diceRollResult.bonusImmunityDice.odp5}
            </td>
          </tr>
          <tr>
            <td>odporność nr6: trucizny i paraliż fizyczny</td>
            <td>
              {contributionŻYW * 2 +
                contributionSF +
                context.diceRollResult.bonusImmunityDice.BFiz}
            </td>
            <td className="text-center">-</td>
            <td>{context.raceData.immunity.Odp6}</td>
            <td className="text-center">
              {context.firstProfessionData.stats.Odp6}
            </td>
            <td className="text-center">
              {context.secondProfessionData.stats.Odp6}
            </td>
            <td className="text-center">
              {context.firstProfessionData.stats.k10_Odp6 ||
              context.secondProfessionData.stats.k10_Odp6 ? (
                <DiceButtonComponent
                  n={1}
                  k={10}
                  isPremium={true}
                  diceRollResult={context.diceRollResult.bonusImmunityDice.odp6}
                  clicked={context.isClicked.bonusImmunityDice.odp6}
                  disabled={context.isClicked.bonusImmunityDice.odp6}
                  path={["bonusImmunityDice", "odp6"]}
                  toggleClick={context.toggleClick}
                  updateDiceRollResult={context.updateDiceRollResult}
                  resolveDiceRoll={context.calculateStat1}
                  className={context.btnStyle2}
                />
              ) : (
                ""
              )}
            </td>
            <td className="text-center">
              {contributionŻYW * 2 +
                contributionSF +
                context.diceRollResult.bonusImmunityDice.BFiz +
                immunityProf[5].immunityStat +
                context.raceData.immunity.Odp6 +
                context.diceRollResult.bonusImmunityDice.odp6}
            </td>
          </tr>
          <tr>
            <td>odporność nr7: gazy i wyziewy</td>
            <td>
              {contributionŻYW * 2 +
                contributionSF +
                context.diceRollResult.bonusImmunityDice.BFiz}
            </td>
            <td className="text-center">-</td>
            <td>{context.raceData.immunity.Odp7}</td>
            <td className="text-center">
              {context.firstProfessionData.stats.Odp7}
            </td>
            <td className="text-center">
              {context.secondProfessionData.stats.Odp7}
            </td>
            <td className="text-center">
              {context.firstProfessionData.stats.k10_Odp7 ||
              context.secondProfessionData.stats.k10_Odp7 ? (
                <DiceButtonComponent
                  n={1}
                  k={10}
                  isPremium={true}
                  diceRollResult={context.diceRollResult.bonusImmunityDice.odp7}
                  clicked={context.isClicked.bonusImmunityDice.odp7}
                  disabled={context.isClicked.bonusImmunityDice.odp7}
                  path={["bonusImmunityDice", "odp7"]}
                  toggleClick={context.toggleClick}
                  updateDiceRollResult={context.updateDiceRollResult}
                  resolveDiceRoll={context.calculateStat1}
                  className={context.btnStyle2}
                />
              ) : (
                ""
              )}
            </td>
            <td className="text-center">
              {contributionŻYW * 2 +
                contributionSF +
                context.diceRollResult.bonusImmunityDice.BFiz +
                immunityProf[6].immunityStat +
                context.raceData.immunity.Odp7 +
                context.diceRollResult.bonusImmunityDice.odp7}
            </td>
          </tr>
          <tr>
            <td>odporność nr8: temperatura {"(ogień, mróz)"} i kwasy</td>
            <td>
              {contributionŻYW * 2 +
                contributionSF +
                context.diceRollResult.bonusImmunityDice.BFiz}
            </td>
            <td className="text-center">-</td>
            <td>{context.raceData.immunity.Odp8}</td>
            <td className="text-center">
              {context.firstProfessionData.stats.Odp8}
            </td>
            <td className="text-center">
              {context.secondProfessionData.stats.Odp8}
            </td>
            <td className="text-center">
              {context.firstProfessionData.stats.k10_Odp8 ||
              context.secondProfessionData.stats.k10_Odp8 ? (
                <DiceButtonComponent
                  n={1}
                  k={10}
                  isPremium={true}
                  diceRollResult={context.diceRollResult.bonusImmunityDice.odp8}
                  clicked={context.isClicked.bonusImmunityDice.odp8}
                  disabled={context.isClicked.bonusImmunityDice.odp8}
                  path={["bonusImmunityDice", "odp8"]}
                  toggleClick={context.toggleClick}
                  updateDiceRollResult={context.updateDiceRollResult}
                  resolveDiceRoll={context.calculateStat1}
                  className={context.btnStyle2}
                />
              ) : (
                ""
              )}
            </td>
            <td className="text-center">
              {contributionŻYW * 2 +
                contributionSF +
                context.diceRollResult.bonusImmunityDice.BFiz +
                immunityProf[7].immunityStat +
                context.raceData.immunity.Odp8 +
                context.diceRollResult.bonusImmunityDice.odp8}
            </td>
          </tr>
          <tr>
            <td>odporność nr9: elektryczność i magnetyzm</td>
            <td>
              {contributionŻYW * 2 +
                contributionSF +
                context.diceRollResult.bonusImmunityDice.BFiz}
            </td>
            <td className="text-center">-</td>
            <td>{context.raceData.immunity.Odp9}</td>
            <td className="text-center">
              {context.firstProfessionData.stats.Odp9}
            </td>
            <td className="text-center">
              {context.secondProfessionData.stats.Odp9}
            </td>
            <td className="text-center">
              {context.firstProfessionData.stats.k10_Odp9 ||
              context.secondProfessionData.stats.k10_Odp9 ? (
                <DiceButtonComponent
                  n={1}
                  k={10}
                  isPremium={true}
                  diceRollResult={context.diceRollResult.bonusImmunityDice.odp9}
                  clicked={context.isClicked.bonusImmunityDice.odp9}
                  disabled={context.isClicked.bonusImmunityDice.odp9}
                  path={["bonusImmunityDice", "odp9"]}
                  toggleClick={context.toggleClick}
                  updateDiceRollResult={context.updateDiceRollResult}
                  resolveDiceRoll={context.calculateStat1}
                  className={context.btnStyle2}
                />
              ) : (
                ""
              )}
            </td>
            <td className="text-center">
              {contributionŻYW * 2 +
                contributionSF +
                context.diceRollResult.bonusImmunityDice.BFiz +
                immunityProf[8].immunityStat +
                context.raceData.immunity.Odp9 +
                context.diceRollResult.bonusImmunityDice.odp9}
            </td>
          </tr>
          <tr>
            <td>
              odporność nr10: polimorfia i petryfikacja {"(skamienienie)"}
            </td>
            <td>
              {contributionŻYW * 2 +
                contributionSF +
                context.diceRollResult.bonusImmunityDice.BFiz}
            </td>
            <td className="text-center">-</td>
            <td>{context.raceData.immunity.Odp10}</td>
            <td className="text-center">
              {context.firstProfessionData.stats.Odp10}
            </td>
            <td className="text-center">
              {context.secondProfessionData.stats.Odp10}
            </td>
            <td className="text-center">
              {context.firstProfessionData.stats.k10_Odp10 ||
              context.secondProfessionData.stats.k10_Odp10 ? (
                <DiceButtonComponent
                  n={1}
                  k={10}
                  isPremium={true}
                  diceRollResult={
                    context.diceRollResult.bonusImmunityDice.odp10
                  }
                  clicked={context.isClicked.bonusImmunityDice.odp10}
                  disabled={context.isClicked.bonusImmunityDice.odp10}
                  path={["bonusImmunityDice", "odp10"]}
                  toggleClick={context.toggleClick}
                  updateDiceRollResult={context.updateDiceRollResult}
                  resolveDiceRoll={context.calculateStat1}
                  className={context.btnStyle2}
                />
              ) : (
                ""
              )}
            </td>
            <td className="text-center">
              {contributionŻYW * 2 +
                contributionSF +
                context.diceRollResult.bonusImmunityDice.BFiz +
                immunityProf[9].immunityStat +
                context.raceData.immunity.Odp10 +
                context.diceRollResult.bonusImmunityDice.odp10}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );

  return defaultViewImmunityCalculations;
};

export default ChapterContent_VIe_statsCalculations;
