import React, { useState, useEffect, useContext } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import chp2_info2 from "./chp2_info2";
import chp2_table_social_class from "./chp2_table-social-class";

import DiceButtonComponent from "../utils/buttons/kDice/DiceButtonComponent";

import { dataSocialClass } from "./chp2_socialClass_Data";

const ChapterContent_II_socialClass = () => {
  const context = useContext(CharacterStatsContext);
  /* 
  const [socialClass, setSocialClass] = useState("props.defaultSocialClass");
  const [socialClassK100Result, setSocialClassK100Result] = useState(
    "props.defaultSocialClassK100Result"
  );
  const [tableSocialClass_trId, setTableSocialClass_trId] = useState("");
  const [dice_nSocialClass, setDice_nSocialClass] = useState(0);
  const [dice_kSocialClass, setDice_kSocialClass] = useState(0);
  const [bonusStats, setSocialClassBonusStats] = useState({});
  const [incomeValue, setIncomeValue] = useState(0);
  */

  const k100RollResult = (k) => {
    if (k !== 0) {
      context.setSocialClass(dataSocialClass(k).socialClassName);
      context.setSocialClassDescription(
        dataSocialClass(k).socialClassDescription
      );
      context.setSocialClassCastDescription(
        dataSocialClass(k).socialClassCastDescription
      );
      context.setSocialClassFullName(dataSocialClass(k).socialClassFullName);
      context.setIsSocialClassNobility(dataSocialClass(k).nobility);

      context.setSocialClassK100Result(k);
      context.setTableSocialClass_trId(dataSocialClass(k).table_trId);
      context.setDice_nSocialClass(dataSocialClass(k).n);
      context.setDice_kSocialClass(dataSocialClass(k).k);

      document
        .getElementById("table2_row" + dataSocialClass(k).table_trId)
        .classList.add("activeTrTable");

      //context.setSocialClassBonusStats(dataSocialClass(k).bonusStats);
    }
  };

  const k100RollIncomeResult = (k) => {
    if (k !== 0) {
      context.setIncomeValue(k);
    }
  };

  useEffect(() => {
    if (context.tableSocialClass_trId !== "") {
      document
        .getElementById("table2_row" + context.tableSocialClass_trId)
        .classList.add("activeTrTable");
    }
    return () => {};
  }, []);

  return (
    <section id="chapter_section2__social_class" class="section2__social_class">
      <h3>{chp2_info2.title}</h3>
      <div>
        <p>wyjściowa klasa społeczna:</p>
        <div className="flex gap-4">
          <DiceButtonComponent
            n={1}
            k={100}
            k100Result={context.socialClassK100Result}
            clicked={context.isClicked.socialClassDice}
            mainKey={"socialClassDice"}
            subKey
            toggleClick={context.toggleClick}
            onDiceRoll={k100RollResult}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5  mb-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          />
          <h3 className="text-lg font-bold pt-2">{context.socialClass}</h3>
        </div>
      </div>

      <div>
        <p>roczny dochód:</p>
        <div className="flex gap-4">
          <DiceButtonComponent
            n={context.dice_nSocialClass}
            k={context.dice_kSocialClass}
            k100Result={context.incomeValue}
            clicked={context.isClicked.incomeValueDice}
            mainKey={"incomeValueDice"}
            subKey
            toggleClick={context.toggleClick}
            onDiceRoll={k100RollIncomeResult}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5  mb-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          />
          <h3 className="text-lg font-bold pt-2">{context.incomeValue} złt</h3>
        </div>
      </div>
      <p>{chp2_info2.tableLabel}</p>
      {chp2_table_social_class.map((chp2_table_social_class) => (
        <div>
          <h3>{chp2_table_social_class.socialClassName}</h3>
          <span>{chp2_table_social_class.socialClassCastDescription}</span>
          <table className={"w-72 md:w-auto lg:w-3/4"}>
            {chp2_table_social_class.socialClassTableInfo.map(
              (socialClassTableInfo) => (
                <tr id={socialClassTableInfo.id}>
                  <td className="td__k100">{socialClassTableInfo.k100}</td>
                  <td>
                    <b>{socialClassTableInfo.label}</b>
                    {socialClassTableInfo.text}
                  </td>
                </tr>
              )
            )}
          </table>
        </div>
      ))}
    </section>
  );
};

export default ChapterContent_II_socialClass;
