import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './messagesSlice';
import {fetchMessages, watchSend} from '../sagas/messagesSaga';

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
    reducer: { messages: messagesReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})
 sagaMiddleware.run(fetchMessages)
 sagaMiddleware.run(watchSend)
