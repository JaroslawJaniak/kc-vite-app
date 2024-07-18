import React, { useContext, useState } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import { InputComponent } from "../utils/InputComponent";

export const ChapterContent_IV_CAST_subProfList = (props) => {
  const context = useContext(CharacterStatsContext);
  

  const handleElementChange = (profName) => {
    context.setSecondProfession(profName);
    context.setSecondProfessionChecked(!context.secondProfessionChecked);
  };

  
  return (
    <div
      className="ml-4 border [&>*]:lowercase"
      hidden={!(context.firstProfession === props.mainProf.profName)}
    >
      {props.mainProf.combiningProfessions.map((subProfList) =>
        subProfList
          .filter((subProfName) =>
            props.professionsList.some(
              (raceProf) => raceProf.profName === subProfName
            )
          )
          .map((subProf) => (
            <p>
              <InputComponent
                type={"checkbox"}
                name={subProf}
                className={"lowercase"}
                checked={
                  context.secondProfession === subProf &&
                  context.firstProfession === props.mainProf.profName &&
                  context.secondProfessionChecked
                }
                onChange={() => {
                  handleElementChange(subProf);
                }}
                disabled={
                  !(context.firstProfession === props.mainProf.profName)
                }
              />
            </p>
          ))
      )}
    </div>
  );
};
