import React, { Component } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

class FormInput extends Component {

  renderField = ({ input, label }) => (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control {... input} as="textarea" rows="7" placeholder="Nhập văn bản tiếng Nhật" />
    </Form.Group>
  )

  render() {
    const { handleSubmit } = this.props;
    return (
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <h4>
                <b>
                  <Field name='data' component={this.renderField} label="Phân tích ngữ pháp" />
                </b>
              </h4>
              <Button variant="primary" type="submit">
                Phân tích
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default reduxForm({ form: 'input' })(FormInput);
