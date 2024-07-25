import chp6_table_prof_stats1 from "./chp6_table-prof-stats1";
import{ chp6_table_prof_stats2} from "./chp6_table-prof-stats2";

const ChapterContent_VIc = () => {
  const deafaultView = (
    <div>
      <table
        id="table_base-stats"
        class=" [&>*]:p-0 [&>*]:m-0 text-xxs md:text-xs "
      >
        <tr>
          {chp6_table_prof_stats1.map((item) => (
            <td key={Math.random()}>
              <b>{item}</b>
            </td>
          ))}
        </tr>
        {chp6_table_prof_stats2.map((profBonus) => (
          <tr key={Math.random()} id="" className="">
            <td className={""}>{profBonus.name}</td>

            <td>
              {profBonus.ŻYW === 0
                ? profBonus.k10_ŻYW
                  ? "+"
                  : "-"
                : profBonus.ŻYW + (profBonus.k10_ŻYW ? "+" : "")}
            </td>
            <td>
              {profBonus.SF === 0
                ? profBonus.k10_SF
                  ? "+"
                  : "-"
                : profBonus.SF + (profBonus.k10_SF ? "+" : "")}
            </td>
            <td>
              {profBonus.ZR === 0
                ? profBonus.k10_ZR
                  ? "+"
                  : "-"
                : profBonus.ZR + (profBonus.k10_ZR ? "+" : "")}
            </td>
            <td>
              {profBonus.SZ === 0
                ? profBonus.k10_SZ
                  ? "+"
                  : "-"
                : profBonus.SZ + (profBonus.k10_SZ ? "+" : "")}
            </td>

            <td>
              {profBonus.INT === 0
                ? profBonus.k10_INT
                  ? "+"
                  : "-"
                : profBonus.INT + (profBonus.k10_INT ? "+" : "")}
            </td>
            <td>
              {profBonus.MD === 0
                ? profBonus.k10_MD
                  ? "+"
                  : "-"
                : profBonus.MD + (profBonus.k10_MD ? "+" : "")}
            </td>
            <td>
              {profBonus.UM === 0
                ? profBonus.k10_UM
                  ? "+"
                  : "-"
                : profBonus.UM + (profBonus.k10_UM ? "+" : "")}
            </td>

            <td>
              {profBonus.CH === 0
                ? profBonus.k10_CH
                  ? "+"
                  : "-"
                : profBonus.CH + (profBonus.k10_CH ? "+" : "")}
            </td>
            <td>
              {profBonus.PR === 0
                ? profBonus.k10_PR
                  ? "+"
                  : "-"
                : profBonus.PR + (profBonus.k10_PR ? "+" : "")}
            </td>
            <td>
              {profBonus.WI === 0
                ? profBonus.k10_WI
                  ? "+"
                  : "-"
                : profBonus.WI + (profBonus.k10_WI ? "+" : "")}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );

  return deafaultView;
};

export default ChapterContent_VIc;
