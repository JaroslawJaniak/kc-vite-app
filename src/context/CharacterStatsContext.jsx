import { createContext, useState } from "react";
import imageMap0 from "../assets/map0.jpg";

import { professions } from "../data/data_prof_stats/professions";
import { chp1_race_description } from "../components/chaper_I_components/chp1_race_description";

export const CharacterStatsContext = createContext();

export const CharacterStatsContextProvider = ({ children }) => {
  const [openMenuBtnState, setOpenMenuBtnState] = useState(false);
  const [openSummaryBtnState, setOpenSummaryBtnState] = useState(false);

  const [maleChecked, setMaleChecked] = useState(false);
  const [femaleChecked, setFemaleChecked] = useState(false);
  const [raceChecked, setRaceChecked] = useState(false);
  const [raceDescription, setRaceDescription] = useState("");
  const [sex, setSex] = useState("");
  const [race, setRace] = useState("");

  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [srcPlcOfBirthImage, setSrcPlcOfBirthImage] = useState(imageMap0);
  const [plcOfBirthK100Result, setPlcOfBirthK100Result] = useState(0);
  const [plcOfBirthK100Clicked, setPlcOfBirthK100Clicked] = useState(false);
  const [tablePlcOfBirth_trId, setTablePlcOfBirth_trId] = useState("");
  const [placeOfBirthDescription, setPlaceOfBirthDescription] = useState("");

  const [socialClass, setSocialClass] = useState("");
  const [socialClassFullName, setSocialClassFullName] = useState("");
  const [socialClassDescription, setSocialClassDescription] = useState("");
  const [socialClassCastDescription, setSocialClassCastDescription] =
    useState("");
  const [socialClassK100Result, setSocialClassK100Result] = useState("");
  const [socialClassK100Clicked, setSocialClassK100Clicked] = useState(false);
  const [tableSocialClass_trId, setTableSocialClass_trId] = useState("");
  const [dice_nSocialClass, setDice_nSocialClass] = useState("0");
  const [dice_kSocialClass, setDice_kSocialClass] = useState("0");
  const [socialClassBonusStats, setSocialClassBonusStats] = useState({});
  const [incomeValue, setIncomeValue] = useState(0);
  const [socialClassIncomeK100Clicked, setSocialClassIncomeK100Clicked] =
    useState(false);
  const [isSocialClassNobility, setIsSocialClassNobility] = useState(false);

  const [disabilities, setDisabilities] = useState(["", "", "", ""]);
  const [disabilitiesK100Result, setDisabilitiesK100Result] = useState(0);
  const [disabilitiesK100Clicked, setDisabilitiesK100Clicked] = useState(false);
  const [disabilitiesChance, setDisabilitiesChance] = useState(20);

  const [abilities, setAbilities] = useState(["", ""]);
  const [abilitiesK100Result, setAbilitiesK100Result] = useState(0);
  const [abilitiesK100Clicked, setAbilitiesK100Clicked] = useState(false);
  const [abilitiesChance, setAbilitiesChance] = useState(10);

  const [firstProfession, setFirstProfession] = useState("");
  const [secondProfession, setSecondProfession] = useState("");

  const [characterData, setCharacterData] = useState({
    raceData: { sex: "", race: "", description: "" },
    placeOfBirthData: { placeOfBirth: "", placeOfBirthDescription: "" },
    socialClassData: {
      socialClass: "",
      socialClassFullName: "",
      socialClassDescription: "",
      socialClassCastDescription: "",
      incomeValue: 0,
    },
    firstProfessionData: {},
    secondProfessionData: {},
    stats: {
      ŻYW: 0,
      SF: 0,
      ZR: 0,
      SZ: 0,
      INT: 0,
      MD: 0,
      UM: 0,
      CH: 0,
      PR: 0,
      WI: 0,
      ZW: 0,
      O: 0,
      W: 0,
    },
    immunity: {
      bPsych: 0,
      bFiz: 0,
      odp1: 0,
      odp2: 0,
      odp3: 0,
      odp4: 0,
      odp5: 0,
      odp6: 0,
      odp7: 0,
      odp8: 0,
      odp9: 0,
      odp10: 0,
    },
  });

  function updateCharacterData(path, value) {
    setCharacterData((prev) => {
      const newData = { ...prev };
      let current = newData;

      for (let i = 0; i < path.length - 1; i++) {
        current[path[i]] = { ...current[path[i]] }; // kopiujemy zagnieżdżenia
        current = current[path[i]];
      }

      current[path[path.length - 1]] = value;

      return newData;
    });
  }

  const calculateStat1 = (k, statName) => {
    // obliczamy wartość statystyki na podstawie rasy, profesji i wyników rzutów kośćmi
    const total =
      baseRaceStats[statName] +
      diceRollResult.baseStatsDice[statName] +
      Math.max(
        firstProfessionData.stats[statName],
        secondProfessionData.stats[statName]
      ) +
      diceRollResult.bonusBaseStatsDice[statName];

    // zapisujemy wynik w kontekście (np. do characterData.stats)
    updateCharacterData(["stats", statName], total);

    return total;
  };
  const calculateStat2 = (k, statName) => {
    const total =
      baseRaceStats[statName] +
      Math.max(
        diceRollResult.baseStatsDice[statName].result1,
        diceRollResult.baseStatsDice[statName].result2
      ) +
      Math.max(
        firstProfessionData.stats[statName],
        secondProfessionData.stats[statName]
      ) +
      diceRollResult.bonusBaseStatsDice[statName];

    // zapisujemy wynik w kontekście (np. do characterData.stats)
    updateCharacterData(["stats", statName], total);

    return total;
  };

  const updateAbilitiesData = (k) => {
    console.log(`context abilitiesChance1: `, abilitiesChance);
    if (k <= abilitiesChance) {
      setAbilitiesChance(abilitiesChance - 5);
      console.log(`context abilitiesChance2: `, abilitiesChance);
    }
  };

  const updateDisbilitiesData = (k) => {
    console.log(`context abilitiesChance1: `, disabilitiesChance);
    if (k <= disabilitiesChance) {
      setAbilitiesChance(disabilitiesChance - 5);
      console.log(`context abilitiesChance2: `, disabilitiesChance);
    }
  };

  const [raceData, setRaceData] = useState({
    id: "",

    raceName: "",

    availableProfessions: [
      { profName: "WOJOWNIK", maxLevel: "" },
      { profName: "ŁOWCA", maxLevel: "" },
      { profName: "GWARDZISTA", maxLevel: "" },
      { profName: "BARBARZYŃCA", maxLevel: "" },
      { profName: "RYCERZ", maxLevel: "" },
      { profName: "PALADYN", maxLevel: "" },
      { profName: "CZARNY RYCERZ", maxLevel: "" },
      { profName: "ZŁODZIEJ", maxLevel: "" },
      { profName: "ZABÓJCA", maxLevel: "" },
      { profName: "KUPIEC", maxLevel: "" },
      { profName: "KAPŁAN", maxLevel: "" },
      { profName: "DRUID", maxLevel: "" },
      { profName: "ASTROLOG", maxLevel: "" },
      { profName: "PÓŁBÓG", maxLevel: "" },
      { profName: "MAG", maxLevel: "" },
      { profName: "CZARNOKSIĘŻNIK", maxLevel: "" },
      { profName: "ILUZJONISTA", maxLevel: "" },
      { profName: "ALCHEMIK", maxLevel: "" },
    ],

    stats: {
      male: {
        ŻYW: 0,
        SF: 0,
        ZR: 0,
        SZ: 0,
        INT: 0,
        MD: 0,
        UM: 0,
        CH: 0,
        PR: 0,
        WI: 0,
        ZW: 0,
        O: 0,
        W: 0,
      },
      female: {
        ŻYW: 0,
        SF: 0,
        ZR: 0,
        SZ: 0,
        INT: 0,
        MD: 0,
        UM: 0,
        CH: 0,
        PR: 0,
        WI: 0,
        ZW: 0,
        O: 0,
        W: 0,
      },
    },
    immunity: {
      Odp1: 0,
      Odp2: 0,
      Odp3: 0,
      Odp4: 0,
      Odp5: 0,

      Odp6: 0,
      Odp7: 0,
      Odp8: 0,
      Odp9: 0,
      Odp10: 0,
    },
    description: "",
  });

  const [firstProfessionData, setFirstProfessionData] = useState({
    id: "",
    profName: "",
    castName: "",
    combiningProfessions: [
      ["", "", ""],
      ["", "", ""],
      ["", "", "", ""],
    ],
    exeptionCombiningProfessions: [],
    character: ["", "", "", "", "", "", "", "", ""],
    usedWeapons: "",
    usedArmour: "",
    uesedMagic: "",
    formation: "",
    stats: {
      ŻYW: 0,
      SF: 0,
      ZR: 0,
      SZ: 0,
      INT: 0,
      MD: 0,
      UM: 0,
      CH: 0,
      PR: 0,
      WI: 0,
      ZW: 0,
      Odp1: 0,
      Odp2: 0,
      Odp3: 0,
      Odp4: 0,
      Odp5: 0,
      Odp6: 0,
      Odp7: 0,
      Odp8: 0,
      Odp9: 0,
      Odp10: 0,
    },
  });
  const [secondProfessionData, setSecondProfessionData] = useState({
    id: "",
    profName: "",
    castName: "",
    combiningProfessions: [
      ["", "", ""],
      ["", "", ""],
      ["", "", "", ""],
    ],
    exeptionCombiningProfessions: [],
    character: ["", "", "", "", "", "", "", "", ""],
    usedWeapons: "",
    usedArmour: "",
    uesedMagic: "",
    formation: "",
    stats: {
      ŻYW: 0,
      SF: 0,
      ZR: 0,
      SZ: 0,
      INT: 0,
      MD: 0,
      UM: 0,
      CH: 0,
      PR: 0,
      WI: 0,
      ZW: 0,
      Odp1: 0,
      Odp2: 0,
      Odp3: 0,
      Odp4: 0,
      Odp5: 0,
      Odp6: 0,
      Odp7: 0,
      Odp8: 0,
      Odp9: 0,
      Odp10: 0,
    },
  });
  const [firstProfessionChecked, setFirstProfessionChecked] = useState(false);
  const [secondProfessionChecked, setSecondProfessionChecked] = useState(false);

  const [isSecondProfessionChecked, setIsSecondProfessionChecked] =
    useState(false);

  const [exeptionChecked, setExeptionChecked] = useState(false);
  const [availableProfessionsByRace, setAvailableProfessionsByRace] = useState([
    { profName: "WOJOWNIK", maxLevel: "" },
    { profName: "ŁOWCA", maxLevel: "" },
    { profName: "GWARDZISTA", maxLevel: "" },
    { profName: "BARBARZYŃCA", maxLevel: "" },
    { profName: "RYCERZ", maxLevel: "" },
    { profName: "PALADYN", maxLevel: "" },
    { profName: "CZARNY RYCERZ", maxLevel: "" },
    { profName: "ZŁODZIEJ", maxLevel: "" },
    { profName: "ZABÓJCA", maxLevel: "" },
    { profName: "KUPIEC", maxLevel: "" },
    { profName: "KAPŁAN", maxLevel: "" },
    { profName: "DRUID", maxLevel: "" },
    { profName: "ASTROLOG", maxLevel: "" },
    { profName: "PÓŁBÓG", maxLevel: "" },
    { profName: "MAG", maxLevel: "" },
    { profName: "CZARNOKSIĘŻNIK", maxLevel: "" },
    { profName: "ILUZJONISTA", maxLevel: "" },
    { profName: "ALCHEMIK", maxLevel: "" },
  ]);
  const [isProfAvailable, setIsProfAvailable] = useState();

  const [availableProfessions, setAvailableProfessions] = useState(professions);

  const [availableCharacters, setAvailableCharacters] = useState([]);

  const [firstProfessionCharacters, setFirstProfessionCharacters] = useState(
    []
  );
  const [secondProfessionCharacters, setSecondProfessionCharacters] = useState(
    []
  );

  const [character, setCharacter] = useState("");
  const [characterChecked, setCharacterChecked] = useState(false);

  const [renderProfessions, setRenderProfessions] = useState(professions);

  const [height, setHeight] = useState("");
  const [heightK100Result, setHeightK100Result] = useState("");
  const [heightK100Clicked, setHeightK100Clicked] = useState(false);
  const [tableHeight_tdId, setTableHeight_tdId] = useState("");

  const [weight, setWeight] = useState("");
  const [weightK100Result, setWeightK100Result] = useState("");
  const [weightK100Clicked, setWeightK100Clicked] = useState(false);
  const [tableWeight_tdId, setTableWeight_tdId] = useState("");
  const [underweight, setUnderweight] = useState(0);
  const [overweight, setOverweight] = useState(0);

  const filterProfessionByRace = () => {
    const newProfList = availableProfessions.filter((prof) =>
      availableProfessionsByRace.some(
        (raceProf) => raceProf.profName === prof.profName
      )
    );
    setRenderProfessions(newProfList);
  };

  const [baseRaceStats, setbaseRaceStats] = useState({
    ŻYW: 0,
    SF: 0,
    ZR: 0,
    SZ: 0,
    INT: 0,
    MD: 0,
    UM: 0,
    CH: 0,
    PR: 0,
    WI: 0,
    ZW: 0,
    O: 0,
    W: 0,
  });

  const filterBaseRaceStatsByRaceName = () => {
    if (race !== "") {
      const [filteredRace] = chp1_race_description.filter((raceData) => {
        console.log(raceData.raceName + "===" + race); // Debugging line
        // Check if the raceName matches
        return raceData.raceName === race; // This will return the first matching raceData object
      });

      console.log(filteredRace);
      console.log(filteredRace.stats.male);

      if (maleChecked && filteredRace.stats.male !== undefined) {
        setbaseRaceStats(filteredRace.stats.male);
      } else if (femaleChecked && filteredRace.stats.female !== undefined) {
        setbaseRaceStats(filteredRace.stats.female);
      }
    }
  };

  const [isChecked, setIsChecked] = useState({
    male: false,
    female: false,
    proffesion1: false,
    proffesion2: false,
  });

  const [isClicked, setIsClicked] = useState({
    plcOfBirthDice: false,
    socialClassDice: false,
    incomeValueDice: false,
    socialClassIncomeDice: false,
    disabilitiesChanceDice: {
      result1: false,
      result2: false,
      result3: false,
      result4: false,
    },
    disabilitiesDice: {
      result1: false,
      result2: false,
      result3: false,
      result4: false,
    },
    abilitiesChanceDice: { result1: false, result2: false },
    abilitiesDice: { result1: false, result2: false },
    HeightDice: false,
    WeightDice: false,
    baseStatsDice: {
      ŻYW: false,
      SF: { result1: false, result2: false },
      ZR: { result1: false, result2: false },
      SZ: false,
      INT: false,
      MD: false,
      UM: { result1: false, result2: false },
      CH: false,
      PR: false,
      WI: { result1: false, result2: false },
      ZW: { result1: false, result2: false },
    },
    bonusBaseStatsDice: {
      ŻYW: false,
      SF: false,
      ZR: false,
      SZ: false,
      INT: false,
      MD: false,
      UM: false,
      CH: false,
      PR: false,
      WI: false,
      ZW: false,
    },

    bonusImmunityDice: {
      BPsych: false,
      BFiz: false,
      odp1: false,
      odp2: false,
      odp3: false,
      odp4: false,
      odp5: false,
      odp6: false,
      odp7: false,
      odp8: false,
      odp9: false,
      odp10: false,
    },
  });

  const [diceRollResult, setDiceRollResult] = useState({
    plcOfBirthDice: 0,
    socialClassDice: 0,
    incomeValueDice: 0,
    socialClassIncomeDice: 0,
    disabilitiesChanceDice: {
      result1: 999,
      result2: 999,
      result3: 999,
      result4: 999,
    },
    disabilitiesDice: {
      result1: 0,
      result2: 0,
      result3: 0,
      result4: 0,
    },
    abilitiesChanceDice: { result1: 999, result2: 999 },
    abilitiesDice: { result1: 0, result2: 0 },
    HeightDice: 0,
    WeightDice: 0,
    baseStatsDice: {
      ŻYW: 0,
      SF: { result1: 0, result2: 0 },
      ZR: { result1: 0, result2: 0 },
      SZ: 0,
      INT: 0,
      MD: 0,
      UM: { result1: 0, result2: 0 },
      CH: 0,
      PR: 0,
      WI: { result1: 0, result2: 0 },
      ZW: { result1: 0, result2: 0 },
      O: 0,
      W: 0,
    },
    bonusBaseStatsDice: {
      ŻYW: 0,
      SF: 0,
      ZR: 0,
      SZ: 0,
      INT: 0,
      MD: 0,
      UM: 0,
      CH: 0,
      PR: 0,
      WI: 0,
      ZW: 0,
    },
    bonusImmunityDice: {
      BPsych: 0,
      BFiz: 0,
      odp1: 0,
      odp2: 0,
      odp3: 0,
      odp4: 0,
      odp5: 0,
      odp6: 0,
      odp7: 0,
      odp8: 0,
      odp9: 0,
      odp10: 0,
    },
  });

  // function updateDiceRollResult(mainKey, subKey, value) {
  //   setDiceRollResult((prev) => ({
  //     ...prev,
  //     [mainKey]: {
  //       ...prev[mainKey],
  //       [subKey]: value,
  //     },
  //   }));
  // }

  function updateDiceRollResult(path, value) {
    setDiceRollResult((prev) => {
      const newState = { ...prev };
      let current = newState;

      for (let i = 0; i < path.length - 1; i++) {
        current[path[i]] = { ...current[path[i]] }; // kopiujemy zagnieżdżenia
        current = current[path[i]];
      }

      current[path[path.length - 1]] = value;

      return newState;
    });
  }

  // updateDiceRollResult(["baseStatsDice", "SF", "value2"], 15);
  //updateDiceRollResult(["incomeValueDice"], 42);
  //updateDiceRollResult(["baseStatsDice", "UM", "value1"], 7);

  const toggleClickOld = (key, subKey = null) => {
    setIsClicked((prev) => {
      if (subKey) {
        return {
          ...prev,
          [key]: {
            ...prev[key],
            [subKey]: !prev[key][subKey],
          },
        };
      }
      return {
        ...prev,
        [key]: !prev[key],
      };
    });
  };

  const toggleClick = (keys) => {
    setIsClicked((prev) => {
      // Rekurencyjna pomocnicza funkcja, która klonuje tylko potrzebną gałąź
      const update = (obj, depth = 0) => {
        const key = keys[depth];

        // jeśli to ostatni klucz → toggle
        if (depth === keys.length - 1) {
          return { ...obj, [key]: !obj[key] };
        }

        // w przeciwnym razie → kopiujemy ten poziom i schodzimy głębiej
        return {
          ...obj,
          [key]: update(obj[key], depth + 1),
        };
      };

      return update(prev);
    });
  };

  const filterProfStatsByFirstProf = () => {
    if (firstProfession !== "") {
      const [filteredProf] = professions.filter((profData) => {
        //console.log(profData);
        return profData.profName === firstProfession;
      });

      setFirstProfessionData(filteredProf); // Assuming stats is the correct property to access
      console.log("Filtered Profession Data: ", filteredProf); // Debugging line
      //setprofStats(filteredProf.stats); // Assuming stats is the correct property to access
      //console.log("Filtered Profession Stats: ", filteredProf.stats); // Debugging line
    }
  };

  const filterProfStatsBySecondProf = () => {
    if (secondProfession !== "") {
      const [filteredProf] = professions.filter((profData) => {
        //console.log(profData);
        return profData.profName === secondProfession;
      });

      setSecondProfessionData(filteredProf);
      console.log("Filtered Second Profession Data: ", filteredProf); // Debugging line
      //setsecondProfStats(filteredProf.stats); // Assuming stats is the correct property to access
      //console.log("Filtered Second Profession Stats: ", filteredProf.stats); // Debugging line
    }
  };

  /*
  const filterProfStatsBySecondProf = () => {
    if (secondProfession !== "") {
      const [filteredProf] = chp6_table_prof_stats2.filter((profData) => {
        console.log(profData);
        return profData.name === secondProfession;
      });

      setsecondProfStats(filteredProf);
    }
  };
  */

  const filterCharactersByProfession = () => {};

  const chpt1Info = {
    name: "",
    sex: sex,
    race: race,
    description: raceDescription,
  };
  const chpt2Info = {
    placeOfBirth: placeOfBirth,
    plcOfBirthK100Result,
    plcOfBirthK100Clicked,
    srcPlcOfBirthImage,
    socialClass: socialClass,
    socialClassFullName,

    placeOfBirthDescription: placeOfBirthDescription,

    socialClassK100Result,
    socialClassK100Clicked,
    socialClassDescription,
    socialClassCastDescription,
    socialClassIncomeK100Clicked,
    tableSocialClass_trId,
    dice_nSocialClass,
    dice_kSocialClass,
    socialClassBonusStats,
    incomeValue,
  };
  const chpt3Info = { disabilities: "", abilities: "" };
  const chpt4Info = { proffesion1: "", proffesion2: "" };
  const chpt5Info = { weight: "", height: "" };
  const chpt6Info = {
    stats: {
      ŻYW: characterData.stats.ŻYW,
      SF: characterData.stats.SF,
      ZR: characterData.stats.ZR,
      SZ: characterData.stats.SZ,
      INT: characterData.stats.INT,
      MD: characterData.stats.MD,
      UM: characterData.stats.UM,
      CH: characterData.stats.CH,
      PR: characterData.stats.PR,
      WI: characterData.stats.WI,
      ZW: characterData.stats.ZW,
    },
  };

  const context = {
    chpt1Info,
    chpt2Info,
    chpt3Info,
    chpt4Info,
    chpt5Info,
    chpt6Info,
    openMenuBtnState,
    setOpenMenuBtnState,
    openSummaryBtnState,
    setOpenSummaryBtnState,
    maleChecked,
    femaleChecked,
    raceChecked,
    race,
    sex,
    setRace,
    placeOfBirth,
    srcPlcOfBirthImage,
    plcOfBirthK100Result,
    plcOfBirthK100Clicked,
    tablePlcOfBirth_trId,
    placeOfBirthDescription,
    socialClass,
    socialClassFullName,
    socialClassDescription,
    isSocialClassNobility,
    setIsSocialClassNobility,
    setSocialClassDescription,
    socialClassCastDescription,
    setSocialClassCastDescription,
    socialClassK100Result,
    socialClassK100Clicked,
    tableSocialClass_trId,
    dice_nSocialClass,
    dice_kSocialClass,
    incomeValue,
    socialClassIncomeK100Clicked,
    disabilities,
    setDisabilities,
    abilities,
    setAbilities,
    disabilitiesK100Result,
    setDisabilitiesK100Result,
    setDisabilitiesK100Clicked,
    abilitiesK100Result,
    setAbilitiesK100Result,
    abilitiesK100Clicked,
    setAbilitiesK100Clicked,
    disabilitiesChance,
    setDisabilitiesChance,
    abilitiesChance,
    setAbilitiesChance,
    setMaleChecked,
    setFemaleChecked,
    setRaceChecked,
    setRaceDescription,
    setSex,
    setPlaceOfBirth,
    setSrcPlcOfBirthImage,
    setPlcOfBirthK100Result,
    setPlcOfBirthK100Clicked,
    setTablePlcOfBirth_trId,
    setPlaceOfBirthDescription,
    setSocialClass,
    setSocialClassFullName,
    setSocialClassK100Result,
    setSocialClassK100Clicked,
    setTableSocialClass_trId,
    setDice_nSocialClass,
    setDice_kSocialClass,
    setSocialClassBonusStats,
    setIncomeValue,
    setSocialClassIncomeK100Clicked,

    firstProfession,
    setFirstProfession,
    secondProfession,
    setSecondProfession,
    secondProfessionChecked,
    setSecondProfessionChecked,
    exeptionChecked,
    setExeptionChecked,
    availableProfessionsByRace,
    setAvailableProfessionsByRace,
    isProfAvailable,
    setIsProfAvailable,
    filterProfessionByRace,
    filterCharactersByProfession,
    renderProfessions,

    firstProfessionChecked,
    setFirstProfessionChecked,
    isSecondProfessionChecked,
    setIsSecondProfessionChecked,

    raceData,
    setRaceData,
    firstProfessionData,
    setFirstProfessionData,
    setSecondProfessionData,
    secondProfessionData,

    availableCharacters,
    setAvailableCharacters,

    firstProfessionCharacters,
    setFirstProfessionCharacters,
    secondProfessionCharacters,
    setSecondProfessionCharacters,
    character,
    setCharacter,
    characterChecked,
    setCharacterChecked,

    height,
    setHeight,
    weight,
    setWeight,
    underweight,
    setUnderweight,
    overweight,
    setOverweight,

    heightK100Result,
    setHeightK100Result,
    heightK100Clicked,
    setHeightK100Clicked,
    tableHeight_tdId,
    setTableHeight_tdId,

    weightK100Result,
    setWeightK100Result,
    weightK100Clicked,
    setWeightK100Clicked,
    tableWeight_tdId,
    setTableWeight_tdId,
    filterBaseRaceStatsByRaceName,
    baseRaceStats,

    filterProfStatsByFirstProf,

    filterProfStatsBySecondProf,

    isClicked,
    toggleClick,
    diceRollResult,
    updateDiceRollResult,

    characterData,
    updateCharacterData,
    calculateStat1,
    calculateStat2,
    updateAbilitiesData,
    updateDisbilitiesData,
  };

  return (
    <CharacterStatsContext.Provider value={context}>
      {children}
    </CharacterStatsContext.Provider>
  );
};
