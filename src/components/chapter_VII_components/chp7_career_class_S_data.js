export const careerData_ClassS = (k100buttonResult) => {
  const career = {
    name: "",
    description: "",
    statsModifierKey: "",
    statsModifier: 0,
    n: 0,
    k: 0,
  };

  if (k100buttonResult === 1) {
    career.name = "rzuć jeszcze raz  i sprawdź na liście zawodów klasy niższej";
    career.description = " i sprawdź na liście zawodów klasy niższej";
  } else if (k100buttonResult >= 2 && k100buttonResult < 5) {
    career.name = "żebrak";
    career.description = "";
  } else if (k100buttonResult >= 5 && k100buttonResult < 8) {
    career.name = "goniec";

    career.description = "";
  } else if (k100buttonResult >= 8 && k100buttonResult < 11) {
    career.name = "stajenny";

    career.description = "";
  } else if (k100buttonResult >= 11 && k100buttonResult < 14) {
    career.name = "górnik";
    career.statsModifierKey = "SF";
    career.statsModifier = 20;
    career.n = 1;
    career.k = 10;
    career.isPremium = true;
    career.description = "";
  } else if (k100buttonResult >= 14 && k100buttonResult < 17) {
    career.name = "marynarz";
    career.description = "";
  } else if (k100buttonResult >= 17 && k100buttonResult < 20) {
    career.name = "tragarz";
    career.statsModifierKey = "SF";
    career.statsModifier = 10;
    career.description = "";
  } else if (k100buttonResult >= 20 && k100buttonResult < 23) {
    career.name = "służacy";
    career.description = "";
  } else if (k100buttonResult >= 23 && k100buttonResult < 26) {
    career.name = "kucharz";

    career.description = "";
  } else if (k100buttonResult >= 26 && k100buttonResult < 29) {
    career.name = "dozorca";

    career.description = "";
  } else if (k100buttonResult >= 29 && k100buttonResult < 32) {
    career.name = "krawiec";

    career.description = "";
  } else if (k100buttonResult >= 32 && k100buttonResult < 35) {
    career.name = "treser";

    career.description = "";
  } else if (k100buttonResult >= 35 && k100buttonResult < 38) {
    career.name = "fryzjer";
    career.description = "";
  } else if (k100buttonResult >= 38 && k100buttonResult < 41) {
    career.name = "ptasznik";
    career.description = "";
  } else if (k100buttonResult >= 41 && k100buttonResult < 44) {
    career.name = "woźnica";

    career.description = "";
  } else if (k100buttonResult >= 44 && k100buttonResult < 47) {
    career.name = "murarz";

    career.description = "";
  } else if (k100buttonResult >= 47 && k100buttonResult < 50) {
    career.name = "tkacz";

    career.description = "";
  } else if (k100buttonResult >= 50 && k100buttonResult < 53) {
    career.name = "rzeźbiarz";
    career.statsModifierKey = "ZR";
    career.statsModifier = 5;
    career.description = "";
  } else if (k100buttonResult >= 53 && k100buttonResult < 56) {
    career.name = "garbarz";

    career.description = "";
  } else if (k100buttonResult >= 56 && k100buttonResult < 59) {
    career.name = "bosman";

    career.description = "";
  } else if (k100buttonResult >= 59 && k100buttonResult < 62) {
    career.name = "grabarz";

    career.description = "";
  } else if (k100buttonResult >= 62 && k100buttonResult < 65) {
    career.name = "piekarz";

    career.description = "";
  } else if (k100buttonResult >= 65 && k100buttonResult < 68) {
    career.name = "kowal";
    career.statsModifierKey = "SF";
    career.statsModifier = 20;
    career.proficiencyModifier = 20;
    career.n = 1;
    career.k = 10;
    career.isPremium = true;

    career.description = "";
  } else if (k100buttonResult >= 68 && k100buttonResult < 71) {
    career.name = "stolarz";

    career.description = "";
  } else if (k100buttonResult >= 71 && k100buttonResult < 74) {
    career.name = "garncarz";

    career.description = "";
  } else if (k100buttonResult >= 74 && k100buttonResult < 77) {
    career.name = "skryba";

    career.description = "";
  } else if (k100buttonResult >= 77 && k100buttonResult < 80) {
    career.name = "kat";

    career.description = "";
  } else if (k100buttonResult >= 80 && k100buttonResult < 83) {
    career.name = "tłumacz";
    career.description = "";
  } else if (k100buttonResult >= 83 && k100buttonResult < 86) {
    career.name = "architekt";
    career.description = "";
  } else if (k100buttonResult >= 86 && k100buttonResult < 89) {
    career.name = "minerolog";

    career.description = "";
  } else if (k100buttonResult >= 89 && k100buttonResult < 92) {
    career.name = "płatnerz";

    career.description = "";
  } else if (k100buttonResult >= 92 && k100buttonResult < 95) {
    career.name = "złotnik";
    career.description = "";
  } else if (k100buttonResult >= 95 && k100buttonResult < 98) {
    career.name = "jubiler";

    career.description = "";
  } else if (k100buttonResult === 98) {
    career.name = "zawód lokalny";

    career.description = "";
  } else if (k100buttonResult === 99) {
    career.name = "rzuć jeszcze raz  i sprawdź na liście zawodów klasy wyższej";
    career.description = "sprawdź na liście zawodów klasy wyższej";
  } else if (k100buttonResult === 100) {
    career.name = "zawód niezwykle rzadko spotykany";
    career.description = "";
  }

  return career;
};
