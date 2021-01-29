import React, { useEffect, useState } from "react";
import styles from "./mvs.module.css";
import Pagebreak1 from "./Pagebreak_1";
import Title from "./Title";
import Button from "./Button";
import music01 from "../public/assets/images/MUSIC_01.jpg";
import music02 from "../public/assets/images/MUSIC_02.jpg";
import music03 from "../public/assets/images/MUSIC_03.jpg";
import music04 from "../public/assets/images/MUSIC_04.jpg";
import music05 from "../public/assets/images/MUSIC_05.jpg";
import music06 from "../public/assets/images/MUSIC_06.jpg";
import { FormattedMessage } from "react-intl";

const rules = ["app.p3-49", "app.p3-50", "app.p3-51", "app.p3-52", "app.p3-53", "app.p3-54", "app.p3-55"];

const pics = [
  { src: music01, legend: "app.p3-42" },
  { src: music02, legend: "app.p3-43" },
  { src: music03, legend: "app.p3-44" },
  { src: music04, legend: "app.p3-45" },
  { src: music05, legend: "app.p3-46" },
  { src: music06, legend: "app.p3-47" },
];

export default function Mvs() {
  const [activate, setActivate] = useState(0);
  // const clickHandler = (index) => {
  // };
  useEffect(() => {
    const interval = setInterval(() => {
      let oldIndex = activate;
      if (oldIndex < 5) {
        oldIndex++;
      } else if (oldIndex === 5) {
        oldIndex = 0;
      }
      setActivate(oldIndex);
    }, 5000);
    return () => clearInterval(interval);
  }, [activate]);
  return (
    <div className={styles.mvsWrapper}>
      <div className="widthController">
        <Pagebreak1 />
        <div id="try"></div>

        <div className={styles.headWrapper}>
          <Title id="app.p3-41" />
        </div>

        <div className={styles.showroomWrapper}>
          <div className={styles.big}>
            {pics.map((el, index) => {
              return <img alt="Orchestra live play" key={index} className={activate === index ? "display" : "hidden"} src={`/assets/images/MUSIC_0${index + 1}.jpg`} />;
            })}

            <div className={styles.showroomTxtBg}>
              <p>
                <FormattedMessage id={pics[activate].legend}></FormattedMessage>
              </p>
            </div>
          </div>
          <div className={styles.scrollWrapper}>
            <ul>
              {pics.map((el, index) => {
                return (
                  <li
                    onClick={() => {
                      setActivate(index);
                    }}
                    key={index}
                  >
                    <img alt="Orchestra live play" src={`/assets/images/MUSIC_0${index + 1}.jpg`} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <Pagebreak1 />
        <div id="rule"></div>
        <div className={styles.rulesWrapper}>
          <Title id="app.p3-48" />
          <ol>
            {rules.map((el, index) => {
              return (
                <li key={index}>
                  <p>{index + 1 + ".  "}</p>
                  <FormattedMessage id={el}></FormattedMessage>
                </li>
              );
            })}
            {/* 3661000  */}
            <li className={styles.inner}>
              <p>*</p>
              <FormattedMessage id="app.p3-55-1" />
            </li>
            <li className={styles.inner}>
              <p>*</p>
              <FormattedMessage id="app.p3-55-2" />
            </li>
          </ol>
        </div>
        <div className={styles.buttonWrapper}>
          <Button href="/rabi5th/buynow">
            <h2>
              <FormattedMessage id="app.p3-56"></FormattedMessage>
            </h2>
          </Button>
        </div>
      </div>
    </div>
  );
}
