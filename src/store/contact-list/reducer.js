import * as actions from './action-types';

export default (state = [], action) => {
    switch (action.type) {
        case actions.CALL_API_DATA:
            return {
                ...state,
                data: [],
                status: 'calling'
            };
        case actions.GET_API_DATA:
            return {
                ...state,
                data: action.payload,
                status: 'success'
            };
        case actions.ERROR_API_DATA:
            return {
                ...state,
                data: [],
                status: action.payload
            };

        default:
            return state;
    }
}