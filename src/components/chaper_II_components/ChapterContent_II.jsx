import React, { useState } from "react";

import ChapterContent_II_placeOfBirth from "./ChapterContent_II_placeOfBirth";
import ChapterContent_II_socialClass from "./ChapterContent_II_socialClass";

const ChapterContent_II = () => {
  

  return (
    <section className="mb-20  m-2 border-gray-900 rounded  text-brown-100 p-2 text-xs ">
      <h2>II. LOSOWANIE POCHODZENIA</h2>
      <ChapterContent_II_placeOfBirth />
      <ChapterContent_II_socialClass />
    </section>
  );
};

export default ChapterContent_II;
