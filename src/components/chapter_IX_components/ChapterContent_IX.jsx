import React, { useEffect, useContext } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import { NewLineText } from "../utils/NewLineText";

import { calculateStat } from "./data_stats";
import { actualStatValue } from "./data_stats";
import { sumByKey } from "./data_stats";
import { sumObjectValues } from "./data_stats";

const StatRow = ({ label, value, className }) => (
  <p className={className}>
    <b>{label} </b>
    {value}
  </p>
);

export const ChapterContent_IX = () => {
  const context = useContext(CharacterStatsContext);

  useEffect(() => {
    context.filterBaseRaceStatsByRaceName();

    return () => {};
  }, [context.filterBaseRaceStatsByRaceName()]);

  const stats = [
    {
      key: "ŻYW",
      label: "ŻYW",
      get diceRoll() {
        return context.safeMax(
          context.diceRollResult?.baseStatsDice?.[this.key]?.result1,
          context.diceRollResult?.baseStatsDice?.[this.key]?.result2,
          context.diceRollResult?.baseStatsDice?.[this.key]?.result3
        );
      },
      get baseValue() {
        return calculateStat(
          context.baseRaceStats[this.key],
          this.diceRoll,
          context.firstProfessionData.stats[this.key],
          context.secondProfessionData.stats[this.key],
          context.diceRollResult.bonusBaseStatsDice[this.key]
        );
      },
      get bonusSocialClassValue() {},
      get abilitieStatsModifier() {
        return (
          context.diceRollResult.abilitiesStatsModifier[this.key] + 20 || 0
        );
      },
      get careerStatsModifier() {
        return (
          sumByKey(context.career, this.key) +
          sumObjectValues(
            context.diceRollResult.careerStatsModifier[this.key] || 0
          )
        );
      },
    },
    {
      key: "SF",
      label: "SF",
      get diceRoll() {
        return context.safeMax(
          context.diceRollResult?.baseStatsDice?.[this.key]?.result1,
          context.diceRollResult?.baseStatsDice?.[this.key]?.result2,
          context.diceRollResult?.baseStatsDice?.[this.key]?.result3
        );
      },
      get baseValue() {
        return calculateStat(
          context.baseRaceStats[this.key],
          this.diceRoll,
          context.firstProfessionData.stats[this.key],
          context.secondProfessionData.stats[this.key],
          context.diceRollResult.bonusBaseStatsDice[this.key]
        );
      },
      get bonusSocialClassValue() {},
      get abilitieStatsModifier() {
        return (
          context.diceRollResult.abilitiesStatsModifier[this.key] + 20 || 0
        );
      },
      get careerStatsModifier() {
        return (
          sumByKey(context.career, this.key) +
          sumObjectValues(
            context.diceRollResult.careerStatsModifier[this.key] || 0
          )
        );
      },
    },
    {
      key: "ZR",
      label: "ZR",
      get diceRoll() {
        return context.safeMax(
          context.diceRollResult?.baseStatsDice?.[this.key]?.result1,
          context.diceRollResult?.baseStatsDice?.[this.key]?.result2,
          context.diceRollResult?.baseStatsDice?.[this.key]?.result3
        );
      },
      get baseValue() {
        return calculateStat(
          context.baseRaceStats[this.key],
          this.diceRoll,
          context.firstProfessionData.stats[this.key],
          context.secondProfessionData.stats[this.key],
          context.diceRollResult.bonusBaseStatsDice[this.key]
        );
      },
      get bonusSocialClassValue() {},
      get abilitieStatsModifier() {
        return (
          context.diceRollResult.abilitiesStatsModifier[this.key] + 20 || 0
        );
      },
      get careerStatsModifier() {
        return (
          sumByKey(context.career, this.key) +
          sumObjectValues(
            context.diceRollResult.careerStatsModifier[this.key] || 0
          )
        );
      },
    },
    {
      key: "SZ",
      label: "SZ",
      get diceRoll() {
        return context.safeMax(
          context.diceRollResult?.baseStatsDice?.[this.key]?.result1,
          context.diceRollResult?.baseStatsDice?.[this.key]?.result2,
          context.diceRollResult?.baseStatsDice?.[this.key]?.result3
        );
      },
      get baseValue() {
        return calculateStat(
          context.baseRaceStats[this.key],
          this.diceRoll,
          context.firstProfessionData.stats[this.key],
          context.secondProfessionData.stats[this.key],
          context.diceRollResult.bonusBaseStatsDice[this.key]
        );
      },
      get bonusSocialClassValue() {},
      get abilitieStatsModifier() {
        return (
          context.diceRollResult.abilitiesStatsModifier[this.key] + 20 || 0
        );
      },
      get careerStatsModifier() {
        return (
          sumByKey(context.career, this.key) +
          sumObjectValues(
            context.diceRollResult.careerStatsModifier[this.key] || 0
          )
        );
      },
    },
    {
      key: "INT",
      label: "INT",
      get diceRoll() {
        return context.safeMax(
          context.diceRollResult?.baseStatsDice?.[this.key]?.result1,
          context.diceRollResult?.baseStatsDice?.[this.key]?.result2,
          context.diceRollResult?.baseStatsDice?.[this.key]?.result3
        );
      },
      get baseValue() {
        return calculateStat(
          context.baseRaceStats[this.key],
          this.diceRoll,
          context.firstProfessionData.stats[this.key],
          context.secondProfessionData.stats[this.key],
          context.diceRollResult.bonusBaseStatsDice[this.key]
        );
      },
      get bonusSocialClassValue() {},
      get abilitieStatsModifier() {
        return (
          context.diceRollResult.abilitiesStatsModifier[this.key] + 20 || 0
        );
      },
      get careerStatsModifier() {
        return (
          sumByKey(context.career, this.key) +
          sumObjectValues(
            context.diceRollResult.careerStatsModifier[this.key] || 0
          )
        );
      },
    },
    {
      key: "MD",
      label: "MD",
      get diceRoll() {
        return context.safeMax(
          context.diceRollResult?.baseStatsDice?.[this.key]?.result1,
          context.diceRollResult?.baseStatsDice?.[this.key]?.result2,
          context.diceRollResult?.baseStatsDice?.[this.key]?.result3
        );
      },
      get baseValue() {
        return calculateStat(
          context.baseRaceStats[this.key],
          this.diceRoll,
          context.firstProfessionData.stats[this.key],
          context.secondProfessionData.stats[this.key],
          context.diceRollResult.bonusBaseStatsDice[this.key]
        );
      },
      get bonusSocialClassValue() {},
      get abilitieStatsModifier() {
        return (
          context.diceRollResult.abilitiesStatsModifier[this.key] + 20 || 0
        );
      },
      get careerStatsModifier() {
        return (
          sumByKey(context.career, this.key) +
          sumObjectValues(
            context.diceRollResult.careerStatsModifier[this.key] || 0
          )
        );
      },
    },
    {
      key: "UM",
      label: "UM",
      get diceRoll() {
        return context.safeMax(
          context.diceRollResult?.baseStatsDice?.[this.key]?.result1,
          context.diceRollResult?.baseStatsDice?.[this.key]?.result2,
          context.diceRollResult?.baseStatsDice?.[this.key]?.result3
        );
      },
      get baseValue() {
        return calculateStat(
          context.baseRaceStats[this.key],
          this.diceRoll,
          context.firstProfessionData.stats[this.key],
          context.secondProfessionData.stats[this.key],
          context.diceRollResult.bonusBaseStatsDice[this.key]
        );
      },
      get bonusSocialClassValue() {},
      get abilitieStatsModifier() {
        return (
          context.diceRollResult.abilitiesStatsModifier[this.key] + 20 || 0
        );
      },
      get careerStatsModifier() {
        return (
          sumByKey(context.career, this.key) +
          sumObjectValues(
            context.diceRollResult.careerStatsModifier[this.key] || 0
          )
        );
      },
    },
    {
      key: "WI",
      label: "WI",
      get diceRoll() {
        return context.safeMax(
          context.diceRollResult?.baseStatsDice?.[this.key]?.result1,
          context.diceRollResult?.baseStatsDice?.[this.key]?.result2,
          context.diceRollResult?.baseStatsDice?.[this.key]?.result3
        );
      },
      get baseValue() {
        return calculateStat(
          context.baseRaceStats[this.key],
          this.diceRoll,
          context.firstProfessionData.stats[this.key],
          context.secondProfessionData.stats[this.key],
          context.diceRollResult.bonusBaseStatsDice[this.key]
        );
      },
      get bonusSocialClassValue() {},
      get abilitieStatsModifier() {
        return (
          context.diceRollResult.abilitiesStatsModifier[this.key] + 20 || 0
        );
      },
      get careerStatsModifier() {
        return (
          sumByKey(context.career, this.key) +
          sumObjectValues(
            context.diceRollResult.careerStatsModifier[this.key] || 0
          )
        );
      },
    },
    {
      key: "ZW",
      label: "ZW",
      get diceRoll() {
        return context.safeMax(
          context.diceRollResult?.baseStatsDice?.[this.key]?.result1,
          context.diceRollResult?.baseStatsDice?.[this.key]?.result2,
          context.diceRollResult?.baseStatsDice?.[this.key]?.result3
        );
      },
      get baseValue() {
        return calculateStat(
          context.baseRaceStats[this.key],
          this.diceRoll,
          context.firstProfessionData.stats[this.key],
          context.secondProfessionData.stats[this.key],
          context.diceRollResult.bonusBaseStatsDice[this.key]
        );
      },
      get bonusSocialClassValue() {},
      get abilitieStatsModifier() {
        return (
          context.diceRollResult.abilitiesStatsModifier[this.key] + 20 || 0
        );
      },
      get careerStatsModifier() {
        return (
          sumByKey(context.career, this.key) +
          sumObjectValues(
            context.diceRollResult.careerStatsModifier[this.key] || 0
          )
        );
      },
    },
    {
      key: "CH",
      label: "CH",
      get diceRoll() {
        return context.safeMax(
          context.diceRollResult?.baseStatsDice?.[this.key]?.result1,
          context.diceRollResult?.baseStatsDice?.[this.key]?.result2,
          context.diceRollResult?.baseStatsDice?.[this.key]?.result3
        );
      },
      get baseValue() {
        return calculateStat(
          context.baseRaceStats[this.key],
          this.diceRoll,
          context.firstProfessionData.stats[this.key],
          context.secondProfessionData.stats[this.key],
          context.diceRollResult.bonusBaseStatsDice[this.key]
        );
      },
      get bonusSocialClassValue() {
        return context.socialClassData.statsModifier || 0;
      },
      get abilitieStatsModifier() {
        return (
          context.diceRollResult.abilitiesStatsModifier[this.key] + 20 || 0
        );
      },
      get careerStatsModifier() {
        return (
          sumByKey(context.career, this.key) +
          sumObjectValues(
            context.diceRollResult.careerStatsModifier[this.key] || 0
          )
        );
      },
    },
    {
      key: "PR",
      label: "PR",
      get diceRoll() {
        return context.safeMax(
          context.diceRollResult?.baseStatsDice?.[this.key]?.result1,
          context.diceRollResult?.baseStatsDice?.[this.key]?.result2,
          context.diceRollResult?.baseStatsDice?.[this.key]?.result3
        );
      },
      get baseValue() {
        return calculateStat(
          context.baseRaceStats[this.key],
          this.diceRoll,
          context.firstProfessionData.stats[this.key],
          context.secondProfessionData.stats[this.key],
          context.diceRollResult.bonusBaseStatsDice[this.key]
        );
      },
      get bonusSocialClassValue() {},
      get abilitieStatsModifier() {
        return (
          context.diceRollResult.abilitiesStatsModifier[this.key] + 20 || 0
        );
      },
      get careerStatsModifier() {
        return (
          sumByKey(context.career, this.key) +
          sumObjectValues(
            context.diceRollResult.careerStatsModifier[this.key] || 0
          )
        );
      },
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

  const proficiencyNumber = Math.max(
    context.firstProfessionData.proficiency.number,
    context.secondProfessionData.proficiency.number
  );

  const proficiencyBonusValue = Math.max(
    context.firstProfessionData.proficiency.bonusValue,
    context.secondProfessionData.proficiency.bonusValue
  );

  const proficiencyMinValue = Math.max(
    context.firstProfessionData.proficiency.minValue,
    context.secondProfessionData.proficiency.minValue
  );

  const contributionSF = Math.ceil(
    (context.baseRaceStats.SF +
      context.safeMax(
        context.diceRollResult?.baseStatsDice?.SF?.result1,
        context.diceRollResult?.baseStatsDice?.SF?.result2
      ) +
      Math.max(
        context.firstProfessionData.stats.SF,
        context.secondProfessionData.stats.SF
      ) +
      context.diceRollResult.bonusBaseStatsDice.SF) /
      10
  );

  const contributionZR = Math.ceil(
    (context.baseRaceStats.ZR +
      context.safeMax(
        context.diceRollResult?.baseStatsDice?.ZR?.result1,
        context.diceRollResult?.baseStatsDice?.ZR?.result2
      ) +
      Math.max(
        context.firstProfessionData.stats.ZR,
        context.secondProfessionData.stats.ZR
      ) +
      context.diceRollResult.bonusBaseStatsDice.ZR) /
      10
  );

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

  // className={`${styles.sticky} p-4 bg-white cursor-grab active:cursor-grabbing select-none overflow-auto`}

  return (
    <section
      className={`p-12 select-none w-full  bg-[url(/background_kc.jpg)] bg-contain bg-repeat-round`}
    >
      <div className="border rounded  p-4 mb-4 w-1/2 bg-white">
        {" "}
        <StatRow label="Płeć:" value={context.chpt1Info.sex} />
        <StatRow label="Rasa:" value={context.chpt1Info.race} />
        <NewLineText text={context.chpt1Info.description} className="pl-4" />
      </div>
      <div className="border rounded-sm shadow-md p-4 mb-4 w-1/2 bg-white">
        <StatRow
          label="Miejsce urodzenia:"
          value={context.chpt2Info.placeOfBirth}
        />

        <p className="pl-4">{context.chpt2Info.placeOfBirthDescription}</p>
      </div>
      <div className="border rounded-sm shadow-md p-4 mb-4 w-1/2 bg-white">
        <StatRow
          label="Wyjściowa klasa społeczna:"
          value={context.chpt2Info.socialClass}
        />
        <p className="pl-4">{context.chpt2Info.socialClassCastDescription}</p>
        <p className="pl-4">{context.chpt2Info.socialClassDescription}</p>

        <StatRow
          label="Roczny dochód:"
          value={`${context.chpt2Info.incomeValue} złt`}
        />
      </div>
      <div className="border rounded-sm shadow-md p-4 mb-4 w-1/2 bg-white">
        <StatRow label="UŁOMNOŚCI:" value={``} />
        <StatRow
          label="1."
          value={`${
            context.disabilities[0].disabilitieName
              ? context.disabilities[0].disabilitieName
              : "-"
          }`}
          className="pl-4"
        />
        <StatRow
          label="2."
          value={`${
            context.disabilities[1].disabilitieName
              ? context.disabilities[1].disabilitieName
              : "-"
          }`}
          className="pl-4"
        />
        <StatRow
          label="3."
          value={`${
            context.disabilities[2].disabilitieName
              ? context.disabilities[2].disabilitieName
              : "-"
          }`}
          className="pl-4"
        />
        <StatRow
          label="4."
          value={`${
            context.disabilities[3].disabilitieName
              ? context.disabilities[3].disabilitieName
              : "-"
          }`}
          className="pl-4"
        />
      </div>
      <div className="border rounded-sm shadow-md p-4 mb-4 w-1/2 bg-white">
        <StatRow label="ZDOLNOŚCI NADNATURALNE:" value={``} />
        <StatRow
          label="1."
          value={`${
            context.abilities[0].abilitieName
              ? context.abilities[0].abilitieName
              : "-"
          }`}
          className="pl-4"
        />
        <StatRow
          label="2."
          value={`${
            context.abilities[1].abilitieName
              ? context.abilities[1].abilitieName
              : "-"
          }`}
          className="pl-4"
        />
      </div>
      <div className="border rounded-sm shadow-md p-4 mb-4 w-1/2 bg-white">
        <StatRow
          label="Profesja:"
          value={`${context.firstProfession}  ${context.secondProfession}`}
        />
        <StatRow label="Charakter:" value={context.character} />
      </div>
      <div className="border rounded-sm shadow-md p-4 mb-4 w-1/2 bg-white">
        <StatRow label="Wzrost:" value={`${context.height} cm`} />
        <StatRow label="Waga:" value={`${context.weight} kg`} />
      </div>
      <div className="border rounded-sm shadow-md p-4 mb-4 w-1/2 bg-white">
        <p>
          <b>WSPÓŁCZYNNIKI:</b>
        </p>
        {stats.map(
          ({
            key,
            label,
            diceRoll,
            baseValue,
            bonusSocialClassValue,
            abilitieStatsModifier,
            careerStatsModifier,
          }) => (
            <StatRow
              key={key}
              label={label + ":"}
              value={[
                actualStatValue(
                  baseValue,
                  bonusSocialClassValue,
                  abilitieStatsModifier,
                  careerStatsModifier
                ),
                bonusSocialClassValue ||
                abilitieStatsModifier ||
                careerStatsModifier
                  ? `(`
                  : "",
                bonusSocialClassValue ||
                abilitieStatsModifier ||
                careerStatsModifier
                  ? baseValue
                  : "",
                bonusSocialClassValue && `+ ${bonusSocialClassValue}`,
                abilitieStatsModifier && `+ ${abilitieStatsModifier}`,
                careerStatsModifier && `+ ${careerStatsModifier}`,
                bonusSocialClassValue ||
                abilitieStatsModifier ||
                careerStatsModifier
                  ? `)`
                  : "",
              ]
                .filter(Boolean) // usuwa false/null/undefined
                .join(" ")}
              className="pl-4"
            />
          )
        )}
      </div>
      <div className="border rounded-sm shadow-md p-4 mb-4 w-1/2 bg-white">
        <p>
          <b>ODPORNOŚCI:</b>
        </p>{" "}
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
              className="pl-4"
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
              className="pl-4"
            />
          )
        )}
      </div>
      <div className="border rounded-sm shadow-md p-4 mb-4 w-1/2 bg-white">
        <p>
          <b>ZAWODY:</b>
        </p>{" "}
        <div hidden={!context.isClicked.careerNumber}>
          {Array.from({ length: context.careerNumber }, (_, i) => (
            <StatRow
              key={i}
              label={`${i + 1}.`}
              value={context.career[i]?.name}
              className="pl-4"
            />
          ))}
        </div>
      </div>
      <div className="border rounded-sm shadow-md p-4 mb-4 w-1/2 bg-white">
        <p>
          <b>BIEGŁOŚCI:</b>
        </p>{" "}
        {Array.from({ length: proficiencyNumber }, (_, i) => (
          <StatRow
            key={i}
            label={
              context.proficiency[i]
                ? `${i + 1}. ${context.proficiency[i]}: `
                : `${i + 1}.`
            }
            value={
              context.proficiency[i]
                ? `${
                    proficiencyBonusValue +
                    context.raceProficiencyBonus(context.proficiency[i]) +
                    Math.max(
                      context.diceRollResult.proficiency[`result${i}`] ?? 0,
                      proficiencyMinValue
                    )
                  } / TR ${
                    proficiencyBonusValue +
                    context.raceProficiencyBonus(context.proficiency[i]) +
                    Math.max(
                      context.diceRollResult.proficiency[`result${i}`] ?? 0,
                      proficiencyMinValue
                    ) +
                    contributionSF +
                    contributionZR
                  }`
                : "-"
            }
            className="pl-4"
          />
        ))}
      </div>
    </section>
  );
};
