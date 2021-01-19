import React from "react";
import { FormattedMessage } from "react-intl";
import Title from "./Title";
import styles from "./winner.module.css";
import image from "../public/assets/images/members/25.png";
const judges = ["4 NUDA", "14 Nano ka", "18 ike", "49	風船貓", "59 Lee", "66 映はち"];
const popular = ["15 霧鈴桐喻", "67 プチ", "1 Zavok", "51 Losno", "56 saltywetspirit 鹹濕精神", "45 世子"];
const member = ["takumi_7**@yahoo.com", "shaoyou**@gmail.com", "wcko**@gmail.com", "taikokid**@gmail.com", "caffeinefightersha**@gmail.com", "seanhunter**@gmail.com", "six.shooter0**@gmail.com", "kenny742**@gmail.com", "kirablahete**@gmail.com", "a826239**@gmail.com", "matheussouza01**@gmail.com", "knock36**@yahoo.co.jp", "pshx1**@gmail.com", "pshx1**@gmail.com", "4907517**@qq.com", "samca1**@gmail.com", "darkm**@gmail.com", "garyfong**@gmail.com", "themultitasker98**@gmail.com", "gapt427820**@yahoo.co.jp"];
const special = ["26 s.Claw"];

const Winner = () => {
  return (
    <div className={styles.winnerWrapper}>
      <Title id="app.p3-winner-1" />
      <div className={styles.formWrapper}>
        <div className={styles.messageWrapper}>
          <p className="subtitle_p1">
            <FormattedMessage id="app.p3-winner-11" />
          </p>
          <p className={styles.message}>
            <FormattedMessage id="app.p3-winner-12" />
          </p>
          <p className="subtitle_p1">
            <FormattedMessage id="app.p3-winner-13" />
          </p>
          <p className={styles.message}>
            <FormattedMessage id="app.p3-winner-14" />
          </p>
        </div>

        <div className={styles.winnerListWrapper}>
          <div className={styles.wrapperLeft}>
            <div>
              <div>
                <p className="subtitle_p1">
                  <FormattedMessage id="app.p3-winner-4" />
                </p>
              </div>
              <div>
                <ul>
                  {special.map((el, index) => {
                    return (
                      <li>
                        <i class="fas fa-crown"></i>
                        <FormattedMessage id="app.p3-winner-3" />
                        {el}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <p className="subtitle_p1">
                  <FormattedMessage id="app.p3-winner-2" />
                </p>
              </div>
              <div>
                <ul>
                  {judges.map((el, index) => {
                    return (
                      <li>
                        <i class="fas fa-crown"></i>
                        <FormattedMessage id="app.p3-winner-3" />
                        {el}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <p className="subtitle_p1">
                  <FormattedMessage id="app.p3-winner-5" />
                </p>
              </div>
              <div>
                <ul>
                  {popular.map((el, index) => {
                    return (
                      <li>
                        <i class="fas fa-crown"></i>
                        <FormattedMessage id="app.p3-winner-3" />
                        {el}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.wrapperRight}>
            <div>
              <p className="subtitle_p1">
                <FormattedMessage id="app.p3-winner-6" />
              </p>
            </div>
            <div>
              <ul>
                {member.map((el, index) => {
                  return (
                    <li>
                      <i class="fas fa-music"></i>
                      {el}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.messageWrapper}>
          <p className="subtitle_p1">
            <FormattedMessage id="app.p3-winner-7" />
          </p>
          <div className={styles.specialWrapper}>
            <img src={image} />
          </div>
          <p className={styles.message}>
            <FormattedMessage id="app.p3-winner-8" />
          </p>
        </div>

        <div className={styles.messageWrapper}>
          <p className="subtitle_p1">
            <FormattedMessage id="app.p3-winner-9" />
          </p>
          <p className={styles.message}>
            <FormattedMessage id="app.p3-winner-10" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Winner;
