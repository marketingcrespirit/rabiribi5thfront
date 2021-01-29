import React from "react";
import { FormattedMessage } from "react-intl";
import Pagebreak1 from "./Pagebreak_1";
import styles from "./subbanner.module.css";
import Title from "./Title";

const Subbanner = (props) => {
  return (
    <div className={styles.subbannerWrapper}>
      <div className="widthController">
        <div id="video"></div>
        <div className={styles.headWrapper}>
          <Title id="app.p3-21" />
        </div>
        <div className={props.locale.includes('zh') ? `${styles.videoWrapper}` : 'hidden'}>
          <div className={styles.videoContainer}>
            <iframe title="live music play" width="640" height="360" src="https://www.youtube.com/embed/9fTgmIMTMN8" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>

        <div className={props.locale.includes('en') ? `${styles.videoWrapper}` : 'hidden'}>
          <div className={styles.videoContainer}>
            <iframe title="live music play" width="640" height="360" src="https://www.youtube.com/embed/fYeIbf8vPRA"  frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>

        <div className={styles.textWrapper}>
          <p><FormattedMessage id="app.p3-22"></FormattedMessage></p>
        </div>

        <Pagebreak1 />
      </div>
    </div>
  );
};

export default Subbanner;
