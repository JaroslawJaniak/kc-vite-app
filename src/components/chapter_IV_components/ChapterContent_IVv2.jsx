import React, { useContext, useEffect } from "react";

import { ChapterContent_IV_second_profession } from "./ChapterContent_IV_second_profession";
import { ChapterContent_IV_exeption } from "./ChapterContent_IV_exeption";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";

import { ChapterContent_IV_CAST_Component } from "./ChapterContent_IV_CAST_Component";

export const ChapterContent_IVv2 = () => {
  const context = useContext(CharacterStatsContext);
  useEffect(() => {
    context.filterProfessionByRace();

    return () => {};
  }, []);

  return (
    <div className="mb-20 border-gray-900 rounded  text-brown-100 p-2 text-xs backdrop-blur-lg shadow-2xl">
      <ChapterContent_IV_second_profession />
      <ChapterContent_IV_exeption hidden={!context.isSecondProfessionChecked} />
      <hr className="my-3 " />

      <div className="">
        <div>
          {" "}
          <ChapterContent_IV_CAST_Component
            professionsList={context.renderProfessions}
            castName={"ŻOŁNIERSKA"}
          />
          <div hidden={!context.isSocialClassNobility}>
            <ChapterContent_IV_CAST_Component
              professionsList={context.renderProfessions}
              castName={"RYCERSKA"}
            />
          </div>
          <ChapterContent_IV_CAST_Component
            professionsList={context.renderProfessions}
            castName={"ZŁODZIEJSKA"}
          />
          <ChapterContent_IV_CAST_Component
            professionsList={context.renderProfessions}
            castName={"KAPŁAŃSKA"}
          />
          <ChapterContent_IV_CAST_Component
            professionsList={context.renderProfessions}
            castName={"CZARODZIEJSKA"}
          />
        </div>{" "}
      </div>
    </div>
  );
};

/*
{context.renderProfessions.map((mainProf) => (
        <div className="border border-black m-1 ">
          <p>{mainProf.profName}</p>
          <div className="ml-4 border [&>*]:lowercase">
            {mainProf.combiningProfessions.map((subProfList) =>
              subProfList
                .filter((subProfName) =>
                  context.renderProfessions.some(
                    (raceProf) => raceProf.profName === subProfName
                  )
                )
                .map((subProf) => <p>{subProf}</p>)
            )}
          </div>
        </div>
      ))}
*/
