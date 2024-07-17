import { createContext, useState } from "react";
import imageMap0 from "../assets/map0.jpg";
import { chp4_professionsList } from "../components/chapter_IV_components/chp4_professions";

export const CharacterStatsContext = createContext();

export const CharacterStatsContextProvider = ({ children }) => {
  const [openMenuBtnState, setOpenMenuBtnState] = useState(false);
  const [openSummaryBtnState, setOpenSummaryBtnState] = useState(false);

  const [maleChecked, setMaleChecked] = useState(false);
  const [femaleChecked, setFemaleChecked] = useState(false);
  const [raceChecked, setRaceChecked] = useState("");
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

  const [profession, setProfession] = useState("");
  const [secondProfession, setSecondProfession] = useState("");
  const [professionChecked, setProfessionChecked] = useState(false);
  const [secondProfessionChecked, setSecondProfessionChecked] = useState(false);
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
  const [renderProfessions, setRenderProfessions] =
    useState(chp4_professionsList);
   
  const filterProfessionByRace = () => {
    const newProfList = availableProfessions.filter((prof) =>
      availableProfessionsByRace.some(
        (raceProf) => raceProf.profName === prof.profName
      )
    );

    setRenderProfessions(newProfList);
  };

  const chpt1Info = {
    name: "",
    sex: sex,
    race: raceChecked,
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
      zyw: "",
      sf: "",
      zr: "",
      sz: "",
      md: "",
      int: "",
      um: "",
      ch: "",
      pr: "",
      wi: "",
      zw: "",
      ob: "",
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
    disabilitiesK100Clicked,
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
    profession,
    setProfession,
    secondProfession,
    setSecondProfession,
    setSocialClassIncomeK100Clicked,
    secondProfessionChecked,
    setSecondProfessionChecked,
    exeptionChecked,
    setExeptionChecked,
    availableProfessionsByRace,
    setAvailableProfessionsByRace,
    isProfAvailable,
    setIsProfAvailable,
    filterProfessionByRace,
    renderProfessions,
  };

  return (
    <CharacterStatsContext.Provider value={context}>
      {children}
    </CharacterStatsContext.Provider>
  );
};
