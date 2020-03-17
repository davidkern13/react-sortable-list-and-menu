import { combineReducers } from 'redux';

import contact_list from './contact-list/reducer';
import search_item from './search-item/reducer';

const rootReducer = combineReducers({
    contact_list,
    search_item
});

export default rootReducer;