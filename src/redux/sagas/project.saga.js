import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';


// Get all users pets and save in redux
function* getProjects() {
    try {
        //go and get projects
        //the cookie comes along automatically
        const response = yield axios.get('/api/projects');
        console.log(response.data)
        //save in pet reducer!
        yield put({type: 'SET_PROJECTS', payload: response.data })

    } catch (err) {
        console.error(err)
    }
}

function* projectSaga() {
    yield takeEvery('GET_PROJECTS', getProjects);
}

export default projectSaga;