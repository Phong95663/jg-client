import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import '../style/App.css';
import FormInput from '../components/FormInput';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import TextOutput from '../components/TextOutput';
import NavBarComponent from '../components/Navbar';
import GrammarDetailList from '../components/GrammarDetailList';
import FavoriteList from '../components/FavoriteList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Alert from '../components/Alert';

import {
  showDashboard,
  checkGrammars,
  getGrammars,
  getTitleGrammar,
  fetchFavorite,
  setUid,
  closeAlert,
  setAlertContent,
  showAlert,
} from '../actions/actions';
import Login from "../components/Login";
import base, { firebaseApp } from "../base";
import firebase from "firebase";
// import LoginComponent from '../components/Login';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      email: null,
      displayName: null
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });

    // console.log('abc-------', this.props.uid)
    // this.props.fetchFavorite(this.props.uid)

  }

  authHandler = async authData => {
    console.log(authData);
    const user = authData.user;

    console.log(user);
    this.props.setUid(user.uid)
    this.props.fetchFavorite(this.props.uid)
    this.setState({
      email: user.email,
      displayName: user.displayName
    });
  };

  authenticate = provider => {
    console.log(provider);
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  logout = async () => {
    console.log("logout");
    await firebase.auth().signOut();
    this.setState({ email: null, displayName: null });
  };

  submit = values => {
    this.props.checkGrammars(values);
    this.props.showDashboard();
  }

  render() {
    const { isShowDashboard, input, grammars, grammarsByTitle, isFavoritePage, fetchFavorite, title } = this.props;
    const homePage = () => {
      return (
        <div>
          <FormInput
            onSubmit={this.submit}
          />
          {isShowDashboard && (
            <div>
              <hr />
              <TextOutput text={input} grammars={grammars} />
            </div>
          )}
          <Alert
            isShowAlert={this.props.isShowAlert}
            text={this.props.contentAlert}
          />
        </div>
      )
    }
    if (!this.state.email) {
      return <Login authenticate={this.authenticate} />;
    }
    return (
      <Container className="App">
        <NavBarComponent isLogin={true} fetchFavorite={fetchFavorite} />
        <br />
        {title == "Phân tích ngữ pháp" ? <FavoriteList /> : homePage()}
        <GrammarDetailList grammarsByTitle={grammarsByTitle} />
      </Container>
    );
  }
}

App.defaultProps = {
  isShowDashboard: false,
};

const mapStateToProps = state => {
  return {
    isShowDashboard: state.appReducer.isShowDashboard,
    grammars: state.appReducer.grammars,
    uid: state.appReducer.uid,
    grammarsByTitle: state.appReducer.grammarsByTitle,
    input: state.appReducer.input,
    isFavoritePage: state.appReducer.isFavoritePage,
    title: state.appReducer.title
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    showDashboard,
    checkGrammars,
    getGrammars,
    getTitleGrammar,
    fetchFavorite,
    setUid,
    fetchFavorite,
    closeAlert,
    setAlertContent,
    showAlert,
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
