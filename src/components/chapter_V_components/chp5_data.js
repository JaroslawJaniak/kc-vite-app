import { chp5_table2 } from "./chp5_table2";
import kDicePremium from "../utils/buttons/kDice/kDicePremium";

export const dataHeight = (k100Result, raceName, sex) => {
  const [raceData] = chp5_table2.filter((el) => el.race === raceName);

  const dataHeight = {
    height: 0,
    tdId: "",
    
  };

  if (k100Result >= 1 && k100Result < 21) {
    dataHeight.height = raceData.heightMin + k100Result;
    dataHeight.tdId = `_min${raceData.race}`;
  } else if (k100Result >= 21 && k100Result < 81) {
    dataHeight.height =
      raceData.heightAvr + (k100Result - 10 * Math.floor(k100Result / 10));
    dataHeight.tdId = `_avg${raceData.race}`;
  } else if (k100Result >= 81 && k100Result < 100) {
    dataHeight.height = raceData.heightAvr + 10 + (k100Result - 80);
    dataHeight.tdId = `_avg${raceData.race}`;
  } else if (k100Result === 100) {
    dataHeight.height = raceData.heightMax + kDicePremium();
    dataHeight.tdId = `_max${raceData.race}`;
  }

  if (sex === "Kobieta" && raceName !== "Półolbrzymy") {
    dataHeight.height -= 10; // Adjust height for
  } else if (sex === "Kobieta" && raceName === "Półolbrzymy") {
    dataHeight.height += 10; // Adjust height for Półolbrzymy
  }

  return dataHeight;
};

export const dataWeight = (k100Result, raceName, sex) => {
  const [raceData] = chp5_table2.filter((el) => el.race === raceName);

  const dataWeight = {
    weight: 0,
    tdId: "",
    underweight: 0,
    overweight: 0,
  };

  if (k100Result >= 1 && k100Result < 21) {
    dataWeight.weight = raceData.weightMin + k100Result;
    dataWeight.tdId = `_min${raceData.race}`;
  } else if (k100Result >= 21 && k100Result < 81) {
    dataWeight.weight =
      raceData.weightAvr + (k100Result - 10 * Math.floor(k100Result / 10));
    dataWeight.tdId = `_avg${raceData.race}`;
  } else if (k100Result >= 81 && k100Result < 100) {
    dataWeight.weight = raceData.weightAvr + 10 + (k100Result - 80);
    dataWeight.tdId = `_avg${raceData.race}`;
  } else if (k100Result === 100) {
    dataWeight.weight = raceData.weightMax + kDicePremium();
    dataWeight.tdId = `_max${raceData.race}`;
  }

  if (sex === "Kobieta" && raceName !== "Półolbrzymy") {
    dataWeight.weight -= 10; // Adjust weight for
    if (dataWeight.weight < raceData.weightAvr) {
      dataWeight.underweight = raceData.weightAvr - 10 - dataWeight.weight; // Ensure weight is not negative
    } else if (dataWeight.weight > raceData.weightAvr) {
      dataWeight.underweight = dataWeight.weight - raceData.weightAvr;
    }
  } else if (sex === "Kobieta" && raceName === "Półolbrzymy") {
    dataWeight.weight += 10; // Adjust weight for Półolbrzymy
    if (dataWeight.weight < raceData.weightAvr) {
      dataWeight.underweight = raceData.weightAvr + 10 - dataWeight.weight; // Ensure weight is not negative
    } else if (dataWeight.weight > raceData.weightAvr + 20) {
      dataWeight.underweight = dataWeight.weight - raceData.weightAvr;
    }
  } else {
    if (dataWeight.weight < raceData.weightAvr) {
      dataWeight.underweight = raceData.weightAvr - dataWeight.weight; // Ensure weight is not negative
    } else if (dataWeight.weight > raceData.weightAvr + 10) {
      dataWeight.underweight = dataWeight.weight - raceData.weightAvr;
    }
  }

  return dataWeight;
};
