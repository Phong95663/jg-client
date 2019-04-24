import React, { Component } from 'react';
import './App.css';
import FormInput from '../components/FormInput';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import TextOutput from '../components/TextOutput';

import {
  showDashboard,
  checkGrammars,
  getTitleGrammar,
} from '../actions/actions';
import Login from "../components/Login";
import base, { firebaseApp } from "../base";
import firebase from "firebase";
// import LoginComponent from '../components/Login';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  authHandler = async authData => {
    console.log(authData);
    const user = authData.user;
    console.log(user);
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
    const { isShowDashboard, input, grammars } = this.props;
    if (!this.state.email) {
      return <Login authenticate={this.authenticate} />;
    }
    return (
      <div className="App">
        {/* <LoginComponent   /> */}
        <div>{isShowDashboard}</div>
        <hr />
        <FormInput
          onSubmit={this.submit}
        />
        <hr />
        {isShowDashboard && (
          <TextOutput text={input} grammars={grammars} />
        )}
      </div>
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
    input: state.appReducer.input
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    showDashboard,
    checkGrammars,
    getTitleGrammar,
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
