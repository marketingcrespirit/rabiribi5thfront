import React from "react";
import styles from "./award.module.css";
import Title from "./Title";
import { FormattedMessage } from "react-intl";
import award from "../public/assets/images/award.png";
import star from "../public/assets/icons/star.png";

const array = [
  { title: "app.p2-p4-3", content: "app.p2-p4-4" },
  { title: "app.p2-p4-5", content: "app.p2-p4-6" },
  { title: "app.p2-p4-7", content: "app.p2-p4-8" },
];

const Award = () => {
  return (
    <div className={styles.wrapper}>
      <div className="wrapper">
        <div className="buffer"></div>

        <Title id="app.p2-p4-1" />
        <p className="subtitle">
          <FormattedMessage id="app.p2-p4-2" />
        </p>

        <div className={styles.bottomWrapper}>
          {array.map((el, index) => {
            return (
              <div className={styles.txtWrapper} key={index}>
                <div className={styles.txtHeadWrapper}>
                  <img src={star} />
                  <h2>
                    <FormattedMessage id={el.title} />
                  </h2>
                </div>
                <p>
                  <FormattedMessage id={el.content} />
                </p>
              </div>
            );
          })}

          <div className={styles.imgWrapper}>
            <img src={award} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Award;
