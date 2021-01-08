import React, { Component } from "react";
import "./App.css";

import Navbars from "./sections/Navbars";
import Footer from "./components/Footer";
import Firefly from "./components/Firefly";
import Intro from "./components/Intro";

const navs = [
  
];

class App extends Component {
  constructor(props) {
    super(props);
    //p1
    // this.introRef = React.createRef();
    // this.scheduleRef = React.createRef();
    // this.judgeRef = React.createRef();
    // this.ruleRef = React.createRef();
    // this.prizeRef = React.createRef();
    // this.joinRef = React.createRef();
    //p2
    this.introRef = React.createRef();
    this.gatherRef = React.createRef();
    this.voteRef = React.createRef();
    this.timelineRef = React.createRef();
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
    this.setState({amount: amount})
  }

  listenToScroll = () => {
    const winScroll = document.documentElement.scrollTop + window.innerHeight;
    if (winScroll >= this.state.timelineTop && this.state.introTop !== 0) {
      this.setState({
        activatedIndex: 3,
      });
    } else if (winScroll >= this.state.voteTop && this.state.introTop !== 0) {
      this.setState({
        activatedIndex: 2,
      });
    } else if (winScroll >= this.state.gatherTop && this.state.introTop !== 0) {
      this.setState({
        activatedIndex: 1,
      });
    } else if (winScroll >= this.state.introTop && this.state.introTop !== 0) {
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

    if (this.gatherRef.current !== null && this.state.introTop === 0) {
      this.setState({ gatherTop: this.gatherRef.current.getBoundingClientRect().top + document.documentElement.scrollTop });
    }

    if (this.voteRef.current !== null && this.state.introTop === 0) {
      this.setState({ voteTop: this.voteRef.current.getBoundingClientRect().top + document.documentElement.scrollTop });
    }

    if (this.timelineRef.current !== null && this.state.introTop === 0) {
      this.setState({ timelineTop: this.timelineRef.current.getBoundingClientRect().top + document.documentElement.scrollTop });
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
          <Intro />
          <Footer />
        </main>
      </div>
    );
  }
}

export default App;
