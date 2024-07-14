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
      {props.Item1.map((stat, indexStat) => (
        <Subprofession
          indexOfArray={props.index1}
          indexStat2={indexStat}
          hiddenStat={isSubprofessionHidden(
            stat.availabilityHiddenStatus,
            stat.exeptionHiddenStatus,
            context.exeptionChecked
          )}
          professions={props.Item2}
        >
          {props.Item2[props.index1][indexStat]}
          {exeptionRenderText(
            stat.availabilityHiddenStatus,
            stat.exeptionHiddenStatus
          )}
        </Subprofession>
      ))}
    </div>
  );
};

export default CastSubprofession_container;
