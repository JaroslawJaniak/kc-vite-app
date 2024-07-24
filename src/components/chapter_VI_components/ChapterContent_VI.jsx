import chp6_table_base_stats1 from "./chp6_table-base-stats1";
import chp6_table_base_stats2 from "./chp6_table-base-stats2";

import ChapterContent_VIa from "./ChapterContent_VIa";
import ChapterContent_VIc from "./ChapterContent_VIc";
import chp6_info from "./chp6_info";

const ChapterContent_VI = () => {
  return (
    <div className="mb-20">
      <p>{chp6_info.text1}</p>
      <ChapterContent_VIa />
      <p>{chp6_info.text2}</p>

      <p>{chp6_info.text3}</p>
      <ChapterContent_VIc />
    </div>
  );
};

export default ChapterContent_VI;
