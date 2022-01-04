import React from "react";
import Portal from "../../common/components/Portal";

import "./Modal.scss";

const Modal: React.FunctionComponent<{}> = (props) => {
  const { children } = props;
  return (
    <Portal>
      <div className="modal">{children}</div>
    </Portal>
  );
};

export default Modal;
