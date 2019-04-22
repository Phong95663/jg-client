import client from '../utils/apiCall';

export const showDashboard = () => ({
  type: 'SHOW_DASHBOARD',
});

export const checkGrammars = (input) => {
  return(dispatch) => {
    return client.post('/grammar_check', input).then(res => {
      console.log("*******", res.data);
      dispatch(fetchGrammars(input, res.data));
    })
  }
}

export const fetchGrammars = (input, grammars) => ({
  type: 'FETCH_GRAMMARS',
  input,
  grammars
})

export const getTitleGrammar = (data) => ({
  type: 'GET_TITLE_GRAMMAR',
  data
})
