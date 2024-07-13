import React, {useContext} from "react";

import CastSubprofession_container from "./CastSubprofession_container";
import chp4_casts from "./chp4_casts";
import chp4_professions from "./chp4_professions";
import { ChapterContent_IV_second_profession } from "./ChapterContent_IV_second_profession";
import { InputComponent } from "../utils/InputComponent";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";

const ChapterContent_IV = () => {
  const context = useContext(CharacterStatsContext);
  const handleProfChange = () => { };
  
  return (
    <div>
      <ChapterContent_IV_second_profession />

      <h4></h4>
      <section className="collapsible-sections--item__content--section casts">
        <section
          id="profession_cast1"
          className="subprofession_cast profession_cast "
        >
          {chp4_casts.map((casts1) => (
            <div className="h-min p-1 m-8">
              <h4 className=" font-bold font-sans ">
                {" "}
                KASTA {casts1.castName}:
              </h4>

              {casts1.professions.map((prof, indexProf) => (
                <div
                  id={"div_profession" + indexProf}
                  className="mb-1 p-2 bg-white"
                >
                  <InputComponent
                    id={prof.profName + casts1.id}
                    type={"checkbox"}
                    name={prof.profName}
                    className={" "}
                    checked={false}
                    onChange={handleProfChange}
                  />
                  <div className="md:flex">
                    {prof.subbProfHiddenStatus.map(
                      (subbProfHiddenStat, indexHiddenStat) => (
                        <CastSubprofession_container
                          key={prof.profName + casts1.id + indexHiddenStat}
                          id={prof.profName + casts1.id + indexHiddenStat}
                          hidden={context.secondProfessionChecked}
                          index1={indexHiddenStat}
                          Item1={subbProfHiddenStat}
                          Item2={chp4_professions}
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





                {casts.map((casts1) => (
            <div>
              <h4>{casts1.castName}</h4>
              <br />
              {casts1.castHiddenStatus.map((hiddenStatus, index) => (
                <div>
                  <div>{index}</div>
                  <div>{hiddenStatus.toString()}</div>
                  <div>{casts.map((cast2) => cast2.professions)}</div>
                </div>
              ))}
              <br />
            </div>
          ))}




          {casts.map((casts1, index1) => (
            <div>
              <h4> KASTA {casts1.castName}</h4>
              <br />
              {casts1.professions.map((prof, index) => (
                <div
                  id={"div_profession" + index}
                  className="subprofession_container checkbox_container"
                >
                  <div>
                    <input
                      type="checkbox"
                      id={prof.profName + casts1.id}
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
