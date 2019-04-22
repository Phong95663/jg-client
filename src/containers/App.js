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

export class App extends Component {
  constructor(props) {
    super(props);
  }

  submit = values => {
    this.props.checkGrammars(values);
    this.props.showDashboard();
  }

  render() {
    const { isShowDashboard } = this.props;
    return (
      <div className="App">
        <div>{isShowDashboard}</div>
        <hr />
        <FormInput
          onSubmit={this.submit}
        />
        <hr />
        {isShowDashboard && (
          <TextOutput text={this.props.dataInput} />
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
