import React from "react";
import { FormattedMessage } from "react-intl";

const Navbar = (props) => {
  return (
    <li>
      <a onClick={props.clicked}  className={props.activated ? "nav-link active" : "nav-link"} href={props.tag}>
        <FormattedMessage id={props.id} />
      </a>
    </li>
  );
};

export default Navbar;
