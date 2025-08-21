import React, { useEffect, useContext, useState } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";

const ChapterContent_VIb = () => {
  const context = useContext(CharacterStatsContext);
  const deafaultView = (
    <>
      <div>
        <p>
          Niedowaga <span>{context.underweight} kg</span>:
        </p>
        <p>
          <span>ŻYW:</span> <span> </span>
          <span>SF:</span> <span> </span>
          <span>ZR:</span> <span> </span>
          <span>SZ:</span> <span> </span>
        </p>
      </div>
      <div>
        <p>
          Niedowaga <span>{context.overweight} kg</span>
        </p>
        <p>
          <span>ŻYW:</span> <span> </span>
          <span>SF:</span> <span> </span>
          <span>ZR:</span> <span> </span>
          <span>SZ:</span> <span> </span>
        </p>
      </div>
    </>
  );

  return deafaultView;
};

export default ChapterContent_VIb;
