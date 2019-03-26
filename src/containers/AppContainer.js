import React, { Component } from 'react';
import './App.css';
import Form from '../components/Form';
import { connect } from "react-redux";
import DashBoardContainer from '../containers/DashBoardContainer';

export class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.states = {isShowDashBoard: false}
  }
  render() {
    const {isShowDashBoard} = this.states;
    return (
      <div className="App">
        <Form onSubmit={this.props.isShowDashBoard}t/>
        <hr/>
        {isShowDashBoard && (
          <DashBoardContainer text="AAAAAAAA"/>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {isShowDashBoard: state.isShowDashBoard}
}
// AppContainer.defaultProps = {
//   isShowDashBoard: false
// }

// AppContainer.propTypes = {
//   isShowDashBoard: propTypes.bool
// }
export default connect(mapStateToProps)(AppContainer);
