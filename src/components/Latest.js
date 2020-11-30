import React from "react";

const mainStyle = {
  latestWrapper: {
    margin: "0",
    height: "50vh",
    backgroundColor: "#000",
    textAlign: "center",
  },
  latestHead: {
    color: "#fff",
    padding: "1em",
    margin: "0",
  },
  latestLists: {
    backgroundColor: "#fff",
    width: "60%",
    margin: "auto",
    borderRadius: "10px",
    textAlign: "left",
    padding: ".5em",
  },
  latestList: {
    borderBottom: "1px #000 solid",
    width: "90%",
    margin: "auto",
    listStyle: "none",
    padding: "1em",
  },
};

const news = [
  { date: "2020/11/11", content: "＃免費報名【瓩設計獎短片講座來囉】好故事只要一分鐘-短片創作分享" },
  { date: "2020/11/02", content: "＃免費報名【瓩設計獎短片講座來囉】好故事只要一分鐘-短片創作分享" },
];

export default function Latest() {
  return (
    <div style={mainStyle.latestWrapper}>
      <h1 style={mainStyle.latestHead}>最新消息</h1>
      <div>
        <ul style={mainStyle.latestLists}>
          {news.map((el, i) => {
            return (
              <li style={mainStyle.latestList}>
                {el.date}
                <br />
                {el.content}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
