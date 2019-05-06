import React, { Component } from 'react';
import '../style/textWrapper.css'
import client from '../utils/apiCall';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {
  getGrammars,
  showModal
} from '../actions/actions';
class TextWrapper extends Component {
  constructor(props) {
    super(props);
  }

  click = (e) => {
    e.preventDefault();
    console.log("text", this.props);
    this.props.showModal();
    let data = this.props.text;
    this.props.getGrammars({ data: data });
  }
  render() {
    const { text } = this.props;
    return (
      <span className='text-wrapper' onClick={this.click}>{text}</span>
    )
  }

}
const mapStateToProps = state => {
  return {
    isShowModal: state.appReducer.isShowModal,
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getGrammars,
    showModal
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TextWrapper);
