import React, { useState } from "react";
import { Chapter1RaceDescriptionContainer } from "./Chapter1RaceDescriptionContainer";

const Chapter1RaceSelection = ({ chp1_race_description }) => {
  const [checkedElement, setCheckedElement] = useState(null);

  const handleElementChange = (element) => {
    setCheckedElement(element);
  };

  return (
    
      <form style={{width:'75%'}}>
        {chp1_race_description.map((chp1_race_description) => (
          <Chapter1RaceDescriptionContainer
            key={`${chp1_race_description.id}RaceDescriptionContainer`}
            race_description={chp1_race_description}
            checkedElement={checkedElement}
            handleElementChange={handleElementChange}
          />
        ))}
      </form>
    
  );
};

export default Chapter1RaceSelection;
