import React from "react";
import styles from "./standard.module.css";
import judge_1 from "../public/assets/images/judge/judge_1.png";
import judge_2 from "../public/assets/images/judge/judge_2.png";
import judge_3 from "../public/assets/images/judge/judge_3.png";
import JudgeCard from "./JudgeCard";
import {FormattedMessage} from 'react-intl'


const judge = [
  { src: judge_1, name: "app.p3-15", title: "app.p3-16", content: "selfintro" },
  { src: judge_2, name: "app.p3-17", title: "app.p3-18", content: "selfintro" },
  { src: judge_3, name: "app.p3-19", title: "app.p3-20", content: "selfintro" },
];

const mainStyle = {
  tableWrapper: {
    margin: "0",
    backgroundColor: "#000",
    padding: "1em",
    color: "#fff",
  },
  tr: {
    backgroundColor: "lightblue",
    color: "#000",
  },
};

export default function Standard() {
  return (
    <div className={styles.wrapper}>
      <div className="wrapper">
        <div id="rule" className="buffer"></div>
        <h1 className="bigHeader"><FormattedMessage id="app.p3-1" /></h1>
        <h2 className="center"><FormattedMessage id="app.p3-2" /></h2>
        <div className={styles.sectionWrapper}>
          <p className="subtitle"><FormattedMessage id="app.p3-3" /></p>
          <p><FormattedMessage id="app.p3-4" /></p>
          <p><FormattedMessage id="app.p3-5" /></p>
          <table className={styles.tg}>
            <thead>
              <tr className={styles.tr}>
                <th className="tg-9wq8"></th>
                <th className="tg-9wq8"><FormattedMessage id="app.p3-6" /></th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.td_1}>
                <td className={styles.large}>50%</td>
                <td><FormattedMessage id="app.p3-7" /></td>
              </tr>
              <tr className={styles.td_2}>
                <td className={styles.large}>30%</td>
                <td><FormattedMessage id="app.p3-8" /></td>
              </tr>
              <tr className={styles.td_1}>
                <td className={styles.large}>20%</td>
                <td><FormattedMessage id="app.p3-9" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.sectionWrapper}>
          <p className="subtitle"><FormattedMessage id="app.p3-10" /></p>
          <p><FormattedMessage id="app.p3-11" /></p>
          <table className={styles.tg}>
            <thead>
              <tr className={styles.tr}>
                <th className="tg-9wq8"></th>
                <th className="tg-9wq8"><FormattedMessage id="app.p3-12" /></th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.td_1}>
                <td className={styles.large}>100%</td>
                <td><FormattedMessage id="app.p3-13" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <p className="subtitle"><FormattedMessage id="app.p3-14" /></p>
          <div className={styles.judgeCardWrapper}>
            {judge.map((el, i) => {
              return (
                <JudgeCard el={el} key={i} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
