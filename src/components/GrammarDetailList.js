import React, { Component } from 'react';
import { Form, Button, Container, Modal} from 'react-bootstrap';
import GrammarDetail from './GrammarDetail';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {
  showModal,
  closeModal,
} from '../actions/actions';
class GrammarDetailList extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: true,
    };
  }

  handleClose() {
    this.props.closeModal();
  }

  handleShow() {
    this.props.showModal();
  }

  checkFavorite = () => {
    this.props.grammarsByTitle.map(grammar => {

    })
  }
  render() {
    const { grammarsByTitle, isShowModal } = this.props;
    return (
      <>
        <Modal show={isShowModal} onHide={this.handleClose} size="lg">
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body style={{ 'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto' }}>
            <ul>{
              grammarsByTitle.map(grammar => {
                return (
                  <li key={grammar._id}>
                    <GrammarDetail
                      uid={this.props.uid}
                      context={grammar}
                    />
                  </li>
                )
              })
            }</ul>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    isShowModal: state.appReducer.isShowModal,
    uid: state.appReducer.uid
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    showModal,
    closeModal,
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(GrammarDetailList);
