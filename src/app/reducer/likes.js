import { UPDATE_LIKE } from "../actions/actionTypes.js";

const likes = (state = {count: 0}, action) => {
    switch (action.type) {
	    case UPDATE_LIKE:
	      return { ...state, ...action.payload }
	    default:
	      return state;
	}
}

export default likes;