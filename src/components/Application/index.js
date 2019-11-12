import React from "react";
import Detail from "./../../containers/Detail";
import Log from "./../../containers/Log";

import "./Application.scss";

const Application = () => {
  return (
    <div id="application">
      <Detail />
      <Log />
    </div>
  );
};

/**
 * Export
 */
export default Application;
