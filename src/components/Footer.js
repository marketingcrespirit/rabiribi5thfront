import React, { Component } from "react";
import Navbar from "../components/Navbar";
import styles from "./footer.module.css";
import { FormattedMessage } from "react-intl";

import facebook from "../public/assets/icons/facebook.svg";
import twitter from "../public/assets/icons/twitter.png";
import steam from "../public/assets/icons/steam.png";
import logo from "../public/assets/icons/logo_t.png";

const info = {
  address: "",
  email: "rabribi@crespirit.com",
};

class Footer extends Component {
  getMenuItemTitle = (menuItem, index, depthLevel) => {
    return menuItem.breadcrumbName;
  };
  getMenuItemHref = (menuItem, index, depthLevel) => {
    return menuItem.path;
  };

  getMenuItem = (menuItem, depthLevel, index) => {
    let breadcrumbName = this.getMenuItemTitle(menuItem, index, depthLevel);
    let path = this.getMenuItemHref(menuItem, index, depthLevel);

    if (menuItem.routes && menuItem.routes.length > 0) {
      return (
        <li key={index} onClick={this.clickHandler}>
          <span className="title">{breadcrumbName}</span>
          <Navbar config={menuItem.routes} routes={true} />
        </li>
      );
    } else {
      return (
        <li className="animate__animated" key={index}>
          <a href={path}>{breadcrumbName}</a>
        </li>
      );
    }
  };
  render() {
    let { config } = this.props;

    let options = [];

    if (this.props.routes && this.props.routes === true) return <ul className="sub">{options}</ul>;
    return (
      <footer className={styles.footer}>
        <div className={styles.footerInfo}>
          <img className={styles.footerLogo} src={logo} />
          <div className={`${styles.navSocial}`}>
            <div className={`${styles.navSocialIcon}`}>
              <a target="_blank" href="https://www.facebook.com/gaming/RabiRibiGame">
                <img src={facebook} />
              </a>
            </div>

            <div className={`${styles.navSocialIcon}`}>
              <a target="_blank" href="https://www.facebook.com/gaming/RabiRibiGame/">
                <img src={steam} />
              </a>
            </div>

            <div className={`${styles.navSocialIcon}`}>
              <a target="_blank" href="https://twitter.com/rabiribigame">
                <img src={twitter} />
              </a>
            </div>
          </div>
          <p>
            <FormattedMessage id="app.companyName" />
          </p>
          <p>
            <FormattedMessage id="app.address" />：<FormattedMessage id="app.addressContent" />
          </p>
          <p>
            <FormattedMessage id="app.tel" />：{info.email}
          </p>
        </div>
        <div className={`${styles.footerCopyright}`}>
          <p className={`${styles.footerCopy}`}>
            <span dangerouslySetInnerHTML={{ __html: " &copy; " }} />
            2015 - {new Date().getFullYear()} {this.props.companyName_eng} CreSpirit co., Ltd./GemaYue All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
