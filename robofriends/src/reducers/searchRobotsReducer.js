import { CHANGE_SEARCH_FIELD } from "../constants";

const searchRobotsReducer = (state = { searchField: '' }, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload }
    default:
      return state;
  }
}

export default searchRobotsReducer;