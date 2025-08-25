export const careerData_ClassN = (k100buttonResult) => {
  const career = {
    name: "",
    description: "",
    statsModifierKey: "",
    statsModifier: 0,
    n: 0,
    k: 0,
  };

  if (k100buttonResult >= 1 && k100buttonResult < 4) {
    career.name = "żebrak";
    career.description = "";
  } else if (k100buttonResult >= 4 && k100buttonResult < 7) {
    career.name = "pastuch";
    career.description = "";
  } else if (k100buttonResult >= 7 && k100buttonResult < 10) {
    career.name = "stajenny";

    career.description = "";
  } else if (k100buttonResult >= 10 && k100buttonResult < 13) {
    career.name = "górnik";

    career.description = "";
  } else if (k100buttonResult >= 13 && k100buttonResult < 16) {
    career.name = "goniec";
    career.description = "";
  } else if (k100buttonResult >= 16 && k100buttonResult < 19) {
    career.name = "tragarz";
    career.statsModifierKey = "SF";
    career.statsModifier = 10;
    career.description = "";
  } else if (k100buttonResult >= 19 && k100buttonResult < 22) {
    career.name = "służący";
    career.description = "";
  } else if (k100buttonResult >= 22 && k100buttonResult < 25) {
    career.name = "rybak";
    career.statsModifierKey = "ZW";
    career.description = "";
  } else if (k100buttonResult >= 25 && k100buttonResult < 28) {
    career.name = "drwal";

    career.description = "";
  } else if (k100buttonResult >= 28 && k100buttonResult < 31) {
    career.name = "pilot";

    career.description = "";
  } else if (k100buttonResult >= 31 && k100buttonResult < 34) {
    career.name = "pływak";
    career.statsModifierKey = "SF";
    career.statsModifier = 10;
    career.n = 1;
    career.k = 10;
    career.isPremium = true;
    career.description = "";
  } else if (k100buttonResult >= 34 && k100buttonResult < 37) {
    career.name = "marynarz";
    career.statsModifierKey = "SF";
    career.statsModifier = 2;
    career.description = "";
  } else if (k100buttonResult >= 37 && k100buttonResult < 40) {
    career.name = "flisak";
    career.description = "";
  } else if (k100buttonResult >= 40 && k100buttonResult < 43) {
    career.name = "nurek";

    career.description = "";
  } else if (k100buttonResult >= 43 && k100buttonResult < 46) {
    career.name = "murarz";

    career.description = "";
  } else if (k100buttonResult >= 46 && k100buttonResult < 49) {
    career.name = "tkacz";

    career.description = "";
  } else if (k100buttonResult >= 49 && k100buttonResult < 52) {
    career.name = "rzeźbiarz";
    career.statsModifierKey = "ZR";
    career.statsModifier = 5;

    career.description = "";
  } else if (k100buttonResult >= 52 && k100buttonResult < 55) {
    career.name = "krawiec";
    career.statsModifierKey = "ZR";
    career.statsModifier = 5;
    career.description = "";
  } else if (k100buttonResult >= 55 && k100buttonResult < 58) {
    career.name = "pszczelarz";

    career.description = "";
  } else if (k100buttonResult >= 58 && k100buttonResult < 61) {
    career.name = "grabarz";

    career.description = "";
  } else if (k100buttonResult >= 61 && k100buttonResult < 64) {
    career.name = "stolarz";

    career.description = "";
  } else if (k100buttonResult >= 64 && k100buttonResult < 67) {
    career.name = "ogrodnik";

    career.description = "";
  } else if (k100buttonResult >= 67 && k100buttonResult < 70) {
    career.name = "zielarz";

    career.description = "";
  } else if (k100buttonResult >= 70 && k100buttonResult < 73) {
    career.name = "garncarz";
    career.statsModifierKey = "ZR";
    career.statsModifier = 5;
    career.description = "";
  } else if (k100buttonResult >= 73 && k100buttonResult < 76) {
    career.name = "kucharz";

    career.description = "";
  } else if (k100buttonResult >= 76 && k100buttonResult < 79) {
    career.name = "hodowca";

    career.description = "";
  } else if (k100buttonResult >= 79 && k100buttonResult < 82) {
    career.name = "woźnica";
    career.description = "";
  } else if (k100buttonResult >= 82 && k100buttonResult < 85) {
    career.name = "rolnik";
    career.description = "";
  } else if (k100buttonResult >= 85 && k100buttonResult < 88) {
    career.name = "piekarz";

    career.description = "";
  } else if (k100buttonResult >= 88 && k100buttonResult < 91) {
    career.name = "garbarz";

    career.description = "";
  } else if (k100buttonResult >= 91 && k100buttonResult < 94) {
    career.name = "kowal";
    career.statsModifierKey = "SF";
    career.statsModifier = 20;
    career.proficiencyModifier = 20;
    career.n = 1;
    career.k = 10;
    career.isPremium = true;
    career.description = "";
  } else if (k100buttonResult >= 94 && k100buttonResult < 97) {
    career.name = "młynarz";
    career.statsModifierKey = "SF";
    career.statsModifier = 20;

    career.n = 1;
    career.k = 10;
    career.isPremium = true;
    career.description = "";
  } else if (k100buttonResult === 97) {
    career.name = "zawód lokany z pośród zawodów klasy niższej";

    career.description = "";
  } else if (k100buttonResult === 98) {
    career.name =
      "rzuć jeszcze raz  i sprawdź na liście zawodów klasy średniej";
    career.description = "sprawdź na liście zawodów klasy średniej";
  } else if (k100buttonResult === 99) {
    career.name = "rzuć jeszcze raz  i sprawdź na liście zawodów klasy wyższej";
    career.description = "sprawdź na liście zawodów klasy wyższej";
  } else if (k100buttonResult === 100) {
    career.name = "zawód niezwykle rzadko spotykany";
    career.description = "";
  }

  return career;
};
