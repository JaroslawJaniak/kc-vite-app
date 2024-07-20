import React, { useContext, useState } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import { InputComponent } from "../utils/InputComponent";
import chp4_professionsList from "./chp4_professions";

export const ChapterContent_IV_CAST_subProfList = (props) => {
  const context = useContext(CharacterStatsContext);

  const handleElementChange = (profName) => {
    context.setSecondProfession(profName);

    const secondProfToSet = context.renderProfessions.filter(
      (prof) => prof.profName === profName
    );

    context.setSecondProfessionInfo(...secondProfToSet);

    /**
     const removeNumber = (numberToRemove) => {
  return numbers.filter((number) => number !== numberToRemove);
};
     */

    const newCharList = context.firstProfessionCharacters.filter((char1) =>
      secondProfToSet[0].character.some((char2) => char2 === char1)
    );
    context.setSecondProfessionCharacters(newCharList);
    context.setAvailableCharacters(newCharList);

    if (profName === context.secondProfession) {
      context.setSecondProfessionChecked(!context.secondProfessionChecked);
      context.setSecondProfession("");
      context.setSecondProfessionCharacters([]);
    } else {
      context.setSecondProfessionChecked(true);
    }
  };

  return (
    <div className="ml-4 border [&>*]:lowercase grid grid-cols-2">
      {props.mainProf.combiningProfessions.map((subProfList) => (
        <div
          className="border rounded bg-white  m-1 p-1"
          hidden={!(context.firstProfession === props.mainProf.profName)}
        >
          {subProfList
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
            ))}{" "}
        </div>
      ))}
    </div>
  );
};
