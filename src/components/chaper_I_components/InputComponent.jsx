import React from "react";

const InputComponent = (props) => {
  return (
    <div id={"checkbox-" + props.id} className={props.className}>
      <label for={props.title} className="[&>*]:px-2">
        <input
          type={props.type}
          id={props.id}
          name={props.name}
          value={props.name}
          className={props.className + " " + "Input"}
          checked={props.checked}
          onChange={props.onChange}
          style={{ display: "inline" }}
        />

        <b>{props.name}</b>
      </label>
    </div>
  );
};

export default InputComponent;
