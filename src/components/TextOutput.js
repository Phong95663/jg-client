import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const TextOutput = props => {
  const { text, grammars } = props;
  // console.log("1111111", grammars);
  const list = grammars.map(grammar => grammar.title);
  const listGrammars = list.map((grammar, index) =>
    <span key={index}>
      <Col>
        <a href="#">{grammar}</a>
      </Col>
    </span>
  );

  return (
    <Container>
      <Row>
        <Col>
          <div>{listGrammars}</div>
        </Col>
      </Row>
    </Container>
  )
}
export default TextOutput;
