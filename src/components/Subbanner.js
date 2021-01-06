import React from "react";
import Button from "./Button";
import Pagebreak_2 from "./Pagebreak_2";
import styles from "./subbanner.module.css";

const Subbanner = () => {
  return (
    <div className={styles.subbannerWrapper}>
      <div className="buffer" id="products"></div>
      <div className={styles.subbannerBlock}>
        <div className={styles.subbannerBlockHead}>
          <h1>{`期間限定\n預購開始`}</h1>
        </div>
        <h2>01/15-02/15</h2>
      </div>

      <div className={styles.buttonwrapper}>
        <Button>
          <h2>馬上預購</h2>
        </Button>
      </div>

      <Pagebreak_2 />
    </div>
  );
};

export default Subbanner;
