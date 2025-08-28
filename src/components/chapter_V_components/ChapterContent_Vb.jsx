import React, { useEffect, useContext, useState } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";

const ChapterContent_Vb = () => {
  const context = useContext(CharacterStatsContext);
  const deafaultView = (
    <>
      
        <span>
          Niedowaga <span>{context.underweight} kg;</span>{" "}
        </span>
       
     
      
        <span>
          Niedowaga <span>{context.overweight} kg;</span>
        </span>
       
     
    </>
  );

  return deafaultView;
};

export default ChapterContent_Vb;
