import React from "react";
import styles from "./judgecard.module.css";
import { FormattedMessage } from "react-intl";

export default function JudgeCard(props) {
  return (
    <div className={styles.judgeCard}>
      <div className={styles.imgWrapper}>
        <a href={`${props.href}`}>
          <img className={props.index === 3 ? "disable" : ""} alt="評審照片" className={styles.judgeImg} src={props.el.src} />
        </a>
        <h2>
          <FormattedMessage id={`${props.el.name}`} />
        </h2>
      </div>
      <div className={styles.judgeTxtWrapper}>
        <div className={styles.judgeTxtContentWrapper}>
          <p>
            <FormattedMessage id={`${props.el.title}`} />
          </p>
        </div>
      </div>
    </div>
  );
}
