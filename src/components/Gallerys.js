import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
// import Board from "./Bulletin";
// import FifthVideo from "./FifthVideo";
// import Rules from "./Rules";
// import Testimonial from "./Testimonal";
import styles from "./gallerys.module.css";
// import line from "../public/assets/images/line.png";
import Gallery from "./Gallery";
// import Pic from "./Pic";
import axios from "axios";

const NET_SERVER_URL = "https://rabiribi5thserver.herokuapp.com";

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validateName(name) {
  var re = /^[\w\u4E00-\u9FA5\uF900-\uFA2D]{1,5}$/;
  return re.test(name);
}

function validatePhone(phone) {
  var re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
  return re.test(phone);
}


// overwrite style
const modalStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0,0.5)",
  },
};

const pics = [
  { small: "https://picsum.photos/200/200?random=0", big: "https://picsum.photos/640/640?random=0" },
  { small: "https://picsum.photos/200/200?random=1", big: "https://picsum.photos/640/640?random=1" },
  { small: "https://picsum.photos/200/200?random=2", big: "https://picsum.photos/640/640?random=2" },
  { small: "https://picsum.photos/200/200?random=3", big: "https://picsum.photos/640/640?random=3" },
  { small: "https://picsum.photos/200/200?random=4", big: "https://picsum.photos/640/640?random=4" },
  { small: "https://picsum.photos/200/200?random=5", big: "https://picsum.photos/640/640?random=5" },
  { small: "https://picsum.photos/200/200?random=6", big: "https://picsum.photos/640/640?random=6" },
  { small: "https://picsum.photos/200/200?random=7", big: "https://picsum.photos/640/640?random=7" },
  { small: "https://picsum.photos/200/200?random=8", big: "https://picsum.photos/640/640?random=8" },
  { small: "https://picsum.photos/200/200?random=9", big: "https://picsum.photos/640/640?random=9" },
  { small: "https://picsum.photos/200/200?random=10", big: "https://picsum.photos/640/640?random=10" },
  { small: "https://picsum.photos/200/200?random=11", big: "https://picsum.photos/640/640?random=11" },
  { small: "https://picsum.photos/200/200?random=12", big: "https://picsum.photos/640/640?random=12" },
  { small: "https://picsum.photos/200/200?random=13", big: "https://picsum.photos/640/640?random=13" },
  { small: "https://picsum.photos/200/200?random=14", big: "https://picsum.photos/640/640?random=14" },
  { small: "https://picsum.photos/200/200?random=15", big: "https://picsum.photos/640/640?random=15" },
  { small: "https://picsum.photos/200/200?random=16", big: "https://picsum.photos/640/640?random=16" },
  { small: "https://picsum.photos/200/200?random=17", big: "https://picsum.photos/640/640?random=17" },
  { small: "https://picsum.photos/200/200?random=18", big: "https://picsum.photos/640/640?random=18" },
  { small: "https://picsum.photos/200/200?random=19", big: "https://picsum.photos/640/640?random=19" },
  { small: "https://picsum.photos/200/200?random=20", big: "https://picsum.photos/640/640?random=20" },
  { small: "https://picsum.photos/200/200?random=20", big: "https://picsum.photos/640/640?random=20" },
  { small: "https://picsum.photos/200/200?random=20", big: "https://picsum.photos/640/640?random=20" },
  { small: "https://picsum.photos/200/200?random=20", big: "https://picsum.photos/640/640?random=20" },
  { small: "https://picsum.photos/200/200?random=20", big: "https://picsum.photos/640/640?random=20" },
  { small: "https://picsum.photos/200/200?random=20", big: "https://picsum.photos/640/640?random=20" },
  { small: "https://picsum.photos/200/200?random=20", big: "https://picsum.photos/640/640?random=20" },
  { small: "https://picsum.photos/200/200?random=20", big: "https://picsum.photos/640/640?random=20" },
  { small: "https://picsum.photos/200/200?random=20", big: "https://picsum.photos/640/640?random=20" },
  { small: "https://picsum.photos/200/200?random=20", big: "https://picsum.photos/640/640?random=20" },
  { small: "https://picsum.photos/200/200?random=20", big: "https://picsum.photos/640/640?random=20" },
  { small: "https://picsum.photos/200/200?random=20", big: "https://picsum.photos/640/640?random=20" },
  { small: "https://picsum.photos/200/200?random=20", big: "https://picsum.photos/640/640?random=20" },
  { small: "https://picsum.photos/200/200?random=20", big: "https://picsum.photos/640/640?random=20" },
  { small: "https://picsum.photos/200/200?random=20", big: "https://picsum.photos/640/640?random=20" },
  { small: "https://picsum.photos/200/200?random=20", big: "https://picsum.photos/640/640?random=20" },
  { small: "https://picsum.photos/200/200?random=20", big: "https://picsum.photos/640/640?random=20" },
  { small: "https://picsum.photos/200/200?random=20", big: "https://picsum.photos/640/640?random=20" },
  { small: "https://picsum.photos/200/200?random=20", big: "https://picsum.photos/640/640?random=20" },
  { small: "https://picsum.photos/200/200?random=20", big: "https://picsum.photos/640/640?random=20" },
];

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

