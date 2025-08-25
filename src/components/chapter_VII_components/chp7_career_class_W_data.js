export const careerData_ClassW = (k100buttonResult) => {
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
  } else if (k100buttonResult === 2) {
    career.name = "rzuć jeszcze raz i sprawdź na liście zawodów klasy średniej";
    career.description = " i sprawdź na liście zawodów klasy średniej";
  } else if (k100buttonResult >= 3 && k100buttonResult < 6) {
    career.name = "poborca";
    career.statsModifierKey = "CH";
    career.statsModifier = 10;
    career.n = 1;
    career.k = 10;
    career.description = "";
  } else if (k100buttonResult >= 6 && k100buttonResult < 9) {
    career.name = "marynarz";
    career.statsModifierKey = "MD";
    career.statsModifier = 2;
    career.description = "";
  } else if (k100buttonResult >= 9 && k100buttonResult < 12) {
    career.name = "bosman";
    career.statsModifierKey = "MD";
    career.statsModifier = 5;
    career.description = "";
  } else if (k100buttonResult >= 12 && k100buttonResult < 15) {
    career.name = "skryba";
    career.description = "";
  } else if (k100buttonResult >= 15 && k100buttonResult < 18) {
    career.name = "kucharz";
    career.description = "";
  } else if (k100buttonResult >= 18 && k100buttonResult < 21) {
    career.name = "zbrojmistrz";
    career.description = "";
  } else if (k100buttonResult >= 21 && k100buttonResult < 24) {
    career.name = "płatnerz";
    career.statsModifierKey = "ZW";
    career.description = "";
  } else if (k100buttonResult >= 24 && k100buttonResult < 27) {
    career.name = "malarz";

    career.description = "";
  } else if (k100buttonResult >= 27 && k100buttonResult < 30) {
    career.name = "złotnik";

    career.description = "";
  } else if (k100buttonResult >= 30 && k100buttonResult < 33) {
    career.name = "bibliotekarz";
    career.statsModifierKey = "MD";
    career.statsModifier = 20;
    career.description = "";
  } else if (k100buttonResult >= 33 && k100buttonResult < 36) {
    career.name = "treser";
    career.description = "";
  } else if (k100buttonResult >= 36 && k100buttonResult < 39) {
    career.name = "jeździec";
    career.description = "";
  } else if (k100buttonResult >= 39 && k100buttonResult < 42) {
    career.name = "sokolnik";

    career.description = "";
  } else if (k100buttonResult >= 42 && k100buttonResult < 45) {
    career.name = "woźnica";

    career.description = "";
  } else if (k100buttonResult >= 45 && k100buttonResult < 48) {
    career.name = "jubiler";

    career.description = "";
  } else if (k100buttonResult >= 48 && k100buttonResult < 51) {
    career.name = "tkacz gobelinów";

    career.description = "";
  } else if (k100buttonResult >= 51 && k100buttonResult < 54) {
    career.name = "rzeźbiarz";
    career.statsModifierKey = "ZR";
    career.statsModifier = 5;
    career.description = "";
  } else if (k100buttonResult >= 54 && k100buttonResult < 57) {
    career.name = "tancerz";
    career.statsModifierKey = "ZR";
    career.statsModifier = 10;
    career.description = "";
  } else if (k100buttonResult >= 57 && k100buttonResult < 60) {
    career.name = "tłumacz";

    career.description = "";
  } else if (k100buttonResult >= 60 && k100buttonResult < 63) {
    career.name = "architekt";

    career.description = "";
  } else if (k100buttonResult >= 63 && k100buttonResult < 66) {
    career.name = "minerolog";

    career.description = "";
  } else if (k100buttonResult >= 66 && k100buttonResult < 69) {
    career.name = "śpiewak";

    career.description = "";
  } else if (k100buttonResult >= 69 && k100buttonResult < 72) {
    career.name = "aktor";
    career.statsModifierKey = "PR";
    career.statsModifier = 20;
    career.description = "";
  } else if (k100buttonResult >= 72 && k100buttonResult < 75) {
    career.name = "poeta";
    career.statsModifierKey = "INT";
    career.statsModifier = 5;
    career.description = "";
  } else if (k100buttonResult >= 75 && k100buttonResult < 78) {
    career.name = "pisarz";
    career.statsModifierKey = "MD";
    career.statsModifier = 5;
    career.description = "";
  } else if (k100buttonResult >= 78 && k100buttonResult < 81) {
    career.name = "szkutnik";
    career.description = "";
  } else if (k100buttonResult >= 81 && k100buttonResult < 84) {
    career.name = "gracz (szuler)";
    career.description = "";
  } else if (k100buttonResult >= 84 && k100buttonResult < 87) {
    career.name = "myśliwy";

    career.description = "";
  } else if (k100buttonResult >= 87 && k100buttonResult < 90) {
    career.name = "religioznawca";
    career.statsModifierKey = "MD";
    career.statsModifier = 5;
    career.description = "";
  } else if (k100buttonResult >= 90 && k100buttonResult < 93) {
    career.name = "kolekcjoner";
    career.description = "";
  } else if (k100buttonResult >= 93 && k100buttonResult < 96) {
    career.name = "historyk";
    career.statsModifierKey = "MD";
    career.statsModifier = 5;
    career.description = "";
  } else if (k100buttonResult >= 96 && k100buttonResult < 99) {
    career.name = "akademik";

    career.description = "";
  } else if (k100buttonResult === 99) {
    career.name = "zawód lokalny";
    career.description = "";
  } else if (k100buttonResult === 100) {
    career.name = "zawód niezwyklew rzadko spotykany";
    career.description = "";
  }

  return career;
};
