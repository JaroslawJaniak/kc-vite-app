import chp5_table1 from "./chp5_table1";

const ChapterContent_V_table1 = (props) => {
  return (
    <div>
      <p>
        Zestawienie wyników rzutu k100 oraz ich konsekwencji dla wzrostu i wagi
      </p>
      <table id="table1_describe" class="table_origin">
        {chp5_table1.map((tableInfo) => (
          <tr key={tableInfo.id} id={tableInfo.id}>
            <td className="td__k100">{tableInfo.k100}</td>
            <td className="td__description">{tableInfo.description}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ChapterContent_V_table1;
