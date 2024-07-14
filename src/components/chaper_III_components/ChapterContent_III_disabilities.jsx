import React, { useContext, useState, useEffect } from "react";
import DiceButtonComponent from "../utils/buttons/kDice/DiceButtonComponent";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";

export const ChapterContent_III_disabilities = () => {
  const context = useContext(CharacterStatsContext);
  //const [chance, setChance] = useState(100);

  const disabilitie = {
    name: "",
    k100: 0,
  };

  const k100RollResult = (k) => {
    context.setDisabilitiesK100Result(k);

    if (k <= context.disabilitiesChance) {
      if (context.disabilitiesChance >= 0) {
        context.setDisabilitiesChance(
          100 - 5 * (context.disabilities.length + 1)
        );
        context.setDisabilitiesK100Clicked(true);
      }

      disabilitie.name = "newDisabilitie";
      disabilitie.k100 = context.disabilitiesK100Result;
      context.setDisabilities([...context.disabilities, disabilitie]);
    }
  };

  const renderDisabilitiesChanceInfo = (index) => {
    if (
      context.disabilitiesChance > 0 &&
      context.disabilitiesK100Result <= context.disabilitiesChance
    ) {
      return `(${100 - 5 * (index + 1)} % szansa na ułomność) RZUĆ PONOWNIE!`;
    }
    return "";
  };

  const renderDisabilities = () => {
    if (context.disabilities.length) {
      return context.disabilities.map((disabilitie, index) => (
        <p>
          {disabilitie.name}
          {disabilitie.k100} <span>{renderDisabilitiesChanceInfo(index)}</span>{" "}
        </p>
      ));
    } else return <p>Brak;</p>;
  };

  return (
    <article>
      <h3>III.a Ułomności</h3>
      Czy postać ma ułomność {`(${context.disabilitiesChance} % szansa)`}
      <DiceButtonComponent
        n={1}
        k={100}
        k100Result={context.disabilitiesK100Result}
        clicked={
          !(context.disabilitiesK100Result <= context.disabilitiesChance)
        }
        handleStateChange={context.setDisabilitiesK100Clicked}
        onDiceRoll={k100RollResult}
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5  mb-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      />
      {renderDisabilities()}
    </article>
  );
};
