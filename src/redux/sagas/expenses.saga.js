import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';


// Get expenses when click on project details
function* getExpenses(action) {
  try {
    const projectId = action.payload;
      //go and get expenses
      //the cookie comes along automatically
      const response = yield axios.get(`/api/expenses/${projectId}`);
      console.log(response.data)
      //save in details reducer
      yield put({type: 'SET_EXPENSES', payload: response.data })

  } catch (err) {
      console.error(err)
  }
}

function * addExpense(action){
  try {
    console.log('made it to addExpense Saga');
    const newExpense = action.payload;
    yield axios.post('/api/expenses', newExpense);
    // yield put({type: 'GET_EXPENSES'})
  }catch(error){
    console.error(error);
  }
}


function* expensesSaga() {
  yield takeEvery('GET_EXPENSES', getExpenses);
  yield takeEvery('ADD_EXPENSE', addExpense);
  
}

export default expensesSaga;