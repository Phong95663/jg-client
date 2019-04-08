import React, { Component } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// import axios from 'axios';

class FormInput extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // const showDashBoard = this.props
    // console.log(event.target.data);
    console.log('********', this.props)
    this.props.showOutput();
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
