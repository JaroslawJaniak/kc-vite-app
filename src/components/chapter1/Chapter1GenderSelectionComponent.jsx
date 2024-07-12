import React, { useState } from "react";
import InputComponent from "../utils/InputComponent";
import { chp1_sex_info } from "../../utils/chp1_sex_info";

const Chapter1GenderSelection = (props) => {
  const [maleChecked, setMaleChecked] = useState(false);
  const [femaleChecked, setFemaleChecked] = useState(false);

  const handleMaleChange = () => {
    setMaleChecked(!maleChecked);
    setFemaleChecked(false);
  };

  const handleFemaleChange = () => {
    setFemaleChecked(!femaleChecked);
    setMaleChecked(false);
  };

  return (
    <form
      style={{
        border: "1px solid black",
        margin: "8px",
        padding: "8px",
        width: "50%",
        fontSize: "small",
        borderRadius: "4px",
      }}
    >
      <InputComponent
        id={"checkboxMale"}
        type={chp1_sex_info.male.type}
        name={chp1_sex_info.male.nameSex}
        class={chp1_sex_info.male.class}
        checked={maleChecked}
        onChange={handleMaleChange}
      />
      <InputComponent
        id={"checkboxFemale"}
        type={chp1_sex_info.female.type}
        name={chp1_sex_info.female.nameSex}
        class={chp1_sex_info.female.class}
        checked={femaleChecked}
        onChange={handleFemaleChange}
      />
    </form>
  );
};

export default Chapter1GenderSelection;
