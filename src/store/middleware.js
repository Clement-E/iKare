import axios from "axios";
import {
  GET_USERS,
  fetchUsers,
  ADD_USER,
  fetchAddUser,
  DELETE_USER,
  fetchUserDeleted,
  SUBMIT_NEW_PROFILE,
  fetchUserEdited
} from "./reducer";

const fakeApi = "https://jsonplaceholder.typicode.com";

const middleware = store => next => action => {
  switch (action.type) {
    case GET_USERS:
      axios
        .get(`${fakeApi}/users`)
        .then(response => {
          // console.log("reponse requete", response);
          store.dispatch(fetchUsers(response.data));
        })
        .catch(error => {
          console.log(error.message);
        });
      break;
    case DELETE_USER:
      axios
        .delete(`${fakeApi}/users/${action.id}`)
        .then(response => {
          // console.log("reponse requete", response);
          const formatedDate = new Date().toLocaleDateString("fr", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
          });
          store.dispatch(fetchUserDeleted(response.data, formatedDate));
        })
        .catch(error => {
          console.log(error.message);
        });
      break;
    case SUBMIT_NEW_PROFILE:
      axios
        .patch(
          `${fakeApi}/users/${action.id}`,
          {
            name: "Roger",
            username: "Roger@unMuscadet.fr",
            userId: 1
          },
          {
            "Content-type": "application/json; charset=UTF-8"
          }
        )
        .then(response => {
          // console.log("reponse requete", response);
          const formatedDate = new Date().toLocaleDateString("fr", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
          });
          store.dispatch(fetchUserEdited(response.data, formatedDate));
          console.log("edition réussi le ", response.data);
        })
        .catch(error => {
          console.log(error.message);
        });
      break;
    case ADD_USER:
      axios
        .post(
          `${fakeApi}/users`,
          {
            name: "Roger",
            username: "Roger@unMuscadet.fr",
            userId: 1
          },
          {
            "Content-type": "application/json; charset=UTF-8"
          }
        )
        .then(response => {
          console.log(response.data);
          const formatedDate = new Date().toLocaleDateString("fr", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
          });
          store.dispatch(fetchAddUser(response.data, formatedDate));
        });
      break;
    default:
      return next(action);
  }
};
export default middleware;
