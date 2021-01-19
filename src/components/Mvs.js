import React, { useState } from "react";
import styles from "./mvs.module.css";
import Pagebreak_1 from "./Pagebreak_1";
import Pagebreak_2 from "./Pagebreak_2";
import Title from "./Title";
import ReactPlayer from "react-player";
import Carousel from "../components/Carousel";
import Button from "./Button";

const list = [
  { src: "https://picsum.photos/800/600?random=6", legend: "" },
  { src: "https://picsum.photos/800/600?random=2", legend: "" },
  { src: "https://picsum.photos/800/600?random=1", legend: "" },
  { src: "https://picsum.photos/800/600?random=4", legend: "" },
  { src: "https://picsum.photos/800/600?random=3", legend: "" },
];

const rules = ["rule1", "rule2", "rule3", "rule4"];

const pics = [
  { src: "https://picsum.photos/600/400?random=6", legend: "fskdahflksda" },
  { src: "https://picsum.photos/600/400?random=2", legend: "fsaldjflsd" },
  { src: "https://picsum.photos/600/400?random=1", legend: "lsakdfj;skdfl;asjdf" },
  { src: "https://picsum.photos/600/400?random=4", legend: "fsajdf;sdf" },
  { src: "https://picsum.photos/600/400?random=3", legend: "asdfsdf" },
  { src: "https://picsum.photos/600/400?random=6", legend: "asdfasdfsadfsdf" },
  { src: "https://picsum.photos/600/400?random=7", legend: "asdfsadf" },
  { src: "https://picsum.photos/600/400?random=8", legend: "asdfsdfasfsdfsfsdfasfsdsdfsf" },
];

export default function Mvs() {
  const [activate, setActivate] = useState(0);
  const clickHandler = (index) => {
    console.log(index);
  };
  return (
    <div className={styles.mvsWrapper}>
      {/* <div className={styles.carouselWrapper}>
        <Carousel list={list} />
      </div> */}
      <Pagebreak_1 />

      <Title id="交響樂介紹" />

      <div className={styles.showroomWrapper}>
        <div className={styles.big}>
          <img src={pics[activate].src} />
          <p>{pics[activate].legend}</p>
        </div>
        <div className={styles.scrollWrapper}>
          <ul>
            {pics.map((el, index) => {
              return (
                <li
                  onClick={() => {
                    setActivate(index);
                    console.log(index);
                  }}
                  key={index}
                >
                  <img src={el.src} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <Pagebreak_1 />

      <div className={styles.rulesWrapper}>
        <Title id="預購規章" />
        <ol>
          {rules.map((el, index) => {
            return <li>{el}</li>;
          })}
        </ol>
      </div>
      <div className={styles.buttonWrapper}>
        <Button>
          <h2>了解更多</h2>
        </Button>
      </div>
    </div>
  );
}
