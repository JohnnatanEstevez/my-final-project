import { postRegister } from "../../services/registerService";
import { postLogin } from "../../services/loginService";
import {
  userRegisterSuccess,
  userRegisterError,
  userLoginSuccess,
  userLoginError,
} from "./actionCreator";
import { toast } from "react-toastify";

export const thunkUserRegister = (values) => {
  return (dispatch) => {
    return postRegister(values).then((res) => {
      dispatch(userRegisterSuccess(res));
    });
    /* .catch((error) => {
        dispatch(userRegisterError(error));
      }) */
  };
};

export const thunkUserLogin = (values) => {
  return (dispatch) => {
    return toast
      .promise(postLogin(values), {
        pending: "loading",
        success: "👌 Login Success ",
        error: "🤯 Login Failed, Plesase validate your login information",
      })

      .then((res) => {
        dispatch(userLoginSuccess(res));
      });
    /* .catch((error) => {
        dispatch(userRegisterError(error));
      }) */
  };
};
