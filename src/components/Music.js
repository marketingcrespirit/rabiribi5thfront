import React from "react";
import styles from "./music.module.css";
import Pagebreak_2 from "./Pagebreak_2";
import Title from "./Title";
import Player from './Player'

import image1 from "../public/assets/images/pic_productintro_01.jpg";
import image2 from "../public/assets/images/pic_productintro_01.jpg";
import image3 from "../public/assets/images/pic_productintro_01.jpg";
import Carousel from "./Carousel";

const musics = ["Opening", "Main Menu", "Starting Forest", "Rabi Rabi Town", "Rabi Rabi Park", "Inside UPRPRC", "Exotic Laboratory", "System Interior", "Sky-High Bridge", "Azure Snow Land", "Golden Riverbank", "Warp Destination","Unfamiliar Place Again","Speicher Galerie","Get On With It", "Brawl Breaks","Bounce Bounce","Kitty Attack","Sudden Death","M.R.","The Truth Never Spoken","No Remorse","RFN - III","Mischievous Masquerade(DLC)","FINALE(DLC)",];
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
        <h2>交響樂數位版CD</h2>
        <div className={styles.musicLower}>
          <div className={styles.carouselWrapper}>
            <Carousel list={list1} />
          </div>
          <div className={styles.musicLowerTxt}>
            {musics.map((el, index) => {
              return (
                <div>
                  {index + 1}. {el} 
                </div>
              );
            })}
          </div>
        </div>
        <h2>交響樂試聽</h2>
        <Player/>
      </div>

      <Pagebreak_2 />

      <div className={styles.music}>
        <h2>交響樂Skin DLC</h2>
        <div className={styles.musicLower}>
          <div className={styles.carouselWrapper}>
            <Carousel list={list2} />
          </div>
          <div className={styles.musicLowerTxt}>
            <p>剪裁俐落的演奏服與黑絲襪，可愛靈動，是五週年Erina的專屬衣裝！別忘了還有身穿白色小禮服的Ribbon，優雅腰身配上身後大大的蝴蝶結；Rabi沒有最可愛，只有更可愛！你以為只有這樣嗎？這次還新增了可可亞讓你操控唷！一起來探索地圖的更多可能性吧！Rabi五週年，給你復古的華麗新體驗～</p>
          </div>
        </div>

        
        
      </div>

      <Pagebreak_2 />

      <div className={styles.music}>
        <h2>交響樂Skin DLC</h2>
        <div className={styles.musicLower}>
          <div className={styles.carouselWrapper}>
            <Carousel list={list3} />
          </div>
          <div className={styles.musicLowerTxt}>
            <p>身為UPRPRC的俱樂部會員…怎麼可以錯過香香的兔子周邊呢？Rabi-Ribi五週年實體禮包，一打開就會受到滿滿的可愛彈幕攻擊！</p>
          </div>
        </div>
      </div>
    </div>
  );
}
