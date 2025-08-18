import { createContext, useState } from "react";
import imageMap0 from "../assets/map0.jpg";
import { chp4_professionsList } from "../components/chapter_IV_components/chp4_professions";
import { chp1_race_description } from "../components/chaper_I_components/chp1_race_description";
import { chp6_table_prof_stats2 } from "../components/chapter_VI_components/chp6_table-prof-stats2";

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
  const [bonusStats, setSocialClassBonusStats] = useState({});
  const [incomeValue, setIncomeValue] = useState(0);
  const [socialClassIncomeK100Clicked, setSocialClassIncomeK100Clicked] =
    useState(false);
  const [isSocialClassNobility, setIsSocialClassNobility] = useState(false);

  const [disabilities, setDisabilities] = useState([]);
  const [disabilitiesK100Result, setDisabilitiesK100Result] = useState(0);
  const [disabilitiesK100Clicked, setDisabilitiesK100Clicked] = useState(false);
  const [disabilitiesChance, setDisabilitiesChance] = useState(100);

  const [abilities, setAbilities] = useState([]);
  const [abilitiesK100Result, setAbilitiesK100Result] = useState(0);
  const [abilitiesK100Clicked, setAbilitiesK100Clicked] = useState(false);
  const [abilitiesChance, setAbilitiesChance] = useState(100);

  const [firstProfession, setFirstProfession] = useState("");
  const [secondProfession, setSecondProfession] = useState("");
 
  const [firstProfessionInfo, setFirstProfessionInfo] = useState({
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
  });
  const [secondProfessionInfo, setSecondProfessionInfo] = useState({
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

  const [availableProfessions, setAvailableProfessions] =
    useState(chp4_professionsList);

  const [availableCharacters, setAvailableCharacters] = useState([]);

  const [firstProfessionCharacters, setFirstProfessionCharacters] = useState(
    []
  );
  const [secondProfessionCharacters, setSecondProfessionCharacters] = useState(
    []
  );

  const [character, setCharacter] = useState("");
  const [characterChecked, setCharacterChecked] = useState(false);

  const [renderProfessions, setRenderProfessions] =
    useState(chp4_professionsList);

  const [height, setHeight] = useState("");
  const [heightK100Result, setHeightK100Result] = useState("");
  const [heightK100Clicked, setHeightK100Clicked] = useState(false);
  const [tableHeight_tdId, setTableHeight_tdId] = useState("");

  const [weight, setWeight] = useState("");
  const [weightK100Result, setWeightK100Result] = useState("");
  const [weightK100Clicked, setWeightK100Clicked] = useState(false);
  const [tableWeight_tdId, setTableWeight_tdId] = useState("");

  // const renderCharacterSet = () => {
  //   // console.log("1. " + firstProfessionInfo.character);
  //   // console.log("2. " + secondProfessionInfo.character);
  //   const newCharList = firstProfessionInfo.character.filter((char1) =>
  //     secondProfessionInfo.character.some((char2) => char2 === char1)
  //   );

  //   //console.log("3. " + newCharList);
  //   setAvailableCharacters((prevList) => (prevList = newCharList));
  // };

  // const setDATAProfessionInfo = () => {
  //   if (firstProfession !== "") {
  //     const firstProfToSet = renderProfessions.filter(
  //       (prof) => prof.profName === firstProfession
  //     );
  //     setFirstProfessionInfo(...firstProfToSet);
  //   }

  //   if (secondProfession !== "") {
  //     const secondProfToSet = renderProfessions.filter(
  //       (prof) => prof.profName === secondProfession
  //     );
  //     setSecondProfessionInfo(...secondProfToSet);
  //   }
  // };

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

  const [profStats, setprofStats] = useState({
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

  const [secondProfStats, setsecondProfStats] = useState({
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

  const [diceRollResultBaseStats, setdiceRollResultBaseStats] = useState({
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

  const [rollK100ResultBaseStats, setRollK100Result] = useState({
    ŻYW: "",
    SF: "",
    ZR: "",
    SZ: "",
    INT: "",
    MD: "",
    UM: "",
    CH: "",
    PR: "",
    WI: "",
    ZW: "",
    O: "",
    W: "",
  });
  

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
    disabilitiesDice: false,
    abilitiesDice: false,
    HeightDice: false,
    WeightDice: false,
    baseStatsDice: {
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
      O: false,
      W: false,
    },
  });

  const toggleClick = (key, subKey = null) => {
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

  const filterProfStatsByFirstProf = () => {
    if (firstProfession !== "") {
      const [filteredProf] = chp6_table_prof_stats2.filter((profData) => {
        console.log(profData);
        return profData.name === firstProfession;
      });

      setprofStats(filteredProf);
    }
  };

  const filterProfStatsBySecondProf = () => {
    if (secondProfession !== "") {
      const [filteredProf] = chp6_table_prof_stats2.filter((profData) => {
        console.log(profData);
        return profData.name === secondProfession;
      });

      setsecondProfStats(filteredProf);
    }
  };

  const filterCharactersByProfession = () => {
    console.log(firstProfessionInfo.profName);
  };

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
    bonusStats,
    incomeValue,
  };
  const chpt3Info = { disabilities: "", abilities: "" };
  const chpt4Info = { proffesion1: "", proffesion2: "" };
  const chpt5Info = { weight: "", height: "" };
  const chpt6Info = {
    stats: {
      zyw: 0,
      sf: 0,
      zr: 0,
      sz: 0,
      md: 0,
      int: 0,
      um: 0,
      ch: 0,
      pr: 0,
      wi: 0,
      zw: 0,
      o: 0,
      w: 0,
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

    firstProfessionInfo,
    setFirstProfessionInfo,
    setSecondProfessionInfo,
    secondProfessionInfo,

    availableCharacters,
    setAvailableCharacters,
    filterCharactersByProfession,
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

    profStats,
    filterProfStatsByFirstProf,
    secondProfStats,
    filterProfStatsBySecondProf,

    diceRollResultBaseStats,
    setdiceRollResultBaseStats,
    rollK100ResultBaseStats,
    setRollK100Result,

    isClicked,
    toggleClick,
  };

  return (
    <CharacterStatsContext.Provider value={context}>
      {children}
    </CharacterStatsContext.Provider>
  );
};
