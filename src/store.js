import allReducers from "./redux/reducers";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// this is a store

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
