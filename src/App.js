import React, { Component } from "react";
import "./App.css";

import Navbars from "./sections/Navbars";
// import LessonSlide from "./components/Carousel";
// import Award from "./components/Award";
// import FifthVideo from "./components/FifthVideo";
// import Latest from "./components/Latest";
import Standard from "./components/Standard";
import Sumbit from "./components/Submit";
import Schedule from "./components/Schedule";
import DraftIntro from "./components/DraftIntro";
import Gifts from "./components/Gifts";
import Footer from "./components/Footer";
import Firefly from "./components/Firefly";
// import Board from "./components/Bulletin";
import Gallerys from "./components/Gallerys";
// import Vote from "./components/Vote";
// import Bulletin from "./components/Bulletin";
import Gather from "./components/Gather";
import Sticker from "./components/Sticker";

const navs = [
  { tag: "#intro", content: "活動介紹", id: "nav1" },
  { tag: "#schedule", content: "時間軸", id: "nav2" },
  { tag: "#rule", content: "評選機制", id: "nav3" },
  { tag: "#prize", content: "徵稿獎項", id: "nav4" },
  { tag: "#join", content: "報名方式", id: "nav5" },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.introRef = React.createRef();
    this.scheduleRef = React.createRef();
    this.judgeRef = React.createRef();
    this.ruleRef = React.createRef();
    this.prizeRef = React.createRef();
    this.joinRef = React.createRef();
  }
  state = {
    windowX: 0,
    introTop: 0,
    scheduleTop: 0,
    judgeTop: 0,
    ruleTop: 0,
    prizeTop: 0,
    joinTop: 0,
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
    if (winScroll >= this.state.joinTop - 100 && this.state.introTop !== 0) {
      this.setState({
        activatedIndex: 4,
      });
    } else if (winScroll >= this.state.prizeTop - 300 && this.state.introTop !== 0) {
      this.setState({
        activatedIndex: 3,
      });
    } else if (winScroll >= this.state.ruleTop - 900 && this.state.introTop !== 0) {
      this.setState({
        activatedIndex: 2,
      });
    } else if (winScroll >= this.state.scheduleTop - 300 && this.state.introTop !== 0) {
      this.setState({
        activatedIndex: 1,
      });
    } else if (winScroll >= this.state.introTop - 100 && this.state.introTop !== 0) {
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
    if (this.introRef.current !== null && this.state.introTop === 0) {
      this.setState({ introTop: this.introRef.current.getBoundingClientRect().top + document.documentElement.scrollTop });
    }

    if (this.scheduleRef.current !== null && this.state.introTop === 0) {
      this.setState({ scheduleTop: this.scheduleRef.current.getBoundingClientRect().top + document.documentElement.scrollTop });
    }

    if (this.ruleRef.current !== null && this.state.introTop === 0) {
      this.setState({ ruleTop: this.ruleRef.current.getBoundingClientRect().top + document.documentElement.scrollTop });
    }

    if (this.prizeRef.current !== null && this.state.introTop === 0) {
      this.setState({ prizeTop: this.prizeRef.current.getBoundingClientRect().top + document.documentElement.scrollTop });
    }
    if (this.joinRef.current !== null && this.state.introTop === 0) {
      this.setState({ joinTop: this.joinRef.current.getBoundingClientRect().top + document.documentElement.scrollTop });
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
          <Firefly />
          {/* <Latest/> */}
          <DraftIntro />
          <div ref={this.introRef}></div>
          <Schedule />
          <div ref={this.scheduleRef}></div>
          <Standard />
          <div ref={this.ruleRef}></div>
          <Gifts lang={this.props.locale} />
          <div ref={this.prizeRef}></div>
          <Sumbit />
          <div ref={this.joinRef}></div>
          <Sticker />
          <div ref={this.joinRef}></div>
          <Gather />
          <div ref={this.joinRef}></div>
          <Gallerys />
          <Footer />
        </main>
      </div>
    );
  }
}

export default App;
