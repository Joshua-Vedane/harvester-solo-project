import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';


// Get all employees in the DB
function* getEmployees() {
    try {
        //go and get employees
        const response = yield axios.get(`/api/employees`);
        console.log(response.data)
        //save in employee reducer!
        yield put({type: 'SET_EMPLOYEES', payload: response.data })

    } catch (err) {
        console.error(err)
    }
}

function* employeesSaga() {
    yield takeEvery('GET_EMPLOYEES', getEmployees);
}

export default employeesSaga;