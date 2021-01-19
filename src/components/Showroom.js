import React from "react";

const list = [
  { src: "https://picsum.photos/800/600?random=6", legend: "" },
  { src: "https://picsum.photos/800/600?random=2", legend: "" },
  { src: "https://picsum.photos/800/600?random=1", legend: "" },
  { src: "https://picsum.photos/800/600?random=4", legend: "" },
  { src: "https://picsum.photos/800/600?random=3", legend: "" },
];

const Showroom = () => {
  return (
    <div>
      <div></div>

      <div className={styles.scrollWrapper}>
        <ul>
          <li>
            <img src="https://picsum.photos/800/600?random=6" />
          </li>
          <li>
            <img src="https://picsum.photos/800/600?random=5" />
          </li>
          <li>
            <img src="https://picsum.photos/800/600?random=4" />
          </li>
          <li>
            <img src="https://picsum.photos/800/600?random=3" />
          </li>
          <li>
            <img src="https://picsum.photos/800/600?random=2" />
          </li>
          <li>
            <img src="https://picsum.photos/800/600?random=1" />
          </li>
          <li>
            <img src="https://picsum.photos/800/600?random=0" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Showroom;
