import React from 'react'

export const ChapterContent_IV_CAST_subProfList = (props) => {
  return (
    <div className="ml-4 border [&>*]:lowercase">
      {props.mainProf.combiningProfessions.map((subProfList) =>
        subProfList
          .filter((subProfName) =>
            props.professionsList.some(
              (raceProf) => raceProf.profName === subProfName
            )
          )
          .map((subProf) => <p>{subProf}</p>)
      )}
    </div>
  );
}
