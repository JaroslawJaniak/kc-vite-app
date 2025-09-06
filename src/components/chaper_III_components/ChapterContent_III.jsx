
import { ChapterContent_III_disabilities } from "./ChapterContent_III_disabilities";
import { ChapterContent_III_abilities } from "./ChapterContent_III_abilities";

const ChapterContent_III = () => {
  return (
    <section className="section mb-20 border-gray-900 rounded  text-brown-100 p-2 text-xs backdrop-blur-lg shadow-2xl">
      <h2>III. LOSOWANIE UŁOMNOŚCI I ZDLONOŚCI NADNATURALNYCH</h2>

      <ChapterContent_III_disabilities />
      <ChapterContent_III_abilities />
    </section>
  );
};

export default ChapterContent_III;
