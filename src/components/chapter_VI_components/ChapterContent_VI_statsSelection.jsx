import React, { useEffect, useContext, useState } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import { chp6_table_prof_stats2 } from "./chp6_table-prof-stats2";
import { chp1_race_description } from "../chaper_I_components/chp1_race_description";

export const ChapterContent_VI_statsSelection = () => {
  const context = useContext(CharacterStatsContext);

  useEffect(() => {
    context.filterBaseRaceStatsByRaceName();
    context.filterProfStatsByFirstProf();

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
            <td>k50</td>
            <td>{context.profStats.ŻYW}</td>
            <td>k10+</td>
            <td>{context.baseRaceStats.ŻYW + context.profStats.ŻYW}</td>
          </tr>
          <tr>
            <td>SF</td>
            <td>{context.baseRaceStats.SF}</td>
            <td>k100</td>
            <td>{context.profStats.SF}</td>
            <td>k10+</td>
            <td>{context.baseRaceStats.SF + context.profStats.SF}</td>
          </tr>
          <tr>
            <td>ZR</td>
            <td>{context.baseRaceStats.ZR}</td>
            <td>k50</td>
            <td>{context.profStats.ZR}</td>
            <td>k10+</td>
            <td>{context.baseRaceStats.ZR + context.profStats.ZR}</td>
          </tr>
          <tr>
            <td>SZ</td>
            <td>{context.baseRaceStats.SZ}</td>
            <td>k50</td>
            <td>{context.profStats.SZ}</td>
            <td>k10+</td>
            <td>{context.baseRaceStats.SZ + context.profStats.SZ}</td>
          </tr>
          <tr>
            <td>INT</td>
            <td>{context.baseRaceStats.INT}</td>
            <td>k50</td>
            <td>{context.profStats.INT}</td>
            <td>k10+</td>
            <td>{context.baseRaceStats.INT + context.profStats.INT}</td>
          </tr>
          <tr>
            <td>MD</td>
            <td>{context.baseRaceStats.MD}</td>
            <td>k50</td>
            <td>{context.profStats.MD}</td>
            <td>k10+</td>
            <td>{context.baseRaceStats.MD + context.profStats.MD}</td>
          </tr>
          <tr>
            <td>UM</td>
            <td>{context.baseRaceStats.UM}</td>
            <td>k50</td>
            <td>{context.profStats.UM}</td>
            <td>k10+</td>
            <td>{context.baseRaceStats.UM + context.profStats.UM}</td>
          </tr>
          <tr>
            <td>CH</td>
            <td>{context.baseRaceStats.CH}</td>
            <td>k50</td>
            <td>{context.profStats.CH}</td>
            <td>k10+</td>
            <td>{context.baseRaceStats.CH + context.profStats.CH}</td>
          </tr>
          <tr>
            <td>PR</td>
            <td>{context.baseRaceStats.PR}</td>
            <td>k50</td>
            <td>{context.profStats.PR}</td>
            <td>k10+</td>
            <td>{context.baseRaceStats.PR + context.profStats.PR}</td>
          </tr>
          <tr>
            <td>WI</td>
            <td>{context.baseRaceStats.WI}</td>
            <td>k50</td>
            <td>{context.profStats.WI}</td>
            <td>k10+</td>
            <td>{context.baseRaceStats.WI + context.profStats.WI}</td>
          </tr>
          <tr>
            <td>ZW</td>
            <td>{context.baseRaceStats.ZW}</td>
            <td>k50</td>
            <td>{context.profStats.ZW}</td>
            <td>k5+</td>
            <td>{context.baseRaceStats.ZW + context.profStats.ZW}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
