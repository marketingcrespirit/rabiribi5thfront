import React, { Component } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import styles from "./rules.module.css";
import Navbars from "../sections/Navbars";
import step1 from "../public/assets/images/pic_orderstep_01.png";
import step2 from "../public/assets/images/pic_orderstep_02.png";
import step3 from "../public/assets/images/pic_orderstep_03.png";
import step4 from "../public/assets/images/pic_orderstep_04.png";
import arrow from "../public/assets/images/arrow.png";
import Pagebreak_1 from "../components/Pagebreak_1";
import Pagebreak_2 from "../components/Pagebreak_2";

const rules = ["本網站採會員制，如有購物需求，需先辦理會員。", "虛擬商品在確認下單付款後，本公司不提供退款服務。", "實體商品未拆封可退貨，拆封後發現瑕疵不良品可換貨。", "在您完成線上付款程序後，我們會寄給您一封通知信，告知您本公司已收到您的訂購訊息，表示訂單已成立。", "若因任何意外或狀況，導致無法接受您的訂單時，我們會使用信箱與您聯繫，並保留您更改訂單與退款之權利。", "包裹寄出後，若因收件人資料填寫有誤、收件人無法收貨、無人可代簽，導致包裹被退回，訂單將取消並退款。如仍欲購買請重新下訂。", "若連續累積2次未取貨紀錄，會員購買資格將被取消，註冊信箱亦被列入黑名單。如想重新開啟會員購買資格，請透過”聯絡我們(超連結)”與我們聯繫。", "電子發票不主動寄送（統編發票除外），如中獎系統會以電子信箱通知。(要再測試)", "預計發貨日期如下，若因故延遲，會再以信件進行通知與說明。", "虛擬序號配送：1月底。 實體商品配送：2月初。"];

const navs = [{ tag: "/rabi5th/clickmeifyoucan", id: "app.p3-nav6" }];

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

class Rules extends Component {
  constructor(props) {
    super(props);
    this.productsRef = React.createRef();
    this.musicRef = React.createRef();
    this.producerRef = React.createRef();
    this.rulesRef = React.createRef();
  }
  state = {
    windowX: 0,
    productsTop: 0,
    musicTop: 0,
    producerTop: 0,
    rulesTop: 0,
    activatedIndex: "",
    amount: 0,
    locale: "zh",
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }
  amountChange = (amount) => {
    this.setState({ amount: amount });
  };

  listenToScroll = () => {
    const winScroll = document.documentElement.scrollTop + window.innerHeight;

    if (winScroll >= this.state.rulesTop && this.state.productsTop !== 0) {
      this.setState({
        activatedIndex: 3,
      });
    } else if (winScroll >= this.state.producerTop && this.state.productsTop !== 0) {
      this.setState({
        activatedIndex: 2,
      });
    } else if (winScroll >= this.state.musicTop && this.state.productsTop !== 0) {
      this.setState({
        activatedIndex: 1,
      });
    } else if (winScroll >= this.state.productsTop - 200 && this.state.productsTop !== 0) {
      this.setState({
        activatedIndex: 0,
      });
    } else if (winScroll > 969) {
      this.setState({
        activatedIndex: "",
      });
    }
  };
  handleChange = (e) => {
    this.setState({ locale: e.target.value });
    this.props.locale = e.target.value;
  };

