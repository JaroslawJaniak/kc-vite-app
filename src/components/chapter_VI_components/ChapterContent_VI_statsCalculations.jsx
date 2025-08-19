import React, { useEffect, useContext, useState } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import DiceButtonComponent from "../utils/buttons/kDice/DiceButtonComponent";

export const ChapterContent_VI_statsCalculations = () => {
  const context = useContext(CharacterStatsContext);
  const btnStyle =
    "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300  rounded text-xxs md:text-xs p-0.5 md:p-2  mb-2 w-8 md:w-12 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700";

  const k100RollResultSF = (k) => {
    console.log("k100RollResultSF", k);
    if (k !== 0) {
      console.log("k100RollResultSF", k);
    }
  };

  useEffect(() => {
    context.filterBaseRaceStatsByRaceName();
    context.filterProfStatsByFirstProf();
    context.filterProfStatsBySecondProf();

    return () => {};
  }, []);

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

      {/* <table className=" [&>*]:p-0 [&>*]:m-0 text-xxs md:text-xs "> */}
      <table className=" w-full text-xxs md:text-xs dark:text-gray-400 [&_*]:border-hidden bg-transparent [&_*]:text-center">
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
            {/* {context.firstProfession ? (
              <>
                <th>{context.firstProfession}</th>
              </>
            ) : null}
            {context.secondProfession ? (
              <>
                <th>{context.secondProfession}</th>
              </>
            ) : null} */}

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
                  k100Result={"k10+"}
                  isPremium
                  clicked
                  handleStateChange
                  onDiceRoll
                  className={btnStyle}
                />
              ) : (
                ""
              )}
            </td>
            <td>
              {context.baseRaceStats.ŻYW +
                Math.max(
                  context.firstProfessionData.stats.ŻYW,
                  context.secondProfessionData.stats.ŻYW
                )}
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
                k100Result={"k100"}
                clicked={context.isClicked.baseStatsDice.SF}
                disabled={context.isClicked.baseStatsDice.SF}
                mainKey={"baseStatsDice"}
                subKey={"SF"}
                toggleClick={context.toggleClick}
                onDiceRoll={k100RollResultSF}
                className={btnStyle}
              />
              {["ŻOŁNIERSKA", "RYCERSKA"].includes(
                context.firstProfessionData.castName
              ) ||
              ["ŻOŁNIERSKA", "RYCERSKA"].includes(
                context.secondProfessionData.castName
              ) ? (
                <DiceButtonComponent
                  n={1}
                  k={100}
                  k100Result={"k100"}
                  clicked={context.isClicked.baseStatsDice.SF}
                  disabled={context.isClicked.baseStatsDice.SF}
                  mainKey={"baseStatsDice"}
                  subKey={"SF"}
                  toggleClick={context.toggleClick}
                  onDiceRoll={k100RollResultSF}
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
                  k100Result={"k10+"}
                  isPremium
                  clicked
                  handleStateChange
                  onDiceRoll
                  className={btnStyle}
                />
              ) : (
                ""
              )}
            </td>
            <td>
              {context.baseRaceStats.SF +
                Math.max(
                  context.firstProfessionData.stats.SF,
                  context.secondProfessionData.stats.SF
                )}
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
                k100Result={"k50"}
                clicked
                handleStateChange
                onDiceRoll
                className={btnStyle}
              />
              {["ZŁODZIEJSKA"].includes(context.firstProfessionData.castName) ||
              ["ZŁODZIEJSKA"].includes(
                context.secondProfessionData.castName
              ) ? (
                <DiceButtonComponent
                  n={1}
                  k={50}
                  k100Result={"k50"}
                  clicked={context.isClicked.baseStatsDice.ZR}
                  disabled={context.isClicked.baseStatsDice.ZR}
                  mainKey={"baseStatsDice"}
                  subKey={"ZR"}
                  toggleClick={context.toggleClick}
                  onDiceRoll={k100RollResultSF}
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
                  k100Result={"k10+"}
                  isPremium
                  clicked
                  handleStateChange
                  onDiceRoll
                  className={btnStyle}
                />
              ) : (
                ""
              )}
            </td>
            <td>
              {context.baseRaceStats.ZR +
                Math.max(
                  context.firstProfessionData.stats.ZR,
                  context.secondProfessionData.stats.ZR
                )}
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
                k100Result={"k50"}
                clicked
                handleStateChange
                onDiceRoll
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
                  k100Result={"k10+"}
                  isPremium
                  clicked
                  handleStateChange
                  onDiceRoll
                  className={btnStyle}
                />
              ) : (
                ""
              )}
            </td>
            <td>
              {context.baseRaceStats.SZ +
                Math.max(
                  context.firstProfessionData.stats.SZ,
                  context.secondProfessionData.stats.SZ
                )}
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
                k100Result={"k50"}
                clicked
                handleStateChange
                onDiceRoll
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
                  k100Result={"k10+"}
                  isPremium
                  clicked
                  handleStateChange
                  onDiceRoll
                  className={btnStyle}
                />
              ) : (
                ""
              )}
            </td>
            <td>
              {context.baseRaceStats.INT +
                Math.max(
                  context.firstProfessionData.stats.INT,
                  context.secondProfessionData.stats.INT
                )}
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
                k100Result={"k50"}
                clicked
                handleStateChange
                onDiceRoll
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
                  k100Result={"k10+"}
                  isPremium
                  clicked
                  handleStateChange
                  onDiceRoll
                  className={btnStyle}
                />
              ) : (
                ""
              )}
            </td>
            <td>
              {context.baseRaceStats.MD +
                Math.max(
                  context.firstProfessionData.stats.MD,
                  context.secondProfessionData.stats.MD
                )}
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
                    k100Result={"k100"}
                    clicked={context.isClicked.baseStatsDice.UM}
                    disabled={context.isClicked.baseStatsDice.UM}
                    mainKey={"baseStatsDice"}
                    subKey={"UM"}
                    toggleClick={context.toggleClick}
                    onDiceRoll={k100RollResultSF}
                    className={btnStyle}
                  />{" "}
                  <DiceButtonComponent
                    n={1}
                    k={100}
                    k100Result={"k100"}
                    clicked={context.isClicked.baseStatsDice.UM}
                    disabled={context.isClicked.baseStatsDice.UM}
                    mainKey={"baseStatsDice"}
                    subKey={"UM"}
                    toggleClick={context.toggleClick}
                    onDiceRoll={k100RollResultSF}
                    className={btnStyle}
                  />
                </>
              ) : (
                <DiceButtonComponent
                  n={1}
                  k={100}
                  k100Result={"k100"}
                  clicked={context.isClicked.baseStatsDice.UM}
                  disabled={context.isClicked.baseStatsDice.UM}
                  mainKey={"baseStatsDice"}
                  subKey={"UM"}
                  toggleClick={context.toggleClick}
                  onDiceRoll={k100RollResultSF}
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
                    k100Result={"k50"}
                    clicked={context.isClicked.baseStatsDice.UM}
                    disabled={context.isClicked.baseStatsDice.UM}
                    mainKey={"baseStatsDice"}
                    subKey={"UM"}
                    toggleClick={context.toggleClick}
                    onDiceRoll={k100RollResultSF}
                    className={btnStyle}
                  />
                  <DiceButtonComponent
                    n={1}
                    k={50}
                    k100Result={"k50"}
                    clicked={context.isClicked.baseStatsDice.UM}
                    disabled={context.isClicked.baseStatsDice.UM}
                    mainKey={"baseStatsDice"}
                    subKey={"UM"}
                    toggleClick={context.toggleClick}
                    onDiceRoll={k100RollResultSF}
                    className={btnStyle}
                  />
                </>
              ) : (
                <DiceButtonComponent
                  n={1}
                  k={50}
                  k100Result={"k50"}
                  clicked={context.isClicked.baseStatsDice.UM}
                  disabled={context.isClicked.baseStatsDice.UM}
                  mainKey={"baseStatsDice"}
                  subKey={"ZR"}
                  toggleClick={context.toggleClick}
                  onDiceRoll={k100RollResultSF}
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
                  k100Result={"k10+"}
                  isPremium
                  clicked
                  handleStateChange
                  onDiceRoll
                  className={btnStyle}
                />
              ) : (
                ""
              )}
            </td>
            <td>
              {context.baseRaceStats.UM +
                Math.max(
                  context.firstProfessionData.stats.UM,
                  context.secondProfessionData.stats.UM
                )}
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
                k100Result={"k50"}
                clicked
                handleStateChange
                onDiceRoll
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
                  k100Result={"k10+"}
                  isPremium
                  clicked
                  handleStateChange
                  onDiceRoll
                  className={btnStyle}
                />
              ) : (
                ""
              )}
            </td>
            <td>
              {context.baseRaceStats.CH +
                Math.max(
                  context.firstProfessionData.stats.CH,
                  context.secondProfessionData.stats.CH
                )}
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
                k100Result={"k50"}
                clicked
                handleStateChange
                onDiceRoll
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
                  k100Result={"k10+"}
                  isPremium
                  clicked
                  handleStateChange
                  onDiceRoll
                  className={btnStyle}
                />
              ) : (
                ""
              )}
            </td>
            <td>
              {context.baseRaceStats.PR +
                Math.max(
                  context.firstProfessionData.stats.PR,
                  context.secondProfessionData.stats.PR
                )}
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
                k100Result={"k50"}
                clicked
                handleStateChange
                onDiceRoll
                className={btnStyle}
              />
              {["KAPŁAŃSKA"].includes(context.firstProfessionData.castName) ||
              ["KAPŁAŃSKA"].includes(context.secondProfessionData.castName) ? (
                <DiceButtonComponent
                  n={1}
                  k={50}
                  k100Result={"k50"}
                  clicked={context.isClicked.baseStatsDice.WI}
                  disabled={context.isClicked.baseStatsDice.WI}
                  mainKey={"baseStatsDice"}
                  subKey={"WI"}
                  toggleClick={context.toggleClick}
                  onDiceRoll={k100RollResultSF}
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
                  k100Result={"k10+"}
                  isPremium
                  clicked
                  handleStateChange
                  onDiceRoll
                  className={btnStyle}
                />
              ) : (
                ""
              )}
            </td>
            <td>
              {context.baseRaceStats.WI +
                Math.max(
                  context.firstProfessionData.stats.WI,
                  context.secondProfessionData.stats.WI
                )}
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
                    k100Result={"k10"}
                    clicked={context.isClicked.baseStatsDice.ZW}
                    disabled={context.isClicked.baseStatsDice.ZW}
                    mainKey={"baseStatsDice"}
                    subKey={"ZW"}
                    toggleClick={context.toggleClick}
                    onDiceRoll={k100RollResultSF}
                    className={btnStyle}
                  />
                  <DiceButtonComponent
                    n={1}
                    k={10}
                    k100Result={"k10"}
                    clicked={context.isClicked.baseStatsDice.ZW}
                    disabled={context.isClicked.baseStatsDice.ZW}
                    mainKey={"baseStatsDice"}
                    subKey={"ZW"}
                    toggleClick={context.toggleClick}
                    onDiceRoll={k100RollResultSF}
                    className={btnStyle}
                  />
                </>
              ) : (
                <DiceButtonComponent
                  n={1}
                  k={5}
                  k100Result={"k5"}
                  clicked={context.isClicked.baseStatsDice.ZW}
                  disabled={context.isClicked.baseStatsDice.ZW}
                  mainKey={"baseStatsDice"}
                  subKey={"ZW"}
                  toggleClick={context.toggleClick}
                  onDiceRoll={k100RollResultSF}
                  className={btnStyle}
                />
              )}

             
            </td>

            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>
              {context.baseRaceStats.ZW + context.firstProfessionData.stats.ZW}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
