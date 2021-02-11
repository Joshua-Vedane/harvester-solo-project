//saves the user's project details on clicked project
const projectInfoReducer = (state = {}, action) => {
  switch (action.type) {
      case 'SET_PROJECT_INFO':
          return action.payload;
      case 'CLEAR_PROJECT_INFO':
          return {};
      default:
          return state;
  }
}

export default projectInfoReducer;