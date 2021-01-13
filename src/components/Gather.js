import React, { useState, useEffect } from "react";
import styles from "./gather.module.css";
import tree from "../public/assets/images/tree.png";
import road from "../public/assets/images/road.png";
import axios from "axios";
import { FormattedMessage } from "react-intl";
import Coin from "./Coin";
import spotlight from "../public/assets/images/spotlight.png";
import NextPageBtn from "./NextPageBtn";
const NET_SERVER_URL = "https://rabiribi5thserver.herokuapp.com";

function validateName(name) {
  return name.length > 0 && name.length <= 5;
}

function validateContent(content) {
  return content.trim().length <= 15 && content.trim().length !== 0;
}

const Gather = (props) => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [amount, setAmount] = useState(0);
  const [errorDisplay, setErrorDisplay] = useState(false);
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [sendSucceed, setSendSucceed] = useState(false);
  // let date = new Date().getDate();

  const nameInputHandler = (e) => {
    if (e.target.value !== " ") {
      setName(e.target.value);
    }
  };

  const clearMessages = (e) => {
    e.preventDefault();
    setErrorDisplay(false);
    setNameError(false);
    setContentError(false);
    setSendSucceed(false);
  };
  const contentInputHandler = (e) => {
    if (e.target.value !== " ") {
      setContent(e.target.value);
    }
  };
  const submitMessage = (e) => {
    setErrorDisplay(true);
    setLoading(true);
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
        setLoading(false);
        setSendSucceed(true);
        setErrorDisplay(true);
        if (response.status === 201) {
          window.location = "/rabi5th/go-bunny-go";
        } else if (response.status === 204) {
        }
      });
    } else if (!validateName(name) && !validateContent(content)) {
      setLoading(false);
      setNameError(true);
      setContentError(true);
      setErrorDisplay(true);
    } else if (!validateName(name)) {
      setLoading(false);
      setNameError(true);
      setErrorDisplay(true);
    } else if (!validateContent(content)) {
      setLoading(false);
      setContentError(true);
      setErrorDisplay(true);
    }
  };
  useEffect(() => {
    let amountFixed = props.amount;
    if (amountFixed !== 0) {
      amountFixed += 5000;
      setAmount(amountFixed);
    }
  }, [props.amount]);

  let stageOne = false;
  let stageTwo = false;
  let stageThree = false;

  if (amount >= 5000) {
    stageOne = true;
    stageTwo = true;
    stageThree = true;
  } else if (amount >= 3000) {
    stageOne = true;
    stageTwo = true;
  } else if (amount >= 1000) {
    stageOne = true;
  }

  let position;

  if (amount === 1000) {
    position = 17;
  } else if (amount === 3000) {
    position = 44;
  } else if (amount >= 5000) {
    position = 40;
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
        <div id="unlock"></div>
        <div className={styles.outer}>
          <div className={styles.rabbitContainer}>
            <div style={style} className={amount >= 5000 ? `${styles.rabbit} ${styles.hidden}` : `${styles.rabbit}`} />
            <div style={style} className={amount >= 5000 ? `${styles.dancing} ` : `${styles.dancing} ${styles.hidden}`} />
          </div>
          <div className={styles.pillars}>
            <img className={styles.spotlight} src={spotlight} />
            <div className={styles.pillar}>
              <div className={stageOne ? `${styles.coin} ${styles.active}` : `${styles.coin}`}>
                <Coin bg={stageOne ? 1 : 0} />
              </div>
              <img className="" src={tree} />
            </div>
            <img className={styles.spotlight} src={spotlight} />
            <div className={styles.pillar}>
              <div className={stageTwo ? `${styles.coin} ${styles.active}` : `${styles.coin}`}>
                <Coin bg={stageTwo ? 2 : 0} />
              </div>
              <img className="" src={tree} />
            </div>
            <img className={styles.spotlight} src={spotlight} />
            <div className={styles.pillar}>
              <div className={stageThree ? `${styles.coin} ${styles.active}` : `${styles.coin}`}>
                <Coin bg={stageThree ? 3 : 0} />
              </div>
              <img className="" src={tree} />
            </div>
            <img className={styles.spotlight} src={spotlight} />
          </div>
          <div className={styles.road}>
            <img src={road} />
          </div>
        </div>
        <div className={styles.counterContainer}>
          <h2 className={amount !== 0 ? null : `${styles.hidden}`}>
            <FormattedMessage id="app.p2-p2-3" />：{amount}/5000
          </h2>
          <h2 className={amount !== 0 ? `${styles.hidden}` : null}>
            <FormattedMessage id="app.p2-p2-11" />
          </h2>
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <div className={styles.inputArea}>
              <label>
                <FormattedMessage id="app.p2-p2-4" />
              </label>
              <small className={name.length <= 5 && name.length > 0 ? `${styles.success}` : `${styles.warning}`}>
                <FormattedMessage id={name.length <= 5 ? "app.p2-p2-5" : "app.p2-p2-6"} />
              </small>
              <small className={name.length <= 5 && name.length > 0 ? `${styles.success}` : `${styles.warning}`}>{name.length <= 5 ? 5 - name.length : Math.abs(name.length - 5)}</small>
              <small className={name.length <= 5 && name.length > 0 ? `${styles.success}` : `${styles.warning}`}>
                <FormattedMessage id="app.p2-p2-7" />
              </small>
              <br />
              <input onChange={nameInputHandler} value={name} id="name" />
            </div>
            <div className={styles.inputArea}>
              <label>
                <FormattedMessage id="app.p2-p2-8" />
              </label>
              <small className={content.length <= 15 && content.length > 0 ? `${styles.success}` : `${styles.warning}`}>
                <FormattedMessage id={content.length <= 15 ? "app.p2-p2-5" : "app.p2-p2-6"} />
              </small>
              <small className={content.length <= 15 && content.length > 0 ? `${styles.success}` : `${styles.warning}`}>{content.length <= 5 ? 15 - content.length : Math.abs(content.length - 15)}</small>
              <small className={content.length <= 15 && content.length > 0 ? `${styles.success}` : `${styles.warning}`}>
                <FormattedMessage id="app.p2-p2-7" />
              </small>
              <br />
              <input onChange={contentInputHandler} value={content} id="content" />
            </div>
            <button name="submit" type="submit" id="submit" onClick={submitMessage} className={`${styles.buttonL} ${styles.submit}`}>
              <FormattedMessage id="app.p2-p2-10" />
            </button>
          </form>
        </div>
        <div id="status" className={errorDisplay ? `${styles.errorMessages}` : `${styles.errorMessages} ${styles.hidden}`}>
          <p className={loading ? `${styles.emailWarning}` : `${styles.emailWarning} ${styles.hidden}`}>
            {" "}
            <FormattedMessage id="app.p2-w-9" />
          </p>
          <p className={nameError ? `${styles.emailWarning}` : `${styles.emailWarning} ${styles.hidden}`}>
            <FormattedMessage id="app.p2-w-10" />
          </p>
          <p className={contentError ? `${styles.emailWarning}` : `${styles.emailWarning} ${styles.hidden}`}>
            <FormattedMessage id="app.p2-w-11" />
          </p>
          <p className={sendSucceed ? `${styles.emailWarning} ${styles.success}` : `${styles.emailWarning} ${styles.hidden}`}>
            <FormattedMessage id="app.p2-w-12" />
          </p>
          <button name="clear" id="clear" className={`${styles.buttonL} ${styles.submit}`} onClick={clearMessages}>
            <FormattedMessage id="app.p2-p2-9" />
          </button>
        </div>
        <div className={styles.buttonWrapper}>
          <NextPageBtn href="/rabi5th/art-contest">
            <FormattedMessage id="app.p2-p8-1" />
            <i className="fas fa-caret-right"></i>
          </NextPageBtn>
        </div>
      </div>
    </div>
  );
};

export default Gather;
