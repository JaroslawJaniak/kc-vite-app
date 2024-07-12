const chp2_table_social_class = [
  {
    socialClassName: "BIEDOTA",
    socialClassDescription: "(chłopstwo)",

    socialClassTableInfo: [
      {
        id: "table2_row1",
        k100: "01-05",
        k100min: 1,
        k100max: 5,
        label: "NIŻSZA KLASA NIŻSZA (NKN)",
        text: " — niższa biedota (ubogie chłopstwo); roczny dochód 1k10 sztuk złota; Charyzma -15 pkt.;",
      },
      {
        id: "table2_row2",
        k100: "06-10",
        k100min: 6,
        k100max: 10,
        label: "ŚREDNIA KLASA NIŻSZA (ŚKN)",
        text: " — średnia biedota (typowe chłopstwo); roczny dochód 2k10 sztuk złota; Charyzma -10 pkt.;",
      },
      {
        id: "table2_row3",
        k100: "11-15",
        k100min: 11,
        k100max: 15,
        label: "WYŻSZA KLASA NIŻSZA (WKN)",
        text: " — wyższa biedota (bogate chłopstwo); roczny dochód 5k10 szt. złota; Charyzma -5 pkt.; umie czytać;",
      },
    ],
  },
  {
    socialClassName: "MIESZCZAŃSTWO",
    socialClassDescription: "(ma prawo używać tytułu EL przed imieniem)",

    socialClassTableInfo: [
      {
        id: "table2_row4",
        k100: "16-35",
        k100min: 16,
        k100max: 35,
        label: "NIŻSZA KLASA ŚREDNIA (NKŚ)",
        text: " — ubogie mieszczaństwo; roczny dochód k50 złt; umie czytać i pisać;",
      },
      {
        id: "table2_row5",
        k100: "36-55",
        k100min: 36,
        k100max: 55,
        label: "ŚREDNIA KLASA ŚREDNIA (ŚKŚ)",
        text: " — średnie mieszczaństwo; roczny dochód k100 złt; umie czytać i pisać;",
      },
      {
        id: "table2_row6",
        k100: "56-75",
        k100min: 56,
        k100max: 75,
        label: "WYŻSZA KLASA ŚREDNIA (WKŚ)",
        text: " — bogate mieszczaństwo; roczny dochód 2k100 złt; umie czytać i pisać;",
      },
    ],
  },
  {
    socialClassName: "SZLACHTA",
    socialClassDescription:
      "(może używać tytułu TAN przed imieniem; tylko członkowie tej klasy społecznej mogą zostać rycerzami)",

    socialClassTableInfo: [
      {
        id: "table2_row7",
        k100: "76-85",
        k100min: 76,
        k100max: 85,
        label: "NIŻSZA KLASA WYŻSZA (NKW)",
        text: " — uboga szlachta; roczny dochód k100 złt; umie czytać i pisać; CH +5 pkt.;",
      },
      {
        id: "table2_row8",
        k100: "86-90",
        k100min: 86,
        k100max: 90,
        label: "ŚREDNIA KLASA WYŻSZA (ŚKW)",
        text: " — średnia szlachta; roczny dochód 2k100 złt; umie czytać i pisać; CH +10;",
      },
      {
        id: "table2_row9",
        k100: "91-95",
        k100min: 91,
        k100max: 95,
        label: "WYŻSZA KLASA WYŻSZA (WKW)",
        text: " — arystokracja i bogata szlachta; roczny dochód 5k100 złt; umie czytać i pisać; CH +15pkt.;",
      },
      {
        id: "table2_row10",
        k100: "96-00",
        k100min: 96,
        k100max: 100,
        label: "ELITA WŁADZY (EW)",
        text: " — członek aktualnie rządzących rodów książęcych (zamiast tan może używać tytułu książę); roczny dochód 10k100 szt. złota; umie czytać i pisać; ma prawo sprowadzania bardzo rzadkich broni; ponadto wie, gdzie za odpowiednią ofiarą może zostać wskrzeszony; CH +20 pkt.",
      },
    ],
  },
];

export default chp2_table_social_class;
