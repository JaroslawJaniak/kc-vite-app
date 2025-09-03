import React, { useContext } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import InputComponent from "./InputComponent";
import { NewLineText } from "../utils/NewLineText";

export const Chapter1RaceDescriptionContainer = (props) => {
  const context = useContext(CharacterStatsContext);

  const handleElementChange = (race) => {
    context.setRace(race.raceName);
    context.setRaceChecked(!context.raceChecked);
    context.setRaceDescription(race.description);
    context.setAvailableProfessionsByRace(race.availableProfessions);
    context.setRaceData(race);
    console.log("raceData.raceName:", context.raceData);
    console.log("raceData. proficiency:", context.raceData.proficiency);
  };

  return (
    <div className="race checkbox-container bg-white p-1 m-1 w-100 lg:w-96 border rounded border-gray-300">
      <InputComponent
        id={"checkboxMale"}
        type={props.race_description.type}
        name={props.race_description.raceName}
        className={props.race_description.class}
        checked={context.race === props.race_description.raceName}
        onChange={() => {
          handleElementChange(props.race_description);
        }}
      />

      <NewLineText text={props.race_description.description} />
    </div>
  );
};
