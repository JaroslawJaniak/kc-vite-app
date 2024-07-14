import React, {useContext} from "react";
import chp4_info from "./chp4_info";
import { InputComponent } from "../utils/InputComponent";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";

export const ChapterContent_IV_exeption = (props) => {

  const context = useContext(CharacterStatsContext);

   const handleElementChange = () => {
     context.setExeptionChecked(!context.exeptionChecked);
   };
  return (
    <div className="mb-8" hidden={props.hidden}>
      <InputComponent
        type={"checkbox"}
        name={chp4_info.text2}
        className={""}
        checked={context.exeptionChecked}
        onChange={handleElementChange}
      />
    </div>
  );
};
