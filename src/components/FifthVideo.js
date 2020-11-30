import React from "react";

const mainStyle = {
  videoWrapper: {
    margin: "0",
    height: "100vh",
    
  },
  fixedWidth: {
    maxWidth: "1200px",
    margin: "auto",
    padding: "2em",
    textAlign: "center"
  },
};

const Video = () => {
  return (
    <div style={mainStyle.videoWrapper}>
      <div style={mainStyle.fixedWidth}>
        <div style={mainStyle.txtWrapper}>
          <h1>五週年紀念影片</h1>
          <p>一些小屁話一些小屁話一些小屁話一些小屁話一些小屁話</p>
        </div>
        <div style={mainStyle.video}>
          <img src="https://picsum.photos/1000/600" />
        </div>
      </div>
    </div>
  );
};

export default Video;
