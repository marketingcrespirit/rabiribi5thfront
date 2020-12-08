import React, { useEffect, useState } from "react";
import Bulletin from "./Bulletin";
import axios from "axios";
import styles from './sticker.module.css'

const NET_SERVER_URL = "https://rabiribi5thserver.herokuapp.com";

const Sticker = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: NET_SERVER_URL + "/messages",
    }).then(({ data }) => {
      setData(data);
    });
  }, []);

  return (
    <div className={styles.stickerWrapper}>
      <Bulletin data={data} count={data.length} />
    </div>
  );
};

export default Sticker;
