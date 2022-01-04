import React from "react";

import "./Button.scss";

interface IButton {
  onClick: () => void,
  type: 'raised' | 'strocked'
}

const Button: React.FunctionComponent<IButton> = (props) => {
  const {children , onClick, type} = props;
  return  <button className={`button ${type ? `button--${type}` : ""}`} onClick={onClick}>{ children }</button>
};

export default Button;
