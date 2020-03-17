import * as types from './action-types';

export const setSearchItem = data => ({
    type: types.SEARCH_ITEM,
    payload: data
})