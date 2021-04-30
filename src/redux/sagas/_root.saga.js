import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import projectSaga from './project.saga';
import detailsSaga from './details.saga';
import employeesSaga from './employees.saga';
import categorySaga from './category.saga';
import expensesSaga from './expenses.saga';

export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    projectSaga(),
    detailsSaga(),
    employeesSaga(),
    categorySaga(),
    expensesSaga(),
  ]);
}
