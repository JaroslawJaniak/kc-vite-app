import React from "react";

export const NewLineText = (props) => {
  const text = props.text;
  const newText = text.split("\n").map((str) => <p className="py-1">{str}</p>);
  return newText;
};
