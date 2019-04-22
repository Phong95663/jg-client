export const initialState = {
  isShowDashboard: false,
  input: '',
  grammars: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_DASHBOARD':
      return { ...state, isShowDashboard: true }
    case 'FETCH_GRAMMARS':
      return {
        ...state,
        input: action.input,
        grammars: action.grammars
      }
    default:
      return state;
  }
}

export default appReducer;
