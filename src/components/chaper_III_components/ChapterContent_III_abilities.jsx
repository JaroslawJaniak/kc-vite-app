import React, { useContext, useState, useEffect } from "react";
import DiceButtonComponent from "../utils/buttons/kDice/DiceButtonComponent";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";

export const ChapterContent_III_abilities = () => {
  const context = useContext(CharacterStatsContext);
  //const [chance, setChance] = useState(100);

  const abilitie = {
    name: "",
    k100: 0,
  };

  const k100RollResult = (k) => {
    context.setAbilitiesK100Result(k);

    if (k <= context.abilitiesChance) {
      if (context.abilitiesChance >= 0) {
        context.setAbilitiesChance(
          100 - 5 * (context.abilities.length + 1)
        );
        context.setAbilitiesK100Clicked(true);
      }

      abilitie.name = "newAbilitie";
      abilitie.k100 = context.abilitiesK100Result;
      context.setAbilities([...context.abilities, abilitie]);
    }
  };

  const renderAbilitiesChanceInfo = (index) => {
    if (
      context.abilitiesChance > 0 &&
      context.abilitiesK100Result <= context.abilitiesChance
    ) {
      return `(${100 - 5 * (index + 1)} % szansa na zdolność nadnaturalną) RZUĆ PONOWNIE!`;
    }
    return "";
  };

  const renderAbilities = () => {
    if (context.abilities.length) {
      return context.abilities.map((abilitie, index) => (
        <p>
          {abilitie.name}
          {abilitie.k100} <span>{renderAbilitiesChanceInfo(index)}</span>{" "}
        </p>
      ));
    } else return <p>Brak;</p>;
  };

  return (
    <article>
      <h3>III.b Zdolności nadnaturalne</h3>
      Czy postać ma zdolność nadnaturalną {`(${context.abilitiesChance} % szansa)`}
      <DiceButtonComponent
        n={1}
        k={100}
        k100Result={context.abilitiesK100Result}
        clicked={
          !(context.abilitiesK100Result <= context.abilitiesChance)
        }
        handleStateChange={context.setAbilitiesK100Clicked}
        onDiceRoll={k100RollResult}
      />
      {renderAbilities()}
    </article>
  );
};
