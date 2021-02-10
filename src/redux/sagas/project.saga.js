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

function* addProject(action) {
  try {
    const newProject = action.payload;
    yield axios.post('/api/projects', newProject);
    // yield put to get things? It'll load on component load anyways...? GET_PROJECTS? GET_ALL_PROJECTS?
    yield put({type: 'GET_PROJECTS'})
    yield put({type: 'GET_ALL_PROJECTS'})
  }catch(error){
    console.error(error);
  }
}

function* projectSaga() {
    yield takeEvery('GET_PROJECTS', getProjects);
    yield takeEvery('GET_ALL_PROJECTS', getAllProjects);
    yield takeEvery('ADD_PROJECT', addProject);
    
}

export default projectSaga;