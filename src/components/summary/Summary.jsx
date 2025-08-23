import React, { useEffect, useContext } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import { NewLineText } from "../utils/NewLineText";
import styles from "./summary.module.css";

const StatRow = ({ label, value }) => (
  <p>
    <b>{label} </b>
    {value}
  </p>
);

const Summary = () => {
  const context = useContext(CharacterStatsContext);

  const calculateStat = (base, diceRoll, firstProf, secondProf, bonus) => {
    return base + diceRoll + Math.max(firstProf, secondProf) + (bonus || 0);
  };

  useEffect(() => {
    return () => {};
  }, []);

  //tutaj porównać max i podem w calculate dodawać bez Max.math
  const stats = [
    { key: "ŻYW", label: "ŻYW", diceRoll: null },
    {
      key: "SF",
      label: "SF",
      diceRoll: context.safeMax(
        context.diceRollResult?.baseStatsDice?.SF?.result1,
        context.diceRollResult?.baseStatsDice?.SF?.result2
      ),
    },
    {
      key: "ZR",
      label: "ZR",
      diceRoll: context.safeMax(
        context.diceRollResult?.baseStatsDice?.ZR?.result1,
        context.diceRollResult?.baseStatsDice?.ZR?.result2
      ),
    },
    {
      key: "SZ",
      label: "SZ",
      diceRoll: context.diceRollResult.baseStatsDice.SZ,
    },
    {
      key: "INT",
      label: "INT",
      diceRoll: context.diceRollResult.baseStatsDice.INT,
    },
    {
      key: "MD",
      label: "MD",
      diceRoll: context.diceRollResult.baseStatsDice.MD,
    },
    {
      key: "UM",
      label: "UM",
      diceRoll: context.safeMax(
        context.diceRollResult?.baseStatsDice?.UM?.result1,
        context.diceRollResult?.baseStatsDice?.UM?.result2
      ),
    },
    {
      key: "WI",
      label: "WI",
      diceRoll: context.safeMax(
        context.diceRollResult?.baseStatsDice?.WI?.result1,
        context.diceRollResult?.baseStatsDice?.WI?.result2
      ),
    },
    {
      key: "ZW",
      label: "ZW",
      diceRoll: context.safeMax(
        context.diceRollResult?.baseStatsDice?.ZW?.result1,
        context.diceRollResult?.baseStatsDice?.ZW?.result2
      ),
    },
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
    <section
      className={`${styles.sticky} p-4 bg-white cursor-grab active:cursor-grabbing select-none overflow-auto`}
    >
      <article className="">
        <StatRow label="Płeć:" value={context.chpt1Info.sex} />
        <StatRow label="Rasa:" value={context.chpt1Info.race} />
        <NewLineText text={context.chpt1Info.description} />
        <StatRow
          label="Miejsce urodzenia:"
          value={context.chpt2Info.placeOfBirth}
        />
        <p>{context.chpt2Info.placeOfBirthDescription}</p>
        <StatRow
          label="Wyjściowa klasa społeczna:"
          value={context.chpt2Info.socialClass}
        />
        <p>{context.chpt2Info.socialClassCastDescription}</p>
        <p>{context.chpt2Info.socialClassDescription}</p>
        <StatRow
          label="Roczny dochód:"
          value={`${context.chpt2Info.incomeValue} złt`}
        />

        <StatRow label="UŁOMNOŚCI:" value={``} />
        <StatRow
          label="1."
          value={`${context.disabilities[0].disabilitieName}`}
        />
        <StatRow
          label="2."
          value={`${context.disabilities[1].disabilitieName}`}
        />
        <StatRow
          label="3."
          value={`${context.disabilities[2].disabilitieName}`}
        />
        <StatRow
          label="4."
          value={`${context.disabilities[3].disabilitieName}`}
        />

        <StatRow label="ZDOLNOŚCI NADNATURALNE:" value={``} />
        <StatRow label="1." value={`${context.abilities[0].abilitieName}`} />
        <StatRow label="2." value={`${context.abilities[1].abilitieName}`} />
        <StatRow
          label="Profesja:"
          value={`${context.firstProfession}  ${context.secondProfession}`}
        />
        <StatRow label="Charakter:" value={context.character} />
        <StatRow label="Wzrost:" value={`${context.height} cm`} />
        <StatRow label="Waga:" value={`${context.weight} kg`} />
        <p>
          <b>WSPÓŁCZYNNIKI:</b>
        </p>
        {stats.map(({ key, label, diceRoll }) =>
          key !== "CH" ? (
            <StatRow
              key={key}
              label={label + ":"}
              value={calculateStat(
                context.baseRaceStats[key],
                diceRoll,
                context.firstProfessionData.stats[key],
                context.secondProfessionData.stats[key],
                context.diceRollResult.bonusBaseStatsDice[key]
              )}
            />
          ) : (
            <StatRow
              key={key}
              label={label + ":"}
              value={
                calculateStat(
                  context.baseRaceStats[key],
                  diceRoll,
                  context.firstProfessionData.stats[key],
                  context.secondProfessionData.stats[key],
                  context.diceRollResult.bonusBaseStatsDice[key]
                ) + (context.socialClassData.statsModifier || 0)
              }
            />
          )
        )}
      </article>
    </section>
  );
};

export default Summary;
