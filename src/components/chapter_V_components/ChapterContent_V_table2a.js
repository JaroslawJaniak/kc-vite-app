import chp5_table2a_rw1 from "./chp5_table2a_rw1";

const ChapterContent_V_table2a = (props) => {
  return (
    <div>
      <p id="paragraph_height_weight_female">{chp5_table2a_rw1.tableTitle}</p>

      <table
        hidden={false}
        id="table1_height_weight_male"
        className="table_height_weight"
      >
        <tr id="table1_tr1" class="tr_height_weight">
          <td className="td__race">{chp5_table2a_rw1.text1}</td>

          <td className="td_height"></td>
          <td className="td_height">{chp5_table2a_rw1.text2}</td>
          <td className="td_height"></td>

          <td className="td_weight"></td>
          <td className="td_weight">{chp5_table2a_rw1.text3}</td>
          <td className="td_weight"></td>

          <td>{chp5_table2a_rw1.text4}</td>
        </tr>
        <tr className="tr_height_weight">
          <td>{chp5_table2a_rw1.text8}</td>
          <td>{chp5_table2a_rw1.text5}</td>
          <td>{chp5_table2a_rw1.text6}</td>
          <td>{chp5_table2a_rw1.text7}</td>
          <td>{chp5_table2a_rw1.text5}</td>
          <td>{chp5_table2a_rw1.text6}</td>
          <td>{chp5_table2a_rw1.text7}</td>
          <td>{chp5_table2a_rw1.text8}</td>
        </tr>

        {props.item.map((tableContent, index) => (
          <tr key={tableContent.id + index} className="tr_height_weight">
            <td>{tableContent.race}</td>
            <td>{tableContent.heightMin}</td>
            <td>
              {tableContent.heightAvr + "-" + (tableContent.heightAvr + 10)}
            </td>
            <td>{tableContent.heightMax}</td>
            <td>{tableContent.weightMin}</td>
            <td>
              {tableContent.weightAvr + "-" + (tableContent.weightAvr + 10)}
            </td>
            <td>{tableContent.weightMax}</td>
            <td>{tableContent.age}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ChapterContent_V_table2a;
