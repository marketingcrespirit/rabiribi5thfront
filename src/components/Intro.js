import React from "react";
import styles from "./intro.module.css";
import image1 from "../public/assets/images/p2_page1_1.png";
import image2 from "../public/assets/images/p2_page1_2.png";
import image3 from "../public/assets/images/p2_page1_3.png";
import JudgeCard from "./JudgeCard";
import Title from "./Title";
import { FormattedMessage } from "react-intl";

const judge = [
  { src: image1, name: "app.p2-p1-2", title: "app.p2-p1-3", content: "selfintro", href:"go-bunny-go" },
  { src: image2, name: "app.p2-p1-4", title: "app.p2-p1-5", content: "selfintro", href:"art-contest" },
  { src: image3, name: "app.p2-p1-6", title: "app.p2-p1-7", content: "selfintro" },
];

const Judge = (props) => {
  return (
    <div className={styles.introWrapper}>
      <div className="wrapper oneblock">
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
            return <JudgeCard el={el} href={el.href} key={i} src={i + 1} index={i + 1} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Judge;
