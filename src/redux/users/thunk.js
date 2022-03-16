import { postRegister } from "../../services/registerService";
import { postLogin } from "../../services/loginService";
import {
  userRegisterSuccess,
  userRegisterError,
  userLoginSuccess,
  userLoginError,
} from "./actionCreator";
export const thunkUserRegister = (values) => {
  return (dispatch) => {
    postRegister(values)
      .then((res) => {
        dispatch(userRegisterSuccess(res));
      })
      .catch((error) => {
        dispatch(userRegisterError(error));
      });
  };
};

export const thunkUserLogin = (values) => {
  return (dispatch) => {
    postLogin(values)
      .then((data) => {
        dispatch(userLoginSuccess(data));
      })
      .catch((error) => {
        dispatch(userLoginError(error));
      });
  };
};
