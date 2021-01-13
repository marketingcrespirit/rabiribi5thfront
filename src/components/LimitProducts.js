import React from "react";
import Button from "./Button";
import styles from "./limitproducts.module.css";
import Pagebreak_1 from "./Pagebreak_1";
import ProductCard from "./ProductCard";
import Title from "./Title";
import Carousel from "./Carousel";

const list2 = [
  { src: "https://picsum.photos/400/400?random=6", legend: "" },
  { src: "https://picsum.photos/400/400?random=2", legend: "" },
  { src: "https://picsum.photos/400/400?random=1", legend: "" },
  { src: "https://picsum.photos/400/400?random=4", legend: "" },
  { src: "https://picsum.photos/400/400?random=3", legend: "" },
];

const products = [
  { name: "交響樂數位版CD", price: 1000 },
  { name: "交響樂Skin DLC", price: 1000 },
  { name: "交響樂實體版", price: 1000 },
];

const LimitProducts = () => {
  return (
    <div className={styles.limitProductsWrapper}>
      <div id="limit" className="buffer"></div>
      <Title id="五週年限定商品" />
      <div className={styles.limitProducts}>
        {/* {products.map((el, index) => {
        return <ProductCard key={index} name={el.name} price={el.price} />;
        })} */}
        <div className={styles.music}>
          <h2>五週年實體版</h2>
          <div className={styles.musicLower}>
            <div className={styles.musicLowerTxt}>
              <p>身為UPRPRC的俱樂部會員…怎麼可以錯過香香的兔子周邊呢？新的一年，帶上露咪親手做的兔子護身符，開啟人生的無敵模式吧！Rabi-Ribi五週年的精美禮盒，讓你一打開就受到滿滿的可愛彈幕攻擊！</p>
            </div>
            <div className={styles.carouselWrapper}>
              <Carousel list={list2} />
            </div>
          </div>
        </div>

        <div className={styles.music}>
          <h2>五週年實體版</h2>
          <div className={styles.musicLower}>
            <div className={styles.carouselWrapper}>
              <Carousel list={list2} />
            </div>
            <div className={styles.musicLowerTxt}>
              <p>剪裁俐落的演奏服與黑絲襪，可愛靈動，是五週年Erina的專屬衣裝！別忘了還有身穿白色小禮服的Ribbon，優雅腰身配上身後大大的蝴蝶結；Rabi沒有最可愛，只有更可愛！你以為只有這樣嗎？這次還新增了可可亞讓你操控唷！一起來探索地圖的更多可能性吧！Rabi五週年，給你復古的華麗新體驗～</p>
            </div>
          </div>
        </div>

        <div className={styles.music}>
          <h2>五週年實體版</h2>
          <div className={styles.musicLower}>
            <div className={styles.musicLowerTxt}>
              <p>剪裁俐落的演奏服與黑絲襪，可愛靈動，是五週年Erina的專屬衣裝！別忘了還有身穿白色小禮服的Ribbon，優雅腰身配上身後大大的蝴蝶結；Rabi沒有最可愛，只有更可愛！你以為只有這樣嗎？這次還新增了可可亞讓你操控唷！一起來探索地圖的更多可能性吧！Rabi五週年，給你復古的華麗新體驗～</p>
            </div>
            <div className={styles.carouselWrapper}>
              <Carousel list={list2} />
            </div>
          </div>
        </div>

        <div className={styles.music}>
          <h2>五週年實體版</h2>
          <div className={styles.musicLower}>
            <div className={styles.carouselWrapper}>
              <Carousel list={list2} />
            </div>
            <div className={styles.musicLowerTxt}>
              <p>剪裁俐落的演奏服與黑絲襪，可愛靈動，是五週年Erina的專屬衣裝！別忘了還有身穿白色小禮服的Ribbon，優雅腰身配上身後大大的蝴蝶結；Rabi沒有最可愛，只有更可愛！你以為只有這樣嗎？這次還新增了可可亞讓你操控唷！一起來探索地圖的更多可能性吧！Rabi五週年，給你復古的華麗新體驗～</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.buttonWrapper}>
        <Button href="/rabi5th/buynow">
          <h2>馬上預購</h2>
        </Button>
      </div>

      <Pagebreak_1 />
    </div>
  );
};

export default LimitProducts;
