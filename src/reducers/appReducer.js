export const initialState = {
  isShowDashboard: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_DASHBOARD':
      return {isShowDashboard: true}
    default:
      return state;
  }
}

export default appReducer;
