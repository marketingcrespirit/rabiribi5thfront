import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import Title from "./Title";
import styles from "./winner.module.css";

import pic000 from "../public/assets/images/members/0.png";
import pic003 from "../public/assets/images/members/3.png";
import pic013 from "../public/assets/images/members/13.png";
import pic014 from "../public/assets/images/members/14.png";
import pic017 from "../public/assets/images/members/17.png";
import pic025 from "../public/assets/images/members/25.png";
import pic044 from "../public/assets/images/members/44.png";
import pic048 from "../public/assets/images/members/48.png";
import pic050 from "../public/assets/images/members/50.png";
import pic055 from "../public/assets/images/members/55.png";
import pic058 from "../public/assets/images/members/58.png";
import pic065 from "../public/assets/images/members/65.png";
import pic066 from "../public/assets/images/members/66.png";

import pic000m from "../public/assets/images/members/0m.png";
import pic003m from "../public/assets/images/members/3m.png";
import pic013m from "../public/assets/images/members/13m.png";
import pic014m from "../public/assets/images/members/14m.png";
import pic017m from "../public/assets/images/members/17m.png";
import pic025m from "../public/assets/images/members/25m.png";
import pic044m from "../public/assets/images/members/44m.png";
import pic048m from "../public/assets/images/members/48m.png";
import pic050m from "../public/assets/images/members/50m.png";
import pic055m from "../public/assets/images/members/55m.png";
import pic058m from "../public/assets/images/members/58m.png";
import pic065m from "../public/assets/images/members/65m.png";
import pic066m from "../public/assets/images/members/66m.png";

const judges = [
  { name: "4 NUDA", src: pic003, srcM: pic003m },
  { name: "14 Nano ka", src: pic013, srcM: pic013m },
  { name: "18 ike", src: pic017, srcM: pic017m },
  { name: "49 風船貓", src: pic048, srcM: pic048m },
  { name: "59 Lee", src: pic058, srcM: pic058m },
  { name: "66 映はち", src: pic065, srcM: pic065m },
];
const popular = [
  { name: "1 Zavok", src: pic000, srcM: pic000m },
  { name: "15 霧鈴桐喻", src: pic014, srcM: pic014m },
  { name: "45 世子", src: pic044, srcM: pic044m },
  { name: "51 Losno", src: pic050, srcM: pic050m },
  { name: "56 saltywetspirit", src: pic055, srcM: pic055m },
  { name: "67 プチ", src: pic066, srcM: pic066m },
];
const special = [{ name: "26 s.Claw", src: pic025, srcM: pic025m }];

const memberList = ["takumi_748@yahoo.com"
,"shaoyouru@gmail.com"
,"wcko87@gmail.com"
,"taikokid97@gmail.com"
,"caffeinefightersharo@gmail.com"
,"seanhuntersp@gmail.com"
,"six.shooter062@gmail.com"
,"kenny74242@gmail.com"
,"kirablahetek1@gmail.com"
,"a82623993@gmail.com"
,"matheussouza0199@gmail.com"
,"knock3621@yahoo.co.jp"
,"pshx104@gmail.com"
,"ely0514@hotmail.com"
,"490751798@qq.com"
,"samca121@gmail.com"
,"darkmiz@gmail.com"
,"garyfongff@gmail.com"
,"themultitasker9898@gmail.com"
,"gapt42782000@yahoo.co.jp"]

let finalList = []

memberList.map((el, index) => {
    let str = el
    str = str.replace(/...@/g, "***@");
    finalList.push(str)
})

const group = [
  { name: "26 s.Claw", src: pic025, srcM: pic025m },
  { name: "4 NUDA", src: pic003, srcM: pic003m },
  { name: "14 Nano ka", src: pic013, srcM: pic013m },
  { name: "18 ike", src: pic017, srcM: pic017m },
  { name: "49 風船貓", src: pic048, srcM: pic048m },
  { name: "59 Lee", src: pic058, srcM: pic058m },
  { name: "66 映はち", src: pic065, srcM: pic065m },
  { name: "1 Zavok", src: pic000, srcM: pic000m },
  { name: "15 霧鈴桐喻", src: pic014, srcM: pic014m },
  { name: "45 世子", src: pic044, srcM: pic044m },
  { name: "51 Losno", src: pic050, srcM: pic050m },
  { name: "56 saltywetspirit 鹹濕精神", src: pic055, srcM: pic055m },
  { name: "67 プチ", src: pic066, srcM: pic066m },
];

const Winner = () => {
  const [show, setShow] = useState(null);
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    let newState = modal;
    newState = !newState;
    setModal(newState);
  };
  const clickHandler = (index) => {
    setShow(index);
  };
  return (
    <div className={styles.winnerWrapper}>
      {/* <div className={modal ? `${styles.winnerShowroom}` : `${styles.hidden}`} onClick={toggleModal}>
        <div className={styles.winnerImage}>
          <img src={show !== null ? group[show].src : ""} />
        </div>
      </div> */}
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
                        <div className={styles.winnerUnit}>
                          <div>
                            <i class="fas fa-crown"></i>
                            <FormattedMessage id="app.p3-winner-3" />
                            {el.name}
                          </div>
                          <img
                            src={el.srcM}
                            onClick={() => {
                              clickHandler(index);
                              toggleModal();
                            }}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className={styles.messageWrapper}>
                <p>
                  <FormattedMessage id="app.p3-winner-7" />
                </p>
                <p className={styles.message}>
                  <FormattedMessage id="app.p3-winner-8" />
                </p>
              </div>
              <div>
                <p className="subtitle_p1">
                  <FormattedMessage id="app.p3-winner-2" />
                </p>
                <p>
                  *<FormattedMessage id="app.p3-winner-15" />
                </p>
              </div>
              <div>
                <ul className={styles.twoRow}>
                  {judges.map((el, index) => {
                    return (
                      <li>
                        <div className={styles.winnerUnit}>
                          <div>
                            <i class="fas fa-crown"></i>
                            <FormattedMessage id="app.p3-winner-3" />
                            {el.name}
                          </div>
                          <img
                            src={el.srcM}
                            onClick={() => {
                              clickHandler(index + 1);
                              toggleModal();
                            }}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <p className="subtitle_p1">
                  <FormattedMessage id="app.p3-winner-5" />
                </p>
                <p>
                  *<FormattedMessage id="app.p3-winner-15" />
                </p>
              </div>
              <div>
                <ul className={styles.twoRow}>
                  {popular.map((el, index) => {
                    return (
                      <li>
                        <div className={styles.winnerUnit}>
                          <div>
                            <i class="fas fa-crown"></i>
                            <FormattedMessage id="app.p3-winner-3" />
                            {el.name}
                          </div>
                          <img
                            src={el.srcM}
                            onClick={() => {
                              clickHandler(index + 7);
                              toggleModal();
                            }}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
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
            <ul className={styles.memberWrapper}>
              {finalList.map((el, index) => {
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