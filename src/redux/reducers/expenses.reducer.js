//saves the user's project expenses
const expensesReducer = (state = [], action) => {
  switch (action.type) {
      case 'SET_EXPENSES':
          return action.payload;
      default:
          return state;
  }
}

export default expensesReducer;