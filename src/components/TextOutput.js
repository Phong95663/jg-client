import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
class TextOutput extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const text = this.props;
    return(
      <Container>
        <Row>
          <Col>
            <div>{text}</div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TextOutput;
