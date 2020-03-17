import { all, call } from 'redux-saga/effects';

import contact_list from './contact-list/saga';

export default function* rootSaga() {

    yield all(
        [
            call(contact_list),
        ]
    );
}