import React, { useState, useEffect } from "react";
import styles from "./gather.module.css";
import tree from "../public/assets/images/tree.png";
import coin from "../public/assets/images/coin.png";
import road from "../public/assets/images/road.png";
import axios from "axios";
import { FormattedMessage } from "react-intl";
import title_left from "../public/assets/images/title_l.png";
import title_right from "../public/assets/images/title_r.png";
import walking from "../public/assets/images/walking.png";
const NET_SERVER_URL = "https://rabiribi5thserver.herokuapp.com";

const mainStyle = {
  app: {
    margin: "0",
  },
  submitButton: {
    backgroundColor: "#408cec",
    border: 0,
    padding: "5px 8px",
    color: "#fff",
    margin: "0 auto",
    width: 150,
    display: "inline",
    borderRadius: 3,
  },
  cancelButton: {
    backgroundColor: "red",
    border: 0,
    padding: "5px 10px",
    color: "#fff",
    margin: "0 auto",
    width: 150,
    display: "block",
    borderRadius: 3,
  },
};

function validateName(name) {
  var re = /^[\w\u4E00-\u9FA5\uF900-\uFA2D]{1,5}$/;
  return re.test(name);
}

function validateContent(content) {
  var re = /^[\w\u4E00-\u9FA5\uF900-\uFA2D]{1,25}$/;
  return re.test(content);
}

const Gather = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [amount, setAmount] = useState(1000);

  // const [stageOne, setStageOne] = useState(false);
  // const [stageTwo, setstageTwo] = useState(false);
  // const [stageThree, setstageThree] = useState(false);
  const [errorDisplay, setErrorDisplay] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [sendSucceed, setSendSucceed] = useState(false);
  // let date = new Date().getDate();

  const nameInputHandler = (e) => {
    setName(e.target.value);
  };

  const clearMessages = (e) => {
    e.preventDefault();
    setErrorDisplay(false);
    setNameError(false);
    setContentError(false);
    setSendSucceed(false);
  };
  const contentInputHandler = (e) => {
    setContent(e.target.value);
  };
  const submitMessage = (e) => {
    e.preventDefault();
    if (validateName(name) && validateContent(content)) {
      axios({
        method: "post",
        url: NET_SERVER_URL + "/message",
        data: {
          name: name,
          content: content,
        },
      }).then((response) => {
        console.log(response);
        if (response.status === 201) {
          window.location = "/";
        } else if (response.status === 204) {
        }
        setSendSucceed(true);
        setErrorDisplay(true);
      });
    } else if (!validateName(name)) {
      setNameError(true);
      setErrorDisplay(true);
    } else if (!validateContent(content)) {
      setContentError(true);
      setErrorDisplay(true);
    }
  };

  // 5%  start
  // 21% one
  // 46% two
  // 71% three

  let position;

  if (amount === 1000) {
    position = 17;
  } else if (amount === 3000) {
    position = 44;
  } else if (amount === 5000) {
    position = 70;
  } else {
    position = (amount / 5000) * 70;
  }

  let style = {
    position: "absolute",
    left: `${position}%`,
  };

  return (
    <div className={styles.wrapper}>
      <div className="wrapper oneblock">
        <div id="gather" className="buffer"></div>
        <h1 className="bigHeader">
          <img src={title_left} />
          <FormattedMessage id="app.p2-p2-1" />
          <img src={title_right} />
        </h1>
        <div className={styles.outer}>
          <div className={styles.rabbitContainer}>
            <div style={style} className={amount === 5000 ? `${styles.rabbit} ${styles.hidden}` : `${styles.rabbit}`} />
            <div style={style} className={amount === 5000 ? `${styles.dancing} ` : `${styles.dancing} ${styles.hidden}`} />
          </div>
          <div className={styles.pillars}>
            <div className={styles.pillar}>
              <div className={styles.coin}>
                <img src={coin} />
              </div>
              <img className="" src={tree} />
            </div>
            <div className={styles.pillar}>
              <div className={styles.coin}>
                <img src={coin} />
              </div>
              <img className="" src={tree} />
            </div>
            <div className={styles.pillar}>
              <div className={styles.coin}>
                <img src={coin} />
              </div>
              <img className="" src={tree} />
            </div>
          </div>
          <div className={styles.road}>
            <img src={road} />
          </div>
        </div>
        <div className={styles.counterContainer}>
          <h2>累積人數：{amount}/5000</h2>
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <div className={styles.inputArea}>
              <label>暱稱</label>
              <input onChange={nameInputHandler} value={name} />
            </div>
            <div className={styles.inputArea}>
              <label>留言</label>
              <input onChange={contentInputHandler} value={content} />
            </div>
            <input type="submit" onClick={submitMessage} className={styles.button} />
          </form>
        </div>
        <div className={errorDisplay ? `${styles.errorMessages}` : `${styles.errorMessages} ${styles.hidden}`}>
          <p className={nameError ? `${styles.emailWarning}` : `${styles.emailWarning} ${styles.hidden}`}>請輸入您的姓名 請勿輸入特殊符號或是空白鍵</p>
          <p className={contentError ? `${styles.emailWarning}` : `${styles.emailWarning} ${styles.hidden}`}>留言字數不可超過XX字</p>
          <p className={sendSucceed ? `${styles.emailWarning}` : `${styles.emailWarning} ${styles.hidden}`}>成功留言 感謝您的支持</p>

          <button className={styles.button} onClick={clearMessages}>
            關閉
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gather;
