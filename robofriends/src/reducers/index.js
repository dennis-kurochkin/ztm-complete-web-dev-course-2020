import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import isLoggedReducer from "./isLoggedReducer";
import searchRobotsReducer from "./searchRobotsReducer";

const reducers = combineReducers({
  counterReducer: counterReducer,
  isLoggedReducer: isLoggedReducer,
  searchRobotsReducer: searchRobotsReducer
});

export default reducers;