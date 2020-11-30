import React, { useState } from "react";
import styles from "./judgecard.module.css";
import { FormattedMessage } from "react-intl";

export default function JudgeCard(props) {
  return (
    <div className={styles.judgeCard}>
      <img className={styles.judgeImg} src={props.el.src} />
      <div className={styles.judgeTxtWrapper}>
        <h2>
          <FormattedMessage id={`${props.el.name}`} />
        </h2>
        <p>
          <FormattedMessage id={`${props.el.title}`} />
        </p>
      </div>
    </div>
  );
}
