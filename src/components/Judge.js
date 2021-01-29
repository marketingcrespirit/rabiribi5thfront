import React from "react";
import styles from "./judge.module.css";
import judge_1 from "../public/assets/images/judge/judge_1.png";
import judge_2 from "../public/assets/images/judge/judge_2.png";
import judge_3 from "../public/assets/images/judge/judge_3.png";
import JudgeCard from "./JudgeCard";

const judge = [
  { src: judge_1, name: "艾莉娜", title: "Rabi-Ribi歷代主角", content: "selfintro" },
  { src: judge_2, name: "莉波", title: "可能是兔子的緊急糧食", content: "selfintro" },
  { src: judge_3, name: "伊莉斯", title: "UPRPRC俱樂部的會長", content: "selfintro" },
];

const Judge = (props) => {
  return (
    <div className={styles.judgeWrapper}>
      <div className="wrapper">
        <div id="judge" className="buffer"></div>
        <h1 className="bigHeader">評審介紹</h1>
        <p>可以塞一點字給我嗎拜託可以塞一點字給我嗎拜託可以塞一點字給我嗎拜託可以塞一點字給我嗎拜託</p>
        <div className={styles.judgeCardWrapper}>
          {judge.map((el, i) => {
            return (
              <JudgeCard el={el} key={i} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Judge;
