import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { registerReducer } from "./users/reducer";
import { todosReducer } from "./todos/reducerTodos";
const reducer = combineReducers({
  user: registerReducer,
  todos: todosReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export default createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
