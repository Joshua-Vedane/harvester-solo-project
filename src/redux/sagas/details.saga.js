import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

//These sagas are for when you click on an individual project on the dashboard. 
// projects saga is for getting all projects either for a specific user or for everyone(everyone subject to change)

// Get expenses for project clicked on
function* getDetails(action) {
    try {
      const projectId = action.payload;
        //go and get expenses
        //the cookie comes along automatically
        const response = yield axios.get(`/api/details/${projectId}`);
        console.log(response.data)
        //save in details reducer
        yield put({type: 'SET_DETAILS', payload: response.data })

    } catch (err) {
        console.error(err)
    }
}

function* getProjectDetails(action) {
  try {
    const projectId = action.payload;
      //go and get expenses
      //the cookie comes along automatically
      const response = yield axios.get(`/api/details/project/${projectId}`);
      console.log(response.data)
      //save in projectDetails reducer!
      yield put({type: 'SET_PROJECT_DETAILS', payload: response.data })

  } catch (err) {
      console.error(err)
  }
}


function* detailsSaga() {
    yield takeEvery('GET_DETAILS', getDetails);
    yield takeEvery('GET_PROJECT_DETAILS', getProjectDetails)
}

export default detailsSaga;