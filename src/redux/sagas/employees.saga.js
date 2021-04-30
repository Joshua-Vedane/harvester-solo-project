import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

// Get all employees in the DB
function* getEmployees() {
    try {
        const response = yield axios.get(`/api/employees`);
        // console.log(response.data)
        yield put({type: 'SET_EMPLOYEES', payload: response.data })
    } catch (err) {
        console.error(err)
    }
}

// Add an employee to the project
function* addEmployeeToProject(action){
  try{
    const newAddition = action.payload;
    yield axios.post('/api/employees', newAddition); 
    yield put({type: 'GET_PROJECTS'})
    yield put({type: 'GET_ALL_PROJECTS'})

  }catch(error){
    console.error(error);
  }
}

function* employeesSaga() {
    yield takeEvery('GET_EMPLOYEES', getEmployees);
    yield takeEvery('ADD_EMPLOYEE_TO_PROJECT', addEmployeeToProject)
}

export default employeesSaga;