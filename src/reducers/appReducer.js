export const initialState = {
  isShowOutput: true
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_OUTPUT':
      return state.set('isShowOutput', true)
    default:
      return state;
  }
}

export default appReducer;
