import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

import pic000 from "../public/assets/images/members/0.png";
import pic001 from "../public/assets/images/members/1.png";
import pic002 from "../public/assets/images/members/2.png";
import pic003 from "../public/assets/images/members/3.png";
import pic004 from "../public/assets/images/members/4.png";
import pic005 from "../public/assets/images/members/5.png";
import pic006 from "../public/assets/images/members/6.png";
import pic007 from "../public/assets/images/members/7.png";
import pic008 from "../public/assets/images/members/8.png";
import pic009 from "../public/assets/images/members/9.png";
import pic010 from "../public/assets/images/members/10.png";
import pic011 from "../public/assets/images/members/11.png";
import pic012 from "../public/assets/images/members/12.png";
import pic013 from "../public/assets/images/members/13.png";
import pic014 from "../public/assets/images/members/14.png";
import pic015 from "../public/assets/images/members/15.png";
import pic016 from "../public/assets/images/members/16.png";
import pic017 from "../public/assets/images/members/17.png";
import pic018 from "../public/assets/images/members/18.png";
import pic019 from "../public/assets/images/members/19.png";
import pic020 from "../public/assets/images/members/20.png";
import pic021 from "../public/assets/images/members/21.png";
import pic022 from "../public/assets/images/members/22.png";
import pic023 from "../public/assets/images/members/23.png";
import pic024 from "../public/assets/images/members/24.png";
import pic025 from "../public/assets/images/members/25.png";
import pic026 from "../public/assets/images/members/26.png";
import pic027 from "../public/assets/images/members/27.png";
import pic028 from "../public/assets/images/members/28.png";
import pic029 from "../public/assets/images/members/29.png";
import pic030 from "../public/assets/images/members/30.png";
import pic031 from "../public/assets/images/members/31.png";
import pic032 from "../public/assets/images/members/32.png";
import pic033 from "../public/assets/images/members/33.png";
import pic034 from "../public/assets/images/members/34.png";
import pic035 from "../public/assets/images/members/35.png";
import pic036 from "../public/assets/images/members/36.png";
import pic037 from "../public/assets/images/members/37.png";
import pic038 from "../public/assets/images/members/38.png";
import pic039 from "../public/assets/images/members/39.png";
import pic040 from "../public/assets/images/members/40.png";
import pic041 from "../public/assets/images/members/41.png";
import pic042 from "../public/assets/images/members/42.png";
import pic043 from "../public/assets/images/members/43.png";
import pic044 from "../public/assets/images/members/44.png";
import pic045 from "../public/assets/images/members/45.png";
import pic046 from "../public/assets/images/members/46.png";
import pic047 from "../public/assets/images/members/47.png";
import pic048 from "../public/assets/images/members/48.png";
import pic049 from "../public/assets/images/members/49.png";
import pic050 from "../public/assets/images/members/50.png";
import pic051 from "../public/assets/images/members/51.png";
import pic052 from "../public/assets/images/members/52.png";
import pic053 from "../public/assets/images/members/53.png";
import pic054 from "../public/assets/images/members/54.png";
import pic055 from "../public/assets/images/members/55.png";
import pic056 from "../public/assets/images/members/56.png";
import pic057 from "../public/assets/images/members/57.png";
import pic058 from "../public/assets/images/members/58.png";
import pic059 from "../public/assets/images/members/59.png";
import pic060 from "../public/assets/images/members/60.png";
import pic061 from "../public/assets/images/members/61.png";
import pic062 from "../public/assets/images/members/62.png";
import pic063 from "../public/assets/images/members/63.png";
import pic064 from "../public/assets/images/members/64.png";
import pic065 from "../public/assets/images/members/65.png";
import pic066 from "../public/assets/images/members/66.png";
import pic067 from "../public/assets/images/members/67.png";
import pic068 from "../public/assets/images/members/68.png";
import pic069 from "../public/assets/images/members/69.png";
import pic070 from "../public/assets/images/members/70.png";
import pic071 from "../public/assets/images/members/71.png";
import pic072 from "../public/assets/images/members/72.png";
import pic073 from "../public/assets/images/members/73.png";
import pic074 from "../public/assets/images/members/74.png";
import pic075 from "../public/assets/images/members/75.png";
import pic076 from "../public/assets/images/members/76.png";
import pic077 from "../public/assets/images/members/77.png";
import pic078 from "../public/assets/images/members/78.png";

import explain1 from "../public/assets/images/explains/explain1.png";
import explain2 from "../public/assets/images/explains/explain2.png";
import explain3 from "../public/assets/images/explains/explain3.png";
import explain4 from "../public/assets/images/explains/explain4.png";

