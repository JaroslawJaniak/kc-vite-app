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

    console.log("sm: " + newCharList);
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
          {context.chpt2Info.incomeValue} złt;
        </p>
        <p>
          <b> Profesja: </b>
          {context.firstProfession} - {context.secondProfession}
        </p>
        <p>
          <b> Charakter: </b>
          {context.character}
        </p>

        <p>
          <b> Wzrost: </b>
          {context.height} cm;
        </p>

        <p>
          <b> Waga: </b>
          {context.weight} kg;
        </p>
        <p>
          <b> WSPÓŁCZYNNIKI: </b>
        </p>
        <p>
          <b> ŻYW: </b>
          {context.characterData.stats.ŻYW};
        </p>
        <p>
          <b> SF: </b>
          {context.characterData.stats.SF};
        </p>
        <p>
          <b> ZR: </b>
          {context.characterData.stats.ZR};
        </p>
        <p>
          <b> SZ: </b>
          {context.characterData.stats.SZ};
        </p>
        <p>
          <b> INT: </b>
          {context.characterData.stats.INT};
        </p>
        <p>
          <b> MD: </b>
          {context.characterData.stats.MD};
        </p>
        <p>
          <b> UM: </b>
          {context.characterData.stats.UM};
        </p>
        <p>
          <b> WI: </b>
          {context.characterData.stats.WI};
        </p>
        <p>
          <b> ZW: </b>
          {context.characterData.stats.ZW};
        </p>
        <p>
          <b> CH: </b>
          {context.characterData.stats.CH};
        </p>
        <p>
          <b> PR: </b>
          {context.characterData.stats.PR};
        </p>
      </article>
    </section>
  );
};

export default Summary;
