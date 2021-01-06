import React from "react";
import Title from "./Title";
import styles from "./producers.module.css";
import Pagebreak_1 from "./Pagebreak_1";

const Producers = () => {
  return (
    <div className={styles.producersWrapper}>
        <div className="buffer" id="producer"></div>
      <Title id="製作人介紹" />
      <div className={styles.producers}>
        <div className={styles.producerCard}>
          <img src="" />
          <div className="">
            <p>遊戲製作人-王小明</p>
            <p>我們挑出票選前25首熱門的遊戲配樂，並委託台北愛樂管弦樂團擔綱演奏錄製，讓原本輕快活潑的電子音樂搖身一變成磅礡優美的交響樂！UPRPRC俱樂部的會員們，一起盡情大飽耳福吧！</p>
          </div>
        </div>

        <div className={styles.producerCard}>
          <div className="">
            <p>遊戲製作人-王小明</p>
            <p>我們挑出票選前25首熱門的遊戲配樂，並委託台北愛樂管弦樂團擔綱演奏錄製，讓原本輕快活潑的電子音樂搖身一變成磅礡優美的交響樂！UPRPRC俱樂部的會員們，一起盡情大飽耳福吧！</p>
          </div>
          <img src="" />
        </div>

        <div className={styles.producerCard}>
          <img src="" />
          <div className="">
            <p>遊戲製作人-王小明</p>
            <p>我們挑出票選前25首熱門的遊戲配樂，並委託台北愛樂管弦樂團擔綱演奏錄製，讓原本輕快活潑的電子音樂搖身一變成磅礡優美的交響樂！UPRPRC俱樂部的會員們，一起盡情大飽耳福吧！</p>
          </div>
        </div>

        <div className={styles.producerCard}>
          <div className="">
            <p>遊戲製作人-王小明</p>
            <p>我們挑出票選前25首熱門的遊戲配樂，並委託台北愛樂管弦樂團擔綱演奏錄製，讓原本輕快活潑的電子音樂搖身一變成磅礡優美的交響樂！UPRPRC俱樂部的會員們，一起盡情大飽耳福吧！</p>
          </div>
          <img src="" />
        </div>
      </div>

      <Pagebreak_1/>
    </div>
  );
};

export default Producers;
