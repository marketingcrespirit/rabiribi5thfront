import React, { useState, useEffect } from "react";
import styles from "./gather.module.css";
import tree from "../public/assets/images/tree.png";
import coin from "../public/assets/images/coin.png";
import road from "../public/assets/images/road.png";
import rabbit from "../public/assets/images/1.png";
import axios from "axios";

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
  const [amount, setAmount] = useState(0);

  // const [stageOne, setStageOne] = useState(false);
  // const [stageTwo, setstageTwo] = useState(false);
  // const [stageThree, setstageThree] = useState(false);
  const [errorDisplay, setErrorDisplay] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [sendSucceed, setSendSucceed] = useState(false);

  const [position, setPosition] = useState(5);
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
          window.location = "http://localhost:3000";
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
  useEffect(() => {
    axios({
      method: "get",
      url: NET_SERVER_URL + "/messages",
    }).then(({ data }) => {
      setAmount(data.length);
    });
  }, []);

  useEffect(() => {
    if (position <= 83) {
      const interval = setInterval(() => {
        let newPosition = position;
        newPosition += 13;
        setPosition(newPosition);
      }, 1000);
      return () => clearInterval(interval);
    } else if (position > 83) {
      setPosition(5);
    }
  }, [position]);
  // 31% one  36% step
  // 57% two
  // 83% three

  let style = {
    position: "absolute",
    left: `${position}%`,
  };

  return (
    <div className={styles.wrapper}>
      <div className="wrapper">
        <div id="schedule" className="buffer"></div>
        <h1 className="bigHeader">集氣進度</h1>
        <div className={styles.mapContainer}>
          <div className={styles.treesContainer}>
            <div className={styles.treeContainer}>
              <img alt="tree" className={styles.tree} src={tree} />
              <img alt="coin" className={styles.coin} src={coin} />
            </div>
            <div className={styles.treeContainer}>
              <img alt="tree" className={styles.tree} src={tree} />
              <img alt="coin" className={styles.coin} src={coin} />
            </div>
            <div className={styles.treeContainer}>
              <img alt="tree" className={styles.tree} src={tree} />
              <img alt="coin" className={styles.coin} src={coin} />
            </div>
          </div>

          <div className={styles.rabbitContainer}>
            <img alt="rabbit" style={style} className={styles.rabbit} src={rabbit} />
          </div>

          <div className={styles.roadContainer}>
            <img alt="raod" className={styles.road} src={road} />
          </div>

          <div className={styles.percentageContainer}>
            <h1>{`${amount / 10000}%`}</h1>
          </div>
          <div className={styles.counterContainer}>
            <h2>累積人數：{amount}/解鎖人數：10000</h2>
          </div>
          <div className={styles.formContainer}>
            <form>
              <label>暱稱</label>
              <input onChange={nameInputHandler} value={name} />
              <label>留言</label>
              <input onChange={contentInputHandler} value={content} />
              <input type="submit" onClick={submitMessage} />
            </form>
          </div>
          <div className={errorDisplay ? `${styles.errorMessages}` : `${styles.errorMessages} ${styles.hidden}`}>
            <p className={nameError ? `${styles.emailWarning}` : `${styles.emailWarning} ${styles.hidden}`}>請輸入您的姓名 請勿輸入特殊符號或是空白鍵</p>
            <p className={contentError ? `${styles.emailWarning}` : `${styles.emailWarning} ${styles.hidden}`}>留言字數不可超過XX字</p>
            <p className={sendSucceed ? `${styles.emailWarning}` : `${styles.emailWarning} ${styles.hidden}`}>成功留言 感謝您的支持</p>

            <button
              style={{
                ...mainStyle.submitButton,
                margin: 0,
                width: "auto",
                marginTop: 10,
              }}
              onClick={clearMessages}
            >
              關閉
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gather;
