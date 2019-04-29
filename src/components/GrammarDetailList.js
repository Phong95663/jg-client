import React, { Component } from 'react';
import { Form, Button, Container, Modal} from 'react-bootstrap';
import GrammarDetail from './GrammarDetail';
class GrammarDetailList extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose} size="lg">
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body style={{ 'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto' }}>
            <GrammarDetail />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default GrammarDetailList;
