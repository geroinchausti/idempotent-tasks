import React, { ChangeEventHandler } from "react";

import "./Input.scss";

interface IInput {
  onChange: ChangeEventHandler<HTMLInputElement>;
  type: "text" | "number";
  value: number | string;
}

const Input: React.FunctionComponent<IInput> = (props) => {
  const { value, type, onChange } = props;
  return <input className="input" value={value} type={type} onChange={onChange} />;
};

export default Input;
