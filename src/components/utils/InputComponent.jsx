import React from "react";

export const InputComponent = (props) => {
  return (
    <div
      id={"checkbox-" + props.id}
      className={`${props.className} mb-1`}
      hidden={props.hidden}
    >
      <label for={props.title} className="[&>*]:px-1">
        <input
          type={props.type}
          id={props.title}
          name={props.name}
          value={props.name}
          className={props.className + " " + "Input"}
          checked={props.checked}
          onChange={props.onChange}
          style={{ display: "inline" }}
          disabled={props.disabled}
        />

        <span>{props.name}</span>
      </label>
    </div>
  );
};
