import React from "react";
import styles from "./button.module.css";

const Button = (props) => {
  return (
    <div className={styles.button}>
      <a href="/">{props.children}</a>
    </div>
  );
};

export default Button;
