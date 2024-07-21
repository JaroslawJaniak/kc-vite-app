import React, { useContext } from "react";
import chp4_info from "./chp4_info";
import { InputComponent } from "../utils/InputComponent";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";

export const ChapterContent_IV_second_profession = () => {
  const context = useContext(CharacterStatsContext);

  const handleElementChange = () => {
    context.setIsSecondProfessionChecked(!context.isSecondProfessionChecked);
    
  };
  
  return (
    <div className="mb-8">
      <InputComponent
        type={"checkbox"}
        name={chp4_info.text1}
        className={""}
        checked={context.isSecondProfessionChecked}
        onChange={handleElementChange}
      />
    </div>
  );
};