import explain2_en from "../public/assets/images/explains/explain2_en.png";
import explain3_en from "../public/assets/images/explains/explain3_en.png";
import explain4_en from "../public/assets/images/explains/explain4_en.png";

import arrow from "../public/assets/images/explains/arrow.png";

import styles from "./gallerys.module.css";
import Gallery from "./Gallery";
// import axios from "axios";
import Title from "./Title";
import NextPageBtn from "../components/NextPageBtn";

const pics = [
  { big: pic000 },
  { big: pic001 },
  { big: pic002 },
  { big: pic003 },
  { big: pic004 },
  { big: pic005 },
  { big: pic006 },
  { big: pic007 },
  { big: pic008 },
  { big: pic009 },
  { big: pic010 },
  { big: pic011 },
  { big: pic012 },
  { big: pic013 },
  { big: pic014 },
  { big: pic015 },
  { big: pic016 },
  { big: pic017 },
  { big: pic018 },
  { big: pic019 },
  { big: pic020 },
  { big: pic021 },
  { big: pic022 },
  { big: pic023 },
  { big: pic024 },
  { big: pic025 },
  { big: pic026 },
  { big: pic027 },
  { big: pic028 },
  { big: pic029 },
  { big: pic030 },
  { big: pic031 },
  { big: pic032 },
  { big: pic033 },
  { big: pic034 },
  { big: pic035 },
  { big: pic036 },
  { big: pic037 },
  { big: pic038 },
  { big: pic039 },
  { big: pic040 },
  { big: pic041 },
  { big: pic042 },
  { big: pic043 },
  { big: pic044 },
  { big: pic045 },
  { big: pic046 },
  { big: pic047 },
  { big: pic048 },
  { big: pic049 },
  { big: pic050 },
  { big: pic051 },
  { big: pic052 },
  { big: pic053 },
  { big: pic054 },
  { big: pic055 },
  { big: pic056 },
  { big: pic057 },
  { big: pic058 },
  { big: pic059 },
  { big: pic060 },
  { big: pic061 },
  { big: pic062 },
  { big: pic063 },
  { big: pic064 },
  { big: pic065 },
  { big: pic066 },
  { big: pic067 },
  { big: pic068 },
  { big: pic069 },
  { big: pic070 },
  { big: pic071 },
  { big: pic072 },
  { big: pic073 },
  { big: pic074 },
  { big: pic075 },
  { big: pic076 },
  { big: pic077 },
  { big: pic078 },
];
const players = [
  "Zavok",
  "雜燴兔燉肉1234",
  "ArakitaHakana",
  "NUDA",
  "Bg2006",
  "Red Rain",
  "Cody Yuki",
  "eihyou2002",
  "Guro",
  "LeiRia",
  "Lulu",
  "Reggiano LL",
  "Scarlet star",
  "Nano Ka",
  "霧鈴桐喻",
  "Midnight ",
  "Midnight ",
  "ike",
  "火虎(COSMINI)",
  "Darkshadovv",
  "Syr ",
  "Bg2006",
  "deflo",
  "夕恆",
  " Lacba Mikan",
  "s.Claw",
  "Sanae&Koa",
  "吉衛福士、SekineDeer",
  "小助手（Ast Jiete）",
  "Bg2006",
  "火虎(COSMINI)",
  "Eraise",
  "Guro",
  "crazy4videogames",
  "crazy4videogames",
  "crazy4videogames",
  "Bg2006",
  "Kud",
  " Manuumi",
  "篠茶　斜海",
  "篠茶　斜海",
  "Zavok",

  "Bg2006 ",
  "Thisdudearound",
  "世子",
  "RabiDraw",
  "Yurily",
  "MajorMilk",
  "風船貓",
  "Losno",
  "Losno",
  "buneet",
  "小助手（Ast Jiete） ",
  "黑熊社长",
  "蒼月",
  "saltywetspirit 鹹濕精神",
  "Yumemochi",
  "cottoncreme",
  "Lee",
  "Merrnet",
  "Yarnim",
  "UPRPRC Arius",
  "うりなまこ",
  "南小鸡",
  "Limmion",
  "映はち",
  "プチ",
  "Snidic",
  "原紙人",
  "Cerule",
  "SoloQuintet",
  "namakobcg",
  "Yon Senpai",
  " BunnyK",
  "ぺっしぃ（pesshi）",
  "Trypanophobia",
  "Red Rain",
  "Kinship#2700",
  "Red Rain",
];

