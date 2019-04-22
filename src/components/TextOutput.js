import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TextOutput = props => {
  const { text } = props;
  return (
    <Container>
      <Row>
        <Col>
          <div>{text}</div>
        </Col>
      </Row>
    </Container>
  )
}
export default TextOutput;
