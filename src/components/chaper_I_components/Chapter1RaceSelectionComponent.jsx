import React, { useState, useContext } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import { Chapter1RaceDescriptionContainer } from "./Chapter1RaceDescriptionContainer";

const Chapter1RaceSelection = ({ chp1_race_description }) => {
  const context = useContext(CharacterStatsContext);

  return (
    <form>
      {chp1_race_description.map((chp1_race_description) => (
        <Chapter1RaceDescriptionContainer
          key={`${chp1_race_description.id}RaceDescriptionContainer`}
          race_description={chp1_race_description}
        />
      ))}
    </form>
  );
};

export default Chapter1RaceSelection;
