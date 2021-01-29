import React from "react";
import { FormattedMessage } from "react-intl";
import title_left from "../public/assets/images/title_left.png";
import styles from './title.module.css'

const Title = (props) => {
  return (
    <h1 className={styles.bigHeader}>
      <img alt="decoration line" src={title_left} />
      <FormattedMessage id={props.id} />
      <img alt="decoration line" className={styles.right} src={title_left} />
    </h1>
  );
};

export default Title;
