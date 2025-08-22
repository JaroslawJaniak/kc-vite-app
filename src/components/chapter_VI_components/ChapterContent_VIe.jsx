import chp6_table_immunity_stats_0 from "./chp6_table-race-immunity-stats_0";
import { chp6_table_prof_stats2 } from "./chp6_table-prof-stats2";
import chp6_table_race_immunity_stats from "./chp6_table-race-immunity-stats";

import { useContext } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";

const renderStatCell = (stat, k10Stat) => {
  if (stat === 0) {
    return k10Stat ? "+" : "-";
  }
  return stat + (k10Stat ? "+" : "");
};

const ChapterContent_VIe = () => {
  const context = useContext(CharacterStatsContext);

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
            <td>{renderStatCell(immunity.Odp2)}</td>
            <td>{renderStatCell(immunity.Odp3)}</td>
            <td>{renderStatCell(immunity.Odp4)}</td>
            <td>{renderStatCell(immunity.Odp5)}</td>
            <td>{renderStatCell(immunity.Odp6)}</td>
            <td>{renderStatCell(immunity.Odp7)}</td>
            <td>{renderStatCell(immunity.Odp8)}</td>
            <td>{renderStatCell(immunity.Odp9)}</td>
            <td>{renderStatCell(immunity.Odp10)}</td>
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
            <td>{renderStatCell(profBonus.Odp2, profBonus.k10_Odp2)}</td>
            <td>{renderStatCell(profBonus.Odp3, profBonus.k10_Odp3)}</td>
            <td>{renderStatCell(profBonus.Odp4, profBonus.k10_Odp4)}</td>
            <td>{renderStatCell(profBonus.Odp5, profBonus.k10_Odp5)}</td>
            <td>{renderStatCell(profBonus.Odp6, profBonus.k10_Odp6)}</td>
            <td>{renderStatCell(profBonus.Odp7, profBonus.k10_Odp7)}</td>
            <td>{renderStatCell(profBonus.Odp8, profBonus.k10_Odp8)}</td>
            <td>{renderStatCell(profBonus.Odp9, profBonus.k10_Odp9)}</td>
            <td>{renderStatCell(profBonus.Odp10, profBonus.k10_Odp10)}</td>
          </tr>
        ))}
      </table>
    </div>
  );

  return deafaultView;
};

export default ChapterContent_VIe;
