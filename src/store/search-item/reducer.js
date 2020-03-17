import * as actions from './action-types';

export default (state = '', action) => {
    switch (action.type) {
        case actions.SEARCH_ITEM:
            return {
                ...state,
                value: action.payload,
            };
        default:
            return state;
    }
}