import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { IntlProvider } from "react-intl";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import P1 from './sections/P1'
import P2 from './sections/P2'
import P3 from './sections/P3'
import en from "./i18n/en";
import zh from "./i18n/zh";
// import ja from "./i18n/ja";

const Root = () => {
  const [locale, setLocale] = useState(navigator.language);
  const changeHandler = (e) => {
    setLocale(e.target.value);
  };
  let messages;
  // 根據使用者選擇的語系 locale 切換使用不同的 messages
  if (locale.includes("en")) {
    messages = en;
  } else if (locale.includes("zh")) {
    messages = zh;
  } else {
    messages = en;
  }

  return (
    <Router>
      <Route path="/event/rabi5th-contribution">
        <IntlProvider locale={locale} key={locale} defaultLocale="zh" messages={messages}>
          <App defaultLocale="zh" changed={changeHandler} locale={locale} setLocale={setLocale} />
        </IntlProvider>
      </Route>

      <Route exact path="/">
        <IntlProvider locale={locale} key={locale} defaultLocale="zh" messages={messages}>
          <App defaultLocale="zh" changed={changeHandler} locale={locale} setLocale={setLocale} />
        </IntlProvider>
      </Route>

      <Route exact path="/art-contest">
        <IntlProvider locale={locale} key={locale} defaultLocale="zh" messages={messages}>
          <P1 defaultLocale="zh" changed={changeHandler} locale={locale} setLocale={setLocale} />
        </IntlProvider>
      </Route>

      <Route exact path="/go-bunny-go">
        <IntlProvider locale={locale} key={locale} defaultLocale="zh" messages={messages}>
          <P2 defaultLocale="zh" changed={changeHandler} locale={locale} setLocale={setLocale} />
        </IntlProvider>
      </Route>

      <Route exact path="/p3">
        <IntlProvider locale={locale} key={locale} defaultLocale="zh" messages={messages}>
          <P3 defaultLocale="zh" changed={changeHandler} locale={locale} setLocale={setLocale} />
        </IntlProvider>
      </Route>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
