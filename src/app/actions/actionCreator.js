import { UPDATE_LIKE } from "./actionTypes.js";

export function updateLikes(val) {
    return {
        type: UPDATE_LIKE,
        payload: { count: val }
    };
}

export function asyncUpdateLikes(val) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({
                type: UPDATE_LIKE,
                payload: { count: val }
            });
        }, 1000);
    };
}