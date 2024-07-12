import React, { useState } from "react";

import k100 from "../../../../../data/k100/k100";

const ChapterContent_V_k100 = () => {
  const [k100buttonState, setk100buttonState] = useState(false);

  const k100ClickHandler = () => {
    setk100buttonState(true);
  };

  return (
    <div>
      <button id="k100_button_height" class="k100_button">
        k100
      </button>{" "}
      <span id="result4"></span>
      <div id="tmpl3"></div>
      <div>
        wzrost:
        <span id="height_character"></span>
      </div>
      <button
        id="k100_button_weight"
        className="k100_button"
        onClick={k100ClickHandler}
      >
        k100test
      </button>{" "}
      <span id="result5">{k100buttonState}</span>
      <div id="tmpl4"></div>
      <div>
        waga:
        <span id="weight_character"></span>
      </div>
    </div>
  );
};

export default ChapterContent_V_k100;
