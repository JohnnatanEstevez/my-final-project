import { postRegister } from "../../services/registerService";
import { userRegisterSuccess, userRegisterError } from "./actionCreator";

export const thunkUserRegister = (values) => {
  console.log("2.thunk");
  return (dispatch) => {
    postRegister(values)
      .then((res) => {
        console.log(res);
        console.log("3.thunk SUCCESS");
        dispatch(userRegisterSuccess(res));
      })
      .catch((error) => {
        console.log("3.1 thunk ERROR");
        dispatch(userRegisterError(error));
      });
  };
};

export const thunkUserLogin = () => {
  return;
};
