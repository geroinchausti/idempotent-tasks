import React from "react";

import "./Loader.scss";

const Loader: React.FunctionComponent<{}> = () => {
  return <div className="loader"><div className="loader__lds-circle"><div></div></div></div>;
};

export default Loader;
