import React, { useState, useContext } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import InputComponent from "./InputComponent";
import { chp1_sex_info } from "./chp1_sex_info";

const Chapter1GenderSelection = () => {
  const context = useContext(CharacterStatsContext);

  const handleMaleChange = () => {
    context.setMaleChecked(!context.maleChecked);
    context.setFemaleChecked(false);
    context.setSex(chp1_sex_info.male.nameSex);
  };

  const handleFemaleChange = () => {
    context.setFemaleChecked(!context.femaleChecked);
    context.setMaleChecked(false);
    context.setSex(chp1_sex_info.female.nameSex);
  };

  return (
    <form>
      <InputComponent
        id={"checkboxMale"}
        type={chp1_sex_info.male.type}
        name={chp1_sex_info.male.nameSex}
        className={chp1_sex_info.male.class}
        checked={context.maleChecked}
        onChange={handleMaleChange}
      />
      <InputComponent
        id={"checkboxFemale"}
        type={chp1_sex_info.female.type}
        name={chp1_sex_info.female.nameSex}
        className={chp1_sex_info.female.class}
        checked={context.femaleChecked}
        onChange={handleFemaleChange}
      />
    </form>
  );
};

export default Chapter1GenderSelection;
