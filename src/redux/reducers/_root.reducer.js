import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import projects from './project.reducer';
import expenses from './expenses.reducer';
import allProjects from './allProjects.reducer';
import employees from './employees.reducer';
import projectInfo from './projectInfo.reducer';
import categories from './category.reducer';
import editExpense from './editExpense.reducer';

const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  projects, // holds all the user's projects
  expenses, // holds project details(expenses) user selected
  allProjects, // contains all projects in DB
  employees, // holds all employees from the DB
  projectInfo, // individual project data
  categories, // categories for add expense 
  editExpense,// holds data when editing an expense
});

export default rootReducer;
