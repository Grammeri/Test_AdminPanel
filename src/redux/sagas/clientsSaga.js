import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchClientsSaga() {
    try {
        const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users');
        yield put({ type: 'clients/fetchSuccess', payload: response.data });
    } catch (error) {
        yield put({ type: 'clients/fetchError', payload: error.message });
    }
}

function* clientsSaga() {
    yield takeEvery('clients/fetch', fetchClientsSaga);
}

export default clientsSaga;
