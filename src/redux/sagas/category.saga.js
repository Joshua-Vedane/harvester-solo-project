import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

// Get all categories in the DB
function* getCategories() {
  try {
    const response = yield axios.get(`/api/categories`);
    // console.log(response.data)
    yield put({ type: 'SET_CATEGORIES', payload: response.data })

  } catch (err) {
    console.error(err)
  }
}

function* categorySaga() {
  yield takeEvery('GET_CATEGORIES', getCategories);
}

export default categorySaga;