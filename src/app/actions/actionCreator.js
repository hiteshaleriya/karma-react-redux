import { UPDATE_LIKE } from "./actionTypes.js";

export function updateLikes(val) {
    return {
        type: UPDATE_LIKE,
        payload: { count: val }
    };
}