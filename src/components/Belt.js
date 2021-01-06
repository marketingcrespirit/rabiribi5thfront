import React from "react";
import styles from "./belt.module.css";
import image from "../public/assets/images/banner_purchase_02.png";

const Belt = () => {
  return (
    <div className={styles.beltWrapper}>
      <div className={styles.subbannerBlock}>
        <div>
          <div className={styles.subbannerBlockHead}>
            <h1>{`期間限定\n預購開始`}</h1>
          </div>
          <h2>01/15-02/15</h2>
        </div>
        <img src={image} />
      </div>
    </div>
  );
};

export default Belt;
