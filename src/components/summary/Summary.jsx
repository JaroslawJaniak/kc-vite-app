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
      diceRoll: context.safeMax(
        context.diceRollResult?.baseStatsDice?.SZ?.result1,
        context.diceRollResult?.baseStatsDice?.SZ?.result2
      ),
    },
    {
      key: "INT",
      label: "INT",
      diceRoll: context.safeMax(
        context.diceRollResult?.baseStatsDice?.INT?.result1,
        context.diceRollResult?.baseStatsDice?.INT?.result2
      ),
    },
    {
      key: "MD",
      label: "MD",
      diceRoll: context.safeMax(
        context.diceRollResult?.baseStatsDice?.MD?.result1,
        context.diceRollResult?.baseStatsDice?.MD?.result2
      ),
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
      diceRoll: context.safeMax(
        context.diceRollResult?.baseStatsDice?.CH?.result1,
        context.diceRollResult?.baseStatsDice?.CH?.result2
      ),
    },
    {
      key: "PR",
      label: "PR",
      diceRoll: context.safeMax(
        context.diceRollResult?.baseStatsDice?.PR?.result1,
        context.diceRollResult?.baseStatsDice?.PR?.result2
      ),
    },
  ];

  const immunity = [
    {
      key: "Odp1",
      label: "1. iluzja",
      diceRoll: context.diceRollResult.bonusImmunityDice.odp1,
    },
    {
      key: "Odp2",
      label: "2. sugestia",
      diceRoll: context.diceRollResult.bonusImmunityDice.odp2,
    },
    {
      key: "Odp3",
      label: "3. zaklęcia ",
      diceRoll: context.diceRollResult.bonusImmunityDice.odp3,
    },
    {
      key: "Odp4",
      label: "4. szok",
      diceRoll: context.diceRollResult.bonusImmunityDice.odp4,
    },
    {
      key: "Odp5",
      label: "5. czary specjalne",
      diceRoll: context.diceRollResult.bonusImmunityDice.odp5,
    },
    {
      key: "Odp6",
      label: "6. trucizny",
      diceRoll: context.diceRollResult.bonusImmunityDice.odp6,
    },
    {
      key: "Odp7",
      label: "7. zionięcia",
      diceRoll: context.diceRollResult.bonusImmunityDice.odp7,
    },
    {
      key: "  Odp8",
      label: "8. ogień",
      diceRoll: context.diceRollResult.bonusImmunityDice.odp8,
    },
    {
      key: "Odp9",
      label: "9. elektryczność",
      diceRoll: context.diceRollResult.bonusImmunityDice.odp9,
    },
    {
      key: "Odp10",
      label: "10. skamienienie",
      diceRoll: context.diceRollResult.bonusImmunityDice.odp10,
    },
  ];

  const immunityProf = [
    {
      key: "Odp1",
      label: "Odp1",
      immunityStat: Math.max(
        context.firstProfessionData.stats.Odp1,
        context.secondProfessionData.stats.Odp1
      ),
    },
    {
      key: "Odp2",
      label: "Odp2",
      immunityStat: Math.max(
        context.firstProfessionData.stats.Odp2,
        context.secondProfessionData.stats.Odp2
      ),
    },
    {
      key: "Odp3",
      label: "Odp3",
      immunityStat: Math.max(
        context.firstProfessionData.stats.Odp3,
        context.secondProfessionData.stats.Odp3
      ),
    },
    {
      key: "Odp4",
      label: "Odp4",
      immunityStat: Math.max(
        context.firstProfessionData.stats.Odp4,
        context.secondProfessionData.stats.Odp4
      ),
    },
    {
      key: "Odp5",
      label: "Odp5",
      immunityStat: Math.max(
        context.firstProfessionData.stats.Odp5,
        context.secondProfessionData.stats.Odp5
      ),
    },
    {
      key: "Odp6",
      label: "Odp6",
      immunityStat: Math.max(
        context.firstProfessionData.stats.Odp6,
        context.secondProfessionData.stats.Odp6
      ),
    },
    {
      key: "Odp7",
      label: "Odp7",
      immunityStat: Math.max(
        context.firstProfessionData.stats.Odp7,
        context.secondProfessionData.stats.Odp7
      ),
    },
    {
      key: "Odp8",
      label: "Odp8",
      immunityStat: Math.max(
        context.firstProfessionData.stats.Odp8,
        context.secondProfessionData.stats.Odp8
      ),
    },
    {
      key: "Odp9",
      label: "Odp9",
      immunityStat: Math.max(
        context.firstProfessionData.stats.Odp9,
        context.secondProfessionData.stats.Odp9
      ),
    },
    {
      key: "Odp10",
      label: "Odp10",
      immunityStat: Math.max(
        context.firstProfessionData.stats.Odp10,
        context.secondProfessionData.stats.Odp10
      ),
    },
  ];

  const contributionINT = Math.ceil(
    calculateStat(
      context.baseRaceStats["INT"],
      stats[4].diceRoll,
      context.firstProfessionData.stats["INT"],
      context.secondProfessionData.stats["INT"],
      context.diceRollResult.bonusBaseStatsDice["INT"]
    ) / 10
  );

  const contributionMD = Math.ceil(
    calculateStat(
      context.baseRaceStats["MD"],
      stats[5].diceRoll,
      context.firstProfessionData.stats["MD"],
      context.secondProfessionData.stats["MD"],
      context.diceRollResult.bonusBaseStatsDice["MD"]
    ) / 10
  );
  const contributionWI = Math.ceil(
    calculateStat(
      context.baseRaceStats["INT"],
      stats[9].diceRoll,
      context.firstProfessionData.stats["INT"],
      context.secondProfessionData.stats["INT"],
      context.diceRollResult.bonusBaseStatsDice["INT"]
    ) / 10
  );

  const contributionŻYW = Math.ceil(
    calculateStat(
      context.baseRaceStats["ŻYW"],
      stats[0].diceRoll,
      context.firstProfessionData.stats["ŻYW"],
      context.secondProfessionData.stats["ŻYW"],
      context.diceRollResult.bonusBaseStatsDice["ŻYW"]
    ) / 20
  );

  const contributionSF = Math.ceil(
    calculateStat(
      context.baseRaceStats["SF"],
      stats[1].diceRoll,
      context.firstProfessionData.stats["SF"],
      context.secondProfessionData.stats["SF"],
      context.diceRollResult.bonusBaseStatsDice["SF"]
    ) / 10
  );
  
