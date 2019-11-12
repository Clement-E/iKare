import { connect } from "react-redux";
/**
 * Local import
 */
import Detail from "../components/Application/Detail";
// Action Creators
import { deleteUser } from "./../store/reducer";
import { openModal } from "./../store/reducer";
import { submitNewProfile } from "./../store/reducer";
import { changeInputValue } from "./../store/reducer";

const mapStateToProps = state => ({
  selectedUser: state.selectedUser,
  isUserSelected: state.isUserSelected,
  isModalOpen: state.isModalOpen,
  inputValue: state.inputValue
});

const mapDispatchToProps = dispatch => ({
  deleteUser: () => {
    dispatch(deleteUser());
  },
  openModal: () => {
    dispatch(openModal());
  },
  submitNewProfile: () => {
    dispatch(submitNewProfile());
  },
  changeInputValue: () => {
    dispatch(changeInputValue());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
