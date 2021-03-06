import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { IntlProvider } from "react-intl";
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import P1 from "./sections/P1";
import P2 from "./sections/P2";
import P3 from "./sections/P3";
import en from "./i18n/en";
import zh from "./i18n/zh";
import { Redirect } from "react-router-dom";
import Rules from "./sections/Rules";

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
      <Route exact path="/rabi5th">
        <IntlProvider locale={locale} key={locale} defaultLocale="zh" messages={messages}>
          <App defaultLocale="zh" changed={changeHandler} locale={locale} setLocale={setLocale} />
        </IntlProvider>
      </Route>

      <Route exact path="/event/rabi5th-contribution">
        <Redirect to="/rabi5th" />
      </Route>

      <Route exact path="/">
        <Redirect to="/rabi5th" />
      </Route>

      <Route exact path="/rabi5th/art-contest">
        <IntlProvider locale={locale} key={locale} defaultLocale="zh" messages={messages}>
          <P1 defaultLocale="zh" changed={changeHandler} locale={locale} setLocale={setLocale} />
        </IntlProvider>
      </Route>

      <Route exact path="/rabi5th/go-bunny-go">
        <IntlProvider locale={locale} key={locale} defaultLocale="zh" messages={messages}>
          <P2 defaultLocale="zh" changed={changeHandler} locale={locale} setLocale={setLocale} />
        </IntlProvider>
      </Route>

      <Route exact path="/rabi5th/happy5th-anniversary">
        <IntlProvider locale={locale} key={locale} defaultLocale="zh" messages={messages}>
          <P3 defaultLocale="zh" changed={changeHandler} locale={locale} setLocale={setLocale} />
        </IntlProvider>
      </Route>

      <Route exact path="/rabi5th/buynow">
        <IntlProvider locale={locale} key={locale} defaultLocale="zh" messages={messages}>
          <Rules defaultLocale="zh" changed={changeHandler} locale={locale} setLocale={setLocale} />
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
