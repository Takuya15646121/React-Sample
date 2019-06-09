import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../api/sagas'

export const reducers = combineReducers({  
    
});

export function configureStore(initialState = {}) {  
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        reducers,
        applyMiddleware(sagaMiddleware), 
    );
    sagaMiddleware.run(rootSaga);
    return store;
};