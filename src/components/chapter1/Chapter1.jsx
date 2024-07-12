import React from "react";
import { chp1_race_description } from "../../utils/chp1_race_description_array";
import Chapter1GenderSelection from "./Chapter1GenderSelectionComponent";

import Chapter1RaceSelection from "./Chapter1RaceSelectionComponent";

const Chapter1 = () => {
  console.log(chp1_race_description);

  return (
    <section className="section">
      <Chapter1GenderSelection />

      <Chapter1RaceSelection chp1_race_description={chp1_race_description} />
    </section>
  );
};

export default Chapter1;
