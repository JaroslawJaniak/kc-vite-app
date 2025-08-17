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
      ChapterContent_VI_statsSelection
      <table className=" [&>*]:p-0 [&>*]:m-0 text-xxs md:text-xs">
        <thead>
          <tr>
            <th></th>
            <th>{context.race}</th>
            <th>k100/k50</th>
            {context.firstProfession ? (
              <>
                <th>{context.firstProfession}</th>
              </>
            ) : null}
            {context.secondProfession ? (
              <>
                <th>{context.secondProfession}</th>
              </>
            ) : null}

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
            <td>{context.profStats.ŻYW}</td>

            <td>{context.secondProfStats.ŻYW}</td>
            <td>
              {context.profStats.k10_ŻYW || context.secondProfStats.k10_ŻYW ? (
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
                (context.profStats.ŻYW > context.secondProfStats.ŻYW
                  ? context.profStats.ŻYW
                  : context.secondProfStats.ŻYW)}
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
                mainKey={"baseStatsDice"}
                subKey={"SF"}
                toggleClick={context.toggleClick}
                onDiceRoll={k100RollResultSF}
                className={btnStyle}
              />
            </td>

            <td>{context.profStats.SF}</td>

            <td>{context.secondProfStats.SF}</td>
            <td>
              {context.profStats.k10_SF || context.secondProfStats.k10_SF ? (
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
                (context.profStats.SF > context.secondProfStats.SF
                  ? context.profStats.SF
                  : context.secondProfStats.SF)}
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
            </td>
            <td>{context.profStats.ZR}</td>

            <td>{context.secondProfStats.ZR}</td>
            <td>
              {context.profStats.k10_ZR || context.secondProfStats.k10_ZR ? (
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
                (context.profStats.ZR > context.secondProfStats.ZR
                  ? context.profStats.ZR
                  : context.secondProfStats.ZR)}
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
            <td>{context.profStats.SZ}</td>

            <td>{context.secondProfStats.SZ}</td>
            <td>
              {context.profStats.k10_SZ || context.secondProfStats.k10_SZ ? (
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
                (context.profStats.SZ > context.secondProfStats.SZ
                  ? context.profStats.SZ
                  : context.secondProfStats.SZ)}
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
            <td>{context.profStats.INT}</td>

            <td>{context.secondProfStats.INT}</td>
            <td>
              {context.profStats.k10_INT || context.secondProfStats.k10_INT ? (
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
                (context.profStats.INT > context.secondProfStats.INT
                  ? context.profStats.INT
                  : context.secondProfStats.INT)}
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
            <td>{context.profStats.MD}</td>

            <td>{context.secondProfStats.MD}</td>
            <td>
              {context.profStats.k10_MD || context.secondProfStats.k10_MD ? (
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
                (context.profStats.MD > context.secondProfStats.MD
                  ? context.profStats.MD
                  : context.secondProfStats.MD)}
            </td>
          </tr>
          <tr>
            <td>
              <b>UM</b>
            </td>
            <td>
              {context.race !== "Ludzie" ? (
                context.baseRaceStats.UM
              ) : (
                <DiceButtonComponent
                  n={1}
                  k={100}
                  k100Result={"k100"}
                  clicked
                  handleStateChange
                  onDiceRoll
                  className={btnStyle}
                />
              )}
            </td>
            <td>
              {context.race === "Ludzie" ? (
                "-"
              ) : (
                <DiceButtonComponent
                  n={1}
                  k={50}
                  k100Result={"k50"}
                  clicked
                  handleStateChange
                  onDiceRoll
                  className={btnStyle}
                />
              )}
            </td>
            <td>{context.profStats.UM}</td>

            <td>{context.secondProfStats.UM}</td>
            <td>
              {context.profStats.k10_UM || context.secondProfStats.k10_UM ? (
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
                (context.profStats.UM > context.secondProfStats.UM
                  ? context.profStats.UM
                  : context.secondProfStats.UM)}
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
            <td>{context.profStats.CH}</td>

            <td>{context.secondProfStats.CH}</td>
            <td>
              {context.profStats.k10_CH || context.secondProfStats.k10_CH ? (
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
                (context.profStats.CH > context.secondProfStats.CH
                  ? context.profStats.CH
                  : context.secondProfStats.CH)}
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
            <td>{context.profStats.PR}</td>

            <td>{context.secondProfStats.PR}</td>
            <td>
              {context.profStats.k10_PR || context.secondProfStats.k10_PR ? (
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
                (context.profStats.PR > context.secondProfStats.PR
                  ? context.profStats.PR
                  : context.secondProfStats.PR)}
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
            </td>
            <td>{context.profStats.WI}</td>

            <td>{context.secondProfStats.WI}</td>
            <td>
              {context.profStats.k10_WI || context.secondProfStats.k10_WI ? (
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
                (context.profStats.WI > context.secondProfStats.WI
                  ? context.profStats.WI
                  : context.secondProfStats.WI)}
            </td>
          </tr>
          <tr>
            <td>
              <b>ZW</b>
            </td>
            <td>
              {" "}
              <DiceButtonComponent
                n={1}
                k={5}
                k100Result={"k5+"}
                isPremium
                clicked
                handleStateChange
                onDiceRoll
                className={btnStyle}
              />
            </td>

            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>{context.baseRaceStats.ZW + context.profStats.ZW}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
