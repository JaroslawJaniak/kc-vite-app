import React from "react";

export const NewLineText = (props) => {
  const text = props.text;
  const newText = text
    .split("\n")
    .map((str) => <p className={`py-1 ${props.className}`}>{str}</p>);
  return newText;
};
