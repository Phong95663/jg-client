import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import FormInput from '../components/FormInput';
import TextOutput from '../components/TextOutput';
import TextWrapper from '../components/TextWrapper';
import Popup from '../components/Popup';

import { showOutput } from '../actions/form';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isShowOutput} = this.props;
    return (
      <div className="App">
        <hr />
        <FormInput onSubmit={this.props.showOutput}/>
        <hr />
        <TextWrapper text="abc" />
        <Popup context="aaaaaaa" />
        {isShowOutput && (
          <TextOutput text="AAAAAAAA"/>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isShowOutput: state.isShowOutput}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ showOutput: showOutput }, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
