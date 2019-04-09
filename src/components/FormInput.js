import React, { Component } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

class FormInput extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (event) => {
    console.log(this.props);
    event.preventDefault();
    this.props.showDashboard();
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>JG-Grammar detect </Form.Label>
                <Form.Control as="textarea" row="3" placeholder="Enter sentence" onChange={this.handleChange}/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FormInput;
