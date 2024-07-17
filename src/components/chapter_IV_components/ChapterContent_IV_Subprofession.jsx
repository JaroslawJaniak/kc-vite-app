import React, { useContext, useState, useEffect } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import { InputComponent } from "../utils/InputComponent";

const Subprofession = (props) => {
  const context = useContext(CharacterStatsContext);
  const [isProfAvailable, setIsProfAvailable] = useState(false);

  const handleElementChange = (profName) => {
    context.setSecondProfession(profName);
  };

  const isProfessionAvailable = (prof) => {
    return prof;
    // context.availableProfessionsByRace.forEach((el) => {
    //   if (el.profName !== prof) {return prof}
    // });
  };

  

  useEffect(() => {
    
    return () => {
      
    };
  }, []);
  

  return (
    <div className="subprofession ml-5" hidden={props.hiddenStat}>
      <InputComponent
        type={"checkbox"}
        name={props.children}
        className={"lowercase"}
        checked={
          context.secondProfession === props.secondProfession &&
          context.profession === props.firstProfession
        }
        onChange={() => {
          handleElementChange(props.secondProfession);
        }}
        disabled={props.disabled}
      />
      
    </div>
  );
};

export default Subprofession;
