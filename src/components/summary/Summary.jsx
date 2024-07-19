import React, { useContext } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import { NewLineText } from "../utils/NewLineText";
import styles from "./summary.module.css";

const Summary = () => {
  const context = useContext(CharacterStatsContext);

  const renderCharacter = () => {
    const newCharList = context.firstProfessionInfo.character.filter((char1) =>
      context.secondProfessionInfo.character.some((char2) => char2 === char1)
    );

    console.log("vd: " + newCharList);
    return newCharList.map((el) => <p>{el}</p>);
  };

  return (
    <section className={`${styles.sticky} p-4  bg-white`}>
      <article>
        <p>
          <b> Płeć: </b>
          {context.chpt1Info.sex}
        </p>
        <p>
          <b>Rasa: </b>
          {context.chpt1Info.race}
        </p>
        <NewLineText text={context.chpt1Info.description} />

        <p>
          <b> Miejsce urodzenia:</b> {context.chpt2Info.placeOfBirth};
        </p>
        <p>{context.chpt2Info.placeOfBirthDescription}</p>

        <p>
          <b> Wyjściowa klasa społeczna:</b> {context.chpt2Info.socialClass}
        </p>
        <p>{context.chpt2Info.socialClassCastDescription}</p>
        <p>{context.chpt2Info.socialClassDescription}</p>
        <p>
          <b> Roczny dochód: </b>
          {context.chpt2Info.incomeValue}
        </p>
        <p>
          <b> Profesja: </b>
          {context.firstProfession} - {context.secondProfession}
        </p>
        <p>
          <b> Charakter1: </b>
          {context.firstProfessionInfo.character.map((el) => (
            <p>{el}</p>
          ))}
        </p>
        <p>
          <b> Charakter2: </b>
          {context.secondProfessionInfo.character.map((el) => (
            <p>{el}</p>
          ))}
        </p>
        <p>
          <b> Charakter3: </b>
          {renderCharacter()}
        </p>
        <p>
          <b> Charakter4: </b>
          {context.availableCharacters.map((el) => (
            <p>{el}</p>
          ))}
        </p>

        <p>{...context.firstProfessionInfo.profName}</p>
        <p>{...context.secondProfessionInfo.profName}</p>
      </article>
    </section>
  );
};

export default Summary;
