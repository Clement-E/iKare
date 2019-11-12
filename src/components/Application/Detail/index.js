import React from "react";

import avatar1 from "../../../img/dota-1.png";
import avatar2 from "../../../img/dota-2.png";
import avatar3 from "../../../img/dota-3.png";
import avatar4 from "../../../img/dota-4.png";

import "./Detail.scss";

const Detail = ({
  selectedUser,
  isUserSelected,
  deleteUser,
  openModal,
  isModalOpen,
  submitNewProfile,
  changeInputValue,
  inputValue
}) => {
  const avatars = [avatar1, avatar2, avatar3, avatar4];
  const handleDeleteUser = e => {
    deleteUser(e.target);
    console.log("DELETE USER", e.target);
  };
  const handleOpenModal = () => {
    openModal();
  };
  const handleSubmit = event => {
    event.preventDefault();
    submitNewProfile();
  };
  const handleChange = e => {
    console.log(e.target.value);
    changeInputValue(e.target.value);
  };
  return (
    <div id="detail">
      {isUserSelected && (
        <div className="container">
          <div className="detail-header">
            <h1>{selectedUser.name}</h1>
            <hr />
          </div>
          <div className="detail-body">
            <img src={avatars[selectedUser.id - 1]} alt="" />
            <p>{selectedUser.email}</p>
            <p>{selectedUser.phone}</p>
          </div>
          <div className="detail-footer">
            <div className="detail-footer-left">
              <p
                id={selectedUser.id}
                name={selectedUser.name}
                onClick={handleOpenModal}
              >
                EDIT
              </p>
            </div>
            <div className="detail-footer-right">
              <p
                id={selectedUser.id}
                name={selectedUser.name}
                onClick={handleDeleteUser}
              >
                DELETE
              </p>
            </div>
          </div>
        </div>
      )}
      {isUserSelected && isModalOpen && (
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              value={inputValue}
              placeholder={selectedUser.name}
            />
          </form>
        </div>
      )}
    </div>
  );
};

/**
 * Export
 */
export default Detail;
