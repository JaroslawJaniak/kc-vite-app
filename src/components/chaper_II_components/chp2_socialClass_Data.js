export const dataSocialClass = (k100buttonResult) => {
  const socialClass = {
    socialClassName: "",
    socialClassFullName: "",
    socialClassDescription: "",
    socialClassCastDescription: "",
    nobility: false,
    table_trId: "",
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

    n: 0,
    k: 0,
  };

  if (k100buttonResult >= 1 && k100buttonResult < 6) {
    socialClass.socialClassName = "NKN";
    socialClass.socialClassFullName = "NIŻSZA KLASA NIŻSZA";
    socialClass.socialClassDescription =
      " — niższa biedota (ubogie chłopstwo); roczny dochód 1k10 sztuk złota; Charyzma -15 pkt.;";
    socialClass.socialClassCastDescription = "BIEDOTA (chłopstwo)";
    socialClass.nobility = false;
    socialClass.n = 1;
    socialClass.k = 10;
    socialClass.stats.ch = -15;
  } else if (k100buttonResult >= 6 && k100buttonResult < 11) {
    socialClass.socialClassName = "ŚKN";
    socialClass.socialClassFullName = "ŚREDNIA KLASA NIŻSZA";
    socialClass.socialClassDescription =
      " — średnia biedota (typowe chłopstwo); roczny dochód 2k10 sztuk złota; Charyzma -10 pkt.;";
    socialClass.socialClassCastDescription = "BIEDOTA (chłopstwo)";
    socialClass.nobility = false;
    socialClass.table_trId = 2;
    socialClass.n = 2;
    socialClass.k = 10;
    socialClass.stats.ch = -10;
  } else if (k100buttonResult >= 11 && k100buttonResult < 16) {
    socialClass.socialClassName = "WKN";
    socialClass.socialClassFullName = "WYŻSZA KLASA NIŻSZA";
    socialClass.socialClassDescription =
      " — wyższa biedota (bogate chłopstwo); roczny dochód 5k10 szt. złota; Charyzma -5 pkt.; umie czytać;";
    socialClass.socialClassCastDescription = "BIEDOTA (chłopstwo)";
    socialClass.nobility = false;
    socialClass.table_trId = 3;
    socialClass.n = 5;
    socialClass.k = 10;
    socialClass.stats.ch = -5;
  } else if (k100buttonResult >= 16 && k100buttonResult < 36) {
    socialClass.socialClassName = "NKŚ";
    socialClass.socialClassFullName = "NIŻSZA KLASA ŚREDNIA";
    socialClass.socialClassDescription =
      " — ubogie mieszczaństwo; roczny dochód k50 złt; umie czytać i pisać;";
    socialClass.socialClassCastDescription =
      "MIESZCZAŃSTWO (ma prawo używać tytułu EL przed imieniem)";
    socialClass.nobility = false;
    socialClass.table_trId = 4;
    socialClass.n = 1;
    socialClass.k = 50;
  } else if (k100buttonResult >= 36 && k100buttonResult < 56) {
    socialClass.socialClassName = "ŚKŚ";
    socialClass.socialClassFullName = "ŚREDNIA KLASA ŚREDNIA";
    socialClass.socialClassDescription =
      " — średnie mieszczaństwo; roczny dochód k100 złt; umie czytać i pisać;";
    socialClass.socialClassCastDescription =
      "MIESZCZAŃSTWO (ma prawo używać tytułu EL przed imieniem)";
    socialClass.nobility = false;
    socialClass.table_trId = 5;
    socialClass.n = 1;
    socialClass.k = 100;
  } else if (k100buttonResult >= 56 && k100buttonResult < 76) {
    socialClass.socialClassName = "WKŚ";
    socialClass.socialClassFullName = "WYŻSZA KLASA ŚREDNIA";
    socialClass.socialClassDescription =
      " — bogate mieszczaństwo; roczny dochód 2k100 złt; umie czytać i pisać;";
    socialClass.socialClassCastDescription =
      "MIESZCZAŃSTWO (ma prawo używać tytułu EL przed imieniem)";
    socialClass.nobility = false;
    socialClass.table_trId = 6;
    socialClass.n = 2;
    socialClass.k = 100;
  } else if (k100buttonResult >= 76 && k100buttonResult < 86) {
    socialClass.socialClassName = "NKW";
    socialClass.socialClassFullName = "NIŻSZA KLASA WYŻSZA";
    socialClass.nobility = true;
    socialClass.socialClassDescription =
      " — uboga szlachta; roczny dochód k100 złt; umie czytać i pisać; CH +5 pkt.;";
    socialClass.socialClassCastDescription =
      "SZLACHTA (może używać tytułu TAN przed imieniem; tylko członkowie tej klasy społecznej mogą zostać rycerzami)";
    socialClass.table_trId = 7;
    socialClass.n = 1;
    socialClass.k = 100;
    socialClass.stats.ch = 5;
  } else if (k100buttonResult >= 86 && k100buttonResult < 91) {
    socialClass.socialClassName = "ŚKW";
    socialClass.socialClassFullName = "ŚREDNIA KLASA WYŻSZA";
    socialClass.nobility = true;
    socialClass.socialClassDescription =
      " — średnia szlachta; roczny dochód 2k100 złt; umie czytać i pisać; CH +10;";
    socialClass.socialClassCastDescription =
      "SZLACHTA (może używać tytułu TAN przed imieniem; tylko członkowie tej klasy społecznej mogą zostać rycerzami)";
    socialClass.table_trId = 8;
    socialClass.n = 2;
    socialClass.k = 100;
    socialClass.stats.ch = 10;
  } else if (k100buttonResult >= 91 && k100buttonResult < 96) {
    socialClass.socialClassName = "WKW";
    socialClass.socialClassFullName = "WYŻSZA  KLASA WYŻSZA";
    socialClass.nobility = true;
    socialClass.socialClassDescription =
      " — arystokracja i bogata szlachta; roczny dochód 5k100 złt; umie czytać i pisać; CH +15pkt.;";
    socialClass.socialClassCastDescription =
      "SZLACHTA (może używać tytułu TAN przed imieniem; tylko członkowie tej klasy społecznej mogą zostać rycerzami)";
    socialClass.table_trId = 9;
    socialClass.n = 5;
    socialClass.k = 100;
    socialClass.stats.ch = 15;
  } else if (k100buttonResult >= 96 && k100buttonResult <= 100) {
    socialClass.socialClassName = "EW";
    socialClass.socialClassFullName = "ELITA WŁADZY";
    socialClass.nobility = true;
    socialClass.socialClassDescription =
      " — członek aktualnie rządzących rodów książęcych (zamiast tan może używać tytułu książę); roczny dochód 10k100 szt. złota; umie czytać i pisać; ma prawo sprowadzania bardzo rzadkich broni; ponadto wie, gdzie za odpowiednią ofiarą może zostać wskrzeszony; CH +20 pkt.;";
    socialClass.socialClassCastDescription = "";
    socialClass.table_trId = 10;
    socialClass.n = 10;
    socialClass.k = 100;
    socialClass.stats.ch = 20;
  }

  return socialClass;
};
