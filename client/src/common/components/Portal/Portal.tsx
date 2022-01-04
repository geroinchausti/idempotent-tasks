import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import "./Portal.scss";

const Portal: React.FunctionComponent = (props) => {
  const { children } = props;
  const modalRoot = document.getElementById("portal");
  const el = document.createElement("div");
  el.className = "overlay"

  useEffect(() => {
    modalRoot?.appendChild(el);
  }, []);

  useEffect(() => () => {
    modalRoot?.removeChild(el);
  });
  return createPortal(children, el);
};

export default Portal;