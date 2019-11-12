import { connect } from "react-redux";
/**
 * Local import
 */
import Sidebar from "./../components/Sidebar";

// Action Creators
import { getUsers } from "./../store/reducer";
import { selectUser } from "./../store/reducer";
import { addUser } from "./../store/reducer";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  getUsers: () => {
    dispatch(getUsers());
  },
  selectUser: id => {
    dispatch(selectUser(id));
  },
  addUser: () => {
    dispatch(addUser());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
