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