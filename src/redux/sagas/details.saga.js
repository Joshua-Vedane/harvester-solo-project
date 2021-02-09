import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';


// Get all users pets and save in redux
function* getDetails() {
    try {
        //go and get expenses
        //the cookie comes along automatically
        const response = yield axios.get('/api/details');
        console.log(response.data)
        //save in pet reducer!
        yield put({type: 'SET_DETAILS', payload: response.data })

    } catch (err) {
        console.error(err)
    }
}

function* detailsSaga() {
    yield takeEvery('GET_DETAILS', getDetails);
}

export default detailsSaga;