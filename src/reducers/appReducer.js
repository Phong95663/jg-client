export const initialState = {
  isShowDashboard: false,
  isShowModal: false,
  isFavoritePage: false,
  title: 'Ngữ pháp đã lưu',
  grammar: [],
  favorites: [],
  input: '',
  uid: '',
  content: {},
  grammars: [],
  grammarsByTitle: [],
  isShowAlert: false,
  contentAlert: ''
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_DASHBOARD':
      return { ...state, isShowDashboard: true }
    case 'SHOW_MODAL':
      return { ...state, isShowModal: true }
    case 'CLOSE_MODAL':
      return { ...state, isShowModal: false }
    case 'SET_UID':
      return { ...state, uid: action.uid }
    case 'SET_PAGE_TITLE':
      return {...state, title: action.title}
    case 'FETCH_GRAMMARS':
      return {
        ...state,
        input: action.input,
        grammars: action.grammars
      }
    case 'FETCH_GRAMMARS_BY_TITLE':
      return {
        ...state,
        grammarsByTitle: action.grammars,
        input: action.input
      }
    case 'FETCH_FAVORITE_SUCCESS':
      return {
        ...state,
        favorites: action.favorites
      }
    case 'FETCH_DETAIL_FAVORITE_SUCCESS':
      let grammars = state.grammar
      let favorites = state.favorites

      if (grammars.length < favorites.length) {
        grammars.push(action.favorite)
      }

      return {
        ...state,
        // grammar: grammars
      }
    case 'GET_FAVORITE_PAGE':
      return { ...state, isFavoritePage: true }
    case 'DELETE_FAVORITE_SUCCESS':
      // let grammars = state.grammar;
      let favorites_after = state.favorites.filter(favorite => {
        return favorite.id !== action.favorite;
      })
      let grammars_after = state.grammar.filter(grammar => {
        return grammar.favorite_id !== action.favorite;
      })
      return { ...state, grammar: grammars_after, favorite: favorites_after }
    case 'CLICK_FAVORITE':
      return { ...state, content: action.favorite }
    // case 'ADD_FAVORITE_SUCCESS':
    //   // let newGrammar = state.grammar.push(action.grammar[0]);
    //   // console.log("------newGrammar", newGrammar, action.grammar[0])
    //   // console.log("------new_Favorite", new_Favorite, action.favorite)
    //   // let new_Favorite = state.favorites.push(action.favorite);
    //   // return { ...state, grammar: newGrammar, favorite: new_Favorite }
    //   return {...state}
    case 'RELOAD_STATE':
      return { ...state, grammar: [], isShowDashboard: false }
    case 'RELOAD_GRAMMARS':
      return { ...state, grammars: [], isShowDashboard: false }
    case 'SHOW_ALERT':
      return { ...state, isShowAlert: true }
    case 'CLOSE_ALERT':
      return { ...state, isShowAlert: false }
    case 'SET_ALERT_CONTENT':
      return { ...state, contentAlert: action.content }
    default:
      return state;
  }
}

export default appReducer;
