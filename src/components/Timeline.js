import React from "react";
import { FormattedMessage } from "react-intl";
import styles from "./timeline.module.css";
import Title from "./Title";
import timeline from "../public/assets/images/timeline.png";
import lighthouse from "../public/assets/images/lighthouse.png";
import arrow from "../public/assets/images/arrow.png";

const steps = [
  { date: "app.p2-p7-2", content: "app.p2-p7-3" },
  { date: "app.p2-p7-4", content: "app.p2-p7-5" },
  { date: "app.p2-p7-6", content: "app.p2-p7-7" },
  { date: "app.p2-p7-8", content: "app.p2-p7-9" },
];

const Step = (props) => {
  return (
    <div className={styles.lightWrapper}>
      <img alt="lamp" src={lighthouse} />
      <div className={styles.txtTimelineWrapper}>
        <p>
          <FormattedMessage id={props.el.date} />
        </p>
        <p>
          <FormattedMessage id={props.el.content} />
        </p>
      </div>
      <img className={styles.arrow} alt="arrow" src={arrow} />
    </div>
  );
};

export default function Timeline() {
  return (
    <div className={styles.wrapper}>
      <div id="timeline" className="buffer"></div>

      <div className="wrapper oneblock">
        <Title id="app.p2-p7-1" />
        <div className={styles.stepsWrapper}>
          {steps.map((el, index) => {
            return <Step el={el} key={index} />;
          })}
        </div>
        <div>
          <div className={styles.bottomWrapper}>
            <div className={styles.txtWrapper}>
              <h2>
                <FormattedMessage id="app.p2-p7-10" />
              </h2>
              <p>
                <FormattedMessage id="app.p2-p7-11" />
              </p>
            </div>
            <div className={styles.imgWrapper}>
              <img src={timeline} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
