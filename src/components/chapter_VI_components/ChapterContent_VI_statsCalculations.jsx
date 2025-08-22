import React, { useEffect, useContext, useState } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import DiceButtonComponent from "../utils/buttons/kDice/DiceButtonComponent";

export const ChapterContent_VI_statsCalculations = () => {
  const context = useContext(CharacterStatsContext);
  const btnStyle =
    "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300  rounded text-xxs md:text-xs p-0.5 md:p-2  mb-2 w-8 md:w-12 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700";

  useEffect(() => {
    context.filterBaseRaceStatsByRaceName();
    context.filterProfStatsByFirstProf();
    context.filterProfStatsBySecondProf();

    return () => {};
  }, []);

  return (
    <div>
      <table className=" w-full text-xxs md:text-xs dark:text-gray-400 [&_*]:border-hidden bg-transparent [&_*]:text-center">
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
          <tr>
            <td>
              <b>ŻYW</b>
            </td>
            <td>{context.baseRaceStats.ŻYW}</td>
            <td>-</td>
            <td>{context.firstProfessionData.stats.ŻYW}</td>

            <td>{context.secondProfessionData.stats.ŻYW}</td>
            <td>
              {context.firstProfessionData.stats.k10_ŻYW ||
              context.secondProfessionData.stats.k10_ŻYW ? (
                <DiceButtonComponent
                  n={1}
                  k={10}
                  isPremium={true}
                  diceRollResult={context.diceRollResult.bonusBaseStatsDice.ŻYW}
                  clicked={context.isClicked.bonusBaseStatsDice.ŻYW}
                  disabled={context.isClicked.bonusBaseStatsDice.ŻYW}
                  path={["bonusBaseStatsDice", "ŻYW"]}
                  toggleClick={context.toggleClick}
                  updateDiceRollResult={context.updateDiceRollResult}
                  resolveDiceRoll={context.calculateStat1}
                  className={btnStyle}
                />
              ) : (
                ""
              )}
            </td>
            <td>
              {" "}
              {context.baseRaceStats.ŻYW +
                context.diceRollResult.baseStatsDice.ŻYW +
                Math.max(
                  context.firstProfessionData.stats.ŻYW,
                  context.secondProfessionData.stats.ŻYW
                ) +
                context.diceRollResult.bonusBaseStatsDice.ŻYW}
            </td>
          </tr>
          <tr>
            <td>
              <b>SF</b>
            </td>
            <td>{context.baseRaceStats.SF}</td>
            <td>
              <DiceButtonComponent
                n={1}
                k={100}
                diceRollResult={context.diceRollResult.baseStatsDice.SF.result1}
                clicked={context.isClicked.baseStatsDice.SF.result1}
                disabled={context.isClicked.baseStatsDice.SF.result1}
                path={["baseStatsDice", "SF", "result1"]}
                toggleClick={context.toggleClick}
                updateDiceRollResult={context.updateDiceRollResult}
                resolveDiceRoll={context.calculateStat2}
                className={btnStyle}
              />{" "}
              {["ŻOŁNIERSKA", "RYCERSKA"].includes(
                context.firstProfessionData.castName
              ) ||
              ["ŻOŁNIERSKA", "RYCERSKA"].includes(
                context.secondProfessionData.castName
              ) ? (
                <DiceButtonComponent
                  n={1}
                  k={100}
                  diceRollResult={
                    context.diceRollResult.baseStatsDice.SF.result2
                  }
                  clicked={context.isClicked.baseStatsDice.SF.result2}
                  disabled={context.isClicked.baseStatsDice.SF.result2}
                  path={["baseStatsDice", "SF", "result2"]}
                  toggleClick={context.toggleClick}
                  updateDiceRollResult={context.updateDiceRollResult}
                  resolveDiceRoll={context.calculateStat2}
                  className={btnStyle}
                />
              ) : (
                ""
              )}
            </td>

            <td>{context.firstProfessionData.stats.SF}</td>

            <td>{context.secondProfessionData.stats.SF}</td>
            <td>
              {context.firstProfessionData.stats.k10_SF ||
              context.secondProfessionData.stats.k10_SF ? (
                <DiceButtonComponent
                  n={1}
                  k={10}
                  isPremium={true}
                  diceRollResult={context.diceRollResult.bonusBaseStatsDice.SF}
                  clicked={context.isClicked.bonusBaseStatsDice.SF}
                  disabled={context.isClicked.bonusBaseStatsDice.SF}
                  path={["bonusBaseStatsDice", "SF"]}
                  toggleClick={context.toggleClick}
                  updateDiceRollResult={context.updateDiceRollResult}
                  resolveDiceRoll={context.calculateStat2}
                  className={btnStyle}
                />
              ) : (
                ""
              )}
            </td>
            <td>
              {context.baseRaceStats.SF +
                Math.max(
                  context.diceRollResult.baseStatsDice.SF.result1,
                  context.diceRollResult.baseStatsDice.SF.result2
                ) +
                Math.max(
                  context.firstProfessionData.stats.SF,
                  context.secondProfessionData.stats.SF
                ) +
                context.diceRollResult.bonusBaseStatsDice.SF}
            </td>
          </tr>
          <tr>
            <td>
              <b>ZR</b>
            </td>
            <td>{context.baseRaceStats.ZR}</td>
            <td>
              <DiceButtonComponent
                n={1}
                k={50}
                diceRollResult={context.diceRollResult.baseStatsDice.ZR.result1}
                clicked={context.isClicked.baseStatsDice.ZR.result1}
                disabled={context.isClicked.baseStatsDice.ZR.result1}
                path={["baseStatsDice", "ZR", "result1"]}
                toggleClick={context.toggleClick}
                updateDiceRollResult={context.updateDiceRollResult}
                resolveDiceRoll={context.calculateStat2}
                className={btnStyle}
              />{" "}
              {["ZŁODZIEJSKA"].includes(context.firstProfessionData.castName) ||
              ["ZŁODZIEJSKA"].includes(
                context.secondProfessionData.castName
              ) ? (
                <DiceButtonComponent
                  n={1}
                  k={50}
                  diceRollResult={
                    context.diceRollResult.baseStatsDice.ZR.result2
                  }
                  clicked={context.isClicked.baseStatsDice.ZR.result2}
                  disabled={context.isClicked.baseStatsDice.ZR.result2}
                  path={["baseStatsDice", "ZR", "result2"]}
                  toggleClick={context.toggleClick}
                  updateDiceRollResult={context.updateDiceRollResult}
                  resolveDiceRoll={context.calculateStat2}
                  className={btnStyle}
                />
              ) : (
                ""
              )}
            </td>
            <td>{context.firstProfessionData.stats.ZR}</td>

            <td>{context.secondProfessionData.stats.ZR}</td>
            <td>
              {context.firstProfessionData.stats.k10_ZR ||
              context.secondProfessionData.stats.k10_ZR ? (
                <DiceButtonComponent
                  n={1}
                  k={10}
                  isPremium={true}
                  diceRollResult={context.diceRollResult.bonusBaseStatsDice.ZR}
                  clicked={context.isClicked.bonusBaseStatsDice.ZR}
                  disabled={context.isClicked.bonusBaseStatsDice.ZR}
                  path={["bonusBaseStatsDice", "ZR"]}
                  toggleClick={context.toggleClick}
                  updateDiceRollResult={context.updateDiceRollResult}
                  resolveDiceRoll={context.calculateStat2}
                  className={btnStyle}
                />
              ) : (
                ""
              )}
            </td>
            <td>
              {context.baseRaceStats.ZR +
                Math.max(
                  context.diceRollResult.baseStatsDice.ZR.result1,
                  context.diceRollResult.baseStatsDice.ZR.result2
                ) +
                Math.max(
                  context.firstProfessionData.stats.ZR,
                  context.secondProfessionData.stats.ZR
                ) +
                context.diceRollResult.bonusBaseStatsDice.ZR}
            </td>
          </tr>
          <tr>
            <td>
              <b>SZ</b>
            </td>
            <td>{context.baseRaceStats.SZ}</td>
            <td>
              <DiceButtonComponent
                n={1}
                k={50}
                diceRollResult={context.diceRollResult.baseStatsDice.SZ}
                clicked={context.isClicked.baseStatsDice.SZ}
                disabled={context.isClicked.baseStatsDice.SZ}
                path={["baseStatsDice", "SZ"]}
                toggleClick={context.toggleClick}
                updateDiceRollResult={context.updateDiceRollResult}
                resolveDiceRoll={context.calculateStat1}
                className={btnStyle}
              />
            </td>
            <td>{context.firstProfessionData.stats.SZ}</td>

            <td>{context.secondProfessionData.stats.SZ}</td>
            <td>
              {context.firstProfessionData.stats.k10_SZ ||
              context.secondProfessionData.stats.k10_SZ ? (
                <DiceButtonComponent
                  n={1}
                  k={10}
                  isPremium={true}
                  diceRollResult={context.diceRollResult.bonusBaseStatsDice.SZ}
                  clicked={context.isClicked.bonusBaseStatsDice.SZ}
                  disabled={context.isClicked.bonusBaseStatsDice.SZ}
                  path={["bonusBaseStatsDice", "SZ"]}
                  toggleClick={context.toggleClick}
                  updateDiceRollResult={context.updateDiceRollResult}
                  resolveDiceRoll={context.calculateStat1}
                  className={btnStyle}
                />
              ) : (
                ""
              )}
            </td>
            <td>
              {context.baseRaceStats.SZ +
                context.diceRollResult.baseStatsDice.SZ +
                Math.max(
                  context.firstProfessionData.stats.SZ,
                  context.secondProfessionData.stats.SZ
                ) +
                context.diceRollResult.bonusBaseStatsDice.SZ}
            </td>
          </tr>
          <tr>
            <td>
              <b>INT</b>
            </td>
            <td>{context.baseRaceStats.INT}</td>
            <td>
              <DiceButtonComponent
                n={1}
                k={50}
                diceRollResult={context.diceRollResult.baseStatsDice.INT}
                clicked={context.isClicked.baseStatsDice.INT}
                disabled={context.isClicked.baseStatsDice.INT}
                path={["baseStatsDice", "INT"]}
                toggleClick={context.toggleClick}
                updateDiceRollResult={context.updateDiceRollResult}
                resolveDiceRoll={context.calculateStat1}
                className={btnStyle}
              />
            </td>
            <td>{context.firstProfessionData.stats.INT}</td>

            <td>{context.secondProfessionData.stats.INT}</td>
            <td>
              {context.firstProfessionData.stats.k10_INT ||
              context.secondProfessionData.stats.k10_INT ? (
                <DiceButtonComponent
                  n={1}
                  k={10}
                  isPremium={true}
                  diceRollResult={context.diceRollResult.bonusBaseStatsDice.INT}
                  clicked={context.isClicked.bonusBaseStatsDice.INT}
                  disabled={context.isClicked.bonusBaseStatsDice.INT}
                  path={["bonusBaseStatsDice", "INT"]}
                  toggleClick={context.toggleClick}
                  updateDiceRollResult={context.updateDiceRollResult}
                  resolveDiceRoll={context.calculateStat1}
                  className={btnStyle}
                />
              ) : (
                ""
              )}
            </td>
            <td>
              {context.baseRaceStats.INT +
                context.diceRollResult.baseStatsDice.INT +
                Math.max(
                  context.firstProfessionData.stats.INT,
                  context.secondProfessionData.stats.INT
                ) +
                context.diceRollResult.bonusBaseStatsDice.INT}
            </td>
          </tr>
          <tr>
            <td>
              <b>MD</b>
            </td>
            <td>{context.baseRaceStats.MD}</td>
            <td>
              <DiceButtonComponent
                n={1}
                k={50}
                diceRollResult={context.diceRollResult.baseStatsDice.MD}
                clicked={context.isClicked.baseStatsDice.MD}
                disabled={context.isClicked.baseStatsDice.MD}
                path={["baseStatsDice", "MD"]}
                toggleClick={context.toggleClick}
                updateDiceRollResult={context.updateDiceRollResult}
                resolveDiceRoll={context.calculateStat1}
                className={btnStyle}
              />
            </td>
            <td>{context.firstProfessionData.stats.MD}</td>

            <td>{context.secondProfessionData.stats.MD}</td>
            <td>
              {context.firstProfessionData.stats.k10_MD ||
              context.secondProfessionData.stats.k10_MD ? (
                <DiceButtonComponent
                  n={1}
                  k={10}
                  isPremium={true}
                  diceRollResult={context.diceRollResult.bonusBaseStatsDice.MD}
                  clicked={context.isClicked.bonusBaseStatsDice.MD}
                  disabled={context.isClicked.bonusBaseStatsDice.MD}
                  path={["bonusBaseStatsDice", "MD"]}
                  toggleClick={context.toggleClick}
                  updateDiceRollResult={context.updateDiceRollResult}
                  resolveDiceRoll={context.calculateStat1}
                  className={btnStyle}
                />
              ) : (
                ""
              )}
            </td>
            <td>
              {context.baseRaceStats.MD +
                context.diceRollResult.baseStatsDice.MD +
                Math.max(
                  context.firstProfessionData.stats.MD,
                  context.secondProfessionData.stats.MD
                ) +
                context.diceRollResult.bonusBaseStatsDice.MD}
            </td>
          </tr>
          <tr>
            <td>
              <b>UM</b>
            </td>
            <td>
              {context.race !== "Ludzie" ? (
                context.baseRaceStats.UM
              ) : ["CZARODZIEJSKA"].includes(
                  context.firstProfessionData.castName
                ) ||
                ["CZARODZIEJSKA"].includes(
                  context.secondProfessionData.castName
                ) ? (
                <>
                  <DiceButtonComponent
                    n={1}
                    k={100}
                    diceRollResult={
                      context.diceRollResult.baseStatsDice.UM.result1
                    }
                    clicked={context.isClicked.baseStatsDice.UM.result1}
                    disabled={context.isClicked.baseStatsDice.UM.result1}
                    path={["baseStatsDice", "UM", "result1"]}
                    toggleClick={context.toggleClick}
                    updateDiceRollResult={context.updateDiceRollResult}
                    resolveDiceRoll={context.calculateStat2}
                    className={btnStyle}
                  />{" "}
                  <DiceButtonComponent
                    n={1}
                    k={100}
                    diceRollResult={
                      context.diceRollResult.baseStatsDice.UM.result2
                    }
                    clicked={context.isClicked.baseStatsDice.UM.result2}
                    disabled={context.isClicked.baseStatsDice.UM.result2}
                    path={["baseStatsDice", "UM", "result2"]}
                    toggleClick={context.toggleClick}
                    updateDiceRollResult={context.updateDiceRollResult}
                    resolveDiceRoll={context.calculateStat2}
                    className={btnStyle}
                  />
                </>
              ) : (
                <DiceButtonComponent
                  n={1}
                  k={100}
                  diceRollResult={
                    context.diceRollResult.baseStatsDice.UM.result1
                  }
                  clicked={context.isClicked.baseStatsDice.UM.result1}
                  disabled={context.isClicked.baseStatsDice.UM.result1}
                  path={["baseStatsDice", "UM", "result1"]}
                  toggleClick={context.toggleClick}
                  updateDiceRollResult={context.updateDiceRollResult}
                  resolveDiceRoll={context.calculateStat2}
                  className={btnStyle}
                />
              )}
            </td>
            <td>
              {context.race === "Ludzie" ? (
                "-"
              ) : ["CZARODZIEJSKA"].includes(
                  context.firstProfessionData.castName
                ) ||
                ["CZARODZIEJSKA"].includes(
                  context.secondProfessionData.castName
                ) ? (
                <>
                  <DiceButtonComponent
                    n={1}
                    k={50}
                    diceRollResult={
                      context.diceRollResult.baseStatsDice.UM.result1
                    }
                    clicked={context.isClicked.baseStatsDice.UM.result1}
                    disabled={context.isClicked.baseStatsDice.UM.result1}
                    path={["baseStatsDice", "UM", "result1"]}
                    toggleClick={context.toggleClick}
                    updateDiceRollResult={context.updateDiceRollResult}
                    resolveDiceRoll={context.calculateStat2}
                    className={btnStyle}
                  />{" "}
                  <DiceButtonComponent
                    n={1}
                    k={50}
                    diceRollResult={
                      context.diceRollResult.baseStatsDice.UM.result2
                    }
                    clicked={context.isClicked.baseStatsDice.UM.result2}
                    disabled={context.isClicked.baseStatsDice.UM.result2}
                    path={["baseStatsDice", "UM", "result2"]}
                    toggleClick={context.toggleClick}
                    updateDiceRollResult={context.updateDiceRollResult}
                    resolveDiceRoll={context.calculateStat2}
                    className={btnStyle}
                  />
                </>
              ) : (
                <DiceButtonComponent
                  n={1}
                  k={50}
                  diceRollResult={
                    context.diceRollResult.baseStatsDice.UM.result1
                  }
                  clicked={context.isClicked.baseStatsDice.UM.result1}
                  disabled={context.isClicked.baseStatsDice.UM.result1}
                  path={["baseStatsDice", "UM", "result1"]}
                  toggleClick={context.toggleClick}
                  updateDiceRollResult={context.updateDiceRollResult}
                  resolveDiceRoll={context.calculateStat2}
                  className={btnStyle}
                />
              )}
            </td>
            <td>{context.firstProfessionData.stats.UM}</td>

            <td>{context.secondProfessionData.stats.UM}</td>
            <td>
              {context.firstProfessionData.stats.k10_UM ||
              context.secondProfessionData.stats.k10_UM ? (
                <DiceButtonComponent
                  n={1}
                  k={10}
                  isPremium={true}
                  diceRollResult={context.diceRollResult.bonusBaseStatsDice.UM}
                  clicked={context.isClicked.bonusBaseStatsDice.UM}
                  disabled={context.isClicked.bonusBaseStatsDice.UM}
                  path={["bonusBaseStatsDice", "UM"]}
                  toggleClick={context.toggleClick}
                  updateDiceRollResult={context.updateDiceRollResult}
                  resolveDiceRoll={context.calculateStat2}
                  className={btnStyle}
                />
              ) : (
                ""
              )}
            </td>
            <td>
              {context.baseRaceStats.UM +
                Math.max(
                  context.diceRollResult.baseStatsDice.UM.result1,
                  context.diceRollResult.baseStatsDice.UM.result2
                ) +
                Math.max(
                  context.firstProfessionData.stats.UM,
                  context.secondProfessionData.stats.UM
                ) +
                context.diceRollResult.bonusBaseStatsDice.UM}
            </td>
          </tr>
          <tr>
            <td>
              <b>CH</b>
            </td>
            <td>{context.baseRaceStats.CH}</td>
            <td>
              <DiceButtonComponent
                n={1}
                k={50}
                diceRollResult={context.diceRollResult.baseStatsDice.CH}
                clicked={context.isClicked.baseStatsDice.CH}
                disabled={context.isClicked.baseStatsDice.CH}
                mainKey={"baseStatsDice"}
                subKey={"CH"}
                path={["baseStatsDice", "CH"]}
                toggleClick={context.toggleClick}
                updateDiceRollResult={context.updateDiceRollResult}
                resolveDiceRoll={context.calculateStat1}
                className={btnStyle}
              />
            </td>
            <td>{context.firstProfessionData.stats.CH}</td>

            <td>{context.secondProfessionData.stats.CH}</td>
            <td>
              {context.firstProfessionData.stats.k10_CH ||
              context.secondProfessionData.stats.k10_CH ? (
                <DiceButtonComponent
                  n={1}
                  k={10}
                  isPremium={true}
                  diceRollResult={context.diceRollResult.bonusBaseStatsDice.CH}
                  clicked={context.isClicked.bonusBaseStatsDice.CH}
                  disabled={context.isClicked.bonusBaseStatsDice.CH}
                  path={["bonusBaseStatsDice", "CH"]}
                  toggleClick={context.toggleClick}
                  updateDiceRollResult={context.updateDiceRollResult}
                  resolveDiceRoll={context.calculateStat1}
                  className={btnStyle}
                />
              ) : (
                ""
              )}
            </td>
            <td>
              {context.baseRaceStats.CH +
                context.diceRollResult.baseStatsDice.CH +
                Math.max(
                  context.firstProfessionData.stats.CH,
                  context.secondProfessionData.stats.CH
                ) +
                context.diceRollResult.bonusBaseStatsDice.CH}
            </td>
          </tr>
          <tr>
            <td>
              <b>PR</b>
            </td>
            <td>{context.baseRaceStats.PR}</td>
            <td>
              <DiceButtonComponent
                n={1}
                k={50}
                diceRollResult={context.diceRollResult.baseStatsDice.PR}
                clicked={context.isClicked.baseStatsDice.PR}
                disabled={context.isClicked.baseStatsDice.PR}
                path={["baseStatsDice", "PR"]}
                toggleClick={context.toggleClick}
                updateDiceRollResult={context.updateDiceRollResult}
                resolveDiceRoll={context.calculateStat1}
                className={btnStyle}
              />
            </td>
            <td>{context.firstProfessionData.stats.PR}</td>

            <td>{context.secondProfessionData.stats.PR}</td>
            <td>
              {context.firstProfessionData.stats.k10_PR ||
              context.secondProfessionData.stats.k10_PR ? (
                <DiceButtonComponent
                  n={1}
                  k={10}
                  isPremium={true}
                  diceRollResult={context.diceRollResult.bonusBaseStatsDice.PR}
                  clicked={context.isClicked.bonusBaseStatsDice.PR}
                  disabled={context.isClicked.bonusBaseStatsDice.PR}
                  mainKey={"bonusBaseStatsDice"}
                  subKey={"PR"}
                  path={["bonusBaseStatsDice", "PR"]}
                  toggleClick={context.toggleClick}
                  updateDiceRollResult={context.updateDiceRollResult}
                  resolveDiceRoll={context.calculateStat1}
                  className={btnStyle}
                />
              ) : (
                ""
              )}
            </td>
            <td>
              {context.baseRaceStats.PR +
                context.diceRollResult.baseStatsDice.PR +
                Math.max(
                  context.firstProfessionData.stats.PR,
                  context.secondProfessionData.stats.PR
                ) +
                context.diceRollResult.bonusBaseStatsDice.PR}
            </td>
          </tr>
          <tr>
            <td>
              <b>WI</b>
            </td>
            <td>{context.baseRaceStats.WI}</td>
            <td>
              <DiceButtonComponent
                n={1}
                k={50}
                diceRollResult={context.diceRollResult.baseStatsDice.WI.result1}
                clicked={context.isClicked.baseStatsDice.WI.result1}
                disabled={context.isClicked.baseStatsDice.WI.result1}
                path={["baseStatsDice", "WI", "result1"]}
                toggleClick={context.toggleClick}
                updateDiceRollResult={context.updateDiceRollResult}
                resolveDiceRoll={context.calculateStat2}
                className={btnStyle}
              />{" "}
              {["KAPŁAŃSKA"].includes(context.firstProfessionData.castName) ||
              ["KAPŁAŃSKA"].includes(context.secondProfessionData.castName) ? (
                <DiceButtonComponent
                  n={1}
                  k={50}
                  diceRollResult={
                    context.diceRollResult.baseStatsDice.WI.result2
                  }
                  clicked={context.isClicked.baseStatsDice.WI.result2}
                  disabled={context.isClicked.baseStatsDice.WI.result2}
                  path={["baseStatsDice", "WI", "result2"]}
                  toggleClick={context.toggleClick}
                  updateDiceRollResult={context.updateDiceRollResult}
                  resolveDiceRoll={context.calculateStat2}
                  className={btnStyle}
                />
              ) : (
                ""
              )}
            </td>
            <td>{context.firstProfessionData.stats.WI}</td>

            <td>{context.secondProfessionData.stats.WI}</td>
            <td>
              {context.firstProfessionData.stats.k10_WI ||
              context.secondProfessionData.stats.k10_WI ? (
                <DiceButtonComponent
                  n={1}
                  k={10}
                  isPremium={true}
                  diceRollResult={context.diceRollResult.bonusBaseStatsDice.WI}
                  clicked={context.isClicked.bonusBaseStatsDice.WI}
                  disabled={context.isClicked.bonusBaseStatsDice.WI}
                  path={["bonusBaseStatsDice", "WI"]}
                  toggleClick={context.toggleClick}
                  updateDiceRollResult={context.updateDiceRollResult}
                  resolveDiceRoll={context.calculateStat2}
                  className={btnStyle}
                />
              ) : (
                ""
              )}
            </td>
            <td>
              {context.baseRaceStats.WI +
                Math.max(
                  context.diceRollResult.baseStatsDice.WI.result1,
                  context.diceRollResult.baseStatsDice.WI.result2
                ) +
                Math.max(
                  context.firstProfessionData.stats.WI,
                  context.secondProfessionData.stats.WI
                ) +
                context.diceRollResult.bonusBaseStatsDice.WI}
            </td>
          </tr>
          <tr>
            <td>
              <b>ZW</b>
            </td>
            <td>
              {["KAPŁAŃSKA"].includes(context.firstProfessionData.castName) ||
              ["KAPŁAŃSKA"].includes(context.secondProfessionData.castName) ? (
                <>
                  <DiceButtonComponent
                    n={1}
                    k={10}
                    diceRollResult={
                      context.diceRollResult.baseStatsDice.ZW.result1
                    }
                    clicked={context.isClicked.baseStatsDice.ZW.result1}
                    disabled={context.isClicked.baseStatsDice.ZW.result1}
                    mainKey={"baseStatsDice"}
                    subKey={"ZW"}
                    path={["baseStatsDice", "ZW", "result1"]}
                    toggleClick={context.toggleClick}
                    updateDiceRollResult={context.updateDiceRollResult}
                    resolveDiceRoll={context.calculateStat2}
                    className={btnStyle}
                  />{" "}
                  <DiceButtonComponent
                    n={1}
                    k={10}
                    diceRollResult={
                      context.diceRollResult.baseStatsDice.ZW.result2
                    }
                    clicked={context.isClicked.baseStatsDice.ZW.result2}
                    disabled={context.isClicked.baseStatsDice.ZW.result2}
                    path={["baseStatsDice", "ZW", "result2"]}
                    toggleClick={context.toggleClick}
                    updateDiceRollResult={context.updateDiceRollResult}
                    resolveDiceRoll={context.calculateStat2}
                    className={btnStyle}
                  />
                </>
              ) : (
                <DiceButtonComponent
                  n={1}
                  k={5}
                  diceRollResult={
                    context.diceRollResult.baseStatsDice.ZW.result1
                  }
                  clicked={context.isClicked.baseStatsDice.ZW.result1}
                  disabled={context.isClicked.baseStatsDice.ZW.result1}
                  path={["baseStatsDice", "ZW", "result1"]}
                  toggleClick={context.toggleClick}
                  updateDiceRollResult={context.updateDiceRollResult}
                  resolveDiceRoll={context.calculateStat2}
                  className={btnStyle}
                />
              )}
            </td>

            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>
              {context.baseRaceStats.ZW +
                context.firstProfessionData.stats.ZW +
                Math.max(
                  context.diceRollResult.baseStatsDice.ZW.result1,
                  context.diceRollResult.baseStatsDice.ZW.result2
                )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
