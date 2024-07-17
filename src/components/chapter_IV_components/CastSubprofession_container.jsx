import React, { useContext } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";

import Subprofession from "./ChapterContent_IV_Subprofession";

const CastSubprofession_container = (props) => {
  const context = useContext(CharacterStatsContext);

  const isSubprofessionHidden = (
    availabilityHiddenStatus,
    exeptionHiddenStatus, exeptionChecked
  ) => {
    if (availabilityHiddenStatus === true && exeptionHiddenStatus === true) {
      return true;
    } else if (
      availabilityHiddenStatus === false &&
      exeptionHiddenStatus === true
    ) {
      return false;
    } else if (
      availabilityHiddenStatus === false &&
      exeptionHiddenStatus === false &&
      exeptionChecked === true
    ) {
      return false;
    }
    return true;
  };

  const exeptionRenderText = (
    availabilityHiddenStatus,
    exeptionHiddenStatus
  ) => {
    if (availabilityHiddenStatus === false && exeptionHiddenStatus === false) {
      return "*";
    }
  };

  return (
    <div className="subprofession_container cast" hidden={!props.hidden}>
      {props.Item1.map((subbProfHiddenStatus, index) => (
        <Subprofession
          
          //index1- wskazuje na kastę
          //index - wskazauje na profesje danej kasty
          hiddenStat={isSubprofessionHidden(
            subbProfHiddenStatus.availabilityHiddenStatus,
            subbProfHiddenStatus.exeptionHiddenStatus,
            context.exeptionChecked
          )}
          professions={props.Item2}
          firstProfession={props.firstProfession}
          secondProfession={props.Item2[props.index1][index]}
          disabled={props.disabled}
        >
          {props.Item2[props.index1][index]}
          {exeptionRenderText(
            subbProfHiddenStatus.availabilityHiddenStatus,
            subbProfHiddenStatus.exeptionHiddenStatus
          )}
        </Subprofession>
      ))}
    </div>
  );
};

export default CastSubprofession_container;
