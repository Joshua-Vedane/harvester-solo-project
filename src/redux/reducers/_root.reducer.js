import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import projects from './project.reducer';
import expenses from './expenses.reducer';
import allProjects from './allProjects.reducer';
import employees from './employees.reducer';
import projectInfo from './projectInfo.reducer';
import categories from './category.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  projects, // holds all the user's projects
  expenses, // holds project details(expenses) user selected
  allProjects, // contains all projects in DB
  employees, // holds all employees from the DB
  projectInfo,
  categories,
});

export default rootReducer;
