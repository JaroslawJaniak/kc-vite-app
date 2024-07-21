import React, { useContext } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";

import { chp1_race_description } from "./chp1_race_description";
import Chapter1GenderSelection from "./Chapter1GenderSelectionComponent";
import Chapter1RaceSelection from "./Chapter1RaceSelectionComponent";

import { Button } from "@material-tailwind/react";

export const Chapter1 = () => {
  return (
    <section className="section mb-20">
      <h2>I. WYBÓR RASY I PŁCI</h2>

      <Chapter1GenderSelection />
      <hr className="my-3 " />
      <Chapter1RaceSelection chp1_race_description={chp1_race_description} />
    </section>
  );
};
