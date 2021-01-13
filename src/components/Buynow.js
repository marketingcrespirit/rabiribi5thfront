import React from "react";
import Button from "./Button";
import styles from "./buynow.module.css";
import Pagebreak_2 from "./Pagebreak_2";
import ProductCard from "./ProductCard";
import Title from "./Title";
import step1 from "../public/assets/images/pic_orderstep_01.png";
import step2 from "../public/assets/images/pic_orderstep_02.png";
import step3 from "../public/assets/images/pic_orderstep_03.png";
import step4 from "../public/assets/images/pic_orderstep_04.png";
import arrow from "../public/assets/images/arrow.png";

const products = [
  { name: "交響樂數位版CD", price: 1000 },
  { name: "交響樂Skin DLC", price: 1000 },
  { name: "交響樂實體版", price: 1000 },
];

const rules = ["本網站採會員制，如有購物需求，需先辦理會員。", "虛擬商品在確認下單付款後，本公司不提供退款服務。", "實體商品未拆封可退貨，拆封後發現瑕疵不良品可換貨。", "在您完成線上付款程序後，我們會寄給您一封通知信，告知您本公司已收到您的訂購訊息，表示訂單已成立。", "若因任何意外或狀況，導致無法接受您的訂單時，我們會使用信箱與您聯繫，並保留您更改訂單與退款之權利。", "包裹寄出後，若因收件人資料填寫有誤、收件人無法收貨、無人可代簽，導致包裹被退回，訂單將取消並退款。如仍欲購買請重新下訂。", "若連續累積2次未取貨紀錄，會員購買資格將被取消，註冊信箱亦被列入黑名單。如想重新開啟會員購買資格，請透過”聯絡我們(超連結)”與我們聯繫。", "電子發票不主動寄送（統編發票除外），如中獎系統會以電子信箱通知。(要再測試)", "預計發貨日期如下，若因故延遲，會再以信件進行通知與說明。", "虛擬序號配送：1月底。 實體商品配送：2月初。"];

const steps = [
  { src: step1, content: "請先註冊/登入會員" },
  { src: step2, content: "將欲購買商品加入購物車" },
  { src: step3, content: "確定收件資訊無誤" },
  { src: step4, content: "訂單成立" },
];

const Step = (props) => {
  return (
    <div className={styles.lightWrapper}>
      <img className={styles.step} alt="lamp" src={props.src} />
      <div className={styles.txtTimelineWrapper}>
        <h1>{props.index}</h1>
        <p>
          {/* <FormattedMessage id={props.el.content} /> */}
          {props.content}
        </p>
      </div>
      <img className={styles.arrow} alt="arrow" src={arrow} />
    </div>
  );
};

const Buynow = () => {
  return (
    <div className={styles.limitProductsWrapper}>
      <Title id="五週年限定商品" />
      <div className={styles.limitProducts}>
        {products.map((el, index) => {
          return <ProductCard key={index} name={el.name} price={el.price} />;
        })}
      </div>

      <Pagebreak_2 />
    </div>
  );
};

export default Buynow;
