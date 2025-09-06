import chp6_table_prof_stats1 from "./chp6_table-prof-stats1";
import { chp6_table_prof_stats2 } from "./chp6_table-prof-stats2";
import { useContext } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";

const renderStatCell = (stat, k10Stat) => {
  if (stat === 0) {
    return k10Stat ? "+" : "-";
  }
  return stat + (k10Stat ? "+" : "");
};

const ChapterContent_VIc = () => {
  const context = useContext(CharacterStatsContext);

  const deafaultView = (
    <div className="rounded p-4 text-brown-100  text-xs backdrop-blur-lg shadow-2xl mb-4">
      <table
        id="table_base-stats"
        className="[&>*]:p-0 [&>*]:m-0 text-xxs md:text-xs text-brown-700"
      >
        <tr>
          {chp6_table_prof_stats1.map((item) => (
            <td key={item}>
              <b>{item}</b>
            </td>
          ))}
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
            <td>{renderStatCell(profBonus.ŻYW, profBonus.k10_ŻYW)}</td>
            <td>{renderStatCell(profBonus.SF, profBonus.k10_SF)}</td>
            <td>{renderStatCell(profBonus.ZR, profBonus.k10_ZR)}</td>
            <td>{renderStatCell(profBonus.SZ, profBonus.k10_SZ)}</td>
            <td>{renderStatCell(profBonus.INT, profBonus.k10_INT)}</td>
            <td>{renderStatCell(profBonus.MD, profBonus.k10_MD)}</td>
            <td>{renderStatCell(profBonus.UM, profBonus.k10_UM)}</td>
            <td>{renderStatCell(profBonus.CH, profBonus.k10_CH)}</td>
            <td>{renderStatCell(profBonus.PR, profBonus.k10_PR)}</td>
            <td>{renderStatCell(profBonus.WI, profBonus.k10_WI)}</td>
          </tr>
        ))}
      </table>
    </div>
  );

  return deafaultView;
};

export default ChapterContent_VIc;
