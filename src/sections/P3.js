import React, { Component } from "react";
import "../App.css";

import Navbars from "../sections/Navbars";
import Footer from "../components/Footer";
import Firefly from "../components/Firefly";
import Subbanner from "../components/Subbanner";
import LimitProducts from "../components/LimitProducts";
import Mvs from "../components/Mvs";
import Music from "../components/Music";
import Button from "../components/Button";

import styles from "./p3.module.css";
import { FormattedMessage } from "react-intl";

const navs = [
  { tag: "#video", id: "app.p3-nav1" },
  { tag: "#limit", id: "app.p3-nav2" },
  { tag: "#live", id: "app.p3-nav3" },
  { tag: "#try", id: "app.p3-nav4" },
  { tag: "#rule", id: "app.p3-nav5" },
];

class App extends Component {
  
  state = {
    windowX: 0,
    videoTop: 0,
    limitTop: 0,
    liveTop: 0,
    tryTop: 0,
    buynowTop: 0,
    activatedIndex: "",
    amount: 0,
    modal: false,
    prevScrollpos: window.pageYOffset,
    navStyle: "none",
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }
  amountChange = (amount) => {
    this.setState({ amount: amount });
  };

  listenToScroll = () => {
    var currentScrollPos = window.pageYOffset;
    if (this.state.prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-90px";
    }
    if (currentScrollPos > 10) {
      this.setState({ navStyle: "blue" });
      // document.getElementById("navbar").style.backgroundImage = "none";
      // document.getElementById("navbar").style.backgroundColor = "#000";
    } else {
      this.setState({ navStyle: "none" });
      // document.getElementById("navbar").style.backgroundImage = navbar;
      // document.getElementById("navbar").style.backgroundColor = "transparent";
    }
    this.setState({ prevScrollpos: currentScrollPos });
    if (this.state.prevScrollpos !== currentScrollPos) {
      this.toggleModal();
    }
    // if (winScroll >= this.state.tryTop && this.state.videoTop !== 0) {
    //   this.setState({
    //     activatedIndex: 3,
    //   });
    // } else if (winScroll >= this.state.liveTop - 2500 && this.state.videoTop !== 0) {
    //   this.setState({
    //     activatedIndex: 2,
    //   });
    // } else if (winScroll >= this.state.limitTop - 1900 && this.state.videoTop !== 0) {
    //   this.setState({
    //     activatedIndex: 1,
    //   });
    // } else if (winScroll >= this.state.videoTop - 400 && this.state.videoTop !== 0) {
    //   this.setState({
    //     activatedIndex: 0,
    //   });
    // } else if (winScroll > 969) {
    //   this.setState({
    //     activatedIndex: "",
    //   });
    // }
  };
  handleChange = (e) => {
    this.setState({ locale: e.target.value });
    this.props.locale = e.target.value;
  };

  toggleModal = () => {
    let newModal = this.state.modal;
    newModal = !newModal;
    this.setState({ modal: newModal });
  };
  render() {
    return (
      <div className="App">
        <div id="top"></div>
        <header className="App-header">
          <Navbars
            locale={this.props.locale}
            changed={(e) => {
              document.querySelector("body").style.height = "auto";
              document.querySelector("body").style.overflow = "auto";
              this.props.changed(e);
            }}
            activatedIndex={this.state.activatedIndex}
            navs={navs}
            bg={this.state.navStyle === "none" ? true : false}
          />
        </header>
        <main className={styles.main}>
          <div className={this.state.prevScrollpos === 0 ? "hidden" : "buynowbutton"}>
            <a href="#top"></a>
          </div>

          <div className={this.state.modal ? `${styles.modalWrapper}` : `${styles.hidden}`} onClick={this.toggleModal}>
            <div className="widthController">
              <div className={styles.innerWrapper}>
                <h1> <FormattedMessage id="app.p3-136"></FormattedMessage></h1>
                <ul>
                  <li>
                    <h2><FormattedMessage id="app.p3-137"></FormattedMessage></h2>
                    <p><FormattedMessage id="app.p3-138"></FormattedMessage></p>
                  </li>
                  <li>
                    <h2><FormattedMessage id="app.p3-139"></FormattedMessage></h2>
                    <p><FormattedMessage id="app.p3-140"></FormattedMessage></p>
                  </li>
                  <li>
                    <h2><FormattedMessage id="app.p3-141"></FormattedMessage></h2>
                    <p><FormattedMessage id="app.p3-141-1"></FormattedMessage></p>
                    <p><FormattedMessage id="app.p3-142"></FormattedMessage><a target="_blank" rel="noreferrer" href="https://sekaiproject.com/products/rabi-ribi-5th-anniversary-symphony-deluxe-box%E2%80%8B"><FormattedMessage id="app.p3-143"></FormattedMessage></a></p>
                  </li>
                  <li>
                    <h2><FormattedMessage id="app.p3-144"></FormattedMessage></h2>
                    <p><FormattedMessage id="app.p3-145"></FormattedMessage></p>
                  </li>
                </ul>
                <div className={styles.buttonWrapper}>
                  <Button href="https://www.crespirit.com/prods-list/">
                    <h2><FormattedMessage id="app.p3-146"></FormattedMessage></h2>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Firefly />
          <Subbanner locale={this.props.locale} />
          <div ref={this.videoRef}></div>
          <LimitProducts clicked={this.toggleModal} />
          <div ref={this.limitRef}></div>
          <Music />
          <Mvs />
          <div ref={this.liveRef}></div>
          <div ref={this.tryRef}></div>
          <div ref={this.buynowRef}></div>

          <Footer />
        </main>
      </div>
    );
  }
}

export default App;
