import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TextWrapper from './TextWrapper';
import GrammarDetailList from './GrammarDetailList';

const TextOutput = props => {
  const { grammars } = props;
  const listGrammars = grammars.map((grammar) =>
    <span key={grammar.id}>
      <Col>
        <TextWrapper text={grammar.title} />
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
