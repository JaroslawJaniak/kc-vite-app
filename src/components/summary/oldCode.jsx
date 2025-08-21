import React, { useEffect, useContext, useState, useMemo } from "react";
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

  useEffect(() => {
    return () => {};
  }, []);

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
          {context.chpt6Info.stats.ŻYW};
        </p>
        <p>
          <b> SF: </b>
          {context.baseRaceStats.SF +
            Math.max(
              context.diceRollResult.baseStatsDice.SF.result1,
              context.diceRollResult.baseStatsDice.SF.result2
            ) +
            Math.max(
              context.firstProfessionData.stats.SF,
              context.secondProfessionData.stats.SF
            ) +
            context.diceRollResult.bonusBaseStatsDice.SF}
          ;
        </p>
        <p>
          <b> ZR: </b>
          {context.baseRaceStats.ZR +
            Math.max(
              context.diceRollResult.baseStatsDice.ZR.result1,
              context.diceRollResult.baseStatsDice.ZR.result2
            ) +
            Math.max(
              context.firstProfessionData.stats.ZR,
              context.secondProfessionData.stats.ZR
            ) +
            context.diceRollResult.bonusBaseStatsDice.ZR}
        </p>
        <p>
          <b> SZ: </b>
          {context.baseRaceStats.SZ +
            context.diceRollResult.baseStatsDice.SZ +
            Math.max(
              context.firstProfessionData.stats.SZ,
              context.secondProfessionData.stats.SZ
            ) +
            context.diceRollResult.bonusBaseStatsDice.SZ}
        </p>
        <p>
          <b> INT: </b>
          {context.baseRaceStats.INT +
            context.diceRollResult.baseStatsDice.INT +
            Math.max(
              context.firstProfessionData.stats.INT,
              context.secondProfessionData.stats.INT
            ) +
            context.diceRollResult.bonusBaseStatsDice.INT}
        </p>
        <p>
          <b> MD: </b>
          {context.baseRaceStats.MD +
            context.diceRollResult.baseStatsDice.MD +
            Math.max(
              context.firstProfessionData.stats.MD,
              context.secondProfessionData.stats.MD
            ) +
            context.diceRollResult.bonusBaseStatsDice.MD}
        </p>
        <p>
          <b> UM: </b>
          {context.baseRaceStats.UM +
            Math.max(
              context.diceRollResult.baseStatsDice.UM.result1,
              context.diceRollResult.baseStatsDice.UM.result2
            ) +
            Math.max(
              context.firstProfessionData.stats.UM,
              context.secondProfessionData.stats.UM
            ) +
            context.diceRollResult.bonusBaseStatsDice.UM}
          ;
        </p>
        <p>
          <b> WI: </b>
          {context.baseRaceStats.WI +
            Math.max(
              context.diceRollResult.baseStatsDice.WI.result1,
              context.diceRollResult.baseStatsDice.WI.result2
            ) +
            Math.max(
              context.firstProfessionData.stats.WI,
              context.secondProfessionData.stats.WI
            ) +
            context.diceRollResult.bonusBaseStatsDice.WI}
          ;
        </p>
        <p>
          <b> ZW: </b>
          {context.baseRaceStats.ZW +
            Math.max(
              context.diceRollResult.baseStatsDice.ZW.result1,
              context.diceRollResult.baseStatsDice.ZW.result2
            ) +
            Math.max(
              context.firstProfessionData.stats.ZW,
              context.secondProfessionData.stats.ZW
            ) +
            context.diceRollResult.bonusBaseStatsDice.ZW}
        </p>
        <p>
          <b> CH: </b>
          {context.baseRaceStats.CH +
            context.diceRollResult.baseStatsDice.CH +
            Math.max(
              context.firstProfessionData.stats.CH,
              context.secondProfessionData.stats.CH
            ) +
            context.diceRollResult.bonusBaseStatsDice.CH}
        </p>
        <p>
          <b> PR: </b>
          {context.baseRaceStats.PR +
            context.diceRollResult.baseStatsDice.PR +
            Math.max(
              context.firstProfessionData.stats.PR,
              context.secondProfessionData.stats.PR
            ) +
            context.diceRollResult.bonusBaseStatsDice.PR}
        </p>
      </article>
    </section>
  );
};

export default Summary;
