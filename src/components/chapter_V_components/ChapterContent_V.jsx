import React, { useState, useEffect, useContext } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";

import ChapterContent_V_table1 from "./ChapterContent_V_table1";
import ChapterContent_V_table2a from "./ChapterContent_V_table2a";
import ChapterContent_V_table2b from "./ChapterContent_V_table2b";
import chp5_table2 from "./chp5_table2";
import chp5_info from "./chp5_info";
import DiceButtonComponent from "../utils/buttons/kDice/DiceButtonComponent";

const ChapterContent_V = () => {
  const context = useContext(CharacterStatsContext);

  let isRaceGenderChecked = false
    

  useEffect(() => {
    console.log("m: " + context.maleChecked);
    console.log("f: " + context.femaleChecked);
    console.log("r: " + context.raceChecked);

    isRaceGenderChecked =
      (context.maleChecked || context.femaleChecked) && context.raceChecked;
    return () => {};
  }, []);

  return (
    <div>
      <h3>{chp5_info.text1}</h3>
      <ChapterContent_V_table1 />
      <div
        hidden={
          !(isRaceGenderChecked || context.maleChecked || context.femaleChecked)
        }
      >
        <DiceButtonComponent
          n={1}
          k={100}
          k100Result
          clicked
          handleStateChange
          onDiceRoll
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5  my-2 mr-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        />
        <DiceButtonComponent
          n={1}
          k={100}
          k100Result
          clicked
          handleStateChange
          onDiceRoll
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5  my-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        />
      </div>

      <div hidden={!isRaceGenderChecked && !context.maleChecked}>
        <ChapterContent_V_table2a item={chp5_table2} />
      </div>

      <div hidden={!isRaceGenderChecked && !context.femaleChecked}>
        <ChapterContent_V_table2b item={chp5_table2} />
      </div>

      <div
        hidden={
          isRaceGenderChecked || context.maleChecked || context.femaleChecked
        }
      >
        <p id="warning1">{chp5_info.text2}</p>
        <div>
          <button id="goToRaceGender_button">{chp5_info.text3}</button>
        </div>
      </div>
    </div>
  );
};

export default ChapterContent_V;
