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
      className="section2__place_of_birth"
    >
      <h3>{chp2_info1.title}</h3>
      <p>{chp2_info1.tableLabel}</p>
      <table id="table1_origin_place_of_birth" className="w-2/5">
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

      <DiceButtonComponent
        n={1}
        k={100}
        k100Result={context.plcOfBirthK100Result}
        clicked={context.plcOfBirthK100Clicked}
        handleStateChange={context.setPlcOfBirthK100Clicked}
        onDiceRoll={k100RollResult}
      />

      <div>
        <div>
          miejsce urodzenia:
          <span id="place_of_birth"> {context.placeOfBirth}</span>
        </div>
        <img
          id="map"
          src={context.srcPlcOfBirthImage}
          alt="map"
          className="size-3/5"
        />
      </div>
    </section>
  );
};

export default ChapterContent_II_placeOfBirth;
