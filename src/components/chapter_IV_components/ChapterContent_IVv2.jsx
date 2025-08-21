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

  const backBtnText = (
    <span>
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="inline-block"
      >
        <path
          d="M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z"
          fill="currentColor"
        />
      </svg>
      WYBÓR RASY I PŁCI
    </span>
  );

  return (
    <div className="mb-20">
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
