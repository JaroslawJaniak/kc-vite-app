import React, { useState } from "react";
import chp1_sex_info from "./chp1_sex_info";
import chp1_race_description from "./chp1_race_description";
import CheckboxComponent from "./CheckboxComponent";

const ChapterContent_I = () => {
  const [checkedState1, setCheckedState1] = useState(false);
  const [raceSex, setSexState] = useState("");

  const [checkedState2, setCheckedState2] = useState(false);
  const [raceState, setRaceState] = useState("");

  return (
    <div>
      <form>
        <CheckboxComponent
          id={"male"}
          class={"checkbox__gender"}
          name={"Mężczyzna"}
          type={"checkbox"}
          checked={checkedState1}
        />
        <CheckboxComponent
          id={"female"}
          class={"checkbox__gender"}
          name={"Kobieta"}
          type={"checkbox"}
          checked={checkedState2}
        />
      </form>
      <form>
        {chp1_race_description.map((chp1_race_description) => (
          <div>
            <CheckboxComponent
              id={chp1_race_description.id}
              class={chp1_race_description.class}
              name={chp1_race_description.name}
              type={chp1_race_description.type}
            />
            <br />
            {chp1_race_description.text.map((chapterText) => (
              <p>{chapterText}</p>
            ))}
          </div>
        ))}
      </form>
    </div>
  );
};

export default ChapterContent_I;
