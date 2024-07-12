export const dataSocialClass = (k100buttonResult) => {
  const socialClass = {
    socialClassName: "",
    socialClassFullName: "",
    table_trId: "",
    bonusStats: {
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
      ob: 0,
    },

    n: 0,
    k: 0,
  };

  if (k100buttonResult >= 1 && k100buttonResult < 6) {
    socialClass.socialClassName = "NKN";
    socialClass.socialClassFullName = "NIŻSZA KLASA NIŻSZA";
    socialClass.table_trId = 1;
    socialClass.n = 1;
    socialClass.k = 10;
    socialClass.bonusStats.ch = -15;
  } else if (k100buttonResult >= 6 && k100buttonResult < 11) {
    socialClass.socialClassName = "ŚKN";
    socialClass.socialClassFullName = "ŚREDNIA KLASA NIŻSZA";
    socialClass.table_trId = 2;
    socialClass.n = 2;
    socialClass.k = 10;
    socialClass.bonusStats.ch = -10;
  } else if (k100buttonResult >= 11 && k100buttonResult < 16) {
    socialClass.socialClassName = "WKN";
    socialClass.socialClassFullName = "WYŻSZA KLASA NIŻSZA";
    socialClass.table_trId = 3;
    socialClass.n = 5;
    socialClass.k = 10;
    socialClass.bonusStats.ch = -5;
  } else if (k100buttonResult >= 16 && k100buttonResult < 36) {
    socialClass.socialClassName = "NKŚ";
    socialClass.socialClassFullName = "NIŻSZA KLASA ŚREDNIA";
    socialClass.table_trId = 4;
    socialClass.n = 1;
    socialClass.k = 50;
  } else if (k100buttonResult >= 36 && k100buttonResult < 56) {
    socialClass.socialClassName = "ŚKŚ";
    socialClass.socialClassFullName = "ŚREDNIA KLASA ŚREDNIA";
    socialClass.table_trId = 5;
    socialClass.n = 1;
    socialClass.k = 100;
  } else if (k100buttonResult >= 56 && k100buttonResult < 76) {
    socialClass.socialClassName = "WKŚ";
    socialClass.socialClassFullName = "WYŻSZA KLASA ŚREDNIA";
    socialClass.table_trId = 6;
    socialClass.n = 2;
    socialClass.k = 100;
  } else if (k100buttonResult >= 76 && k100buttonResult < 86) {
    socialClass.socialClassName = "NKW";
    socialClass.socialClassFullName = "NIŻSZA KLASA WYŻSZA";
    socialClass.table_trId = 7;
    socialClass.n = 1;
    socialClass.k = 100;
    socialClass.bonusStats.ch = 5;
  } else if (k100buttonResult >= 86 && k100buttonResult < 91) {
    socialClass.socialClassName = "ŚKW";
    socialClass.socialClassFullName = "ŚREDNIA KLASA WYŻSZA";
    socialClass.table_trId = 8;
    socialClass.n = 2;
    socialClass.k = 100;
    socialClass.bonusStats.ch = 10;
  } else if (k100buttonResult >= 91 && k100buttonResult < 96) {
    socialClass.socialClassName = "WKW";
    socialClass.socialClassFullName = "WYŻSZA  KLASA WYŻSZA";
    socialClass.table_trId = 9;
    socialClass.n = 5;
    socialClass.k = 100;
    socialClass.bonusStats.ch = 15;
  } else if (k100buttonResult >= 96 && k100buttonResult <= 100) {
    socialClass.socialClassName = "EW";
    socialClass.socialClassFullName = "ELITA WŁADZY";
    socialClass.table_trId = 10;
    socialClass.n = 10;
    socialClass.k = 100;
    socialClass.bonusStats.ch = 20;
  }

  return socialClass;
};
