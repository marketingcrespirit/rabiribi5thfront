import React from "react";
import styles from "./draftintro.module.css";
import { FormattedMessage } from "react-intl";
import imageOne from "../public/assets/images/spec_1.png";
import imageTwo from "../public/assets/images/spec_2.png";
import line from "../public/assets/images/line.png";

const DraftIntro = () => {
  return (
    <div className={styles.wrapper}>
      <div className="wrapper">
        <div id="intro" className="buffer"></div>
        <h1 className="bigHeader">
          <FormattedMessage id="app.p1-1" />

          <small>
            <FormattedMessage id="app.p1-2" />
          </small>
        </h1>
        <section>
          <p className="subtitle_p1">
            <FormattedMessage id="app.p1-3" />
          </p>
          <p>
            <FormattedMessage id="app.p1-4" />
          </p>
        </section>

        <div className={styles.specWrapper}>
          <div className={styles.specImg}>
            <img alt="point one" src={imageOne} />
          </div>
          <div className={styles.specTxt}>
            <h2 className={styles.dark}>
              <FormattedMessage id="app.p1-5" />
            </h2>
            <ul>
              <li>
                <FormattedMessage id="app.p1-6" />
              </li>
              <li>
                <FormattedMessage id="app.p1-7" />
              </li>
              <li>
                <FormattedMessage id="app.p1-8" />
              </li>
              <li>
                <FormattedMessage id="app.p1-9" />
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.specWrapper}>
          <div className={styles.specImg}>
            <img  alt="point two" src={imageTwo} />
          </div>
          <div className={styles.specTxt}>
            <h2 className={styles.dark}>
              <FormattedMessage id="app.p1-10" />
            </h2>
            <ul>
              <li>
                <FormattedMessage id="app.p1-11" />
              </li>
              <li>
                <FormattedMessage id="app.p1-12" />
              </li>
              <li>
                <FormattedMessage id="app.p1-13" />
              </li>
              <li>
                <FormattedMessage id="app.p1-14" />
              </li>
              <li>
                <FormattedMessage id="app.p1-15" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DraftIntro;
