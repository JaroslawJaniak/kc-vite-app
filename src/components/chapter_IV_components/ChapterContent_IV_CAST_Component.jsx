import React, { useContext, useState } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import { ChapterContent_IV_CAST_subProfList } from "./ChapterContent_IV_CAST_subProfList";
import { InputComponent } from "../utils/InputComponent";

export const ChapterContent_IV_CAST_Component = (props) => {
  const context = useContext(CharacterStatsContext);

  const handleElementChange = (prof, profName) => {
    context.setFirstProfession(profName);
    context.setFirstProfessionInfo(prof);
    
    context.setFirstProfessionCharacters(prof.character);
    context.setAvailableCharacters(prof.character);

    if (profName === context.firstProfession) {
      context.setFirstProfessionChecked(!context.firstProfessionChecked);
      context.setFirstProfession("");
      context.setFirstProfessionCharacters([]);
      context.setAvailableCharacters([]);
    } else {
      context.setFirstProfessionChecked(true);

      //unchecked 2-nd prof
      context.setSecondProfessionChecked(false);
      context.setSecondProfession("");
    }
  };

  return (
    <div>
      {props.professionsList
        .filter((mainProf) => mainProf.castName === props.castName)
        .map((prof) => (
          <p>
            <InputComponent
              type={"checkbox"}
              name={prof.profName}
              className
              checked={
                context.firstProfessionChecked &&
                context.firstProfession === prof.profName
              }
              onChange={() => handleElementChange(prof, prof.profName)}
            />
            <ChapterContent_IV_CAST_subProfList
              mainProf={prof}
              professionsList={props.professionsList}
            />
          </p>
        ))}
    </div>
  );
};
