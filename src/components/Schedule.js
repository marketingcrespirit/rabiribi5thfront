import React from "react";
import styles from "./schedule.module.css";
import {FormattedMessage} from 'react-intl'

export default function Schedule(props) {
  return (
    <div className={styles.wrapper}>
      <div className="wrapper">
        <div id="schedule" className="buffer"></div>
        <h1 className="bigHeader"><FormattedMessage id="app.p2-1" /></h1>
        <div className={styles.timeline}  id={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineIcon}>
              {/* <img src={button} /> */}
            </div>
            <div className={styles.timelineContent}><FormattedMessage id="app.p2-2" /></div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineIcon}>
              {/* <img src={button} /> */}
            </div>
            <div className={styles.timelineContent}><FormattedMessage id="app.p2-3" /></div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineIcon}>
              {/* <img src={button} /> */}
            </div>
            <div className={`${styles.timelineContent} ${styles.right}`}><FormattedMessage id="app.p2-4" /></div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineIcon}>
              {/* <img src={button} /> */}
            </div>
            <div className={`${styles.timelineContent} ${styles.right}`}><FormattedMessage id="app.p2-5" /></div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineIcon}>
              {/* <img src={button} /> */}
            </div>
            <div className={styles.timelineContent}><FormattedMessage id="app.p2-6" /></div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineIcon}>
              {/* <img src={button} /> */}
            </div>
            <div className={`${styles.timelineContent} ${styles.right}`}><FormattedMessage id="app.p2-7" /></div>
          </div>

          
        </div>
        <p className="subtitle_p1"><FormattedMessage id="app.p2-8" /></p>
        <p className={styles.blank}><FormattedMessage id="app.p2-9" /></p>
      </div>

    </div>
  );
}
