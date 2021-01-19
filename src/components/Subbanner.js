import React from "react";
import Button from "./Button";
import Pagebreak_1 from "./Pagebreak_1";
import styles from "./subbanner.module.css";
import Title from "./Title";

const Subbanner = () => {
  return (
    <div className={styles.subbannerWrapper}>
      <div className="buffer" id="video"></div>
      <Title id="Rabi-Ribi五週年活動開始!" />
      <div className={styles.videoWrapper}>
        <div className={styles.videoContainer}>
          <iframe width="640" height="360" src="https://www.youtube.com/embed/mMKonMlPy0k" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>

      <Pagebreak_1 />
    </div>
  );
};

export default Subbanner;
