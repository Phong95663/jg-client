import { fromJS } from 'immutable';

export const initialState = fromJS({

});

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_DASHBOARD':
      return state.set('isShowDashBoard', true)
    default:
      return state;
  }
}

export default appReducer;
