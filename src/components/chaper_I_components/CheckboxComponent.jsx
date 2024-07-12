import React, { useState } from "react";

const CheckboxComponent = (props) => {
  const [checkedState, setCheckedState] = useState(false);

  const checkedHandler = () => {
    setCheckedState(true);
  };

  return (
    <div id={"checkbox_" + props.id} className={props.class}>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.name}
        className={props.class + " " + "Input"}
        checked={props.checked}
        onClick={checkedHandler}
      />
      <label for={props.title}>{props.name}</label>
    </div>
  );
};

export default CheckboxComponent;
