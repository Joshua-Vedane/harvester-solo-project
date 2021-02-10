import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';


// Get all user's projects and save in redux
function* getProjects() {
    try {
        //go and get projects
        //the cookie comes along automatically
        const response = yield axios.get('/api/projects');
        console.log(response.data)
        //save in projects reducer!
        yield put({type: 'SET_PROJECTS', payload: response.data })

    } catch (err) {
        console.error(err)
    }
}

// Get ALL THE PROJECTS!!
function* getAllProjects() {
  try{
    // get all projects in DB
    const response = yield axios.get('/api/projects/all');
    console.log(response.data);
    yield put({type: 'SET_ALL_PROJECTS', payload: response.data})
  } catch (err) {
    console.error(err);
  }
}

function* projectSaga() {
    yield takeEvery('GET_PROJECTS', getProjects);
    yield takeEvery('GET_ALL_PROJECTS', getAllProjects);
    
}

export default projectSaga;