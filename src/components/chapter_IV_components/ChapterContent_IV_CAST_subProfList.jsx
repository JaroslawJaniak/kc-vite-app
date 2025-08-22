import React, { useContext, useState } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import { InputComponent } from "../utils/InputComponent";

export const ChapterContent_IV_CAST_subProfList = (props) => {
  const context = useContext(CharacterStatsContext);

  const handleElementChange = (profName) => {
    context.setSecondProfession(profName);

    const secondProfToSet = context.renderProfessions.filter(
      (prof) => prof.profName === profName
    );

    context.setSecondProfessionData(...secondProfToSet);

    const newCharList = context.firstProfessionCharacters.filter((char1) =>
      secondProfToSet[0].character.some((char2) => char2 === char1)
    );
    context.setSecondProfessionCharacters(newCharList);
    context.setAvailableCharacters(newCharList);
    context.setCharacter("");

    if (profName === context.secondProfession) {
      context.setSecondProfessionChecked(!context.secondProfessionChecked);
      context.setSecondProfession("");
      context.setSecondProfessionCharacters([]);
      context.setSecondProfessionInfo({});
    } else {
      context.setSecondProfessionChecked(true);
    }
  };

  return (
    <div className="ml-4  [&>*]:lowercase grid grid-cols-2">
      {props.mainProf.combiningProfessions.map((subProfList) => (
        <div
          className={` p-1 ${
            !(context.firstProfession === props.mainProf.profName)
              ? "text-gray-400 "
              : "text-black"
          }`}
          hidden={!(context.firstProfession === props.mainProf.profName)} //ukrywa jeśli nie jest to pierwsza profesja
        >
          {subProfList
            .filter((subProfName) =>
              props.professionsList.some(
                (raceProf) => raceProf.profName === subProfName
              )
            )
            .map((subProf) => (
              <p>
                {console.log("subprof: ", typeof(subProf))}
                <InputComponent
                  type={"checkbox"}
                  name={subProf}
                  className={`lowercase`}
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
