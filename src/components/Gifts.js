import React, { useRef } from "react";
import styles from "./gifts.module.css";

import { FormattedMessage } from "react-intl";


const Gifts = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className="wrapper">
        <div id="prize" className="buffer"></div>
        <h1 className="bigHeader">
          <FormattedMessage id="app.p4-1" />
        </h1>
        <p className="subtitle_p1"><FormattedMessage id="app.p2-p9-1" /></p>
        <p><FormattedMessage id="app.p2-p9-2" /></p>
        <p className="subtitle_p1"><FormattedMessage id="app.p2-p9-3" /></p>
        <p><FormattedMessage id="app.p2-p9-4" /></p>
        <p className="subtitle_p1"><FormattedMessage id="app.p2-p9-5" /></p>
        <p><FormattedMessage id="app.p2-p9-6" /></p>
      </div>
    </div>
  );
};

export default Gifts;
