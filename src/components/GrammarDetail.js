import React from 'react';
import '../style/GrammarDetail.css';
import { Container, Row, Card, Col, Jumbotron } from 'react-bootstrap';

const GrammarDetail = props => {
  return (
    <div>
      <Card>
        <Container>
          <Row>
            <Col>
              <div><a href="#">Lưu cấu trúc ngữ pháp này</a></div>
            </Col>
          </Row>
          <br />
          <Row className="title">
            <Col>
              <Jumbotron fluid>
                <div><b>～ことになっている</b></div>
              </Jumbotron>
            </Col>
          </Row>
          <br />
          <Row className="mean">
            <Col>
              <div>Dự định, qui tắc…</div>
            </Col>
          </Row>
          <br />
          <Row className="use">
            <Col>
              <div>
                Vる／Vない Aい → い ＋ ことになっている
                Nになっている
            </div>
            </Col>
          </Row>
          <br />
          <Row className="example">
            <ol>
              <li>
                <div>
                  今週 こんしゅう の 土曜日 どようび は 友達 ともだち と 会 あ うことになっています。
              </div>
                <div>
                  Thứ bảy tuần này tôi định gặp bạn bè
              </div>
              </li>
              <li>
                <div>
                  今週 こんしゅう の 土曜日 どようび は 友達 ともだち と 会 あ うことになっています。
              </div>
                <div>
                  Thứ bảy tuần này tôi định gặp bạn bè
              </div>
              </li>
              <li>
                <div>
                  今週 こんしゅう の 土曜日 どようび は 友達 ともだち と 会 あ うことになっています。
              </div>
                <div>
                  Thứ bảy tuần này tôi định gặp bạn bè
              </div>
              </li>
            </ol>
          </Row>
        </Container>
      </Card>
    </div>
  )
}
export default GrammarDetail;
