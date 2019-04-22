import React, { Component } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

class FormInput extends Component {

  renderField = ({ input, label }) => (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control {... input} as="textarea" row="3" placeholder="Enter sentence" />
    </Form.Group>
  )

  render() {
    const { handleSubmit } = this.props;
    return (
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Field name='data' component={this.renderField} label="Grammar check" />
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

export default reduxForm({ form: 'input' })(FormInput);
