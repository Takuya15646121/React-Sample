import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootSaga from '../sagas/rootSaga';
import * as appReducer from '../reducers/applicationReducer';
import * as authReducer from '../reducers/authenticationReducer';

const reducers = combineReducers({  
    application: appReducer.reducer,
    authentication: authReducer.reducer
});

const persistConfig = {
    key: 'root',
    storage, 
    whitelist: ['application'] 
}

const persistedReducer = persistReducer(persistConfig, reducers);

export default function configureStore(initialState = {}) {  
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        persistedReducer,
        applyMiddleware(sagaMiddleware)
    );
    const persistor = persistStore(store);
    sagaMiddleware.run(rootSaga);
    return {store, persistor};
};