import React from "react";
import styles from "./pic.module.css";
const pic = (props) => {
  return (
    <div className={props.selected ? `${styles.pic} ${styles.selected}` : `${styles.pic}`} onClick={props.clicked}>
      <img src="https://picsum.photos/200/200?random=5" />
    </div>
  );
};

export default pic;
