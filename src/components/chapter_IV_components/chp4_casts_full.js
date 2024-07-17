// false-false -> "normalnie dostępna" - hidden: false, exeptionHiddenStatus: false
// false-true -> "warunkowo dostępna"
// true-false -> "niedostępna"

const chp4_casts_ = [
  {
    id: "c1",
    castName: "ŻOŁNIERSKA",
    castHiddenStatus: [true, true, false, false, false], //ukrywa kasty z którymi nie bedzi się łączyć: true->ukryty
    professions: [
      {
        profName: "WOJOWNIK",
        subbProfHiddenStatus: [
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: true },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: true },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: true },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
          ],
        ],
        
      },
      {
        profName: "ŁOWCA",
        subbProfHiddenStatus: [
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: true },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: true },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: true },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
          ],
        ],
      },
      {
        profName: "GWARDZISTA",
        subbProfHiddenStatus: [
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
          ],
        ],
      },
      {
        profName: "BARBARZYŃCA",
        subbProfHiddenStatus: [
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
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
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
          ],
        ],
      },
      {
        profName: "PALADYN",
        subbProfHiddenStatus: [
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
        ],
      },
      {
        profName: "CZARNY RYCERZ",
        subbProfHiddenStatus: [
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
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
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
          ],
        ],
      },
      {
        profName: "ZABÓJCA",
        subbProfHiddenStatus: [
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
          ],
        ],
      },
      {
        profName: "KUPIEC",
        subbProfHiddenStatus: [
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
          ],
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
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
          ],
        ],
      },
      {
        profName: "DRIUD",
        subbProfHiddenStatus: [
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
        ],
      },
      {
        profName: "ASTROLOG",
        subbProfHiddenStatus: [
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
          ],
        ],
      },
      {
        profName: "PÓŁBÓG",
        subbProfHiddenStatus: [
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
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
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
          ],
        ],
      },
      {
        profName: "CZARNOKSIĘŻNIK",
        subbProfHiddenStatus: [
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
          ],
        ],
      },
      {
        profName: "ILUZJONISTA",
        subbProfHiddenStatus: [
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
          ],
        ],
      },
      {
        profName: "ALCHEMIK",
        subbProfHiddenStatus: [
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
          [
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: true },
            { availabilityHiddenStatus: false, exeptionHiddenStatus: false },
            { availabilityHiddenStatus: true, exeptionHiddenStatus: false },
          ],
        ],
      },
    ],
  },
];

export default chp4_casts_;
