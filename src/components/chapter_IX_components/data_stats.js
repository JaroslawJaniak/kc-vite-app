export const calculateStat = (base, diceRoll, firstProf, secondProf, bonus) => {
  return base + diceRoll + Math.max(firstProf, secondProf) + (bonus || 0);
};

export const actualStatValue = (
  baseValue,
  bonusSocialClassValue,
  abilitieStatsModifier,
  careerStatsModifier
) => {
  console.log(
    "log: ",
    baseValue,
    bonusSocialClassValue,
    abilitieStatsModifier,
    careerStatsModifier
  );
  const actualStatValue =
   abilitieStatsModifier + careerStatsModifier + baseValue + ( bonusSocialClassValue ||
    0);

  return actualStatValue;
};

export function sumObjectValues(obj) {
  if (!obj || typeof obj !== "object") return 0;
  return Object.values(obj).reduce((sum, value) => sum + value, 0);
}

export function sumByKey(arr, key) {
  return arr.reduce(
    (acc, item) =>
      item.statsModifierKey === key ? acc + item.statsModifier : acc,
    0
  );
}

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
      return context.diceRollResult.abilitiesStatsModifier[this.key] + 20 || 0;
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
      return context.diceRollResult.abilitiesStatsModifier[this.key] + 20 || 0;
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
      return context.diceRollResult.abilitiesStatsModifier[this.key] + 20 || 0;
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
      return context.diceRollResult.abilitiesStatsModifier[this.key] + 20 || 0;
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
      return context.diceRollResult.abilitiesStatsModifier[this.key] + 20 || 0;
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
      return context.diceRollResult.abilitiesStatsModifier[this.key] + 20 || 0;
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
      return context.diceRollResult.abilitiesStatsModifier[this.key] + 20 || 0;
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
      return context.diceRollResult.abilitiesStatsModifier[this.key] + 20 || 0;
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
      return context.diceRollResult.abilitiesStatsModifier[this.key] + 20 || 0;
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
      return context.diceRollResult.abilitiesStatsModifier[this.key] + 20 || 0;
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
      return context.diceRollResult.abilitiesStatsModifier[this.key] + 20 || 0;
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
