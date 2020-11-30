import React, { useState, useEffect } from "react";
import styles from "./gather.module.css";
import tree from "../public/assets/images/tree.png";
import coin from "../public/assets/images/coin.png";
import road from "../public/assets/images/road.png";
import rabbit from "../public/assets/images/1.png";
import axios from "axios";

const NET_SERVER_URL = "http://localhost:3001";

function validateName(name) {
  var re = /^[\w\u4E00-\u9FA5\uF900-\uFA2D]{1,5}$/;
  return re.test(name);
}

const Gather = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [amount, setAmount] = useState(0);
  const [stageOne, setStageOne] = useState(false);
  const [stageTwo, setstageTwo] = useState(false);
  const [stageThree, setstageThree] = useState(false);
  const [errorDisplay, setErrorDisplay] = useState(false);

  const [position, setPosition] = useState(5);
  let date = new Date().getDate();

  const nameInputHandler = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  const contentInputHandler = (e) => {
    setContent(e.target.value);
  };
  const submitMessage = (e) => {
    e.preventDefault();
    if (validateName(name)) {
      axios({
        method: "post",
        url: NET_SERVER_URL + "/message",
        data: {
          name: name,
          content: content,
        },
      }).then((response) => {
        console.log(response);
        if (response.status === 201) {
          window.location = "http://localhost:3000";
          console.log("succeed");
        } else if (response.status === 204) {
        }
        setErrorDisplay(true);
      });
    } else {
      console.log("not valid");
    }
  };
  useEffect(() => {
    axios({
      method: "get",
      url: NET_SERVER_URL + "/messages",
    }).then(({ data }) => {
      setAmount(data.length);
    });
  }, []);

  useEffect(() => {
    if (position <= 83) {
      const interval = setInterval(() => {
        let newPosition = position;
        newPosition += 13;
        setPosition(newPosition);
      }, 1000);
      return () => clearInterval(interval);
    } else if (position > 83) {
      setPosition(5);
    }
  });
  // 31% one  36% step
  // 57% two
  // 83% three

  let style = {
    position: "absolute",
    left: `${position}%`,
  };

  return (
    <div className={styles.wrapper}>
      <div className="wrapper">
        <div id="schedule" className="buffer"></div>
        <h1 className="bigHeader">集氣進度</h1>
        <div className={styles.mapContainer}>
          <div className={styles.treesContainer}>
            <div className={styles.treeContainer}>
              <img className={styles.tree} src={tree} />
              <img className={styles.coin} src={coin} />
            </div>
            <div className={styles.treeContainer}>
              <img className={styles.tree} src={tree} />
              <img className={styles.coin} src={coin} />
            </div>
            <div className={styles.treeContainer}>
              <img className={styles.tree} src={tree} />
              <img className={styles.coin} src={coin} />
            </div>
          </div>

          <div className={styles.rabbitContainer}>
            <img style={style} className={styles.rabbit} src={rabbit} />
          </div>

          <div className={styles.roadContainer}>
            <img className={styles.road} src={road} />
          </div>

          <div className={styles.percentageContainer}>
  <h1>{`${amount / 10000}%`}</h1>
          </div>
          <div className={styles.counterContainer}>
            <h2>累積人數：{amount}/解鎖人數：10000</h2>
          </div>
          <div className={styles.formContainer}>
            <form>
              <label>暱稱</label>
              <input onChange={nameInputHandler} value={name} />
              <label>留言</label>
              <input onChange={contentInputHandler} value={content} />
              <input type="submit" onClick={submitMessage} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gather;

// class Gather extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//       content: "",
//       amount: 0,
//       stage1: false,
//       stage2: false,
//       stage3: false
//     };
//   }

//   nameInputHandler = (e) => {
//     this.setState({ name: e.target.value });
//   };
//   contentInputHandler = (e) => {
//     this.setState({ content: e.target.value });
//   };
//   submitCode = (e) => {
//     e.preventDefault();

//     if (validateName(this.state.name) && validateContent(this.state.content)) {
//       axios({
//         method: "post",
//         url: NET_SERVER_URL + "/code",
//         data: {
//           email: this.state.email,
//         },
//       }).then((response) => {
//         console.log(response);
//         if (response.status === 201) {
//           console.log("succeed");
//           this.setState({ codeSucceed: true });
//         } else if (response.status === 204) {
//           this.setState({ emailError: true });
//         }
//         this.setState({ errorDisplay: true });
//       });
//     } else {
//       console.log("not valid");
//     }
//   };
//   render() {
//     return (
//       <div className={styles.wrapper}>
//         <div className="wrapper">
//           <h1 className="bigHeader">集氣進度</h1>
//           <div className={styles.mapContainer}>
//             <div className={styles.treesContainer}>
//               <div className={styles.treeContainer}>
//                 <img className={styles.tree} src={tree} />
//                 <img className={styles.coin} src={coin} />
//               </div>
//               <div className={styles.treeContainer}>
//                 <img className={styles.tree} src={tree} />
//                 <img className={styles.coin} src={coin} />
//               </div>
//               <div className={styles.treeContainer}>
//                 <img className={styles.tree} src={tree} />
//                 <img className={styles.coin} src={coin} />
//               </div>
//             </div>

//             <div className={styles.roadContainer}>
//               <img className={styles.road} src={road} />
//             </div>

//             <div className={styles.percentageContainer}>
//               <h1>0%</h1>
//             </div>
//             <div className={styles.counterContainer}>
//               <h2>累積人數：{this.state.amount}/解鎖人數：10000</h2>
//             </div>
//             <div className={styles.formContainer}>
//               <form>
//                 <label>暱稱</label>
//                 <input onChange={this.nameInputHandler} value={this.state.name} />
//                 <label>留言</label>
//                 <input onChange={this.contentInputHandler} value={this.state.content} />
//                 <input type="submit" />
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Gather;
