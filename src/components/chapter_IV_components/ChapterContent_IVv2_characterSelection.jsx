import React, { useContext, useEffect } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import InputComponent from "../chaper_I_components/InputComponent";

export const ChapterContent_IVv2_characterSelection = () => {
  const context = useContext(CharacterStatsContext);

  const handleCharacterChange = (character) => {
    context.setCharacter(character);
    context.setCharacterChecked(!context.characterChecked);

    if (character === context.character) {
      context.setCharacter("");
    }
  };

  //characterChecked,
  //setCharacterChecked;
  return (
    <section>
      <h2>IV.a WYBÓR CHARAKTERU</h2>

      {context.availableCharacters.map((character) => (
        <p className={"m-2  "}>
          <InputComponent
            type={"checkbox"}
            name={character}
            className
            checked={character === context.character}
            onChange={() => handleCharacterChange(character)}
          />
        </p>
      ))}
    </section>
  );
};
