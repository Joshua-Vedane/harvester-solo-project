//saves all employees that are in the DB
const employeesReducer = (state = [], action) => {
  switch (action.type) {
      case 'SET_EMPLOYEES':
          return action.payload;
      default:
          return state;
  }
}

export default employeesReducer;