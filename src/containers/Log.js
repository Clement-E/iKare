import { connect } from "react-redux";
/**
 * Local import
 */
import Log from "./../components/Application/Log";

// Action Creators

const mapStateToProps = state => ({
  hasNotification: state.hasNotification
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Log);
