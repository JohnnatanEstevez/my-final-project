import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { registerReducer } from "./users/reducer";
const reducer = combineReducers({
  users: registerReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
