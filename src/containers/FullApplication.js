import { connect } from "react-redux";
/**
 * Local import
 */
import FullApplication from "./../components/FullApplication";

// Action Creators

import { getUsers } from "./../store/reducer";

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => {
    dispatch(getUsers());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FullApplication);
