import React from "react";
import TimeAgo from "timeago-react";

import avatar1 from "./../../../../img/dota-1.png";
import avatar2 from "./../../../../img/dota-2.png";
import avatar3 from "./../../../../img/dota-3.png";
import avatar4 from "./../../../../img/dota-4.png";
import avatar5 from "./../../../../img/dota-5.png";
import avatar6 from "./../../../../img/dota-6.png";
import avatar7 from "./../../../../img/dota-7.png";
import avatar8 from "./../../../../img/dota-8.png";

import "./Notification.scss";

const Notification = ({ log }) => {
  const avatars = {
    "Leanne Graham": avatar1,
    "Ervin Howell": avatar2,
    "Clementine Bauch": avatar3,
    "Patricia Lebsack": avatar4,
    "Mrs. Dennis Schulist": avatar5,
    "Kurtis Weissnat": avatar6,
    "Nicholas Runolfsdottir V": avatar7,
    "Glenna Reichert": avatar8,
    Roger: avatar1
  };
  console.log(log);
  return (
    <div>
      {log.map(el => (
        <div key={el.timestamp} id="notification" className="visible">
          <div className="notification-left">
            <img src={avatars[el.admin]} alt="" />
          </div>
          <div className="notification-mid">
            <p>{el.action}</p>
            <span>{el.admin}</span>
          </div>
          <div className="notification-right">
            <span>{el.timestamp}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

/**
 * Export
 */
export default Notification;
