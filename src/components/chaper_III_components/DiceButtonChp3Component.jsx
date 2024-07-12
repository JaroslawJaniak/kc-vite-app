import React, { useState } from "react";
import kDice from "./kDice";

const DiceButtonComponent = (props) => {
  const handleStateChange = (event) => {
    const newState = event.type;

    if (props.clicked === false) {
      
      props.onDiceRoll(kDice(props.n, props.k));
      props.handleStateChange(true);
    }
  };

  const defaultView_ = (
    <div>
      <button
        disabled={props.clicked}
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5 me-2 mb-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        onClick={(event) => {
          handleStateChange(event);
        }}
      >
        {`${props.k100Result} ${props.clicked}`}
      </button>
    </div>
  );

  if (!props.clicked) {
    return (
      <>
        <div>
          <button
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5 me-2 mb-2 w-24 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            onClick={(event) => {
              handleStateChange(event);
            }}
          >
            {props.n}k{props.k}
          </button>
        </div>
      </>
    );
  } else return defaultView_;
};

export default DiceButtonComponent;
