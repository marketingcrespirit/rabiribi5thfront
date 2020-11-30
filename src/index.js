import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { IntlProvider } from "react-intl";
import { useState } from "react";
import en from "./i18n/en";
import zh from "./i18n/zh";
import ja from "./i18n/ja";

const Root = () => {
  const [locale, setLocale] = useState(navigator.language);
  const changeHandler = (e) => {
    setLocale(e.target.value);
  };
  let messages;
  // 根據使用者選擇的語系 locale 切換使用不同的 messages
  if (locale.includes("en")) {
    messages = en;
  } else if (locale.includes("ja")) {
    messages = ja;
  } else {
    messages = zh;
  }

  return (
    <IntlProvider locale={locale} key={locale} defaultLocale="zh" messages={messages}>
      <App defaultLocale="zh" changed={changeHandler} locale={locale} setLocale={setLocale} />
    </IntlProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
