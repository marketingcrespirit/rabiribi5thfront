import React from "react";
import styles from "./music.module.css";
import Title from "./Title";
import Player from "./Player";
import { FormattedMessage } from "react-intl";
import album from "../public/assets/images/pic_album.png";

const musics1 = ["Opening", "Main Menu", "Starting Forest", "Rabi Rabi Town", "Rabi Rabi Park", "Inside UPRPRC", "Exotic Laboratory", "System Interior", "Sky-High Bridge", "Azure Snow Land", "Golden Riverbank", "Warp Destination", "Unfamiliar Place Again"];
const musics2 = ["Speicher Galerie", "Get On With It", "Brawl Breaks", "Bounce Bounce", "Kitty Attack", "Sudden Death", "M.R.", "The Truth Never Spoken", "No Remorse", "RFN - III", "Mischievous Masquerade(DLC)", "FINALE(DLC)"];

export default function Music() {
  return (
    <div className={styles.musicWrapper}>
      <div className="widthController">
        <div id="live"></div>
        <div className={styles.headWrapper}>
          <Title id="app.p3-39" />
        </div>
        <div className={styles.playWrapper}>
          <div className={styles.imgWrapper}>
            <img alt="album cover" src={album} />
          </div>
          <div className={styles.playerWrapper}>
            <Player />
          </div>
        </div>
        <div className={styles.music}>
          <h2 className="yellow"><FormattedMessage id="app.p3-40"></FormattedMessage></h2>
          <div className={styles.musicLower}>
            <div className={styles.musicLeft}>
              <div className={styles.musicLowerTxt}>
                {musics1.map((el, index) => {
                  return (
                    <div key={index} className={styles.song}>
                      <span>{index < 9 ? "0" + (index + 1) : index + 1}.</span>
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
                    <div key={index} className={styles.song}>
                      <span>{index < 7 ? index + 14 : index + 14}.</span>
                      {el}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
