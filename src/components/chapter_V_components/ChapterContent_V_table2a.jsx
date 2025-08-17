import chp5_table2a_rw1 from "./chp5_table2a_rw1";

const ChapterContent_V_table2a = (props) => {
  return (
    <div>
      <p id="paragraph_height_weight_female">{chp5_table2a_rw1.tableTitle}</p>

      <table
        hidden={false}
        id="table1_height_weight_male"
        className="[&>*]:p-0 [&>*]:m-0 text-xxs md:text-xs"
      >
        <tr id="table1_tr1" className="tr_height_weight ">
          <td>{chp5_table2a_rw1.text1}</td>

          <td></td>
          <td>{chp5_table2a_rw1.text2}</td>
          <td></td>

          <td></td>
          <td>{chp5_table2a_rw1.text3}</td>
          <td></td>

          <td>{chp5_table2a_rw1.text4}</td>
        </tr>
        <tr className="">
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
          <tr
            key={tableContent.id + index}
            className={`tr_height_weight  `}
          >
            <td id={"male" + tableContent.race} className="uppercase">
              {tableContent.race}
            </td>
            <td id={`td_height_male_min${tableContent.race}`}>
              {tableContent.heightMin}
            </td>
            <td id={`td_height_male_avg${tableContent.race}`}>
              {tableContent.heightAvr + "-" + (tableContent.heightAvr + 10)}
            </td>
            <td id={`td_height_male_max${tableContent.race}`}>
              {tableContent.heightMax}
            </td>
            <td id={`td_weigh_malet_min${tableContent.race}`}>
              {tableContent.weightMin}
            </td>
            <td id={`td_weight_male_avg${tableContent.race}`}>
              {tableContent.weightAvr + "-" + (tableContent.weightAvr + 10)}
            </td>
            <td id={`td_weight_male_max${tableContent.race}`}>
              {tableContent.weightMax}
            </td>
            <td>{tableContent.age}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ChapterContent_V_table2a;
