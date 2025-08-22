import chp6_table_base_stats1 from "./chp6_table-base-stats1";
import chp6_table_base_stats2 from "./chp6_table-base-stats2";

import ChapterContent_VIa from "./ChapterContent_VIa";
import ChapterContent_VIc from "./ChapterContent_VIc";
import chp6_info from "./chp6_info";

import { ChapterContent_VI_statsCalculations } from "./ChapterContent_VI_statsCalculations.jsx";
import ChapterContent_VIb from "./ChapterContent_VIb.jsx";
import ChapterContent_VIe from "./ChapterContent_VIe.jsx";
import ChapterContent_VIe_statsCalculations from "./ChapterContent_VIe_statsCalculations.jsx";

const ChapterContent_VI = () => {
  return (
    <section className="section mb-20">
      <p>{chp6_info.text1}</p>
      <ChapterContent_VI_statsCalculations />
      <ChapterContent_VIe_statsCalculations />
      <p>{chp6_info.text2}</p>
      <ChapterContent_VIa />
      <p>{chp6_info.text3}</p>
      <ChapterContent_VIb />
      <p>{chp6_info.text4}</p>
      <ChapterContent_VIc />
      <ChapterContent_VIe />
    </section>
  );
};

export default ChapterContent_VI;
