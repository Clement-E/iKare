import React from "react";
import Sidebar from "../../containers/Sidebar";
import Application from "../../containers/Application";

import "./FullApplication.scss";

class FullApplication extends React.Component {
  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  render() {
    const { users } = this.props;

    return (
      <div id="fullApplication">
        <Sidebar users={users} />
        <Application />
      </div>
    );
  }
}

/**
 * Export
 */
export default FullApplication;
