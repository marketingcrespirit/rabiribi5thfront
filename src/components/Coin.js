import React from "react";
import styles from "./coin.module.css";

const Coin = (props) => {
  let style;
  switch (props.bg) {
    case 1:
      style = "bg1";
      break;
    case 2:
      style = "bg2";
      break;
    case 3:
      style = "bg3";
      break;
    default:
      style = "bg0";
      break;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.coin}>
        <div className={`${styles.coinFront} ${style}`}></div>
      </div>
    </div>
  );
};

export default Coin;
