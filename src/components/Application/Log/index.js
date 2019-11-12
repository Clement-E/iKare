import React from "react";
import Notification from "./../../../containers/Notification";
import "./Log.scss";

const Log = ({ hasNotification }) => (
  <div id="log" className="scroll">
    {hasNotification && <Notification />}
  </div>
);

/**
 * Export
 */
export default Log;
