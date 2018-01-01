import * as types from '../../src/app/actions/actionTypes.js';
import likes from '../../src/app/reducer/likes.js';


describe('Reducer Suit', () => {

    it('should return the initial state', () => {
        expect(likes(undefined, {})).toEqual({
            count: 0
        });
    });

    it('should handle update likes', () => {
        // with payload
        expect(likes({}, {
            type: types.UPDATE_LIKE,
            payload: { count: 2 }
        })).toEqual({
            count: 2
        });

        // without payload
        expect(likes({ count: 4 }, {
            type: types.UPDATE_LIKE,
            payload: {}
        })).toEqual({
            count: 4
        });
    });

});