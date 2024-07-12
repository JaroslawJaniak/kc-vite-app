import imageMap1 from "../../assets/map1.jpg";
import imageMap2 from "../../assets/map2.jpg";
import imageMap3 from "../../assets/map3.jpg";
import imageMap4 from "../../assets/map4.jpg";
import imageMap5 from "../../assets/map5.jpg";
import imageMap6 from "../../assets/map6.jpg";
import imageMap7 from "../../assets//map7.jpg";
import imageMap8 from "../../assets//map8.jpg";
import imageMap9 from "../../assets/map9.jpg";
import imageMap10 from "../../assets/map10.jpg";
import imageMap11 from "../../assets/map11.jpg";
import imageMap12 from "../../assets/map12.jpg";
import imageMap13 from "../../assets/map13.jpg";
import imageMap14 from "../../assets/map14.jpg";

const dataPlaceOfBirth = (k100buttonResult) => {
  let placeOfBirth = {
    srcImage: "",
    plcBirth: "",
    table_trId: "",
    description: "",
  };

  if (k100buttonResult >= 1 && k100buttonResult < 17) {
    placeOfBirth.plcBirth = "Ostrogar";
    placeOfBirth.srcImage = imageMap1;
    placeOfBirth.table_trId = 1;
    placeOfBirth.description =
      " — stolica Archipelagu Centralnego i orków; ok. 153tys. mieszkańców — orki, półorki, ludzie, półolbrzymy, półelfy, elfy, gnomy, krasnoludy, hobbici;";
  } else if (k100buttonResult >= 17 && k100buttonResult < 26) {
    placeOfBirth.plcBirth = "Get-warr-gar";
    placeOfBirth.srcImage = imageMap2;
    placeOfBirth.table_trId = 2;
    placeOfBirth.description =
      " — miasto portowe i stolica kupiectwa; ok.72 tys. mieszkańców — ludzie, półorki, orki, półelfy, elfy, krasnoludy, gnomy, hobbici, reptilioni;";
  } else if (k100buttonResult >= 26 && k100buttonResult < 31) {
    placeOfBirth.plcBirth = "Ranhar-gar";
    placeOfBirth.srcImage = imageMap3;
    placeOfBirth.table_trId = 3;
    placeOfBirth.description =
      " — miasto portowe i stolica kupiectwa; ok.72 tys. mieszkańców — ludzie, półorki, orki, półelfy, elfy, kras- noludy, gnomy, hobbici, reptilioni;";
  } else if (k100buttonResult >= 31 && k100buttonResult < 35) {
    placeOfBirth.plcBirth = "Ora-gar";
    placeOfBirth.srcImage = imageMap4;
    placeOfBirth.table_trId = 4;
    placeOfBirth.description =
      " — stolica półolbrzymów, miasto portowe; ok. 34 tys. mieszkanców — półolbrzymy, olbrzymy, orki, półorki, krasnoludy, reptilioni;";
  } else if (k100buttonResult >= 35 && k100buttonResult < 39) {
    placeOfBirth.plcBirth = "Gasta";
    placeOfBirth.srcImage = imageMap5;
    placeOfBirth.table_trId = 5;
    placeOfBirth.description =
      " — stolica repiillionów, miasto — twierdza; około 34 tys. mieszkańców — reptillioni, krasnoludy, hobbici, gnomy i ludzie;";
  } else if (k100buttonResult >= 39 && k100buttonResult < 43) {
    placeOfBirth.plcBirth = "Olgrion";
    placeOfBirth.srcImage = imageMap6;
    placeOfBirth.table_trId = 6;
    placeOfBirth.description =
      " — stolica elfów; ok. 31 tys. mieszkańców — elfy, półelfy;";
  } else if (k100buttonResult >= 43 && k100buttonResult < 46) {
    placeOfBirth.plcBirth = "Tagara Ciemna";
    placeOfBirth.srcImage = imageMap7;
    placeOfBirth.table_trId = 7;
    placeOfBirth.description =
      " — jedna ze stolic ludzkich; ok. 29 tys. mieszkańców — ludzie;";
  } else if (k100buttonResult >= 46 && k100buttonResult < 49) {
    placeOfBirth.plcBirth = "Ongir-gar";
    placeOfBirth.srcImage = imageMap8;
    placeOfBirth.table_trId = 8;
    placeOfBirth.description =
      " — miasto portowe; ok. 24 tys. mieszkanców — elfy, półelfy, ludzie, półorki, orki;";
  } else if (k100buttonResult >= 49 && k100buttonResult < 52) {
    placeOfBirth.plcBirth = "Aria-gar";
    placeOfBirth.srcImage = imageMap9;
    placeOfBirth.table_trId = 9;
    placeOfBirth.description =
      " — ok. 22 tys. mieszkańców — orki, półorki, ludzie, hobbici, gnomy, reptilioni;";
  } else if (k100buttonResult >= 52 && k100buttonResult < 55) {
    placeOfBirth.plcBirth = "Inchra-gar";
    placeOfBirth.srcImage = imageMap10;
    placeOfBirth.table_trId = 10;
    placeOfBirth.description =
      " — ok. 21 tys. mieszkańców — orki, półorki, ludzie;";
  } else if (k100buttonResult >= 55 && k100buttonResult < 57) {
    placeOfBirth.plcBirth = "Tagara Szara";
    placeOfBirth.srcImage = imageMap7;
    placeOfBirth.table_trId = 11;
    placeOfBirth.description =
      " — jedna ze stolic ludzkich; ok. 19 tys. mieszkańców — ludzie;";
  } else if (k100buttonResult >= 57 && k100buttonResult < 59) {
    placeOfBirth.plcBirth = "Tagara Biała";
    placeOfBirth.srcImage = imageMap7;
    placeOfBirth.table_trId = 12;
    placeOfBirth.description =
      " — jedna ze stolic ludzkich; ok. 15,5 tys. mieszkańców — ludzie, krasnoludy;";
  } else if (k100buttonResult >= 59 && k100buttonResult < 61) {
    placeOfBirth.plcBirth = "Ogragar";
    placeOfBirth.srcImage = imageMap11;
    placeOfBirth.table_trId = 13;
    placeOfBirth.description =
      " — stolica ogrów, miasto portowe; ok. 13 tys. mieszkańców — ogry, półorki, orki, krasnoludy;";
  } else if (k100buttonResult >= 61 && k100buttonResult < 81) {
    placeOfBirth.plcBirth = "rejony Orcusa oddalone od miast";
    placeOfBirth.srcImage = imageMap12;
    placeOfBirth.table_trId = 14;
    placeOfBirth.description = " wiejskie, ew. samotne posiadłości;";
  } else if (k100buttonResult >= 81 && k100buttonResult < 100) {
    placeOfBirth.plcBirth = "wyspy leżące wokół Orcusa";
    placeOfBirth.srcImage = imageMap13;
    placeOfBirth.table_trId = 15;
    placeOfBirth.description = "";
  } else if (k100buttonResult === 100) {
    placeOfBirth.plcBirth = "miejsce urodzenia nieznane";
    placeOfBirth.srcImage = imageMap14;
    placeOfBirth.table_trId = 16;
    placeOfBirth.description =
      "(postać może pochodzić np. z innego archipelagu, lub też po prostu nie wiedzieć gdzie się urodziła);";
  }

  return placeOfBirth;
};

export default dataPlaceOfBirth;
