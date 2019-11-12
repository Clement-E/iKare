import { connect } from "react-redux";
/**
 * Local import
 */
import Admins from "./../components/Sidebar/Admins";
import { selectAdmin, infoLogNewAdmin } from "./../store/reducer";

// Action Creators

const mapStateToProps = state => ({
  admins: state.admins,
  selectedAdmin: state.selectedAdmin
});

const mapDispatchToProps = dispatch => ({
  selectAdmin: id => {
    dispatch(selectAdmin(id));
  },
  infoLogNewAdmin: (name, email, date, action) => {
    dispatch(infoLogNewAdmin(name, email, date, action));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admins);
