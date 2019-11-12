import React from "react";
import "./Admins.scss";
/* import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faPlus); */

import avatar1 from "../../../img/dota-5.png";
import avatar2 from "../../../img/dota-6.png";
import avatar3 from "../../../img/dota-7.png";
import avatar4 from "../../../img/dota-8.png";

const Admins = ({ admins, selectAdmin, selectedAdmin, infoLogNewAdmin }) => {
  const avatars = [avatar1, avatar2, avatar3, avatar4];

  const handleSelectAdmin = e => {
    // console.log(e.target.id);
    const info = e.target;
    /* const date = new Date();
    const formatedDate = date.getYear()+"-"+date.getMonth()+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(); */
    //console.log(date)
    //console.log(formatedDate);
    const formatedDate = new Date().toLocaleDateString("fr", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    });

    // ajoute les datas de l'admin en cours au state
    selectAdmin(info.id);
    // ajoute les datas de l'action au state
    infoLogNewAdmin(
      info.attributes.name.nodeValue,
      info.attributes.email.value,
      formatedDate,
      "nouvel admin loggé"
    );
  };

  return (
    <div id="admins">
      <img src={avatars[selectedAdmin.id - 6]} alt="alt" />
      <div className="formfield-select">
        <div className="formfield-select--container">
          <select id="mon_select">
            {admins.map(user => (
              <option
                key={user.name}
                id={user.id}
                onClick={handleSelectAdmin}
                email={user.email}
                name={user.name}
              >
                {user.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

/**
 * Export
 */
export default Admins;
