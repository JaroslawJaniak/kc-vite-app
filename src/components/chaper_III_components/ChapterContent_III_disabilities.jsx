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
      />
      {renderDisabilities()}
    </article>
  );
};
