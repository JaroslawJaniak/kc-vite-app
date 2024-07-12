import chp6_table_base_stats1 from "./chp6_table-base-stats1";
import chp6_table_base_stats2 from "./chp6_table-base-stats2";
import chp6_table_base_stats2COPY from "./chp6_table-base-stats2 copy";

const ChapterContent_VIb = () => {
  const deafaultView = (
    <div>
      <table id="table_base-stats" class="table_base-stats">
        <tr>
          {chp6_table_base_stats1.map((item) => (
            <td>
              <b>{item}</b>
            </td>
          ))}
        </tr>
        {chp6_table_base_stats2.map((baseStats) => (
          <tr
            id="table_base-stats_tr_race1_male"
            className="table_base-stats_tr"
          >
            <td className={baseStats.className}>{baseStats.race}</td>
            <td>{baseStats.sex}</td>
            <td>{baseStats.ŻYW}</td>
            <td>{baseStats.SF}</td>
            <td>{baseStats.ZR}</td>
            <td>{baseStats.SZ}</td>

            <td>{baseStats.INT}</td>
            <td>{baseStats.MD}</td>
            <td>{baseStats.UM}</td>

            <td>{baseStats.CH}</td>
            <td>{baseStats.PR}</td>

            <td>{baseStats.WI}</td>
            <td>{baseStats.ZW}</td>

            <td>{baseStats.OW}</td>
          </tr>
        ))}
      </table>
    </div>
  );

  return deafaultView;
};

export default ChapterContent_VIb;
