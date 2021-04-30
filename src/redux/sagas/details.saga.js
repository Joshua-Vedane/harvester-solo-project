import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

//These sagas are for when you click on an individual project on the dashboard. 

function* getProjectInfo(action) {
  try {
    const projectId = action.payload;
      const response = yield axios.get(`/api/details/projectInfo/${projectId}`);
      // console.log(response.data)
      yield put({type: 'SET_PROJECT_INFO', payload: response.data[0] })
  } catch (err) {
      console.error(err)
  }
}

function* putProjectInfo(action) {
  try {
    const updatedProject = action.payload;
    yield axios.put(`/api/details/updateProject/${action.payload.id}`, updatedProject)
    yield put({type: 'GET_PROJECTS'})
    yield put({type: 'GET_ALL_PROJECTS'})
  }
  catch(err){
    console.error(err);
  }
}

function* detailsSaga() {
    yield takeEvery('GET_PROJECT_INFO', getProjectInfo)
    yield takeEvery('UPDATE_PROJECT_INFO', putProjectInfo)
}

export default detailsSaga;