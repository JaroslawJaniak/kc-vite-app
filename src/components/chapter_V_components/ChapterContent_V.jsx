import React, { useState, useEffect, useContext } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";

import ChapterContent_V_table1 from "./ChapterContent_V_table1";
import ChapterContent_V_table2a from "./ChapterContent_V_table2a";
import ChapterContent_V_table2b from "./ChapterContent_V_table2b";
import { chp5_table2 } from "./chp5_table2";
import chp5_info from "./chp5_info";
import DiceButtonComponent from "../utils/buttons/kDice/DiceButtonComponent";

import { dataHeight } from "./chp5_data";
import { dataWeight } from "./chp5_data";

const ChapterContent_V = () => {
  const context = useContext(CharacterStatsContext);

  let isRaceGenderChecked = false;

  useEffect(() => {
    //console.log("m: " + context.maleChecked);
    //console.log("f: " + context.femaleChecked);
    //console.log("r: " + context.raceChecked);

    isRaceGenderChecked =
      (context.maleChecked || context.femaleChecked) && context.raceChecked;
    return () => {};
  }, []);

  const k100RollHeightResult = (k) => {
    if (k !== 0) {
      context.setHeightK100Result(k);
      context.setHeight(dataHeight(k, context.race).height);
    }
  };

  const k100RollWeightResult = (k) => {
    if (k !== 0) {
      context.setWeightK100Result(k);
      context.setWeight(dataWeight(k, context.race).weight);
    }
  };
  /*
  useEffect(() => {
    if (context.tablePlcOfBirth_trId !== "") {
      console.log(" effeect table1_tr" + context.tablePlcOfBirth_trId);

      document
        .getElementById("table1_tr" + context.tablePlcOfBirth_trId)
        .classList.add("activeTrTable");
    }
    return () => {};
  }, []);
*/
  return (
    <section className="section mb-20">
      <h3>{chp5_info.text1}</h3>
      <div
        hidden={
          isRaceGenderChecked || context.maleChecked || context.femaleChecked
        }
      >
        <p id="warning1">{chp5_info.text2}</p>
      </div>

      <div
        hidden={
          !(isRaceGenderChecked || context.maleChecked || context.femaleChecked)
        }
      >
        <div>
          {" "}
          <DiceButtonComponent
            n={1}
            k={100}
            k100Result={context.heightK100Result}
            clicked={context.heightK100Clicked}
            handleStateChange={context.setHeightK100Clicked}
            onDiceRoll={k100RollHeightResult}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5  my-2 mr-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          />{" "}
          wzrost: {context.height}
        </div>
        <div>
          {" "}
          <DiceButtonComponent
            n={1}
            k={100}
            k100Result={context.weightK100Result}
            clicked={context.weightK100Clicked}
            handleStateChange={context.setWeightK100Clicked}
            onDiceRoll={k100RollWeightResult}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5  my-2  mr-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          />{" "}
          waga: {context.weight}
        </div>
      </div>

      <div hidden={!isRaceGenderChecked && !context.maleChecked} >
        <ChapterContent_V_table2a item={chp5_table2} />
      </div>

      <div hidden={!isRaceGenderChecked && !context.femaleChecked}>
        <ChapterContent_V_table2b item={chp5_table2} />
      </div>

      <ChapterContent_V_table1 />
    </section>
  );
};

export default ChapterContent_V;
