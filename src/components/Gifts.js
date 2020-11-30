import React from "react";
import styles from "./gifts.module.css";
import award from "../public/assets/images/award.jpg";
import line from "../public/assets/images/line.png";
import { FormattedMessage } from "react-intl";
import video from "../public/assets/videos/video.mp4";

const Gifts = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className="wrapper">
        <div id="prize" className="buffer"></div>
        <h1 className="bigHeader">
          <FormattedMessage id="app.p4-1" />
        </h1>
        <p className="subtitle">
          <FormattedMessage id="app.p4-2" />
        </p>
        <p>
          <FormattedMessage id="app.p4-3" />
        </p>
        <div className={styles.giftWrapper}>
          <video className={props.lang.includes('zh') ? `${styles.show}` : `${styles.hide}`}  controls>
            <source src={video} type="video/mp4" />
          </video>

          <video className={props.lang === "en" ? `${styles.show}` : `${styles.hide}`}  controls>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Gifts;
