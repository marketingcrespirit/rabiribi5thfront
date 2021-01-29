import React, { Component } from "react";
import "../App.css";

import Navbars from "../sections/Navbars";
import Standard from "../components/Standard";
import Schedule from "../components/Schedule";
import DraftIntro from "../components/DraftIntro";
import Gifts from "../components/Gifts";
import Footer from "../components/Footer";
import Gallerys from "../components/Gallerys";
import Winner from "../components/Winner";

const navs = [
  { tag: "#winner", content: "得獎名單", id: "nav0" },
  { tag: "#vote", content: "投票說明", id: "nav1" },
  { tag: "#intro", content: "活動介紹", id: "nav2" },
  { tag: "#schedule", content: "時間軸", id: "nav3" },
  { tag: "#rule", content: "評選機制", id: "nav4" },
  { tag: "#prize", content: "徵稿獎項", id: "nav5" },
];

class App extends Component {
  state = {
    windowX: 0,
    introTop: 0,
    scheduleTop: 0,
    judgeTop: 0,
    ruleTop: 0,
    prizeTop: 0,
    voteTop: 0,
    winnerTop: 0,
    activatedIndex: "",
    locale: "zh",
    navStyle: "none",
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    var currentScrollPos = window.pageYOffset;
    if (this.state.prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-90px";
    }
    if (currentScrollPos > 10) {
      this.setState({ navStyle: "blue" });
    } else {
      this.setState({ navStyle: "none" });
    }
    this.setState({ prevScrollpos: currentScrollPos });
   
  };
  handleChange = (e) => {
    this.setState({ locale: e.target.value });
    this.props.locale = e.target.value;
  };

  render() {
    
   
    return (
      <div className="App">
        <header className="App-header" >
          
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
        <div id="winner"></div>
        <main>
          {/* <Firefly /> */}
          <div ref={this.winnerRef}></div>
          <Winner/>
          <div ref={this.voteRef}></div>
          <Gallerys locale={this.props.locale}/>
          <DraftIntro />
          <div ref={this.introRef}></div>
          <Schedule />
          <div ref={this.scheduleRef}></div>
          <Standard />
          <div ref={this.ruleRef}></div>
          <Gifts />
          <div ref={this.prizeRef}></div>
          
          <Footer
            locale={this.props.locale}
            changed={(e) => {
              this.props.changed(e);
            }}
          />
          
        </main>
      </div>
    );
  }
}

export default App;
