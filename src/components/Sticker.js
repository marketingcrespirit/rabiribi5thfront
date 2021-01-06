import React, { useEffect, useState } from "react";
import Bulletin from "./Bulletin";
import axios from "axios";
import styles from './sticker.module.css'
import Test from "./Test";

const NET_SERVER_URL = "https://rabiribi5thserver.herokuapp.com";

const Sticker = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: NET_SERVER_URL + "/messages",
    }).then(({ data }) => {
      setData(data);
      props.amountChange(data.length)
    });
  }, []);

  return (
    <div className={styles.stickerWrapper}>
      <Test messages={data} count={data.length} />
    </div>
  );
};

export default Sticker;
