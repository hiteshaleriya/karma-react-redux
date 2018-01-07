import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/app/actions/actionCreator.js';
import * as types from '../../src/app/actions/actionTypes.js';



describe('Async Action creator Suit', () => {
	let store, likes = 10;

	beforeEach(() => {
		const middlewares = [thunk];
		const mockStore = configureMockStore(middlewares);
		store = mockStore({ likes: {count: 0} });
		store.dispatch(actions.asyncUpdateLikes(likes));
	});

    it('should create an action to update likes async', (done) => {
        const expectedAction = {
            type: types.UPDATE_LIKE,
            payload: { count: likes }
        };
        
        setTimeout(() => {
            expect(store.getActions()[0]).toEqual(expectedAction);
        	done();
        }, 1200);
    });

});