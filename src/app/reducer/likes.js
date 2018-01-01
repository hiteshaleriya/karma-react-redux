
const likes = (state = { count: 0 }, action) => {
    switch (action.type) {
	    case 'UPDATE_LIKE':
	      return { ...state, ...action.payload }
	    default:
	      return state
	}
}

export default likes;