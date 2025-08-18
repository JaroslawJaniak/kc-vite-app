const chp4_casts = [
  {
    id: "c1",
    castName: "ŻOŁNIERSKA",
    castHiddenStatus: [true, true, false, false, false], //ukrywa kasty z którymi nie bedzi się łączyć
    professions: [
      {
        profName: "WOJOWNIK",
        subbProfHiddenStatus: [
          [true, true, true, true],
          [true, true, true],
          [false, false, false],
          [false, false, false, true],
          [false, false, false, false],
        ],
      },
      {
        profName: "ŁOWCA",
        subbProfHiddenStatus: [
          [true, true, true, true],
          [true, true, true],
          [true, true, false],
          [false, false, true, true],
          [false, true, true, true],
        ],
      },
      {
        profName: "GWARDZISTA",
        subbProfHiddenStatus: [
          [true, true, true, true],
          [true, true, true],
          [true, false, true],
          [false, true, true, true],
          [true, true, true, true],
        ],
      },
      {
        profName: "BARBARZYŃCA",
        subbProfHiddenStatus: [
          [true, true, true, true],
          [true, true, true],
          [false, false, false],
          [false, true, true, true],
          [true, true, true, true],
        ],
      },
    ],
  },
  {
    id: "c2",
    castName: "RYCERSKA",
    castHiddenStatus: [true, true, false, false, false],
    professions: [
      {
        profName: "RYCERZ",
        subbProfHiddenStatus: [
          [true, true, true, true],
          [true, true, true],
          [true, true, true],
          [false, true, true, true],
          [true, true, true, true],
        ],
      },
      {
        profName: "PALADYN",
        subbProfHiddenStatus: [
          [true, true, true, true],
          [true, true, true],
          [true, true, true],
          [true, true, false, true],
          [true, true, true, true],
        ],
      },
      {
        profName: "CZARNY RYCERZ",
        subbProfHiddenStatus: [
          [true, true, true, true],
          [true, true, true],
          [true, true, true],
          [false, true, true, true],
          [true, true, true, true],
        ],
      },
    ],
  },
  {
    id: "c3",
    castName: "ZŁODZIEJSKA",
    castHiddenStatus: [false, false, true, false, false],
    professions: [
      {
        profName: "ZŁODZIEJ",
        subbProfHiddenStatus: [
          [false, true, true, false],
          [true, true, true],
          [true, true, true],
          [false, true, true, true],
          [false, true, false, false],
        ],
      },
      {
        profName: "ZABÓJCA",
        subbProfHiddenStatus: [
          [false, true, false, false],
          [true, true, true],
          [true, true, true],
          [false, true, false, true],
          [false, false, false, false],
        ],
      },
      {
        profName: "KUPIEC",
        subbProfHiddenStatus: [
          [false, false, false, false],
          [true, true, true],
          [false, false, true],
          [false, false, false, true],
          [false, false, false, false],
        ],
      },
    ],
  },
  {
    id: "c4",
    castName: "KAPŁAŃSKA",
    castHiddenStatus: [false, false, false, true, false],

    professions: [
      {
        profName: "KAPŁAN",
        subbProfHiddenStatus: [
          [false, false, false, false],
          [false, true, false],
          [false, false, false],
          [true, true, true, true],
          [false, false, false, false],
        ],
      },
      {
        profName: "DRIUD",
        subbProfHiddenStatus: [
          [false, false, true, true],
          [true, true, true],
          [true, true, true],
          [true, true, true, true],
          [false, true, true, true],
        ],
      },
      {
        profName: "ASTROLOG",
        subbProfHiddenStatus: [
          [false, true, true, true],
          [true, true, true],
          [true, true, false],
          [true, true, true, true],
          [true, true, true, true],
        ],
      },
      {
        profName: "PÓŁBÓG",
        subbProfHiddenStatus: [
          [true, true, true, true],
          [true, true, true],
          [true, true, true],
          [true, true, true, true],
          [true, true, true, true],
        ],
      },
    ],
  },
  {
    id: "c5",
    castName: "CZARODZIEJSKA",
    castHiddenStatus: [false, false, false, false, true],
    professions: [
      {
        profName: "MAG",
        subbProfHiddenStatus: [
          [true, true, true, true],
          [true, true, true],
          [false, false, false],
          [false, false, false, true],
          [false, false, false, false],
        ],
      },
      {
        profName: "CZARNOKSIĘŻNIK",
        subbProfHiddenStatus: [
          [false, true, true, true],
          [true, true, true],
          [true, false, false],
          [false, true, false, true],
          [false, false, false, false],
        ],
      },
      {
        profName: "ILUZJONISTA",
        subbProfHiddenStatus: [
          [false, true, true, true],
          [true, true, true],
          [false, false, false],
          [false, true, false, true],
          [false, false, false, false],
        ],
      },
      {
        profName: "ALCHEMIK",
        subbProfHiddenStatus: [
          [false, true, true, true],
          [true, true, true],
          [false, false, false],
          [false, true, false, true],
          [false, false, true, true],
        ],
      },
    ],
  },
];

export default chp4_casts;
