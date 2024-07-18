import React, { useContext, useState, useEffect } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import { InputComponent } from "../utils/InputComponent";

const Subprofession = (props) => {
  const context = useContext(CharacterStatsContext);
 

  const handleElementChange = (profName) => {
    context.setSecondProfession(profName);
  };

  const isChecked =
    context.secondProfession === props.secondProfession &&
    context.profession === props.firstProfession;

  return (
    <div className="subprofession ml-5" hidden={props.hiddenStat}>
      <InputComponent
        type={"checkbox"}
        name={props.children}
        className={"lowercase"}
        checked={
          isChecked
        }
        onChange={() => {
          handleElementChange(props.secondProfession);
        }}
        disabled={props.disabled}
      />
      
    </div>
  );
};

export default Subprofession;
