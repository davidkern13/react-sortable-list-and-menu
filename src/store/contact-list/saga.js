import { call, put, takeLatest } from 'redux-saga/effects'

import { CALL_API_DATA, ERROR_REQUEST } from './action-types';
import { getData, dataError } from './action';
import { AxiosRequest } from '../../request';
import { API_URL } from '../../enum';

export default function* watcherSaga() {
    yield takeLatest(CALL_API_DATA, getContactList);
}

function* getContactList({ payload }) {

    const { suffix = '', method = 'get' } = payload;

    try {
        const response = yield call(() => {
                return AxiosRequest({method:method, url: API_URL + suffix});
            }
        );

        if (response.status === 200 && response.statusText === "OK") {
            const list = yield response.data;

            yield put(getData(list));
        } else {
          yield put(dataError(ERROR_REQUEST));
        }

    } catch (err) {
        yield put(dataError(err));
    }

}
