import * as types from './action-types';

export const callApi = () => {
    return {
        type: types.CALL_API_DATA,
        payload: {
            suffix: 'contact_list',
            method: 'get'
        }
     }
};

export const getData = data => ({
    type: types.GET_API_DATA,
    payload: data
})

export const dataError = data => ({
    type: types.ERROR_API_DATA,
    payload: data
})