const perPage = 10;

class ModalUnit extends Component {
  constructor(props) {
    super(props);

    // set initial state
    this.state = {
      isBoardModalOpen: false,
      isBoardInnerModalOpen: false,
      isVoteModalOpen: false,
      isInnerVoteModalOpen: false,
      email: "",
      validEmail: false,
      name: "",
      phone: "",
      code: "",
      votes: [],
      emailError: false,
      nameError: false,
      phoneError: false,
      codeEmailError: false,
      voteEooro: false,
      loading: false,
      errorDisplay: false,
      codeSucceed: false,
      succeed: false,
      page: 1,
    };

    // bind functions
    this.closeBoardModal = this.closeBoardModal.bind(this);
    this.openBoardModal = this.openBoardModal.bind(this);
  }

  // close modal (set isModalOpen, true)
  closeBoardModal() {
    this.setState({
      isBoardModalOpen: false,
    });
  }

  clearMessages = (e) => {
    e.preventDefault();
    this.setState({ emailError: false, nameError: false, phoneError: false, codeEmailError: false, voteError: false, codeSucceed: false, succced: false, errorDisplay: false });
  };

  // open modal (set isModalOpen, false)
  openBoardModal() {
    this.setState({
      isBoardModalOpen: true,
    });
  }
  keyListener = (e) => {
    if (e.keyCode === 27) {
      this.closeBoardModal();
    }
  };

  componentDidMount() {
    document.body.addEventListener("keydown", this.keyListener);
  }

  componentWillUnmount() {
    document.body.removeEventListener("keydown", this.closeBoardModal);
  }
  submitCode = (e) => {
    e.preventDefault();

    if (validateEmail(this.state.email)) {
      axios({
        method: "post",
        url: NET_SERVER_URL + "/code",
        data: {
          email: this.state.email,
        },
      }).then((response) => {
        console.log(response);
        if (response.status === 201) {
          console.log("succeed");
          this.setState({ codeSucceed: true });
        } else if (response.status === 204) {
          this.setState({ emailError: true });
        }
        this.setState({ errorDisplay: true });
      });
    } else {
      console.log("not valid");
    }
  };

  submitVote = (e) => {
    e.preventDefault();
    if (validateEmail(this.state.email) && validateName(this.state.name) && validatePhone(this.state.phone) && this.state.votes.length === 5) {
      axios({
        method: "post",
        url: NET_SERVER_URL + "/vote",
        data: {
          email: this.state.email,
          name: this.state.name,
          phone: this.state.phone,
          code: this.state.code,
          votes: this.state.votes,
        },
      }).then((response) => {
        console.log(response.status);
        if (response.status === 201) {
          this.setState({ errorDisplay: true });
          this.setState({ succeed: true });
          window.location = "http://localhost:3000/";
          const data = response.data;
          console.log(data);
        } else if (response.status === 204) {
          this.setState({ emailError: false, nameError: false, phoneError: false, voteError: false });
          this.setState({ codeEmailError: true });
          this.setState({ errorDisplay: true });
        }
      });
    } else {
      if (!validateName(this.state.name)) {
        this.setState({ nameError: true });
      }
      if (!validatePhone(this.state.phone)) {
        this.setState({ phoneError: true });
      }
      if (this.state.votes.length !== 5) {
        this.setState({ voteError: true });
      }
      this.setState({ errorDisplay: true });
    }
  };
  addPage = () => {
    let newPage = this.state.page;
    newPage++;
    this.setState({ page: newPage });
  };
  minusPage = () => {
    let newPage = this.state.page;
    newPage--;
    this.setState({ page: newPage });
  };

  emailInputHandler = (e) => {
    this.setState({ email: e.target.value });
  };
  nameInputHandler = (e) => {
    this.setState({ name: e.target.value });
  };
  phoneInputHandler = (e) => {
    this.setState({ phone: e.target.value });
  };
  codeInputHandler = (e) => {
    this.setState({ code: e.target.value });
  };

  clickHandler = (i) => {
    let newVotes = this.state.votes;
    if (!newVotes.includes(i)) {
      newVotes.push(i);
      this.setState({ votes: newVotes });
    } else if (newVotes.includes(i)) {
      let updatedVotes = newVotes.filter((item) => {
        return item !== i;
      });
      this.setState({ votes: updatedVotes });
    }
  };

