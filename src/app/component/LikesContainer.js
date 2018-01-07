import { connect } from 'react-redux';
import LikesComponent from "./LikesComponent.js";
import * as actions from "../actions/actionCreator.js";

/**
 * This function maps the state to a
 * prop called `likes`.
 *
 * In larger apps it is often good
 * to be more selective and only
 * map the part of the state tree
 * that is necessary.
 */
const mapStateToProps = (state, ownProps) => {
    return {
        likes: state.likes
    }
}

/**
 * This function maps actions to props
 * and binds them so they can be called
 * directly.
 *
 * In this case all actions are mapped
 * to the `updateLikes` prop.
 */
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateLikes: (val) => {
            dispatch(actions.updateLikes(val));
        },
        asyncUpdateLikes: (val) => {
        	dispatch(actions.asyncUpdateLikes(val));
        }
    }
}

/**
 * Finally the Redux store is connected
 * to the component with the `connect()`
 * function.
 */
export default connect(mapStateToProps, mapDispatchToProps)(LikesComponent);