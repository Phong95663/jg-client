import React, { Component } from 'react'
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {
  showAlert,
  closeAlert,
  setAlertContent
} from '../actions/actions';
class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  render() {
    return (
      <div>
        <SweetAlert
          // showCancelButton
          show={this.props.isShowAlert}
          title=""
          html
          text={this.props.contentAlert}
          onConfirm={()=> this.props.closeAlert()}
          // onCancel={this.props.onCancel()}
        />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    isShowAlert: state.appReducer.isShowAlert,
    contentAlert: state.appReducer.contentAlert
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    closeAlert,
    setAlertContent,
    showAlert,
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Alert);
