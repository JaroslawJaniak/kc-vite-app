import React, { useEffect, useContext, useState } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import DiceButtonComponent from "../utils/buttons/kDice/DiceButtonComponent";

export const ChapterContent_VI_statsSelection = () => {
  const context = useContext(CharacterStatsContext);

  useEffect(() => {
    context.filterBaseRaceStatsByRaceName();
    context.filterProfStatsByFirstProf();

    //console.log(context.baseRaceStats.ŻYW)

    return () => {};
  }, []);

  return (
    <div>
      ChapterContent_VI_statsSelection
      <table>
        <thead>
          <tr>
            <th></th>
            <th>{context.race}</th>
            <th>k100/k50</th>
            <th>profStats</th>
            <th>k10+</th>
            <th>sum</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>ŻYW</td>
            <td>{context.baseRaceStats.ŻYW}</td>
            <td>-</td>
            <td>{context.profStats.ŻYW}</td>
            <td>
              {" "}
              {context.profStats.k10_ŻYW ? (
                <DiceButtonComponent
                  n={1}
                  k={10}
                  k100Result={"k10+"}
                  isPremium
                  clicked
                  handleStateChange
                  onDiceRoll
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5  mb-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                />
              ) : (
                ""
              )}
            </td>
            <td>{context.baseRaceStats.ŻYW + context.profStats.ŻYW}</td>
          </tr>
          <tr>
            <td>SF</td>
            <td>{context.baseRaceStats.SF}</td>
            <td>
              <DiceButtonComponent
                n={1}
                k={100}
                k100Result={"k100"}
                clicked
                handleStateChange
                onDiceRoll
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5  mb-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              />
            </td>
            <td>{context.profStats.SF}</td>
            <td>
              {context.profStats.k10_SF ? (
                <DiceButtonComponent
                  n={1}
                  k={10}
                  k100Result={"k10+"}
                  isPremium
                  clicked
                  handleStateChange
                  onDiceRoll
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5  mb-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                />
              ) : (
                ""
              )}
            </td>
            <td>{context.baseRaceStats.SF + context.profStats.SF}</td>
          </tr>
          <tr>
            <td>ZR</td>
            <td>{context.baseRaceStats.ZR}</td>
            <td>
              <DiceButtonComponent
                n={1}
                k={50}
                k100Result={"k50"}
                clicked
                handleStateChange
                onDiceRoll
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5  mb-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              />
            </td>
            <td>{context.profStats.ZR}</td>
            <td>
              {context.profStats.k10_ZR ? (
                <DiceButtonComponent
                  n={1}
                  k={10}
                  k100Result={"k10+"}
                  isPremium
                  clicked
                  handleStateChange
                  onDiceRoll
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5  mb-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                />
              ) : (
                ""
              )}
            </td>
            <td>{context.baseRaceStats.ZR + context.profStats.ZR}</td>
          </tr>
          <tr>
            <td>SZ</td>
            <td>{context.baseRaceStats.SZ}</td>
            <td>
              <DiceButtonComponent
                n={1}
                k={50}
                k100Result={"k50"}
                clicked
                handleStateChange
                onDiceRoll
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5  mb-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              />
            </td>
            <td>{context.profStats.SZ}</td>
            <td>
              {context.profStats.k10_SZ ? (
                <DiceButtonComponent
                  n={1}
                  k={10}
                  k100Result={"k10+"}
                  isPremium
                  clicked
                  handleStateChange
                  onDiceRoll
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5  mb-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                />
              ) : (
                ""
              )}
            </td>
            <td>{context.baseRaceStats.SZ + context.profStats.SZ}</td>
          </tr>
          <tr>
            <td>INT</td>
            <td>{context.baseRaceStats.INT}</td>
            <td>
              <DiceButtonComponent
                n={1}
                k={50}
                k100Result={"k50"}
                clicked
                handleStateChange
                onDiceRoll
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5  mb-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              />
            </td>
            <td>{context.profStats.INT}</td>
            <td>
              {context.profStats.k10_INT ? (
                <DiceButtonComponent
                  n={1}
                  k={10}
                  k100Result={"k10+"}
                  isPremium
                  clicked
                  handleStateChange
                  onDiceRoll
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5  mb-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                />
              ) : (
                ""
              )}
            </td>
            <td>{context.baseRaceStats.INT + context.profStats.INT}</td>
          </tr>
          <tr>
            <td>MD</td>
            <td>{context.baseRaceStats.MD}</td>
            <td>
              <DiceButtonComponent
                n={1}
                k={50}
                k100Result={"k50"}
                clicked
                handleStateChange
                onDiceRoll
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5  mb-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              />
            </td>
            <td>{context.profStats.MD}</td>
            <td>
              {context.profStats.k10_MD ? (
                <DiceButtonComponent
                  n={1}
                  k={10}
                  k100Result={"k10+"}
                  isPremium
                  clicked
                  handleStateChange
                  onDiceRoll
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5  mb-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                />
              ) : (
                ""
              )}
            </td>
            <td>{context.baseRaceStats.MD + context.profStats.MD}</td>
          </tr>
          <tr>
            <td>UM</td>
            <td>{context.baseRaceStats.UM}</td>
            <td>
              <DiceButtonComponent
                n={1}
                k={50}
                k100Result={"k50"}
                clicked
                handleStateChange
                onDiceRoll
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5  mb-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              />
            </td>
            <td>{context.profStats.UM}</td>
            <td>
              {context.profStats.k10_UM ? (
                <DiceButtonComponent
                  n={1}
                  k={10}
                  k100Result={"k10+"}
                  isPremium
                  clicked
                  handleStateChange
                  onDiceRoll
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5  mb-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                />
              ) : (
                ""
              )}
            </td>
            <td>{context.baseRaceStats.UM + context.profStats.UM}</td>
          </tr>
          <tr>
            <td>CH</td>
            <td>{context.baseRaceStats.CH}</td>
            <td>
              <DiceButtonComponent
                n={1}
                k={50}
                k100Result={"k50"}
                clicked
                handleStateChange
                onDiceRoll
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5  mb-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              />
            </td>
            <td>{context.profStats.CH}</td>
            <td>
              {context.profStats.k10_CH ? (
                <DiceButtonComponent
                  n={1}
                  k={10}
                  k100Result={"k10+"}
                  isPremium
                  clicked
                  handleStateChange
                  onDiceRoll
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5  mb-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                />
              ) : (
                ""
              )}
            </td>
            <td>{context.baseRaceStats.CH + context.profStats.CH}</td>
          </tr>
          <tr>
            <td>PR</td>
            <td>{context.baseRaceStats.PR}</td>
            <td>
              <DiceButtonComponent
                n={1}
                k={50}
                k100Result={"k50"}
                clicked
                handleStateChange
                onDiceRoll
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5  mb-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              />
            </td>
            <td>{context.profStats.PR}</td>
            <td>
              {context.profStats.k10_PR ? (
                <DiceButtonComponent
                  n={1}
                  k={10}
                  k100Result={"k10+"}
                  isPremium
                  clicked
                  handleStateChange
                  onDiceRoll
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5  mb-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                />
              ) : (
                ""
              )}
            </td>
            <td>{context.baseRaceStats.PR + context.profStats.PR}</td>
          </tr>
          <tr>
            <td>WI</td>
            <td>{context.baseRaceStats.WI}</td>
            <td>
              <DiceButtonComponent
                n={1}
                k={50}
                k100Result={"k50"}
                clicked
                handleStateChange
                onDiceRoll
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5  mb-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              />
            </td>
            <td>{context.profStats.WI}</td>
            <td>
              {context.profStats.k10_WI ? (
                <DiceButtonComponent
                  n={1}
                  k={10}
                  k100Result={"k10+"}
                  isPremium
                  clicked
                  handleStateChange
                  onDiceRoll
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5  mb-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                />
              ) : (
                ""
              )}
            </td>
            <td>{context.baseRaceStats.WI + context.profStats.WI}</td>
          </tr>
          <tr>
            <td>ZW</td>
            <td>{context.baseRaceStats.ZW}</td>
            <td>-</td>
            <td>{context.profStats.ZW}</td>
            <td>
              <DiceButtonComponent
                n={1}
                k={5}
                k100Result={"k5+"}
                isPremium
                clicked
                handleStateChange
                onDiceRoll
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5  mb-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              />
            </td>
            <td>{context.baseRaceStats.ZW + context.profStats.ZW}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
