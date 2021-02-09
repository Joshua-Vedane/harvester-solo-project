//saves the user's project expenses
const detailsReducer = (state = [], action) => {
  switch (action.type) {
      case 'SET_DETAILS':
          return action.payload;
      default:
          return state;
  }
}

export default detailsReducer;