import React from "react";
import "./Sidebar.scss";
import Admins from "./../../containers/Admins";

// icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faPlus);

const Sidebar = ({ users, selectUser, addUser }) => {
  const handleSelectUser = e => {
    selectUser(e.target.id);
  };
  const handleAddUser = e => {
    addUser();
  };

  return (
    <div id="sidebar">
      <div className="sidebar-header">
        <Admins />
        {/* <p className="name">{user.company.bs}</p> */}
      </div>
      <div className="sidebar-body">
        <ul>
          {users.map(user => (
            <li key={user.name} id={user.id} onClick={handleSelectUser}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar-footer">
        <FontAwesomeIcon
          icon="plus"
          size="2x"
          className="icon"
          onClick={handleAddUser}
        />
      </div>
    </div>
  );
};

/**
 * Export
 */
export default Sidebar;
