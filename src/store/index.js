import { createStore, applyMiddleware } from 'redux';
import rootSaga from './saga';

import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
//import monitorReducersEnhancer from '../enhancers/monitorReducer';

import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware(); // create the saga middleware

export function initialStore(){
     const middleware = [sagaMiddleware];
     const middlewareEnhancer = applyMiddleware(...middleware);

     const enhancers = [middlewareEnhancer]; //monitorReducersEnhancer
     const composedEnhancers = composeWithDevTools(...enhancers);

     const store = createStore(rootReducer, composedEnhancers);

     sagaMiddleware.run(rootSaga);


    return store;
}
