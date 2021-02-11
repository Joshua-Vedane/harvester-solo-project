//saves the user's project details on clicked project
const projectDetailsReducer = (state = [], action) => {
  switch (action.type) {
      case 'SET_PROJECT_DETAILS':
          return action.payload;
      default:
          return state;
  }
}

export default projectDetailsReducer;