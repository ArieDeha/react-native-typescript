import { all, fork } from 'redux-saga/effects';
import { watchNewMessage } from './message/watcher';

export const rootSaga = function* root() {
    yield all([
        fork(watchNewMessage)
    ]);
};