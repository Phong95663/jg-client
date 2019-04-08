import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
class Popup extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: true,
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  render() {
    return (
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
              </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
              </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Popup;
