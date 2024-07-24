import chp6_table_prof_stats1 from "./chp6_table-prof-stats1";
import chp6_table_prof_stats2 from "./chp6_table-prof-stats2";

const ChapterContent_VIc = () => {
  const deafaultView = (
    <div>
      <table
        id="table_base-stats"
        class="table_base-stats [&>*]:p-0 [&>*]:m-0 text-xxs md:text-xs"
      >
        <tr>
          {chp6_table_prof_stats1.map((item) => (
            <td>
              <b>{item}</b>
            </td>
          ))}
        </tr>
        {chp6_table_prof_stats2.map((profBonus) => (
          <tr
            id="table_base-stats_tr_race1_male"
            className="table_base-stats_tr"
          >
            <td className={""}>{profBonus.NAME}</td>

            <td>
              {profBonus.ŻYW === 0
                ? profBonus.k10_ŻYW === 10
                  ? "+"
                  : "-"
                : profBonus.ŻYW + (profBonus.k10_ŻYW === 10 ? "+" : "")}
            </td>
            <td>
              {profBonus.SF === 0
                ? profBonus.k10_SF === 10
                  ? "+"
                  : "-"
                : profBonus.SF + (profBonus.k10_SF === 10 ? "+" : "")}
            </td>
            <td>
              {profBonus.ZR === 0
                ? profBonus.k10_ZR === 10
                  ? "+"
                  : "-"
                : profBonus.ZR + (profBonus.k10_ZR === 10 ? "+" : "")}
            </td>
            <td>
              {profBonus.SZ === 0
                ? profBonus.k10_SZ === 10
                  ? "+"
                  : "-"
                : profBonus.SZ + (profBonus.k10_SZ === 10 ? "+" : "")}
            </td>

            <td>
              {profBonus.INT === 0
                ? profBonus.k10_INT === 10
                  ? "+"
                  : "-"
                : profBonus.INT + (profBonus.k10_INT === 10 ? "+" : "")}
            </td>
            <td>
              {profBonus.MD === 0
                ? profBonus.k10_MD === 10
                  ? "+"
                  : "-"
                : profBonus.MD + (profBonus.k10_MD === 10 ? "+" : "")}
            </td>
            <td>
              {profBonus.UM === 0
                ? profBonus.k10_UM === 10
                  ? "+"
                  : "-"
                : profBonus.UM + (profBonus.k10_UM === 10 ? "+" : "")}
            </td>

            <td>
              {profBonus.CH === 0
                ? profBonus.k10_CH === 10
                  ? "+"
                  : "-"
                : profBonus.CH + (profBonus.k10_CH === 10 ? "+" : "")}
            </td>
            <td>
              {profBonus.PR === 0
                ? profBonus.k10_PR === 10
                  ? "+"
                  : "-"
                : profBonus.PR + (profBonus.k10_PR === 10 ? "+" : "")}
            </td>
            <td>
              {profBonus.WI === 0
                ? profBonus.k10_WI === 10
                  ? "+"
                  : "-"
                : profBonus.WI + (profBonus.k10_WI === 10 ? "+" : "")}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );

  return deafaultView;
};

export default ChapterContent_VIc;
