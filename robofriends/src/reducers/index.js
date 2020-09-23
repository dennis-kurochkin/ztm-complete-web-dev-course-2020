import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import isLoggedReducer from "./isLoggedReducer";
import searchRobotsReducer from "./searchRobotsReducer";

const reducers = combineReducers({
  counter: counterReducer,
  isLogged: isLoggedReducer,
  searchRobots: searchRobotsReducer
});

export default reducers;