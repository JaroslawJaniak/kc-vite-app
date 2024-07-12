import React from "react";
import InputComponent from "../utils/InputComponent";
import { NewLineText } from "../utils/NewLineText";

export const Chapter1RaceDescriptionContainer = (props) => {
  return (
    <div
      className="race checkbox-container"
      style={{
        border: "1px solid black",
        margin: "8px",
        padding: "8px",
       
        fontSize: "small",
        borderRadius: "4px",
      }}
    >
      <InputComponent
        id={"checkboxMale"}
        type={props.race_description.type}
        name={props.race_description.raceName}
        class={props.race_description.class}
        checked={props.checkedElement === props.race_description.raceName}
        onChange={() => {
          props.handleElementChange(`${props.race_description.raceName}`);
        }}
      />

      <NewLineText text={props.race_description.description} />
    </div>
  );
};
