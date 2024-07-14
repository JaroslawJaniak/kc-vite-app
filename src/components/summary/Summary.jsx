import React, { useContext } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import { NewLineText } from "../utils/NewLineText";
import styles from "./summary.module.css";

const Summary = () => {
  const context = useContext(CharacterStatsContext);

  return (
    <section className={`${styles.sticky} p-4  bg-white`}>
      <article>
        <p>
          <b> Płeć: </b>
          {context.chpt1Info.sex}
        </p>
        <p>
          <b>Rasa: </b>
          {context.chpt1Info.race}
        </p>
        <NewLineText text={context.chpt1Info.description} />

        <p>
          <b> Miejsce urodzenia:</b> {context.chpt2Info.placeOfBirth};
        </p>
        <p>{context.chpt2Info.description}</p>

        <p>
          <b> Wyjściowa klasa społeczna:</b> {context.chpt2Info.socialClass}
        </p>
        <p>
          <b> Roczny dochód: </b>
          {context.chpt2Info.incomeValue}
        </p>
      </article>
    </section>
  );
};

export default Summary;