  // render app
  render() {
    let message;
    if (this.state.votes.length < 5) {
      message = `還可以再選${5 - this.state.votes.length}個喔！！！`;
    } else if (this.state.votes.length > 5) {
      message = `你多選了${this.state.votes.length - 5}個喔！！！`;
    } else if (this.state.votes.length === 5) {
      message = `眾人皆醉你獨醒 很好 你投完了！！！`;
    }
    return (
      <div className={styles.wrapper}>
        <div className="wrapper">
          <div id="schedule" className="buffer"></div>

          <h1 className="bigHeader">作品藝廊</h1>
          <p>快來看看有什麼優秀的作品吧！ 看完也別忘了到下方的投票區投下你神聖的一票喔 有編號別忘了 說不定我心情好就會辦抽獎喔～</p>
          <div className={this.state.votes.length === 5 || this.state.votes.length < 0 ? `${styles.success}` : `${styles.warning}`}>
            <p>{message}</p>
          </div>
          <div style={mainStyle.app}>
            <div className={styles.board}>
              <button className={styles.changePageL} onClick={this.minusPage}>
                減一頁
              </button>
              {pics.map((el, index) => {
                if (index < this.state.page * perPage && index >= (this.state.page - 1) * perPage)
                  return (
                    <Gallery selected={this.state.votes.includes(index)} key={index} src={el.small} isModalOpen={this.state.isBoardModalOpen} style={modalStyle}>
                      <button
                        style={{
                          ...mainStyle.cancelButton,
                          marginRight: 0,
                          width: "auto",
                          marginTop: 10,
                        }}
                        onClick={this.closeBoardModal}
                        className={styles.closeButton}
                      >
                        X
                      </button>
                      <div className={styles.fullImage}>
                        <div className={styles.txtWrapper}>
                          <h2>編號：ＸＸＸ</h2>
                          <p>作者：ＸＸＸ</p>
                          <button style={this.state.votes.includes(index) ? mainStyle.cancelButton : mainStyle.submitButton} onClick={() => this.clickHandler(index)}>
                            {this.state.votes.includes(index) ? "取消" : "投我"}
                          </button>
                        </div>
                        <img alt={index} src={el.big} />
                      </div>
                    </Gallery>
                  );
                  return true
              })}
              <button className={styles.changePageR} onClick={this.addPage}>
                加一頁
              </button>
            </div>
            <div className={styles.formWrapper}>
              <form>
                <label htmlFor="exampleFormControlInput1">Email</label>
                <div className="form-group form-inline ">
                  <input required value={this.state.email} onChange={this.emailInputHandler} type="email" className="form-control col" id="exampleFormControlInput1" placeholder="" />
                  <button className="btn btn-primary" onClick={this.submitCode}>
                    <FormattedMessage id="app.verifyButton" />
                  </button>
                </div>

                <div className="form-group">
                  <label htmlFor="exampleFormControlInput2">
                    <FormattedMessage id="app.name" />
                  </label>
                  <input required value={this.state.name} onChange={this.nameInputHandler} type="text" className="form-control" id="exampleFormControlInput2" placeholder="" />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleFormControlInput3">
                    <FormattedMessage id="app.phone" />
                  </label>
                  <input required value={this.state.phone} onChange={this.phoneInputHandler} type="text" className="form-control" id="exampleFormControlInput3" placeholder="" />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleFormControlInput4">
                    <FormattedMessage id="app.verifyCode" />
                  </label>
                  <input required value={this.state.code} onChange={this.codeInputHandler} type="text" className="form-control" id="exampleFormControlInput4" placeholder="" />
                </div>

                <div className={this.state.errorDisplay ? `${styles.errorMessages}` : `${styles.errorMessages} ${styles.hidden}`}>
                  <p className={this.state.emailError ? `${styles.emailWarning}` : `${styles.emailWarning} ${styles.hidden}`}>無效的Email或是您已經投過票</p>
                  <p className={this.state.nameError ? `${styles.emailWarning}` : `${styles.emailWarning} ${styles.hidden}`}>請輸入您的姓名 請勿輸入特殊符號或是空白鍵</p>
                  <p className={this.state.phoneError ? `${styles.emailWarning}` : `${styles.emailWarning} ${styles.hidden}`}>只能輸入數字</p>
                  <p className={this.state.codeEmailError ? `${styles.emailWarning}` : `${styles.emailWarning} ${styles.hidden}`}>無效的Email或是無效的驗證碼</p>
                  <p className={this.state.voteError ? `${styles.emailWarning}` : `${styles.emailWarning} ${styles.hidden}`}>投票數量錯誤</p>
                  <p className={this.state.succeed ? `${styles.emailWarning}` : `${styles.emailWarning} ${styles.hidden}`}>成功投票，跳轉回首頁</p>
                  <p className={this.state.codeSucceed ? `${styles.emailWarning}` : `${styles.emailWarning} ${styles.hidden}`}>成功寄送驗證碼，請去信箱確認</p>

                  <button
                    style={{
                      ...mainStyle.submitButton,
                      margin: 0,
                      width: "auto",
                      marginTop: 10,
                    }}
                    onClick={this.clearMessages}
                  >
                    關閉
                  </button>
                </div>
              </form>

              <button
                style={{
                  ...mainStyle.submitButton,
                  margin: 0,
                  width: "auto",
                  marginTop: 10,
                }}
                onClick={this.submitVote}
              >
                <FormattedMessage id="app.submitButton" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalUnit;
