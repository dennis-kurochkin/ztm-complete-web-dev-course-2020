import { INCREMENT, DECREMENT } from "../constants";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return ++state;
    case DECREMENT:
      return --state;
    default:
      break;
  }
}

export default counterReducer;