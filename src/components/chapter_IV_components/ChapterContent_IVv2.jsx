import React, { useContext } from "react";
import {
 
  useNavigate,
} from "react-router-dom";
import { ChapterContent_IV_second_profession } from "./ChapterContent_IV_second_profession";
import { ChapterContent_IV_exeption } from "./ChapterContent_IV_exeption";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import { chp4_professionsList } from "./chp4_professions";
import { NavButton } from "../../utils/NavButton";
import { ChapterContent_IV_CAST_Component } from "./ChapterContent_IV_CAST_Component";

export const ChapterContent_IVv2 = () => {
  const context = useContext(CharacterStatsContext);
  const navigateTo = useNavigate();
  const handleElementChange = (profName) => {
    context.setProfession(profName);
  };

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
    <div>
      <button
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5  mb-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        onClick={() => context.filterProfessionByRace()}
      >
        setProfX
      </button>
      <NavButton
        text={backBtnText}
        handleClick={() => navigateTo("/chapter1")}
        className=" top-18 right-96 fixed z-1 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm  px-4  py-1.5 me-2 mb-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      />
      <ChapterContent_IV_second_profession />
      <ChapterContent_IV_exeption hidden={!context.secondProfessionChecked} />
      <hr className="my-3 " />

      <ChapterContent_IV_CAST_Component
        professionsList={context.renderProfessions}
        castName={"ŻOŁNIERSKA"}
      />
      <hr className="my-3 " />
      <ChapterContent_IV_CAST_Component
        professionsList={context.renderProfessions}
        castName={"RYCERSKA"}
      />
      <hr className="my-3 " />
      <ChapterContent_IV_CAST_Component
        professionsList={context.renderProfessions}
        castName={"ZŁODZIEJSKA"}
      />
      <hr className="my-3 " />
      <ChapterContent_IV_CAST_Component
        professionsList={context.renderProfessions}
        castName={"KAPŁAŃSKA"}
      />
      <hr className="my-3 " />
      <ChapterContent_IV_CAST_Component
        professionsList={context.renderProfessions}
        castName={"CZARODZIEJSKA"}
      />
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
