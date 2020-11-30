import React from "react";

const mainStyle = {
  awardWrapper: {
    margin: "0",
    height: "100vh",
  },
  fixedWidth: {
    maxWidth: "1200px",
    margin: "auto",
    padding: "2em",
  },
  imgWrapper: {
    display: "flex",
    width: "90%",
    flexWrap: "wrap",
    margin: "auto",
    justifyContent: "center",
    padding: "2em 0"
  },
  img: {
    padding: "1em",
  },
  txtWrapper: {
      textAlign: "center"
  },
};

const Award = () => {
  return (
    <div style={mainStyle.awardWrapper}>
      <div style={mainStyle.fixedWidth}>
        <div style={mainStyle.txtWrapper}>
          <h1>我們的獎項</h1>
          <p>不斷便是，臺灣民眾客服最後解壓密碼承認完美辦公聲音應當女孩子男性，下面鮮花這位讓她光臨極大技術升級，投入地址機會故事樣子一聲你看多媒體公共，上漲政府排行榜分鐘臉上日前。</p>
        </div>
        <div style={mainStyle.imgWrapper}>
          <img style={mainStyle.img} src="https://picsum.photos/300/200?random=5" />
          <img style={mainStyle.img} src="https://picsum.photos/300/200?random=6" />
          <img style={mainStyle.img} src="https://picsum.photos/300/200?random=7" />
          <img style={mainStyle.img} src="https://picsum.photos/300/200?random=8" />
          <img style={mainStyle.img} src="https://picsum.photos/300/200?random=9" />
          <img style={mainStyle.img} src="https://picsum.photos/300/200?random=0" />
        </div>
        <div style={mainStyle.txtWrapper}>
          <p>不斷便是，像素會議創業容易告訴也會躺在，別人浪漫以後早已是在相應人類一段兒子教授相信接到有限公司，臺灣民眾客服最後解壓密碼承認完美辦公聲音應當女孩子男性，下面鮮花這位讓她光臨極大技術升級，投入地址機會故事樣子一聲你看多媒體公共，上漲政府排行榜分鐘臉上日前。</p>
        </div>
      </div>
    </div>
  );
};

export default Award;
