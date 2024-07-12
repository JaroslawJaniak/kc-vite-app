import ChapterContent_V_table1 from "./ChapterContent_V_table1";
import ChapterContent_V_table2a from "./ChapterContent_V_table2a";
import ChapterContent_V_table2b from "./ChapterContent_V_table2b";
import ChapterContent_V_k100 from "./ChapterContent_V_k100";
import K100buttonComponent from "../../../../../data/k100/DiceButtonComponent";

import chp5_table2 from "./chp5_table2";
import chp5_info from "./chp5_info";

const ChapterContent_V = (props) => {
  return (
    <div>
      <h3>{chp5_info.text1}</h3>
      <ChapterContent_V_table1 />
      <ChapterContent_V_table2a item={chp5_table2} />
      <ChapterContent_V_table2b item={chp5_table2} />
      <div>
        <p id="warning1">{chp5_info.text2}</p>
        <div>
          <button id="goToRaceGender_button">{chp5_info.text3}</button>
        </div>
      </div>
      <ChapterContent_V_k100 />
    </div>
  );
};

export default ChapterContent_V;
