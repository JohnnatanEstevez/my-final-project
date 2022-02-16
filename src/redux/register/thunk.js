import { postRegister } from "../services/registerService";
import { fetchRegisterSucces, fetchRegisterError } from "./actionCreator";

export const fetchRegister = (user) => {
  console.log("fetchRegister del thunk");
  console.log(user);

  return (dispatch) => {
    console.log("dispatch POST");
    postRegister(user)
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchRegisterSucces(data));
      })
      .catch((error) => {
        dispatch(fetchRegisterError(error));
      });
  };
};
