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
    if (context.tableHeight_tdId !== "") {
      document
        .getElementById("td_height_male" + context.tableHeight_tdId)
        .classList.add("activeTrTable");
      document
        .getElementById("td_height_female" + context.tableHeight_tdId)
        .classList.add("activeTrTable");
    }

    if (context.tableWeight_tdId !== "") {
      document
        .getElementById("td_weight_male" + context.tableWeight_tdId)
        .classList.add("activeTrTable");
      document
        .getElementById("td_weight_female" + context.tableWeight_tdId)
        .classList.add("activeTrTable");
    }

    isRaceGenderChecked =
      (context.maleChecked || context.femaleChecked) && context.raceChecked;
    return () => {};
  }, []);

  const k100RollHeightResult = (k) => {
    if (k !== 0) {
      context.setHeightK100Result(k);
      context.setHeight(dataHeight(k, context.race).height);
      context.setTableHeight_tdId(dataHeight(k, context.race).tdId);

      document
        .getElementById("td_height_male" + dataHeight(k, context.race).tdId)
        .classList.add("activeTrTable");
      document
        .getElementById("td_height_female" + dataHeight(k, context.race).tdId)
        .classList.add("activeTrTable");
    }
  };

  const k100RollWeightResult = (k) => {
    if (k !== 0) {
      context.setWeightK100Result(k);
      context.setWeight(dataWeight(k, context.race).weight);
      context.setTableWeight_tdId(dataWeight(k, context.race).tdId);

      document
        .getElementById("td_weight_male" + dataWeight(k, context.race).tdId)
        .classList.add("activeTrTable");
      document
        .getElementById("td_weight_female" + dataWeight(k, context.race).tdId)
        .classList.add("activeTrTable");
    }
  };

  return (
    <section className="section mb-20">
      <h3>{chp5_info.text1}</h3>
      <div
        hidden={
          isRaceGenderChecked || context.maleChecked || context.femaleChecked
        }
      >
        <div className="border rounded md:w-96 h-32 m-auto mt-4 flex justify-center shadow-md">
          <p className="text-xl m-auto font-mono font-bold text-red-900">
            {chp5_info.text2}
          </p>
        </div>
      </div>

      <div
        hidden={
          !(isRaceGenderChecked || context.maleChecked || context.femaleChecked)
        }
      >
        <ChapterContent_V_table1 />
        <div>
          {" "}
          <DiceButtonComponent
            n={1}
            k={100}
            diceRollResult={context.heightK100Result}
            clicked={context.isClicked.HeightDice}
            disabled={context.isClicked.HeightDice}
            
            path={["HeightDice"]}
            toggleClick={context.toggleClick}
            updateDiceRollResult={context.updateDiceRollResult}
            resolveDiceRoll={k100RollHeightResult}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5  my-2 mr-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          />{" "}
          wzrost: {context.height} cm;
        </div>
        <div>
          {" "}
          <DiceButtonComponent
            n={1}
            k={100}
            diceRollResult={context.weightK100Result}
            clicked={context.isClicked.WeightDice}
            disabled={context.isClicked.WeightDice}
            
            path={["WeightDice"]}
            toggleClick={context.toggleClick}
            updateDiceRollResult={context.updateDiceRollResult}
            resolveDiceRoll={k100RollWeightResult}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5  my-2  mr-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          />{" "}
          waga: {context.weight} kg;
        </div>
      </div>

      <div hidden={!isRaceGenderChecked && !context.maleChecked}>
        <ChapterContent_V_table2a item={chp5_table2} />
      </div>

      <div hidden={!isRaceGenderChecked && !context.femaleChecked}>
        <ChapterContent_V_table2b item={chp5_table2} />
      </div>
    </section>
  );
};

export default ChapterContent_V;
