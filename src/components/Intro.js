import React from "react";
import styles from "./intro.module.css";
import image from "../public/assets/images/p2_page1.png";
import JudgeCard from "./JudgeCard";
import Title from "./Title";
import { FormattedMessage } from "react-intl";

const judge = [
  { src: image, name: "app.p2-p1-2", title: "app.p2-p1-3", content: "selfintro" },
  { src: image, name: "app.p2-p1-4", title: "app.p2-p1-5", content: "selfintro" },
];

const Judge = (props) => {
  return (
    <div className={styles.introWrapper}>
      <div className="wrapper oneblock">
        <div id="intro" className="buffer"></div>
        <Title id="app.p2-p1-1" />
        <div className="subtitle">
          <p>
            <FormattedMessage id="app.p2-1-6" />
          </p>
          <p>
            <FormattedMessage id="app.p2-1-7" />
          </p>
        </div>
        <div className={styles.introCardWrapper}>
          {judge.map((el, i) => {
            return <JudgeCard el={el} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Judge;
