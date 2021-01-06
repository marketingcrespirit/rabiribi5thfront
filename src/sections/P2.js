import React, { Component } from "react";
import "../App.css";

import Navbars from "../sections/Navbars";
// import LessonSlide from "./components/Carousel";
// import Award from "./components/Award";
// import FifthVideo from "./components/FifthVideo";
import Firefly from "../components/Firefly";
import Footer from "../components/Footer";
import Gather from "../components/Gather";
import Sticker from "../components/Sticker";

// for p1
// const navs = [
//   { tag: "#intro", content: "活動介紹", id: "nav1" },
//   { tag: "#schedule", content: "時間軸", id: "nav2" },
//   { tag: "#rule", content: "評選機制", id: "nav3" },
//   { tag: "#prize", content: "徵稿獎項", id: "nav4" },
//   { tag: "#join", content: "報名方式", id: "nav5" },
// ];

// for p2
const navs = [{ tag: "#unlock", content: "集氣留言", id: "nav6" }];

class App extends Component {
  constructor(props) {
    super(props);
    this.gatherRef = React.createRef();
    this.unlockRef = React.createRef();
  }
  state = {
    windowX: 0,
    unlockTop: 0,
    activatedIndex: "",
    amount: 0,
    locale: "zh",
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
    const winScroll = document.documentElement.scrollTop + window.innerHeight;
    if (winScroll >= this.state.unlockTop && this.state.unlockTop !== 0) {
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
    if (this.unlockRef.current !== null && this.state.unlockTop === 0) {
      this.setState({ unlockTop: this.unlockRef.current.getBoundingClientRect().top + document.documentElement.scrollTop });
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
          <div ref={this.unlockRef}></div>
          <Gather amount={this.state.amount} />
          <Sticker amountChange={(amount) => this.amountChange(amount)} />


          <Footer />
        </main>
      </div>
    );
  }
}

export default App;
