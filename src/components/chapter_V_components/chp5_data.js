import { chp5_table2 } from "./chp5_table2";

export const dataHeight = (k100Result, raceName) => {
  const [raceData] = chp5_table2.filter((el) => el.race === raceName);

  const dataHeight = {
    height: 0,
    trId: "",
  };

  if (k100Result >= 1 && k100Result < 21) {
    dataHeight.height = raceData.heightMin + k100Result;
    dataHeight.trId = `_min${raceData.race}`;
  } else if (k100Result >= 21 && k100Result < 81) {
    dataHeight.height =
      raceData.heightAvr + (k100Result - 10 * Math.floor(k100Result / 10));
    dataHeight.trId = `_avg${raceData.race}`;
  } else if (k100Result >= 81 && k100Result < 100) {
    dataHeight.height = raceData.heightAvr + (k100Result - 70);
    dataHeight.trId = `_avg${raceData.race}`;
  } else if (k100Result === 100) {
    dataHeight.height = raceData.heightMax;
    dataHeight.trId = `_max${raceData.race}`; //premiowany rzut k10 ?!!! auto or not?
  }

  console.log("dataHeight: " + dataHeight.height);

  return dataHeight;
};

export const dataWeight = (k100Result, raceName) => {
  const [raceData] = chp5_table2.filter((el) => el.race === raceName);

  const dataWeight = {
    weight: 0,
    trId: "",
  };

  if (k100Result >= 1 && k100Result < 21) {
    dataWeight.weight = raceData.weightMin + k100Result;
    dataWeight.trId = `_min${raceData.race}`;
  } else if (k100Result >= 21 && k100Result < 81) {
    dataWeight.weight =
      raceData.weightAvr + (k100Result - 10 * Math.floor(k100Result / 10));
    dataWeight.trId = `_avg${raceData.race}`;
  } else if (k100Result >= 81 && k100Result < 100) {
    dataWeight.weight = raceData.weightAvr + (k100Result - 70);
    dataWeight.trId = `_avg${raceData.race}`;
  } else if (k100Result === 100) {
    dataWeight.weight = raceData.weightMax;
    dataWeight.trId = `_max${raceData.race}`; //premioewany rzut k10 ?!!! auto or not?
  }

  return dataWeight;
};
