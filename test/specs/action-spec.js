import * as actions from '../../src/app/actions/actionCreator.js';
import * as types from '../../src/app/actions/actionTypes.js';


describe('Action creator Suit', () => {

    it('should create an action to update likes', () => {
    	const likes = 5;
        const expectedAction = {
            type: types.UPDATE_LIKE,
            payload: { count: likes }
        };
        expect(actions.updateLikes(likes)).toEqual(expectedAction);
    });

});