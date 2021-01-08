import React, { Component } from "react";
import "../App.css";

import Navbars from "../sections/Navbars";
import Standard from "../components/Standard";
import Schedule from "../components/Schedule";
import DraftIntro from "../components/DraftIntro";
import Gifts from "../components/Gifts";
import Footer from "../components/Footer";
import Gallerys from "../components/Gallerys";

const navs = [
  { tag: "#vote", content: "投票說明", id: "nav1" },
  { tag: "#intro", content: "活動介紹", id: "nav2" },
  { tag: "#schedule", content: "時間軸", id: "nav3" },
  { tag: "#rule", content: "評選機制", id: "nav4" },
  { tag: "#prize", content: "徵稿獎項", id: "nav5" },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.introRef = React.createRef();
    this.scheduleRef = React.createRef();
    this.ruleRef = React.createRef();
    this.prizeRef = React.createRef();
    this.voteRef = React.createRef();
  }
  state = {
    windowX: 0,
    introTop: 0,
    scheduleTop: 0,
    judgeTop: 0,
    ruleTop: 0,
    prizeTop: 0,
    voteTop: 0,
    activatedIndex: "",
    locale: "zh",
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    const winScroll = document.documentElement.scrollTop + window.innerHeight;
    if (winScroll >= this.state.prizeTop  && this.state.voteTop !== 0) {
      this.setState({
        activatedIndex: 4,
      });
    } else if (winScroll >= this.state.ruleTop  && this.state.voteTop !== 0) {
      this.setState({
        activatedIndex: 3,
      });
    } else if (winScroll >= this.state.scheduleTop && this.state.voteTop !== 0) {
      this.setState({
        activatedIndex: 2,
      });
    } else if (winScroll >= this.state.introTop  && this.state.voteTop !== 0) {
      this.setState({
        activatedIndex: 1,
      });
    } else if (winScroll >= this.state.voteTop  && this.state.voteTop !== 0) {
      this.setState({
        activatedIndex: 0,
      });
    } else if (winScroll > 969) {
      this.setState({
        activatedIndex: "",
      });
    }
  };
  handleChange = (e) => {
    this.setState({ locale: e.target.value });
    this.props.locale = e.target.value;
  };

  render() {
    if (this.prizeRef.current !== null && this.state.introTop === 0) {
      this.setState({ prizeTop: this.prizeRef.current.getBoundingClientRect().top + document.documentElement.scrollTop });
    }

    if (this.ruleRef.current !== null && this.state.introTop === 0) {
      this.setState({ ruleTop: this.ruleRef.current.getBoundingClientRect().top + document.documentElement.scrollTop - 500 });
    }

    if (this.scheduleRef.current !== null && this.state.introTop === 0) {
      this.setState({ scheduleTop: this.scheduleRef.current.getBoundingClientRect().top + document.documentElement.scrollTop - 300 });
    }

    if (this.introRef.current !== null && this.state.introTop === 0) {
      this.setState({ introTop: this.introRef.current.getBoundingClientRect().top + document.documentElement.scrollTop });
    }
    if (this.voteRef.current !== null && this.state.introTop === 0) {
      this.setState({ voteTop: this.voteRef.current.getBoundingClientRect().top + document.documentElement.scrollTop });
    }
    return (
      <div className="App">
        <header className="App-header">
          <Navbars
            locale={this.props.locale}
            changed={(e) => {
              this.props.changed(e);
            }}
            activatedIndex={this.state.activatedIndex}
            navs={navs}
          />
        </header>

        <main>
          {/* <Firefly /> */}

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
          
          <Footer />
          
        </main>
      </div>
    );
  }
}

export default App;
