import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import searchRobotsReducer from "./searchRobotsReducer";

const reducers = combineReducers({
  counter: counterReducer,
  searchRobots: searchRobotsReducer
});

export default reducers;