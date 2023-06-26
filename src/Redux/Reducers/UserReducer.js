import {
  LOGIN_USER,
  LOGOUT_USER,
  REFRESH_TOKEN_USER,
  SIGNUP_USER,
} from "../Consts/UserConsts";

const UserReducer = (state = { token: null }, action) => {
  switch (action.type) {
    case SIGNUP_USER:
    case REFRESH_TOKEN_USER:
    case LOGIN_USER:
      return { ...state, token: action.payload.accessToken };
    case LOGOUT_USER:
      return { ...state, token: null };
    default:
      console.log("UserReducer default case");
      return state;
  }
};

export default UserReducer;