import { connect } from "react-redux";
/**
 * Local import
 */
import Notification from "./../components/Application/Log/Notification";

// Action Creators

const mapStateToProps = state => ({
  log: state.log
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);
