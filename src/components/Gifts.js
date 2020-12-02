import React, { useRef } from "react";
import styles from "./gifts.module.css";
// import award from "../public/assets/images/award.jpg";
// import line from "../public/assets/images/line.png";
import { FormattedMessage } from "react-intl";
import video_en from "../public/assets/videos/video_en.mp4";
import video_zh from "../public/assets/videos/video_zh.mp4";
import poster_en from "../public/assets/images/poster_en.png";
import poster_zh from "../public/assets/images/poster_zh.png";

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
          <video preload="auto" className={props.lang.includes('zh')? `${styles.show}`: `${styles.hide}`} controls poster={poster_zh} controlsList="nodownload">
            <source src={video_zh} type="video/mp4" />
          </video>
          <video preload="auto" className={props.lang.includes('en')? `${styles.show}`: `${styles.hide}`} controls poster={poster_en} controlsList="nodownload">
            <source src={video_en} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Gifts;

// 增加打x
