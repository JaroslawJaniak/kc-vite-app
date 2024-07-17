import React from "react";
import { ChapterContent_IV_CAST_subProfList } from "./ChapterContent_IV_CAST_subProfList";

export const ChapterContent_IV_CAST_Component = (props) => {
  return (
    <div>
      {props.professionsList
        .filter((mainProf) => mainProf.castName === props.castName)
        .map((prof) => (
          <p>
            {prof.profName}
            <ChapterContent_IV_CAST_subProfList
              mainProf={prof}
              professionsList={props.professionsList}
            />
          </p>
        ))}
    </div>
  );
};
