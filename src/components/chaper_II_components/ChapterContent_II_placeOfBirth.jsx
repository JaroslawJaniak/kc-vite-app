import React, { useState, useContext, useEffect } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import chp2_info1 from "./chp2_info1";
import DiceButtonComponent from "../utils/buttons/kDice/DiceButtonComponent";

import { chp2_place_of_birth } from "./chp2_table-place-of-birth";
import dataPlaceOfBirth from "./chp2_placeOfBirth_Data";

const ChapterContent_II_placeOfBirth = (props) => {
  const context = useContext(CharacterStatsContext);

  const k100RollResult = (k) => {
    if (k !== 0) {
      context.setPlaceOfBirth(dataPlaceOfBirth(k).plcBirth);
      context.setSrcPlcOfBirthImage(dataPlaceOfBirth(k).srcImage);
      context.setTablePlcOfBirth_trId(dataPlaceOfBirth(k).table_trId);
      context.setPlcOfBirthK100Result(k);
      context.setPlaceOfBirthDescription(dataPlaceOfBirth(k).description);
      document
        .getElementById("table1_tr" + dataPlaceOfBirth(k).table_trId)
        .classList.add("activeTrTable");
    }
  };

  useEffect(() => {
    if (context.tablePlcOfBirth_trId !== "") {
      console.log(" effeect table1_tr" + context.tablePlcOfBirth_trId);

      document
        .getElementById("table1_tr" + context.tablePlcOfBirth_trId)
        .classList.add("activeTrTable");
    }
    return () => {};
  }, []);

  /**
   * table.table_origin {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 640px;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
   * 
   * 
   */

  return (
    <section
      id="chapter_section2__place_of_birth"
      className="section2__place_of_birth "
    >
      <h3 className="">{chp2_info1.title}</h3>
      <DiceButtonComponent
        n={1}
        k={100}
        diceRollResult={context.plcOfBirthK100Result}
        clicked={context.isClicked.plcOfBirthDice}
        disabled={context.isClicked.plcOfBirthDice}
        path={["plcOfBirthDice"]}
        toggleClick={context.toggleClick}
        updateDiceRollResult={context.updateDiceRollResult}
        resolveDiceRoll={(path, diceRoll) => k100RollResult(diceRoll)}
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5  mb-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      />

      <p>{chp2_info1.tableLabel}</p>
      <table
        id="table1_origin_place_of_birth"
        className="w-72 md:w-auto lg:w-3/4 rounded-sm text-brown-700"
      >
        {chp2_place_of_birth.map((chp2_place_of_birth) => (
          <tr id={chp2_place_of_birth.id} className={"td__k100"}>
            <td className="w-14">{chp2_place_of_birth.k100}</td>
            <td>
              <b>{chp2_place_of_birth.placeOfBirth}</b>
              {chp2_place_of_birth.description}
            </td>
          </tr>
        ))}
      </table>

      <div>
        <div>
          miejsce urodzenia:
          <span id="place_of_birth"> {context.placeOfBirth}</span>
        </div>
        <img
          id="map"
          src={context.srcPlcOfBirthImage}
          alt="map"
          className="size-80 sm:size-96 border rounded border-gray-300"
        />
      </div>
    </section>
  );
};

export default ChapterContent_II_placeOfBirth;
