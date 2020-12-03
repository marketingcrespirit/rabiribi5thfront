import React, { useEffect, useState } from "react";
import Bulletin from "./Bulletin";
import axios from "axios";

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
    <div>
      <Bulletin data={data} count={data.length} />
    </div>
  );
};

export default Sticker;
