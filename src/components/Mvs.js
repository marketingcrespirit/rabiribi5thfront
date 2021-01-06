import React from "react";
import styles from "./mvs.module.css";
import Pagebreak_1 from "./Pagebreak_1";
import Pagebreak_2 from "./Pagebreak_2";
import Title from "./Title";
import ReactPlayer from "react-player";
import Carousel from "../components/Carousel";

const list = [
  { src: "https://picsum.photos/800/600?random=6", legend: "" },
  { src: "https://picsum.photos/800/600?random=2", legend: "" },
  { src: "https://picsum.photos/800/600?random=1", legend: "" },
  { src: "https://picsum.photos/800/600?random=4", legend: "" },
  { src: "https://picsum.photos/800/600?random=3", legend: "" },
];

export default function Mvs() {
  return (
    <div className={styles.mvsWrapper}>
      <div className="buffer" id="music"></div>
      <Title id="五週年交響樂介紹" />
      <div className={styles.mv}>
        <ReactPlayer url="" width="100%" height="500px" light="" />
      </div>

      <Pagebreak_2 />

      <div className={styles.mv}>
        <ReactPlayer url="" width="100%" height="500px" light="" />
      </div>

      <Pagebreak_2 />

      <div className={styles.textWrapper}>
        <p>我們挑出票選前25首熱門的遊戲配樂，並委託台北愛樂管弦樂團擔綱演奏錄製，讓原本輕快活潑的電子音樂搖身一變成磅礡優美的交響樂！UPRPRC俱樂部的會員們，一起盡情大飽耳福吧！</p>
      </div>

      <div className={styles.carouselWrapper}>
        <Carousel list={list} />
      </div>

      <Pagebreak_1 />
    </div>
  );
}
