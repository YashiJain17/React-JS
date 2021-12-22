import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import createSagaMiddleware from 'redux-saga';
import {watchUserInput} from './saga/saga'

const sagaMiddleware = createSagaMiddleware()

// const store = createStore(rootReducer)
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(watchUserInput);

export default store;

