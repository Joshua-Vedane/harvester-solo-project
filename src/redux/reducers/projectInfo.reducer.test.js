import projectInfoReducer from './projectInfo.reducer';

describe('testing project info reducer', () => {
  //SET_PROJECT_INFO
    test('ACTION_SET_PROJECT_INFO', () => {
      const initialState = {};
      const action = {type: 'SET_PROJECT_INFO', payload: {address_1: '123 Main St.', address_2: 'St. Paul, MN 55104'}};
      expect(projectInfoReducer(initialState, action)).toEqual({address_1: '123 Main St.', address_2: 'St. Paul, MN 55104'})
    })
  // CLEAR_PROJECT_INFO
  test('ACTION_CLEAR_PROJECT_INFO', () => {
    const initialState = {address_1: '123 Main St.', address_2: 'St. Paul, MN 55104'};
    const action = {type: 'CLEAR_PROJECT_INFO'}
    expect(projectInfoReducer(initialState, action)).toEqual({})
  })
  //OTHER_ACTION
  test('ACTION_OTHER', () => {
    const initialState = {address_1: '123 Main St.', address_2: 'St. Paul, MN 55104'};
    const action = {type: 'OTHER_ACTION'}
    expect(projectInfoReducer(initialState, action)).toEqual(initialState)
  })
})