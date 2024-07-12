import React, { useState, useContext } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import { Chapter1RaceDescriptionContainer } from "./Chapter1RaceDescriptionContainer";

const Chapter1RaceSelection = ({ chp1_race_description }) => {
  

  const context = useContext(CharacterStatsContext);

  const handleElementChange = (raceName) => {
    
    context.setRaceChecked(raceName);
    
  };

  return (
    <form style={{ width: "75%" }}>
      {chp1_race_description.map((chp1_race_description) => (
        <Chapter1RaceDescriptionContainer
          key={`${chp1_race_description.id}RaceDescriptionContainer`}
          race_description={chp1_race_description}
          checkedElement={context.raceChecked}
          handleElementChange={handleElementChange}
        />
      ))}
    </form>
  );
};

export default Chapter1RaceSelection;
