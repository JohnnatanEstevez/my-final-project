import { createStore, combineReducers } from "redux";
import { registerReducer } from "./register/reducer";
const reducers = combineReducers({
  users: registerReducer,
});

export default createStore(reducers);
