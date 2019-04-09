import React, { Component } from 'react';
import './App.css';
import FormInput from '../components/FormInput';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import TextOutput from '../components/TextOutput';
import { showDashboard } from '../actions/actions';

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {isShowDashboard} = this.props;
    console.log("aaaaaaa", this.props);
    return (
      <div className="App">
        <div>{isShowDashboard}</div>
        <hr/>
        <FormInput showDashboard={this.props.showDashboard} />
        <hr/>
        {isShowDashboard && (
          <TextOutput />
        )}
      </div>
    );
  }
}

App.defaultProps = {
  isShowDashboard: false,
};

const mapStateToProps = state => {
  return {isShowDashboard: state.appReducer.isShowDashboard}
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    showDashboard
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
