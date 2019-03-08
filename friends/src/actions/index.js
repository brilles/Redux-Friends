import axios from "axios";

export const FETCH_FRIENDS_FAIL = "FETCH_FRIENDS_FAIL";
export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const LOGIN_START = "LOGIN_START";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios.post("http://localhost:5000/api/login", creds).then(res => {
    localStorage.setItem("token", res.data.payload);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data.payload });
    getFriends();
  });
};

export const getFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS_START });
  axios
    .get("http://localhost:5000/api/friends", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: "FETCH_FRIENDS_SUCCESS", payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};
