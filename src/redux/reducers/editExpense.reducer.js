//saves the user's project details on clicked project
const editExpenseReducer = (state = {}, action) => {
  switch (action.type) {
      case 'SET_EDIT_EXPENSE':
          return action.payload;
      case 'CLEAR_EDIT_INFO':
          return {};
      default:
          return state;
  }
}

export default editExpenseReducer;