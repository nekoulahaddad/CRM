import React from 'react';
import styles from "./PartnerRightColHeading.module.sass";
import {ReactComponent as Question} from "../../assets/Question.svg";

function PartnerRightColHeading({ text }) {
  return (
    <div className={styles.heading}>
      <h3 className={styles.title}>{ text }</h3>
      <Question />
    </div>
  );
}

export default PartnerRightColHeading;