// const NET_SERVER_URL = "https://rabiribi5thserver.herokuapp.com";
// const NET_SERVER_URL = "http://localhost:3001";
const max = 8;
// function validateEmail(email) {
//   var re = /\S+@\S+\.\S+/;
//   return re.test(email);
// }

// function validateName(name) {
//   return name.length < 10 && name.length > 0;
// }

// overwrite style
const modalStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0,0.5)",
  },
};

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
      code: "",
      votes: [],
      emailError: false,
      nameError: false,
      codeEmailError: false,
      voteError: false,
      loading: false,
      errorDisplay: false,
      codeSucceed: false,
      succeed: false,
      tooLate: false,
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
    this.setState({ emailError: false, nameError: false, codeEmailError: false, voteError: false, codeSucceed: false, succced: false, errorDisplay: false });
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
  // submitCode = (e) => {
  //   e.preventDefault();
  //   this.setState({ errorDisplay: true });
  //   this.setState({ loading: true });

  //   if (validateEmail(this.state.email)) {
  //     console.log("send");
  //     axios({
  //       method: "post",
  //       url: NET_SERVER_URL + "/code",
  //       data: {
  //         email: this.state.email,
  //       },
  //     }).then((response) => {
  //       console.log(response);
  //       if (response.status === 201) {
  //         console.log("succeed");
  //         this.setState({ loading: false });
  //         this.setState({ codeSucceed: true });
  //       } else if (response.status === 204) {
  //         this.setState({ loading: false });
  //         this.setState({ emailError: true });
  //       }
  //       this.setState({ errorDisplay: true });
  //     });
  //   } else {
  //     this.setState({ emailError: true });
  //     this.setState({ errorDisplay: true });
  //   }
  // };
  submitCode = (e) => {
    e.preventDefault();
    this.setState({ errorDisplay: true });
    this.setState({ tooLate: true });
  };

  submitVote = (e) => {
    e.preventDefault();
    this.setState({ errorDisplay: true });
    this.setState({ tooLate: true });

  };

  // submitVote = (e) => {
  //   e.preventDefault();
  //   this.setState({ errorDisplay: true });
  //   this.setState({ loading: true });
  //   if (validateEmail(this.state.email) && validateName(this.state.name) &&  this.state.votes.length > 0) {
  //     axios({
  //       method: "post",
  //       url: NET_SERVER_URL + "/vote",
  //       data: {
  //         email: this.state.email,
  //         name: this.state.name,
  //         code: this.state.code,
  //         votes: this.state.votes,
  //       },
  //     }).then((response) => {
  //       this.setState({ loading: false });
  //       if (response.status === 201) {
  //         this.setState({ errorDisplay: true });
  //         this.setState({ succeed: true });
  //         window.location = "/rabi5th/art-contest";
  //         const data = response.data;
  //         console.log(data);
  //       } else if (response.status === 204) {
  //         this.setState({ emailError: false, nameError: false, voteError: false });
  //         this.setState({ codeEmailError: true });
  //         this.setState({ errorDisplay: true });
  //       }
  //     });
  //   } else {
  //     this.setState({ loading: false });
  //     if (!validateEmail(this.state.email)) {
  //       this.setState({ emailError: true });
  //     }
  //     if (!validateName(this.state.name)) {
  //       this.setState({ nameError: true });
  //     }
  //     if (this.state.votes.length > 5 || this.state.votes.length <= 0) {
  //       this.setState({ voteError: true });
  //     }
  //     this.setState({ errorDisplay: true });
  //   }
  // };
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
  codeInputHandler = (e) => {
    this.setState({ code: e.target.value });
  };
  clearVotes = () => {
    this.setState({ votes: [] });
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
    // let message;
    // if (this.state.votes.length === 0) {
    //   message = <FormattedMessage id="app.p2-p6-7" />;
    // } else if (this.state.votes.length < 5 && this.state.votes.length > 0) {
    //   // message = `${<FormattedMessage id="app.p2-p6-7"/>} ${5 - this.state.votes.length} ${<FormattedMessage id="app.p2-p6-7"/>}`
    // } else if (this.state.votes.length > 5) {
    //   message = `你多選了${this.state.votes.length - 5}個喔！！！`;
    // } else if (this.state.votes.length === 5) {
    //   message = `很好 你投完了！ 把下方的表格填完就可以送出了！`;
    // }
    return (
      <div className={styles.outerWrapper}>
        <div className="wrapper oneblock">
          <div className={styles.frameWrapper}>
            <div id="vote"></div>

            <div className={styles.upper}>
              <Title id="app.p2-p5-1" />
              <div className="subtitle">
                <p className={styles.white}>
                  <FormattedMessage id="app.p2-p5-2" />
                </p>
                <p className={styles.white}>
                  <FormattedMessage id="app.p2-p5-3-1" />
                </p>
                <p className={styles.white}>
                  <FormattedMessage id="app.p2-p5-3-2" />
                </p>
              </div>
            </div>

            <div className={styles.explainWrapper}>
              <div className={styles.explainBox}>
                <img alt="explanation" className={styles.circle} src={this.props.locale.includes("zh") ? explain1 : explain1} />
                <img alt="arrow" className={styles.arrow} src={arrow} />
                <p>
                  <span className={styles.number}></span>
                  <FormattedMessage id="app.p2-p5-4" />
                </p>
              </div>
              <div className={styles.explainBox}>
                <img alt="explanation" className={styles.circle} src={this.props.locale.includes("zh") ? explain2 : explain2_en} />
                <img alt="arrow" className={styles.arrow} src={arrow} />
                <p>
                  <span className={styles.number}></span>
                  <FormattedMessage id="app.p2-p5-5" />
                </p>
              </div>
              <div className={styles.explainBox}>
                <img alt="explanation" className={styles.circle} src={this.props.locale.includes("zh") ? explain3 : explain3_en} />
                <img alt="arrow" className={styles.arrow} src={arrow} />
                <p>
                  <span className={styles.number}></span>
                  <FormattedMessage id="app.p2-p5-6" />
                </p>
              </div>
              <div className={styles.explainBox}>
                <img alt="explanation" className={styles.circle} src={this.props.locale.includes("zh") ? explain4 : explain4_en} />
                <img alt="arrow" className={styles.arrow} src={arrow} />
                <p>
                  <span className={styles.number}></span>
                  <FormattedMessage id="app.p2-p5-7" />
                </p>
              </div>
            </div>
          </div>

          <div className={styles.voteBg}>
            <div className={styles.txtBoxWrapper}>
              <Title id="app.p2-p6-1" />
              <div className={`${styles.desktop} ${styles.announce}`}>
                <h2>
                  <FormattedMessage id="app.p2-p6-2" />
                </h2>
              </div>

              <p>
                <FormattedMessage id="app.p2-p6-6" />
              </p>
            </div>

            <div className={styles.boardFrame}>
              <div id="voteArea" className={`${styles.board} gallerybg  gallerybg${this.state.page}`}>
                <button disabled={this.state.page >= max ? true : false} className={`${styles.button} ${styles.changePageR}`} onClick={this.addPage}>
                  <i className="fas fa-angle-double-right"></i>
                </button>

                <div onClick={this.clearVotes} className={`${styles.buttonL} ${styles.undo}`}>
                  <i className="fas fa-undo"></i>
                </div>

                {pics.map((el, index) => {
                  if (index < this.state.page * perPage && index >= (this.state.page - 1) * perPage)
                    return (
                      <Gallery selected={this.state.votes.includes(index)} key={index} src={el.small} isModalOpen={this.state.isBoardModalOpen} style={modalStyle}>
                        <div className={styles.closeButton}>
                          <button
                            style={{
                              ...mainStyle.cancelButton,
                              marginRight: 0,
                              width: "auto",
                            }}
                            onClick={this.closeBoardModal}
                            className={styles.closeButton}
                          >
                            X
                          </button>
                        </div>
                        <div className={styles.fullImage}>
                          <div className={styles.txtWrapper}>
                            <p>
                              <FormattedMessage id="app.p2-p10-3" />：{index + 1}
                            </p>
                            <p>
                              <FormattedMessage id="app.p2-p10-4" />：{players[index]}
                            </p>
                          </div>
                          <div className={`${styles.fullImageWrapper} gallerybgUnit gallerybgUnit${index}`}>{/* <img alt={index} src={el.big} /> */}</div>
                          <button className={`${styles.buttonL} ${styles.innerVoteButton}`} onClick={() => this.clickHandler(index)}>
                            {this.state.votes.includes(index) ? <FormattedMessage id="app.p2-p10-1" /> : <FormattedMessage id="app.p2-p10-2" />}
                          </button>
                        </div>
                      </Gallery>
                    );
                  return true;
                })}
                <button disabled={this.state.page <= 1 ? true : false} className={`${styles.button} ${styles.changePageL}`} onClick={this.minusPage}>
                  <i className="fas fa-angle-double-right"></i>
                </button>

                <div className={styles.page}>
                  <p>{`${this.state.page}/${max}`}</p>
                </div>
                <div className={styles.message}>
                  <div className={this.state.votes.length > 5 ? `${styles.display}` : `${styles.hidden}`}>
                    <p id="voteStatusFail" className={this.state.votes.length > 5 || this.state.votes.length === 0 ? `${styles.warning}` : `${styles.success}`}>
                      <FormattedMessage id="app.p2-p6-8" />
                      {Math.abs(this.state.votes.length - 5)}
                      <FormattedMessage id="app.p2-p6-9" />
                    </p>
                  </div>
                  <div className={this.state.votes.length <= 5 ? `${styles.display}` : `${styles.hidden}`}>
                    <p id="voteStatus" className={this.state.votes.length > 5 || this.state.votes.length === 0 ? `${styles.warning}` : `${styles.success}`}>
                      <FormattedMessage id="app.p2-p6-10" />
                      {Math.abs(this.state.votes.length - 5)}
                      <FormattedMessage id="app.p2-p6-11" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formBg}>
            <form id="infoWrapper" className={styles.formWrapper}>
              <label htmlFor="exampleFormControlInput1">
                Email<span className={styles.warning}>*</span>
              </label>
              <div className="form-group ">
                <input required value={this.state.email} onChange={this.emailInputHandler} type="email" className="form-control col" id="email" placeholder="" />
                <button id="submitCode" className={` ${styles.blackButton}`} onClick={this.submitCode}>
                  <FormattedMessage id="app.p2-p6-12" />
                </button>
              </div>

              <div className="form-group">
                <label htmlFor="exampleFormControlInput2">
                  <FormattedMessage id="app.p2-p6-13" />
                  <span className={styles.warning}>*</span>
                </label>
                <input id="name" required value={this.state.name} onChange={this.nameInputHandler} type="text" className="form-control" placeholder="" />
              </div>

              <div className="form-group">
                <label htmlFor="exampleFormControlInput4">
                  <FormattedMessage id="app.p2-p6-15" />
                  <span className={styles.warning}>*</span>
                </label>
                <input id="code" required value={this.state.code} onChange={this.codeInputHandler} type="text" className="form-control" placeholder="" />
              </div>

              <div className="form-group">
                <label htmlFor="exampleFormControlInput4">
                  <FormattedMessage id="app.p2-p6-16" />
                </label>
              </div>

              <div className={styles.center}>
                <button id="submitVote" onClick={this.submitVote} className={`${styles.buttonL} ${styles.verifyCodeButton}`}>
                  <FormattedMessage id="app.p2-p6-17" />
                </button>
              </div>

              <div id="infoStatus" className={this.state.errorDisplay ? `${styles.errorMessages}` : `${styles.errorMessages} ${styles.hidden}`}>
                <p className={this.state.emailError ? `${styles.emailWarning}` : `${styles.emailWarning} ${styles.hidden}`}>
                  <FormattedMessage id="app.p2-w-1" />
                </p>
                <p className={this.state.nameError ? `${styles.emailWarning}` : `${styles.emailWarning} ${styles.hidden}`}>
                  <FormattedMessage id="app.p2-w-2" />
                </p>
                <p className={this.state.codeEmailError ? `${styles.emailWarning}` : `${styles.emailWarning} ${styles.hidden}`}>
                  <FormattedMessage id="app.p2-w-4" />
                </p>
                <p className={this.state.voteError ? `${styles.emailWarning}` : `${styles.emailWarning} ${styles.hidden}`}>
                  <FormattedMessage id="app.p2-w-5" />
                </p>
                <p className={this.state.loading ? `${styles.emailWarning}` : `${styles.emailWarning} ${styles.hidden}`}>
                  <FormattedMessage id="app.p2-w-6" />
                </p>
                <p className={this.state.succeed ? `${styles.success}` : `${styles.success} ${styles.hidden}`}>
                  <FormattedMessage id="app.p2-w-7" />
                </p>
                <p className={this.state.codeSucceed ? `${styles.success}` : `${styles.success} ${styles.hidden}`}>
                  <FormattedMessage id="app.p2-w-8" />
                </p>
                <p className={this.state.tooLate ? `${styles.emailWarning}` : `${styles.emailWarning} ${styles.hidden}`}>
                  <FormattedMessage id="app.p2-w-14" />
                </p>

                <button id="infoCloseButton" className={`${styles.buttonL} ${styles.verifyCodeButton}`} onClick={this.clearMessages}>
                  <FormattedMessage id="app.p2-w-13" />
                </button>
              </div>
            </form>
            <div className={styles.buttonWrapper}>
              <NextPageBtn href="/rabi5th/go-bunny-go">
                <FormattedMessage id="app.p2-p8-2" />
                <i className="fas fa-caret-right"></i>
              </NextPageBtn>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalUnit;
