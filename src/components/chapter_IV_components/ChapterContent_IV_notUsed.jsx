import React, { useContext } from "react";

import CastSubprofession_container from "./CastSubprofession_container_notUsed";

import chp4_casts_ from "./chp4_casts_full";
import chp4_professions from "./chp4_professions";
import { ChapterContent_IV_second_profession } from "./ChapterContent_IV_second_profession";
import { ChapterContent_IV_exeption } from "./ChapterContent_IV_exeption";
import { InputComponent } from "../utils/InputComponent";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";

const ChapterContent_IV = () => {
  const context = useContext(CharacterStatsContext);
  const handleElementChange = (profName) => {
    context.setProfession(profName);
  };

  return (
    <div>
      <ChapterContent_IV_second_profession />
      <ChapterContent_IV_exeption hidden={!context.secondProfessionChecked} />

      <h4></h4>
      <section className="collapsible-sections--item__content--section casts">
        <section
          id="profession_cast1"
          className="subprofession_cast profession_cast "
        >
          {chp4_casts_.map((casts) => (
            <div
              className="h-min p-1 m-8"
              hidden={
                casts.castName === "RYCERSKA" &&
                context.isSocialClassNobility === false
              }
            >
              <h4 className=" font-bold font-sans ">
                {" "}
                KASTA {casts.castName}:
              </h4>

              {casts.professions.map((prof, indexProf) => (
                <div
                  id={"div_profession" + indexProf}
                  className="mb-1 p-2 bg-white border rounded border-gray-300"
                >
                  <InputComponent
                    id={prof.profName + casts.id}
                    type={"checkbox"}
                    name={prof.profName}
                    className={" "}
                    checked={context.profession === prof.profName}
                    onChange={() => handleElementChange(prof.profName)}
                  />

                  <div className="xl:flex">
                    {prof.subbProfHiddenStatus.map(
                      (subbProfHiddenStatObjectsList, indexHiddenStat) => (
                        <CastSubprofession_container
                          key={prof.profName + casts.id + indexHiddenStat}
                          id={prof.profName + casts.id + indexHiddenStat}
                          hidden={
                            context.secondProfessionChecked
                          }
                          index1={indexHiddenStat}
                          Item1={subbProfHiddenStatObjectsList}
                          Item2={chp4_professions}
                          firstProfession={prof.profName}
                          disabled={!(context.profession === prof.profName)}
                        >
                          {indexHiddenStat}
                        </CastSubprofession_container>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}

          <br />
        </section>

        <section id="profession_cast2" class="subprofession_cast"></section>
        <section id="profession_cast3" class="subprofession_cast"></section>
        <section id="profession_cast4" class="subprofession_cast"></section>
      </section>
    </div>
  );
};

export default ChapterContent_IV;

/*

<ChapterContent_IV_subprofessions
                  items={casts}
                  hiddenStatutsIndex={index}
                />





                {casts.map((casts) => (
            <div>
              <h4>{casts.castName}</h4>
              <br />
              {casts.castHiddenStatus.map((hiddenStatus, index) => (
                <div>
                  <div>{index}</div>
                  <div>{hiddenStatus.toString()}</div>
                  <div>{casts.map((cast2) => cast2.professions)}</div>
                </div>
              ))}
              <br />
            </div>
          ))}




          {casts.map((casts, index1) => (
            <div>
              <h4> KASTA {casts.castName}</h4>
              <br />
              {casts.professions.map((prof, index) => (
                <div
                  id={"div_profession" + index}
                  className="subprofession_container checkbox_container"
                >
                  <div>
                    <input
                      type="checkbox"
                      id={prof.profName + casts.id}
                      name={prof.profName}
                      value={prof.profName}
                      className="checkbox__profession"
                    />
                    <label for={prof.profName}>
                      <b>{prof.profName + " " + index}</b>
                    </label>
                  </div>
                  {prof.subbProfHiddenStatus.map((stat1, index) => (
                    <div
                      id="profession_container__subelement-profession9"
                      className="subprofession_container__subelement profession_container__subelement_hidden"
                    >
                      <div className="subprofession_container">
                        {stat1.toString()}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
              <br />
            </div>
          ))}
*/
