import { createContext, useState } from "react";
import imageMap0 from "../assets/map0.jpg";

import { professions } from "../data/data_prof_stats/professions";
import { chp1_race_description } from "../components/chaper_I_components/chp1_race_description";

export const CharacterStatsContext = createContext();

export const CharacterStatsContextProvider = ({ children }) => {
  const btnStyle =
    "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300  rounded text-xxs md:text-xs p-0.5 md:p-2  mb-2 w-8 md:w-12 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700";

  const svgArrowRight = (
    <svg
      class="w-6 h-6 text-gray-800 dark:text-white inline"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 12H5m14 0-4 4m4-4-4-4"
      />
    </svg>
  );

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

  const [socialClassData, setSocialClassData] = useState({});
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
    proficiency: {
      number: 0,
      minValue: 0,
      bonusValue: 0,
    },
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
    proficiency: {
      number: 0,
      minValue: 0,
      bonusValue: 0,
    },
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

  const proficiencyData = [
    {
      weaponGroupName: "bicze",
    },
    {
      weaponGroupName: "cepy",
    },
    {
      weaponGroupName: "dzidy",
    },
    {
      weaponGroupName: "głazy",
    },
    {
      weaponGroupName: "gwiazdki",
    },
    {
      weaponGroupName: "halabardy",
    },
    {
      weaponGroupName: "harpuny",
    },
    {
      weaponGroupName: "kopie",
    },
    {
      weaponGroupName: "lance",
    },

    {
      weaponGroupName: "kosy",
    },
    {
      weaponGroupName: "kusze ciężkie",
    },
    {
      weaponGroupName: "kusze typowe",
    },
    {
      weaponGroupName: "łańcuchy",
    },
    {
      weaponGroupName: "łuki proste",
    },
    {
      weaponGroupName: "łuki refleksyjne",
    },
    {
      weaponGroupName: "maczugi",
    },
    {
      weaponGroupName: "miecze ciężkie",
    },
    {
      weaponGroupName: "miecze lekkie",
    },
    {
      weaponGroupName: "młoty",
    },
    {
      weaponGroupName: "noże",
    },
    {
      weaponGroupName: "oskardy",
    },

    {
      weaponGroupName: "oszczepy",
    },
    {
      weaponGroupName: "pały",
    },
    {
      weaponGroupName: "piki",
    },
    {
      weaponGroupName: "proce",
    },
    {
      weaponGroupName: "półtalerze",
    },
    {
      weaponGroupName: "rapiery i szpady",
    },
    {
      weaponGroupName: "sieci",
    },
    {
      weaponGroupName: "sierpy",
    },
    {
      weaponGroupName: "szable",
    },
    {
      weaponGroupName: "szlapary",
    },
    {
      weaponGroupName: "sztylety",
    },
    {
      weaponGroupName: "toporomiecze",
    },
    {
      weaponGroupName: "topory obusieczne",
    },
    {
      weaponGroupName: "topory koliste",
    },
    {
      weaponGroupName: "topory typowe",
    },
    {
      weaponGroupName: "trójzęby",
    },
    {
      weaponGroupName: "tarsary",
    },
    {
      weaponGroupName: "walka bez broni",
    },
    {
      weaponGroupName: "włócznie",
    },
  ];

  const [availableProficiency, setAvailableProficiency] =
    useState(proficiencyData);

  const filterAvailableProficiency = (selectProficiencyName) => {
    console.log("selectProficiencyName: ", selectProficiencyName);

    const newProficiencyList = availableProficiency.filter(
      (proficiency) => proficiency.weaponGroupName !== selectProficiencyName
    );
    
    setAvailableProficiency(newProficiencyList);
  };

  const [disabilities, setDisabilities] = useState([
    {
      disabilitieName: "",
      disabilitieDescription: "",
      statsModifier: 0,
      isPremium: false,
      n: 0,
      k: 0,
    },
    {
      disabilitieName: "",
      disabilitieDescription: "",
      statsModifier: 0,
      isPremium: false,
      n: 0,
      k: 0,
    },
    {
      disabilitieName: "",
      disabilitieDescription: "",
      statsModifier: 0,
      isPremium: false,
      n: 0,
      k: 0,
    },
    {
      disabilitieName: "",
      disabilitieDescription: "",
      statsModifier: 0,
      isPremium: false,
      n: 0,
      k: 0,
    },
  ]);

  const [disabilitiesChance, setDisabilitiesChance] = useState(20);
  const [abilitiesChance, setAbilitiesChance] = useState(10);
  const [isDoubleBaseStatsDice, setIsDoubleBaseStatsDice] = useState(false);

  const [abilities, setAbilities] = useState([
    {
      abilitieName: "",
      abilitieDescription: "",
      statsModifierKey: "",
      statsModifier: 0,
      isPremium: false,
      n: 0,
      k: 0,
    },
    {
      abilitieName: "",
      abilitieDescription: "",
      statsModifierKey: "",
      statsModifier: 0,
      isPremium: false,
      n: 0,
      k: 0,
    },
  ]);

  const [career, setCareer] = useState([]);
  const [careerChild, setCareerChild] = useState([]);

  const proficiencyNumber = Math.max(
    firstProfessionData.proficiency.number,
    secondProfessionData.proficiency.number
  );

  const [proficiency, setProficiency] = useState(
    Array(proficiencyNumber).fill("")
  );

  function updateProficiency(value, index) {
    setProficiency((prev) => {
      const newValues = [...prev];
      newValues[index] = value;

      return newValues;
    });
  }

  const [careerS, setCareerS] = useState([]);
  const [diceRollResultS, setDiceRollResultS] = useState({});
  const [isClickedS, setIsClickedS] = useState({});

  // {
  //     name: "",
  //     description: "",
  //     statsModifierKey: "INT",
  //     statsModifier: 20,
  //     isPremium: true,
  //     n: 1,
  //     k: 10,
  //   },

  function initCareerSlots(count, classType) {
    const slots = Array.from({ length: count }, (_, i) => ({
      id: Date.now() + i,
      sourceClass: classType,
      resolved: false,
      name: null,
      diceResult: null,
      clicked: false,
    }));
    setCareerS(slots);
  }

  function updateCareerAtIndex(index, newCareer) {
    setCareerS((prev) => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        ...newCareer,
        resolved: true,
      };
      return updated;
    });
  }

  function addCareerSlot(sourceClass) {
    setCareerS((prev) => [
      ...prev,
      {
        id: Date.now(),
        sourceClass,
        resolved: false,
        name: null,
        diceResult: null,
        clicked: false,
      },
    ]);
  }

  function toggleClickP(path) {
    setIsClickedS((prev) => ({
      ...prev,
      [path.join(".")]: true,
    }));
  }

  const updateCareer = (newCareer) => {
    setCareer((prevCareer) => [
      ...prevCareer,
      {
        name: newCareer.name || "",
        description: newCareer.description || "",
        statsModifierKey: newCareer.statsModifierKey || "",
        statsModifier: newCareer.statsModifier || 0,
        n: newCareer.n || 0,
        k: newCareer.k || 0,
      },
    ]);
  };

  const updateCareerChild = (newCareer) => {
    setCareerChild((prevCareer) => [
      ...prevCareer,
      {
        name: newCareer.name || "",
        description: newCareer.description || "",
        statsModifierKey: newCareer.statsModifierKey || "",
        statsModifier: newCareer.statsModifier || 0,
        n: newCareer.n || 0,
        k: newCareer.k || 0,
      },
    ]);
  };

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

  //const safeMax = (...values) => Math.max(...values.map((v) => v ?? 0));
  const safeMax = (...values) => Math.max(0, ...values.map((v) => v ?? 0));

  const calculateStat1 = (statName) => {
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
  const calculateStat2 = (statName) => {
    const total =
      baseRaceStats[statName] +
      safeMax(
        diceRollResult?.baseStatsDice[statName]?.result1,
        diceRollResult?.baseStatsDice[statName]?.result2
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

  const calculateStat = (path) => {
    const total =
      baseRaceStats[path] +
      safeMax(
        diceRollResult?.baseStatsDice[path]?.result1,
        diceRollResult?.baseStatsDice[path]?.result2
      ) +
      Math.max(
        firstProfessionData.stats[path],
        secondProfessionData.stats[path]
      );

    // zapisujemy wynik w kontekście (np. do characterData.stats)
    updateCharacterData(["stats", path], total);

    return total;
  };

  const updateAbilitiesChanceData = (k) => {
    if (k <= abilitiesChance) {
      setAbilitiesChance(abilitiesChance - 5);
    }
  };

  const updateDisabilitiesChanceData = (k) => {
    if (k <= disabilitiesChance) {
      setDisabilitiesChance(disabilitiesChance - 5);
    }
  };

  function updateAbilitiesData(path, value) {
    setAbilities((prev) => {
      const newData = { ...prev };
      let current = newData;

      for (let i = 0; i < path.length - 1; i++) {
        current[path[i]] = { ...current[path[i]] }; // kopiujemy zagnieżdżenia
        current = current[path[i]];
      }

      current[path[path.length - 1]] = value;

      if (newData.abilitieName === "bołogosławieństwo obfitości")
        setIsDoubleBaseStatsDice(true);

      return newData;
    });
  }

  function updateDisbilitiesData(path, value) {
    setDisabilities((prev) => {
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

  // uniwersalna funkcja update
  const updateAbility = (key, value) => {
    setAbilities((prev) => ({
      ...prev,
      [key]: {
        ...prev[key], // zachowaj poprzednie pola w danym obiekcie
        ...value, // nadpisz nowymi wartościami
      },
    }));
  };

  // uniwersalna funkcja update dla tablicy
  const updateDisability = (index, value) => {
    setDisabilities((prev) =>
      prev.map(
        (item, i) =>
          i === index
            ? { ...item, ...value } // aktualizacja tylko danego elementu
            : item // reszta bez zmian
      )
    );
  };

  const getIndexFromKey = (key) => {
    if (typeof key !== "string") return null;
    const match = key.match(/\d+$/); // szuka cyfr na końcu
    return match ? Number(match[0]) : null;
  };

  const getCharsFromKey = (key, count, direction = "end") => {
    if (typeof key !== "string" || key.length === 0) return null;
    if (count <= 0) return "";

    if (direction === "start") {
      return key.slice(0, count); // pierwsze znaki
    }
    return key.slice(-count); // domyślnie ostatnie znaki
  };

  // przykłady użycia
  // console.log(getCharsFromKey("result123", 1, "end")); // "3"
  // console.log(getCharsFromKey("result123", 2, "end")); // "23"
  // console.log(getCharsFromKey("result123", 3, "start")); // "res"
  // console.log(getCharsFromKey("abc", 5, "start")); // "abc"

  // przykłady użycia:
  //updateDisability(0, { vision: "low" });
  //updateDisability(2, { mobility: "reduced" });

  // przykłady użycia
  //updateAbility("result1", { speed: 10 });
  //updateAbility("result2", { power: 5, range: "long" });

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

    proficiency: [],

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
        //console.log(raceData.raceName + "===" + race); // Debugging line
        // Check if the raceName matches
        return raceData.raceName === race; // This will return the first matching raceData object
      });

      //console.log(filteredRace);
      //console.log(filteredRace.stats.male);

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
    disabilitiesChanceDice: {},
    disabilitiesDice: {},
    abilitiesChanceDice: {},
    abilitiesDice: {},
    HeightDice: false,
    WeightDice: false,
    baseStatsDice: {
      ŻYW: false,
      SF: {},
      ZR: {},
      SZ: {},
      INT: {},
      MD: {},
      UM: {},
      CH: {},
      PR: {},
      WI: {},
      ZW: {},
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
    careerNumber: false,
    career: {},
    careerChild: {},
    careerStatsModifier: { SF: {}, ZR: {}, INT: {}, MD: {}, CH: {}, PR: {} },
    careerChildStatsModifier: {
      SF: {},
      ZR: {},
      INT: {},
      MD: {},
      CH: {},
      PR: {},
    },
    proficiency: {},
  });

  const [diceRollResult, setDiceRollResult] = useState({
    plcOfBirthDice: 0,
    socialClassDice: 0,
    incomeValueDice: 0,
    socialClassIncomeDice: 0,
    disabilitiesChanceDice: {},
    disabilitiesDice: {},
    abilitiesChanceDice: {},
    abilitiesDice: {},
    HeightDice: 0,
    WeightDice: 0,
    baseStatsDice: {
      ŻYW: 0,
      SF: {},
      ZR: {},
      SZ: {},
      INT: {},
      MD: {},
      UM: {},
      CH: {},
      PR: {},
      WI: {},
      ZW: {},
      O: {},
      W: {},
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
    abilitiesStatsModifier: {},
    careerNumber: 0,
    career: {},
    careerChild: {},
    careerStatsModifier: {
      SF: {},
      ZR: {},
      INT: {},
      MD: {},
      CH: {},
      PR: {},
    },
    careerChildStatsModifier: {
      SF: {},
      ZR: {},
      INT: {},
      MD: {},
      CH: {},
      PR: {},
    },
    proficiency: {},
  });

  function updateDiceRollResult(path, value) {
    setDiceRollResult((prev) => {
      const newState = { ...prev };
      let current = newState;

      for (let i = 0; i < path.length - 1; i++) {
        // jeśli nie istnieje, inicjalizujemy pusty obiekt
        if (!current[path[i]]) {
          current[path[i]] = {};
        } else {
          current[path[i]] = { ...current[path[i]] };
        }
        current = current[path[i]];
      }

      current[path[path.length - 1]] = value;

      return newState;
    });
  }

  const toggleClick = (keys) => {
    setIsClicked((prev) => {
      const update = (obj, depth = 0) => {
        const key = keys[depth];

        // ostatni klucz → toggle, jeśli brak to ustawiamy true
        if (depth === keys.length - 1) {
          return { ...obj, [key]: !obj[key] ?? true };
        }

        // jeśli brak klucza → inicjalizujemy pustym obiektem
        const next = obj[key] ? { ...obj[key] } : {};

        return {
          ...obj,
          [key]: update(next, depth + 1),
        };
      };

      return update(prev);
    });
  };

  // function updateDiceRollResult(mainKey, subKey, value) {
  //   setDiceRollResult((prev) => ({
  //     ...prev,
  //     [mainKey]: {
  //       ...prev[mainKey],
  //       [subKey]: value,
  //     },
  //   }));
  // }

  // function updateDiceRollResult1(path, value) {
  //   setDiceRollResult((prev) => {
  //     const newState = { ...prev };
  //     let current = newState;

  //     for (let i = 0; i < path.length - 1; i++) {
  //       current[path[i]] = { ...current[path[i]] }; // kopiujemy zagnieżdżenia
  //       current = current[path[i]];
  //     }

  //     current[path[path.length - 1]] = value;

  //     return newState;
  //   });
  // }

  // updateDiceRollResult(["baseStatsDice", "SF", "value2"], 15);
  //updateDiceRollResult(["incomeValueDice"], 42);
  //updateDiceRollResult(["baseStatsDice", "UM", "value1"], 7);

  // const toggleClickOld = (key, subKey = null) => {
  //   setIsClicked((prev) => {
  //     if (subKey) {
  //       return {
  //         ...prev,
  //         [key]: {
  //           ...prev[key],
  //           [subKey]: !prev[key][subKey],
  //         },
  //       };
  //     }
  //     return {
  //       ...prev,
  //       [key]: !prev[key],
  //     };
  //   });
  // };

  const toggleClick1 = (keys) => {
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

  const valueMD =
    baseRaceStats.MD +
    safeMax(
      diceRollResult?.baseStatsDice?.MD?.result1,
      diceRollResult?.baseStatsDice?.MD?.result2
    ) +
    Math.max(firstProfessionData.stats.MD, secondProfessionData.stats.MD) +
    diceRollResult.bonusBaseStatsDice.MD;

  const careerNumber = Math.max(
    0,
    Math.ceil((valueMD - diceRollResult.careerNumber) / 20)
  );

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

    socialClassData,
    setSocialClassData,
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
    safeMax,
    calculateStat1,
    calculateStat2,
    calculateStat,
    updateAbilitiesChanceData,
    updateDisabilitiesChanceData,
    updateAbilitiesData,
    updateDisbilitiesData,
    updateAbility,
    updateDisability,
    isDoubleBaseStatsDice,

    career,
    careerChild,
    updateCareer,
    updateCareerChild,
    careerNumber,

    proficiency,
    updateProficiency,
    availableProficiency,
    filterAvailableProficiency,

    getIndexFromKey,
    getCharsFromKey,

    btnStyle,
    svgArrowRight,

    initCareerSlots,
    updateCareerAtIndex,
    addCareerSlot,
    toggleClickP,
    careerS,
    diceRollResultS,
    isClickedS,
  };

  return (
    <CharacterStatsContext.Provider value={context}>
      {children}
    </CharacterStatsContext.Provider>
  );
};