// className={`${styles.sticky} p-4 bg-white cursor-grab active:cursor-grabbing select-none overflow-auto`}

  return (
    <section
      className={`p-4 bg-white cursor-grab active:cursor-grabbing select-none overflow-auto`}
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
        <p>
          <b>ODPORNOŚCI:</b>
          <StatRow
            key={"bPsych"}
            label={"BPsych" + ":"}
            value={
              contributionŻYW +
              contributionINT +
              contributionMD +
              context.diceRollResult.bonusImmunityDice.BPsych
            }
          />
          <StatRow
            key={"bFiz"}
            label={"BFiz" + ":"}
            value={
              contributionŻYW * 2 +
              contributionSF +
              context.diceRollResult.bonusImmunityDice.BFiz
            }
          />
        </p>
        {immunity.map(({ key, label, diceRoll }, index) =>
          index < 5 ? (
            <StatRow
              key={key}
              label={label + ":"}
              value={
                contributionŻYW +
                contributionINT +
                contributionMD +
                context.diceRollResult.bonusImmunityDice.BPsych +
                immunityProf[index].immunityStat +
                context.raceData.immunity[`Odp${index + 1}`] +
                context.diceRollResult.bonusImmunityDice[`odp${index + 1}`]
              }
            />
          ) : (
            <StatRow
              key={key}
              label={label + ":"}
              value={
                contributionŻYW * 2 +
                contributionSF +
                context.diceRollResult.bonusImmunityDice.BFiz +
                immunityProf[index].immunityStat +
                context.raceData.immunity[`Odp${index + 1}`] +
                context.diceRollResult.bonusImmunityDice[`odp${index + 1}`]
              }
            />
          )
        )}
      </article>
    </section>
  );
};

export default Summary;
