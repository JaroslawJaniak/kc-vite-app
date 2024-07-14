import { createContext, useState } from "react";
import imageMap0 from "../assets/map0.jpg";

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
  const [socialClassK100Result, setSocialClassK100Result] = useState("s2");
  const [socialClassK100Clicked, setSocialClassK100Clicked] = useState(false);
  const [tableSocialClass_trId, setTableSocialClass_trId] = useState("");
  const [dice_nSocialClass, setDice_nSocialClass] = useState("0");
  const [dice_kSocialClass, setDice_kSocialClass] = useState("0");
  const [bonusStats, setSocialClassBonusStats] = useState({});
  const [incomeValue, setIncomeValue] = useState(0);
  const [socialClassIncomeK100Clicked, setSocialClassIncomeK100Clicked] =
    useState(false);

  const [disabilities, setDisabilities] = useState([]);
  const [disabilitiesK100Result, setDisabilitiesK100Result] = useState(0);
  const [disabilitiesK100Clicked, setDisabilitiesK100Clicked] = useState(false);
  const [disabilitiesChance, setDisabilitiesChance] = useState(100);

  const [abilities, setAbilities] = useState([]);
  const [abilitiesK100Result, setAbilitiesK100Result] = useState(0);
  const [abilitiesK100Clicked, setAbilitiesK100Clicked] = useState(false);
  const [abilitiesChance, setAbilitiesChance] = useState(100);

  const [profession, setProfession] = useState(false);
  const [secondProfession, setSecondProfession] = useState(false);
  const [secondProfessionChecked, setSecondProfessionChecked] = useState(false);
  const [exeptionChecked, setExeptionChecked] = useState(false);

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

    description: placeOfBirthDescription,

    socialClassK100Result,
    socialClassK100Clicked,
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
    setSocialClassIncomeK100Clicked,
    secondProfessionChecked,
    setSecondProfessionChecked,
    exeptionChecked,
setExeptionChecked
  };

  return (
    <CharacterStatsContext.Provider value={context}>
      {children}
    </CharacterStatsContext.Provider>
  );
};
