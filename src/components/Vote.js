import React, { Component } from "react";
import styles from "./vote.module.css";
import { FormattedMessage } from "react-intl";
import Modal from "./Modal";
import Pic from "./Pic";
import axios from "axios";

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validateName(name) {
  var re = /^[\w\u4E00-\u9FA5\uF900-\uFA2D]{1,5}$/;
  return re.test(name);
}

function validatePhone(phone) {
  var re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
  return re.test(phone);
}

const NET_SERVER_URL = "http://localhost:3001";

const mainStyle = {
  app: {
    margin: "0",
    height: "100vh",
    position: "static",
  },
  submitButton: {
    backgroundColor: "#408cec",
    border: 0,
    padding: "12px 20px",
    color: "#fff",
    margin: "0 auto",
    width: 150,
    borderRadius: 3,
  },
  cancelButton: {
    backgroundColor: "red",
    border: 0,
    padding: "5px 10px",
    color: "#fff",
    width: 150,
    borderRadius: 3,
  },
};

const modalStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0,0.5)",
  },
};
class Vote extends Component {
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
    };

    // bind functions
    this.closeBoardModal = this.closeBoardModal.bind(this);
    this.openBoardModal = this.openBoardModal.bind(this);
    this.closeVoteModal = this.closeVoteModal.bind(this);
    this.openVoteModal = this.openVoteModal.bind(this);
  }

  // close modal (set isModalOpen, true)
  closeBoardModal() {
    this.setState({
      isBoardModalOpen: false,
    });
  }

  // open modal (set isModalOpen, false)
  openBoardModal() {
    this.setState({
      isBoardModalOpen: true,
    });
  }

  closeVoteModal() {
    this.setState({
      isVoteModalOpen: false,
    });
  }

  clearMessages = (e) => {
    e.preventDefault();
    this.setState({ emailError: false, nameError: false, phoneError: false, codeEmailError: false, voteError: false, codeSucceed: false, succced: false, errorDisplay: false });
  };

  // open modal (set isModalOpen, false)
  openVoteModal() {
    this.setState({
      isVoteModalOpen: true,
    });
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
    const pics = [0, 1, 2, 3, 4, 5];
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
          <h1 className="bigHeader">投票區</h1>
          <div style={mainStyle.app}>
            <div className={styles.vote}>
              <button style={mainStyle.submitButton} onClick={this.openVoteModal}>
                我要投票
              </button>

              <Modal isModalOpen={this.state.isVoteModalOpen} style={modalStyle}>
                <div className={styles.closeButton}>
                  <button
                    style={{
                      ...mainStyle.cancelButton,
                      width: "auto",
                      marginRight: 0,
                    }}
                    onClick={this.closeVoteModal}
                  >
                    X
                  </button>
                </div>

                <FormattedMessage id="app.voteTitle" />
                <form>
                  <div className="form-group ">
                    <label htmlFor="exampleFormControlInput1">Email</label>
                    <input required value={this.state.email} onChange={this.emailInputHandler} type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                  </div>

                  <button
                    style={{
                      ...mainStyle.submitButton,
                      margin: 0,
                      width: "auto",
                      marginTop: 10,
                    }}
                    onClick={this.submitCode}
                  >
                    <FormattedMessage id="app.verifyButton" />
                  </button>

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
                  <div className={this.state.votes.length === 5 || this.state.votes.length < 0 ? `${styles.success}` : `${styles.warning}`}>
                    <p>{message}</p>
                  </div>

                  <div className={styles.pics}>
                    {pics.map((el, index) => {
                      return (
                        <Pic
                          clicked={() => {
                            this.clickHandler(index);
                          }}
                          key={index}
                          selected={this.state.votes.includes(index)}
                        />
                      );
                    })}
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
              </Modal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Vote;
