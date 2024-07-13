import React, { useContext } from "react";
import { CharacterStatsContext } from "../context/CharacterStatsContext";
import { NewLineText } from "../components/utils/NewLineText";

export const Form = () => {
  const context = useContext(CharacterStatsContext);

  const renderSex = () => {
    if (context.chpt1Info.sex !== "") {
      return `${context.chpt1Info.sex};`;
    }
    return "";
  };

  const renderRace = () => {
    if (context.chpt1Info.race !== "") {
      return `${context.chpt1Info.race};`;
    }
    return "";
  };

  const renderSocialClass = () => {
    if (context.chpt2Info.socialClass !== "") {
      return `${context.chpt2Info.socialClass};`;
    }
    return "";
  };

  const renderSocialClassFullname = () => {
    if (context.chpt2Info.socialClassFullName !== "") {
      return `${context.chpt2Info.socialClassFullName} (${context.chpt2Info.socialClass});`;
    }
    return "";
  };

  return (
    <div>
      <h2>VII. PODSUMOWANIE PROCESU KREACJI NOWEJ POSTACI</h2>
      <form className="p-8" onSubmit>
        <h3 className="stylized">I. WYBÓR RASY I PŁCI</h3>
        <div className="[&>*]:font-serif">
          <p className="inline-block min-w-24 h-8  p-1 m-1 text-center text-gray-900 uppercase ">
            <b>{renderSex()}</b>
          </p>
          <p className="inline-block min-w-24 h-8 p-1 m-1 text-center text-gray-900 uppercase ">
            <b>{renderRace()}</b>
          </p>

          <p className="  sm:w-96 min-h-24 p-4 m-1 text-gray-900  border border-gray-300 rounded bg-white">
            <NewLineText text={context.chpt1Info.description} />
          </p>
        </div>

        <hr className="my-3 " />
        <h3 className="stylized">II. LSOWANIE POCHODZENIA</h3>
        <h3>Losowanie miejsca urodzenia:</h3>
        <div className="[&>*]:font-serif">
          <p className="inline-block min-w-24  p-1 m-1 text-center text-gray-900 uppercase ">
            <b>{context.chpt2Info.placeOfBirth}</b>
          </p>

          <p className="  sm:w-96 min-h-24 p-4 m-3 text-gray-900  border border-gray-300 rounded bg-white">
            <p>{context.chpt2Info.description}</p>
          </p>

          <img
            id="mapForm"
            src={context.srcPlcOfBirthImage}
            alt="map"
            className="sm:size-96 m-3 border border-gray-300 rounded"
          />
        </div>
        <hr className="my-3" />

        <h3>Losowanie pochodzenia społecznego:</h3>
        <div className="[&>*]:font-serif [&>*]:">
          <p className="inline-block min-w-24  p-1 m-1 text-center text-gray-900 uppercase ">
            <b>{renderSocialClassFullname()}</b>
          </p>

          <p className="inline-block min-w-24  p-1 m-1 text-center text-gray-900 uppercase ">
            <b>{context.chpt2Info.incomeValue} złt</b>
          </p>
        </div>

        <hr className="my-3" />
        <h3>III. LOSOWANIE UŁOMNOŚCI I ZDLONOŚCI NADNATURALNYCH</h3>
        <h3>III.a Ułomności</h3>
        <h3>III.b Zdolności nadnaturalne</h3>
        <hr className="my-3" />
        <h3 className="stylized">IV. WYBÓR PROFESJI</h3>
        <hr className="my-3" />
        <h3 className="stylized">V. LOSOWANIE WZROSTU I WAGI</h3>
        <hr className="my-3" />
        <h3>VI. LOSOWANIE WSPÓŁCZYNNIKÓW PODSTAWOWYCH</h3>
        <p>VI.a Podstawowe wielkości współczynników</p>

        <hr className="my-3" />
      </form>
    </div>
  );
};
