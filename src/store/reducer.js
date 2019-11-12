/**
 * Initial State
 */
const initialState = {
  caMarche: "oui",
  //les users récupérés sont divisés en 2 ici: les 4ers dont les users de l'app, les 4 suivants les admins
  users: [],
  admins: [],
  // le user/admin actife
  selectedUser: {},
  selectedAdmin: {
    id: 6,
    name: "Mrs. Dennis Schulist"
  },
  //indicateur d'état
  hasNotification: false,
  isUserSelected: false,
  log: [],
  //modal d'edition
  isModalOpen: false,
  inputValue: ""
};

/**
 * Types
 */
export const GET_USERS = "GET_USERS";
export const FETCH_USERS = "FETCH_USERS";
export const SELECT_USER = "SELECT_USER";
export const SELECT_ADMIN = "SELECT_ADMIN";
export const ADD_USER = "ADD_USER";
export const INFO_LOG_NEW_ADMIN = "INFO_LOG_NEW_ADMIN";
export const FETCH_ADD_USER = "FETCH_ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const FETCH_USER_DELETED = "FETCH_USER_DELETED";
export const OPEN_MODAL = "OPEN_MODAL";
export const CHANGE_INPUT_VALUE = "CHANGE_INPUT_VALUE";
export const SUBMIT_NEW_PROFILE = "SUBMIT_NEW_PROFILE";
export const FETCH_USER_EDITED = "FETCH_USER_EDITED";
/**
 * Selectors
 */

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.users.slice(0, 4),
        admins: action.users.slice(5, 9)
      };
    case SELECT_USER:
      return {
        ...state,
        selectedUser: state.users[action.id - 1],
        isUserSelected: true
      };
    case SELECT_ADMIN:
      return {
        ...state,
        selectedAdmin: state.admins[action.id - 6]
      };
    case INFO_LOG_NEW_ADMIN:
      return {
        ...state,
        log: [
          ...state.log,
          {
            admin: action.name,
            user: action.email,
            timestamp: action.date,
            action: action.action
          }
        ],
        hasNotification: true
      };
    case FETCH_ADD_USER:
      return {
        ...state,
        log: [
          ...state.log,
          {
            admin: action.userAdded.name,
            user: action.userAdded.username,
            timestamp: action.date,
            action: "ajout d'un utilisateur"
          }
        ],
        hasNotification: true
      };
    case FETCH_USER_DELETED:
      // on ne reçoit sur l'user deleted rien a part un status OK...
      return {
        ...state,
        log: [
          ...state.log,
          {
            admin: state.selectedUser.name,
            user: "action.username",
            timestamp: action.date,
            action: "utilisateur supprimé"
          }
        ],
        hasNotification: true
      };
    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
        inputValue: state.selectedUser.name
      };
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.value
      };
    case FETCH_USER_EDITED:
      return {
        ...state,
        log: [
          ...state.log,
          {
            admin: state.selectedUser.name,
            user: action.username,
            timestamp: action.date,
            action: "utilisateur édité"
          }
        ],
        isModalOpen: false,
        hasNotification: true
      };
    default:
      return state;
  }
};

/**
 * Action Creators
 */

export const getUsers = () => ({
  type: GET_USERS
});
export const fetchUsers = users => ({
  type: FETCH_USERS,
  users
});
export const selectUser = id => ({
  type: SELECT_USER,
  id
});
export const selectAdmin = id => ({
  type: SELECT_ADMIN,
  id
});
export const addUser = () => ({
  type: ADD_USER
});
export const infoLogNewAdmin = (name, email, date, action) => ({
  type: INFO_LOG_NEW_ADMIN,
  name,
  email,
  date,
  action
});
export const fetchAddUser = (userAdded, date) => ({
  type: FETCH_ADD_USER,
  userAdded,
  date
});
export const deleteUser = id => ({
  type: DELETE_USER,
  id
});
export const fetchUserDeleted = (user, date) => ({
  type: FETCH_USER_DELETED,
  user,
  date
});
export const openModal = () => ({
  type: OPEN_MODAL
});
export const submitNewProfile = () => ({
  type: SUBMIT_NEW_PROFILE
});
export const changeInputValue = () => ({
  type: CHANGE_INPUT_VALUE
});
export const fetchUserEdited = (user, date) => ({
  type: FETCH_USER_EDITED,
  user,
  date
});
/**
 * Export
 */
export default reducer;
