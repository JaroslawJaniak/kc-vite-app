import React, { useState, useEffect, useContext } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import chp2_info2 from "./chp2_info2";
import chp2_table_social_class from "./chp2_table-social-class";

import DiceButtonComponent from "../utils/buttons/kDice/DiceButtonComponent";

import { dataSocialClass } from "./chp2_socialClass_Data";

const ChapterContent_II_socialClass = () => {
  const context = useContext(CharacterStatsContext);

  const [socialClassState, setSocialClassState] = useState(
    "props.defaultSocialClass"
  );

  const [k100ResultState, setk100ResultState] = useState(
    "props.defaultSocialClassK100Result"
  );

  const [k100ResultState2, setk100ResultState2] = useState("dice_n  dice_k");
  const [table_trIdState, setTable_trIdState] = useState("");
  const [dice_n, setDice_n] = useState("0");
  const [dice_k, setDice_k] = useState("0");
  const [bonusStat, setSocialClassBonusStat] = useState("");
  const [beneficeValue, setBeneficeValue] = useState("");

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
      context.setSocialClassFullName(dataSocialClass(k).socialClassFullName);
      context.setSocialClassK100Result(k);
      context.setTableSocialClass_trId(dataSocialClass(k).table_trId);
      context.setDice_nSocialClass(dataSocialClass(k).n);
      context.setDice_kSocialClass(dataSocialClass(k).k);

      console.log(context.dice_nSocialClass + " ***");
      console.log(context.dice_kSocialClass + " ***");

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
      <p>{chp2_info2.tableLabel}</p>
      {chp2_table_social_class.map((chp2_table_social_class) => (
        <div>
          <h3>{chp2_table_social_class.socialClassName}</h3>
          <span>{chp2_table_social_class.socialClassDescription}</span>
          <table className={chp2_info2.tableClassname}>
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
      <div>
        <p>wyjściowa klasa społeczna:</p>
        <div className="grid grid-cols-5 gap-2 content-center">
          <DiceButtonComponent
            n={1}
            k={100}
            k100Result={context.socialClassK100Result}
            clicked={context.socialClassK100Clicked}
            handleStateChange={context.setSocialClassK100Clicked}
            onDiceRoll={k100RollResult}
          />
          <h3 className="text-lg font-bold pt-2">{context.socialClass}</h3>
        </div>
      </div>

      <div>
        <p>roczny dochód:</p>
        <div className="grid grid-cols-5 gap-2 content-center">
          <DiceButtonComponent
            n={context.dice_nSocialClass}
            k={context.dice_kSocialClass}
            k100Result={context.incomeValue}
            clicked={context.socialClassIncomeK100Clicked}
            handleStateChange={context.setSocialClassIncomeK100Clicked}
            onDiceRoll={k100RollIncomeResult}
          />
          <h3 className="text-lg font-bold pt-2">{context.incomeValue} złt</h3>
        </div>
      </div>
    </section>
  );
};

export default ChapterContent_II_socialClass;
