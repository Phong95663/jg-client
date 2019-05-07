import client from '../utils/apiCall';

export const showDashboard = () => ({
  type: 'SHOW_DASHBOARD',
});

export const checkGrammars = (input) => {
  return(dispatch) => {
    return client.post('/grammar_check', input).then(res => {
      console.log("*******", res.data);
      dispatch(fetchGrammars(res.data));
    })
  }
}

export const fetchGrammars = (grammars) => ({
  type: 'FETCH_GRAMMARS',
  grammars
})

export const fetchGrammarsByTitle = (grammars, input) => ({
  type: 'FETCH_GRAMMARS_BY_TITLE',
  grammars,
  input
})

export const getGrammars = (input) => {
  return (dispatch) => {
    return client.post('/get_grammar', input).then(res => {
      console.log("*******", res.data);
      dispatch(fetchGrammarsByTitle(res.data, input));
    })
  }
}

export const setPageTitle = (title) => ({
  type: 'SET_PAGE_TITLE',
  title
})

export const showModal = () => ({
  type: 'SHOW_MODAL',
})

export const closeModal = () => ({
  type: 'CLOSE_MODAL',
})

export const setUid = (uid) => ({
  type: 'SET_UID',
  uid
})

export const addFavorite = (data) => {
  return  async (dispatch) => {
    // const data = { user: uid, grammar: grammar}
    const grammar = await client.get(`/grammar/${data.grammar}`)
    await console.log("---------56", grammar.data)
    return client.post('/favorite', data).then(res => {
      dispatch(addFavoriteSuccess(res.data, grammar.data));
    })
  }
}

export const addFavoriteSuccess = (favorite, grammar) => ({
  type: 'ADD_FAVORITE_SUCCESS',
  favorite,
  grammar
})

export const fetchFavorite = (uid) => {
  return(dispatch) => {
    return client.get(`/favorite/${uid}`).then(res => {
      res.data.map(favorite => {
        console.log("------------debug", favorite, favorite.grammar, favorite._id)
        dispatch(fetchDetailFavorite(favorite.grammar, favorite._id))
      })
      dispatch(fetchFavoriteSuccess(res.data));
    })
  }
}
export const fetchFavoriteSuccess = (favorites) => ({
  type: 'FETCH_FAVORITE_SUCCESS',
  favorites
})

export const reloadGramamrs = () => ({
  type: 'RELOAD_GRAMMARS',
})

export const fetchDetailFavorite = (id, favorite_id) => {
  return (dispatch) => {
    return client.get(`/grammar/${id}`).then(res => {
      res.data[0].favorite_id = favorite_id
      dispatch(fetchDetailsFavoriteSuccess(res.data[0]));
    })
  }
}
export const fetchDetailsFavoriteSuccess = (favorite) => ({
  type: 'FETCH_DETAIL_FAVORITE_SUCCESS',
  favorite
})

export const deleteFavorite = (id) => {
  return (dispatch) => {
    return client.delete(`/favorite/${id}`).then(res => {
      dispatch(deleteFavoriteSuccess(id));
    })
  }
}
export const deleteFavoriteSuccess = (favorite) => ({
  type: 'DELETE_FAVORITE_SUCCESS',
  favorite
})

export const clickFavorite = (favorite) => ({
  type: 'CLICK_FAVORITE',
  favorite
})

export const showAlert = () => ({
  type: 'SHOW_ALERT',
})

export const closeAlert = () => ({
  type: 'CLOSE_ALERT',
})

export const setAlertContent = (content) => ({
  type: 'SET_ALERT_CONTENT',
  content
})

export const reloadState = () => ({
  type: 'RELOAD_STATE',
})
export const getTitleGrammar = (data) => ({
  type: 'GET_TITLE_GRAMMAR',
  data
})