  render() {
    if (this.productsRef.current !== null && this.state.productsTop === 0) {
      this.setState({ productsTop: this.productsRef.current.getBoundingClientRect().top + document.documentElement.scrollTop });
    }

    if (this.musicRef.current !== null && this.state.productsTop === 0) {
      this.setState({ musicTop: this.musicRef.current.getBoundingClientRect().top + document.documentElement.scrollTop });
    }

    if (this.producerRef.current !== null && this.state.productsTop === 0) {
      this.setState({ producerTop: this.producerRef.current.getBoundingClientRect().top + document.documentElement.scrollTop });
    }

    if (this.rulesRef.current !== null && this.state.productsTop === 0) {
      this.setState({ rulesTop: this.rulesRef.current.getBoundingClientRect().top + document.documentElement.scrollTop });
    }
    return (
      <div className="App">
        <header className="App-header">
          <Navbars
            locale={this.props.locale}
            changed={(e) => {
              this.props.changed(e);
            }}
            activatedIndex={this.state.activatedIndex}
            navs={navs}
          />
        </header>
        <main className={styles.ruleWrapper}>
          <div className={styles.innerWrapper}>
            <div className={styles.titleWrapper}>
              <Title id="訂購流程" />
            </div>

            <div className={styles.stepsWrapper}>
              {steps.map((el, index) => {
                return <Step src={el.src} content={el.content} index={index + 1} key={index} />;
              })}
            </div>

            <Pagebreak_2 />

            <div className={styles.buttonWrapper}>
              <Button href="https://www.crespirit.com">
                <h2>前往官網</h2>
              </Button>
            </div>

            <Pagebreak_1 />

            <div className={styles.titleWrapper}>
              <Title id="預購規章" />
            </div>
            <p>親愛的酷思特會員您好</p>
            <p>以下為預購活動之相關規定，等同買賣合約，如不同意下述任何規章及條例，請勿下單購買。</p>
            <h2 className={styles.yellow}>預購注意事項</h2>
            <ol className={styles.ul}>
              {rules.map((el, index) => {
                return <li key={index}>{el}</li>;
              })}
            </ol>

            <h2 className={styles.yellow}>收貨注意事項</h2>
            <p>收到取貨通知時，請盡速取貨。若經檢查有實體商品、序號或CD出現瑕疵無法正常使用，或是數量、品項有誤之情形，請於30日內（以「出貨通知」的日期為首日）透過”聯絡我們(超連結)”與我們聯繫，辦理退換貨事宜。</p>

            <h2 className={styles.yellow}>訂購流程</h2>
            <p>請先註冊/登入會員→將欲購買商品加入購物車→點選訂單結帳→確認訂單商品無誤→填寫收件資訊→確定收件資訊無誤→完成付款→訂單成立。</p>
            <br />
            <p>※訂單成立後，隨時可使用「訂單紀錄」系統查看商品的編號與配送狀況。</p>
            <p>※商品寄出時，會寄送「出貨通知」，以此通知日期為基準點，往後算30日為商品鑑賞期。</p>
            <p>※虛擬商品一經購買，就不可取消訂單與退款。</p>
            <p>※實體商品開封後不予退貨，但內容物如有瑕疵或非人為損壞可換貨。</p>

            <h2 className={styles.yellow}>付款方式</h2>
            <p>1. 線上刷卡。</p>
            <p>金流平台採用：【綠界科技ECPAY】。</p>
            <p>凡台灣地區各家銀行的VISA、MASTER、JCB信用卡皆可使用，也接受海外信用卡，但請自行確認卡片狀態。</p>
            <p>點選付款之後，網頁會轉往綠界信用卡授權頁面，交易過程全程安全加密，信用卡資料不會儲存於網站，請安心使用。</p>
            <br />
            <p>2. 支付寶</p>
            <p>訂單確認付款後，請至「會員購買資訊」內確認。如有疑問請盡快與我們聯繫。</p>
            <p>※線上付款的過程中：</p>
            <p>1. 若因驗證失敗/中途取消/超過時間/誤觸返回上一頁，該筆訂單將不會成立，請關閉網頁，並重複操作一次購買流程。</p>
            <p>2. 刷卡過程中，請勿中斷網路/重新整理頁面/重複點擊/回至上一頁，以免訂單重複扣款。</p>

            <h2 className={styles.yellow}>商品配送相關</h2>
            <p>【實體商品】</p>
            <p>1. 台灣與離島</p>
            <p>如購買實體商品，商品出貨時，會透過註冊信箱通知。 出貨後約2-3個工作天宅配到府。請確保府上有人可收貨。</p>
            <br />
            <p>2. 海外</p>
            <p>因全球各地點之配送所需工作日皆不同，再加上疫情狀況，難以預估配送天數。配送狀況可透過中華郵政官方網站上查詢；若商品遇有突發狀況，會另行通知。</p>
            <p>※出貨順序以付款順序為主。</p>
            <p>※若遇不可抗力等天災或連續假期等因素，物流可能延遲出貨，還請多多包涵並耐心等候，我們會盡快完成配送。</p>
            <br />
            <p>【虛擬序號】</p>
            <p>此次預購訂單成立後，預計於1月底發送序號。</p>
            <p>序號會直接顯示在「會員購買資訊」處，如有任何疑問，歡迎透過”聯絡我們(超連結)”告知我們。</p>
            <p></p>

            <h2 className={styles.yellow}>實體商品配送方式/海外配送規章</h2>
            <p>【台灣與離島配送】</p>
            <ul className={styles.ul}>
              <li>配送方式：僅提供宅配。</li>
              <li>使用：黑貓宅急便。</li>
            </ul>
            <p>【海外配送】</p>
            <ul className={styles.ul}>
              <li>配送方式：僅提供宅配。</li>
              <li>使用：中華郵政一般郵寄航空。</li>
            </ul>

            <p>實體商品配送運費</p>
            <ul className={styles.ul}>
              <li>台灣全島：運費***元。</li>
              <li>離島配送（澎湖、金門、馬祖、綠島）：運費***元。</li>
              <li>海外配送： 以「包裹重量」以及「材積尺寸」為計算標準。</li>
            </ul>

            <h2 className={styles.yellow}>退換貨相關規範</h2>
            <p>【實體商品】</p>
            <ol className={styles.ul}>
              <li>提供30日鑑賞期（以「出貨通知」的日期為首日）。</li>
              <li>實體商品未拆封可退貨；拆封後發現瑕疵不良品，僅可換貨不可退貨。</li>
              <li>退款時，刷卡產生的銀行手續費將不退回。</li>
              <li>退貨運費，由買方負擔。</li>
              <li>換貨運費，由買方與本公司各負擔一半。</li>
              <li>購買商品發票如有公司統編，不予退貨。</li>
            </ol>
            <p>【虛擬序號】</p>
            <p>無提供退換貨之服務。</p>

            <h2 className={styles.yellow}>退換貨相關辦法</h2>
            <p>
              請於收到實體商品的30日內（以「出貨通知」的日期為首日），透過
              <a className={styles.link} href="/">
                聯絡我們
              </a>
              與我們聯繫，並附上以下資訊：訂單編號、姓名、聯絡電話、商品品名、能夠陳述問題的照片。
            </p>
            <br />
            <p>待我們收到申請後，將確認以上資訊，並透過電子郵件發送「退換貨確認信函」給您，請隨時注意電子信箱以及垃圾郵件。</p>
            <br />
            <p>收到通知後，必須將商品復原至收貨時的狀態，任何包裝與說明書、贈品等，皆須完整寄回，公司確認完畢後，會進行退款或重新發送新商品的動作。</p>
            <br />
            <p>※本公司六日不進行郵件處理業務，若商品鑑賞期剛好在六日到期，以買方寄信的時間為準，不以公司處理郵件的時間為準，請您放心。</p>
            <h2 className={styles.yellow}>售後服務</h2>
            <p>
              如對商品有任何疑問，歡迎透過
              <a className={styles.link} href="/">
                聯絡我們
              </a>
              與我們聯繫，將有專業人員為您解決問題。
            </p>
          </div>
        </main>
      </div>
    );
  }
}

export default Rules;
