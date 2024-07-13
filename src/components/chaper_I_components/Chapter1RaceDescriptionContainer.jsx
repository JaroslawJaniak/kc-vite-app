import React, { useContext } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import InputComponent from "./InputComponent";
import { NewLineText } from "../utils/NewLineText";

export const Chapter1RaceDescriptionContainer = (props) => {
  const context = useContext(CharacterStatsContext);

  const handleElementChange = (raceName) => {
    props.handleElementChange(raceName);
    context.setRaceDescription(props.race_description.description);
  };

  return (
    <div className="race checkbox-container bg-white p-1 m-1 w-64 sm:w-96 border rounded border-gray-300">
      <InputComponent
        id={"checkboxMale"}
        type={props.race_description.type}
        name={props.race_description.raceName}
        className={props.race_description.class}
        checked={props.checkedElement === props.race_description.raceName}
        onChange={() => {
          handleElementChange(`${props.race_description.raceName}`);
        }}
      />

      <NewLineText text={props.race_description.description} />
    </div>
  );
};
