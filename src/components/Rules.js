import React from "react";

const mainStyle = {
  rulesWrapper: {
    width: "100%",
    height: "100vh",
  },
  container: {
    width: "100%",
    maxWidth: "1200px",
    margin: "auto",
    height: "100%",
  },
  bannerTxt: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    listStyle: "square"

  },
  bannerTxtH1: {
    fontSize: "80px",
    borderBottom: "1px solid #333",
  },
};

const Rules = () => {
  return (
    <div className="rules-bg" style={mainStyle.rulesWrapper}>
      <div style={mainStyle.container}>
        <div style={mainStyle.bannerTxt}>
          <h1 style={mainStyle.bannerTxtH1}>預購須知</h1>
          <h2>食用前請詳讀使用說明</h2>
          <ul>
            <li>預購須知預購須知預購須知預購須知預購須知預購須知</li>
            <li>預購須知預購須知預購須知預購須知</li>
            <li>預購須知預購須預購須知</li>
            <li>預購須知預購須知預購須知預購須知預購須知預購須知預購須知預購須知</li>
            <li>預購須知預購須知預購須知預購須知預購須知</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rules;
