const chp5_table1 = [
  {
    id: "ch5t1_1",
    k100: "01-20",
    k100min: 1,
    k100max: 20,
    description:
      " wzrost lub waga są większe od podanej w tabeli wielkości minimalnej dla danej rasy o wynik wykonanego rzutu k100 (nie rzucamy jeszcze raz, chodzi o wynik tego rzutu, który nas tutaj skierował — jeżeli równał się on 12, to krasnolud będzie mierzył 112 cm lub ważył 62kg);",
  },
  {
    id: "ch5t1_2",
    k100: "21-80",
    k100min: 21,
    k100max: 80,
    description:
      " oznacza średnią dla danej rasy wagę lub wzrost, przy czym do dolnej" +
      "granicy określonego w tabeli przedziału średniego dla danej rasy" +
      "dodajemy jedności wykona- nego rzutu k100 (patrz wyżej; jeśli" +
      " wyrzuciliśmy 36 kras- nolud będzie mierzył 120 + 6 = 126 cm, lub" +
      "ważył 70 + 6 = 76 kg);",
  },
  {
    id: "ch5t1_3",
    k100: "81-99",
    k100min: 81,
    k100max: 99,
    description:
      "wzrost lub waga są większe od górnej granicy przedziału średniego " +
      "dla danej rasy o nadwyżkę wyniku rzutu k100 ponad 80 (jeśli wynik " +
      "rzutu równał się 91 krasnolud będzie mierzył 130 + (91 - 80) = 141 " +
      "cm lub ważył 80 + (91 - 80) = 91 kg);",
  },
  {
    id: "ch5t1_4",
    k100: "00",
    k100min: 100,
    k100max: 100,
    description:
      "wzrost lub waga są większe o premiowany rzut k10 od po- danej w " +
      "tabeli wielkości maksymalnej dla danej rasy (a więc krasnolud przy" +
      " dodatkowym rzucie k10 równym 8 będzie mierzył 158 cm lub ważył 108" +
      " kg);",
  },
];

export default chp5_table1;
