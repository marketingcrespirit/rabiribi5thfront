import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import style from "./modal.module.css";
import Board from "./Bulletin";
import FifthVideo from "./FifthVideo";
import Rules from "./Rules";
import Testimonial from "./Testimonal";
import Cookies from "js-cookie";
import styles from "./submit.module.css";
import line from "../public/assets/images/line.png";
import image from "../public/assets/images/spec_3.png";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.outerStyle = {
      position: "fixed",
      top: "120px",
      left: 0,
      width: "100%",
      height: "80%",
      overflow: "auto",
      zIndex: 5,
    };

    // default style
    this.style = {
      modal: {
        position: "relative",
        width: "800px",
        padding: 20,
        boxSizing: "border-box",
        backgroundColor: "#fff",
        margin: "40px auto",
        borderRadius: 3,
        zIndex: 2,
        textAlign: "left",
        boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
        ...this.props.style.modal,
      },
      overlay: {
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        ...this.props.style.overlay,
      },
    };
  }

  // render modal
  render() {
    return (
      <div
        style={{
          ...this.outerStyle,
          display: this.props.isModalOpen ? "block" : "none",
        }}
      >
        <div style={this.style.overlay} onClick={this.props.closeModal} />
        <div onClick={this.props.closeModal} />
        <div className={styles.rules}>{this.props.children}</div>
      </div>
    );
  }
}

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
    padding: "12px 20px",
    color: "#fff",
    margin: "0 auto",
    width: 150,
    display: "block",
    borderRadius: 3,
  },
  cancelButton: {
    backgroundColor: "red",
    border: 0,
    padding: "12px 20px",
    color: "#fff",
    margin: "0 auto",
    width: 150,
    display: "block",
    borderRadius: 3,
  },
};

class ModalUnit extends Component {
  constructor(props) {
    super(props);

    // set initial state
    this.state = {
      isBoardModalOpen: false,
      isBoardInnerModalOpen: false,
      isVoteModalOpen: false,
      isInnerVoteModalOpen: false,
      username: Cookies.get("username"),
      hide: true,
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

  hideHandler = () => {
    let newHide = this.state.hide;
    this.setState({ hide: !newHide });
  };
  componentDidMount() {
    document.body.addEventListener("keydown", this.keyListener);
  }

  componentWillUnmount() {
    document.body.removeEventListener("keydown", this.closeBoardModal);
  }

  // render app
  render() {
    return (
      <div className={styles.wrapper}>
        <div className="wrapper">
          <img className="line" src={line} />

          <div style={mainStyle.app}>
            <div className={style.board}>
              <div>
                <div id="join" className="buffer"></div>
                <h1 className="bigHeader">
                  <FormattedMessage id="app.p5-1" />
                </h1>

                <div className={styles.lowerWrapper}>
                  <img src={image} />
                  <ul>
                    <li>
                      <p>
                        <FormattedMessage id="app.p5-2" />
                      </p>
                    </li>
                    <li>
                      <p>
                        <FormattedMessage id="app.p5-3" />
                      </p>
                    </li>
                    <li>
                      <p>
                        <FormattedMessage id="app.p5-4" />
                      </p>
                    </li>
                    <li>
                      <p>
                        <FormattedMessage id="app.p5-5" />
                      </p>
                    </li>
                    <li>
                      <p>
                        <FormattedMessage id="app.p5-6" />
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.emailAddress}>
                <h2 className={this.state.hide ? "" : "hidden"}>
                  <FormattedMessage id="app.p5-7" />
                </h2>
                <h2 className={this.state.hide ? "hidden" : "emailStrong"}>
                  <FormattedMessage id="app.p5-8" />
                </h2>
              </div>

              <span className={styles.button} onClick={this.openBoardModal}>
                <FormattedMessage id="app.p5-9" />
              </span>

              <Modal isModalOpen={this.state.isBoardModalOpen} style={modalStyle}>
                <p className={styles.rulesContent}>
                  <FormattedMessage id="app.p5-10" />
                </p>
                <input onClick={this.hideHandler} type="checkbox" />
                <span className={styles.rulesContent}>
                  <FormattedMessage id="app.p5-11" />
                </span>
                <button
                  style={{
                    ...mainStyle.submitButton,
                    margin: 0,
                    width: "auto",
                    marginTop: 10,
                  }}
                  onClick={this.closeBoardModal}
                >
                  <FormattedMessage id="app.p5-12" />
                </button>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalUnit;
