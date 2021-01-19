import React, { useState } from "react";
import styles from "./p4.module.css";

const P4 = () => {
  const [activate, setActivate] = useState(0);
  const clickHandler = (index) => {
    console.log(index);
  };
  const pics = [
    { src: "https://picsum.photos/600/400?random=6", legend: "fskdahflksda" },
    { src: "https://picsum.photos/600/400?random=2", legend: "fsaldjflsd" },
    { src: "https://picsum.photos/600/400?random=1", legend: "lsakdfj;skdfl;asjdf" },
    { src: "https://picsum.photos/600/400?random=4", legend: "fsajdf;sdf" },
    { src: "https://picsum.photos/600/400?random=3", legend: "asdfsdf" },
    { src: "https://picsum.photos/600/400?random=6", legend: "asdfasdfsadfsdf" },
    { src: "https://picsum.photos/600/400?random=7", legend: "asdfsadf" },
    { src: "https://picsum.photos/600/400?random=8", legend: "asdfsdfasfsdfsfsdfasfsdsdfsf" },
  ];
  return (
    <div>
      <div className={styles.big}>
        <img src={pics[activate].src} />
        <p>{pics[activate].legend}</p>
      </div>
      <div className={styles.scrollWrapper}>
        <ul>
          {pics.map((el, index) => {
            return (
              <li
                onClick={() => {
                  setActivate(index);
                  console.log(index);
                }}
                key={index}
              >
                <img src={el.src} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default P4;
