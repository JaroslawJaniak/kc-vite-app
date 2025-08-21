import React, { useEffect, useContext } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import { NewLineText } from "../utils/NewLineText";
import styles from "./summary.module.css";

const StatRow = ({ label, value }) => (
  <p>
    <b>{label}: </b>
    {value}
  </p>
);

const calculateStat = (base, diceRoll, firstProf, secondProf, bonus) => {
  return (
    base +
    Math.max(diceRoll?.result1 || 0, diceRoll?.result2 || 0) +
    Math.max(firstProf, secondProf) +
    (bonus || 0)
  );
};

const Summary = () => {
  const context = useContext(CharacterStatsContext);

  useEffect(() => {
    return () => {};
  }, []);

  const stats = [
    { key: "ŻYW", label: "ŻYW", diceRoll: null },
    {
      key: "SF",
      label: "SF",
      diceRoll: context.diceRollResult.baseStatsDice.SF,
    }, //to-do: poprawić
    {
      key: "ZR",
      label: "ZR",
      diceRoll: context.diceRollResult.baseStatsDice.ZR,
    }, //to-do: poprawić
    {
      key: "SZ",
      label: "SZ",
      diceRoll: context.diceRollResult.baseStatsDice.SZ,
    },
    {
      key: "INT",
      label: "INT",
      diceRoll: context.diceRollResult.baseStatsDice.INT,
    }, //to-do: poprawić
    {
      key: "MD",
      label: "MD",
      diceRoll: context.diceRollResult.baseStatsDice.MD,
    },
    {
      key: "UM",
      label: "UM",
      diceRoll: context.diceRollResult.baseStatsDice.UM,
    }, //to-do: poprawić
    {
      key: "WI",
      label: "WI",
      diceRoll: context.diceRollResult.baseStatsDice.WI,
    }, //to-do: poprawić
    {
      key: "ZW",
      label: "ZW",
      diceRoll: context.diceRollResult.baseStatsDice.ZW,
    }, //to-do: poprawić
    {
      key: "CH",
      label: "CH",
      diceRoll: context.diceRollResult.baseStatsDice.CH,
    },
    {
      key: "PR",
      label: "PR",
      diceRoll: context.diceRollResult.baseStatsDice.PR,
    },
  ];

  return (
    <section className={`${styles.sticky} p-4 bg-white`}>
      <article>
        <StatRow label="Płeć" value={context.chpt1Info.sex} />
        <StatRow label="Rasa" value={context.chpt1Info.race} />
        <NewLineText text={context.chpt1Info.description} />
        <StatRow label="Miejsce urodzenia" value={context.chpt2Info.placeOfBirth} />
        <p>{context.chpt2Info.placeOfBirthDescription}</p>
        <StatRow label="Wyjściowa klasa społeczna" value={context.chpt2Info.socialClass} />
        <p>{context.chpt2Info.socialClassCastDescription}</p>
        <p>{context.chpt2Info.socialClassDescription}</p>
        <StatRow label="Roczny dochód" value={`${context.chpt2Info.incomeValue} złt`} />
        <StatRow label="Profesja" value={`${context.firstProfession} - ${context.secondProfession}`} />
        <StatRow label="Charakter" value={context.character} />
        <StatRow label="Wzrost" value={`${context.height} cm`} />
        <StatRow label="Waga" value={`${context.weight} kg`} />
        <p>
          <b>WSPÓŁCZYNNIKI:</b>
        </p>
        {stats.map(({ key, label, diceRoll }) => (
          <StatRow
            key={key}
            label={label}
            value={calculateStat(
              context.baseRaceStats[key],
              diceRoll,
              context.firstProfessionData.stats[key],
              context.secondProfessionData.stats[key],
              context.diceRollResult.bonusBaseStatsDice[key]
            )}
          />
        ))}
      </article>
    </section>
  );
};

export default Summary;
