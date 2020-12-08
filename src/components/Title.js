import React from "react";
import { FormattedMessage } from "react-intl";
import title_left from "../public/assets/images/title_l.png";
import title_right from "../public/assets/images/title_r.png";

const Title = (props) => {
  return (
    <h1 className="bigHeader">
      <img src={title_left} />
      <FormattedMessage id={props.id} />
      <img src={title_right} />
    </h1>
  );
};

export default Title;
