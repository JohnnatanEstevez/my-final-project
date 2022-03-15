import { postRegister } from "../../services/registerService";
import { userRegisterSuccess, userRegisterError } from "./actionCreator";
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

export const thunkUserLogin = () => {
  return;
};
