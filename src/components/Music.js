import React from "react";
import styles from "./music.module.css";
import Pagebreak_1 from "./Pagebreak_1";
import Pagebreak_2 from "./Pagebreak_2";
import Title from "./Title";
import Player from "./Player";

import image1 from "../public/assets/images/pic_productintro_01.jpg";
import image2 from "../public/assets/images/pic_productintro_01.jpg";
import image3 from "../public/assets/images/pic_productintro_01.jpg";
import Carousel from "./Carousel";
import Button from "./Button";

const musics1 = ["Opening", "Main Menu", "Starting Forest", "Rabi Rabi Town", "Rabi Rabi Park", "Inside UPRPRC", "Exotic Laboratory"];
const musics2 = ["System Interior", "Sky-High Bridge", "Azure Snow Land", "Golden Riverbank", "Warp Destination", "Unfamiliar Place Again", "Speicher Galerie", "Get On With It", "Brawl Breaks", "Bounce Bounce", "Kitty Attack", "Sudden Death", "M.R.", "The Truth Never Spoken", "No Remorse", "RFN - III", "Mischievous Masquerade(DLC)", "FINALE(DLC)"];

const list1 = [
  { src: "https://picsum.photos/400/400?random=6", legend: "" },
  { src: "https://picsum.photos/400/400?random=2", legend: "" },
  { src: "https://picsum.photos/400/400?random=1", legend: "" },
  { src: "https://picsum.photos/400/400?random=4", legend: "" },
  { src: "https://picsum.photos/400/400?random=3", legend: "" },
];
const list2 = [
  { src: "https://picsum.photos/400/400?random=6", legend: "" },
  { src: "https://picsum.photos/400/400?random=2", legend: "" },
  { src: "https://picsum.photos/400/400?random=1", legend: "" },
  { src: "https://picsum.photos/400/400?random=4", legend: "" },
  { src: "https://picsum.photos/400/400?random=3", legend: "" },
];
const list3 = [
  { src: "https://picsum.photos/400/400?random=6", legend: "" },
  { src: "https://picsum.photos/400/400?random=2", legend: "" },
  { src: "https://picsum.photos/400/400?random=1", legend: "" },
  { src: "https://picsum.photos/400/400?random=4", legend: "" },
  { src: "https://picsum.photos/400/400?random=3", legend: "" },
];

export default function Music() {
  return (
    <div className={styles.musicWrapper}>
      <Title id="五週年商品介紹" />
      <div className={styles.music}>
        <h2 className="yellow">交響樂數位版CD</h2>
        <div className={styles.musicLower}>
          <div className={styles.musicLeft}>
            <div className={styles.carouselWrapper}>
              <Carousel list={list1} />
            </div>
            <div className={styles.mobile}>
              <h2>【收錄曲目】</h2>
            </div>
            <div className={styles.musicLowerTxt}>
              {musics1.map((el, index) => {
                return (
                  <div className={styles.song}>
                    <span>{"0" + (index + 1)}</span>
                    {el}
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.musicRight}>
            <div className={styles.musicLowerTxt}>
              {musics2.map((el, index) => {
                return (
                  <div className={styles.song}>
                    <span>{index < 2 ? "0" + (index + 8) : index + 8}</span>
                    {el}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Pagebreak_1 />
        <div id="try" className="buffer"></div>
        <Title id="交響樂試聽專區" />
        <Player />
      </div>

      <Button href="/rabi5th/buynow">
        <h2>馬上預購</h2>
      </Button>
    </div>
  );
}
