import React, { Component } from 'react';
import '../style/GrammarDetail.css';
import { Container, Row, Card, Col, Jumbotron, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {
  showModal,
  closeModal,
  addFavorite,
  fetchFavorite,
  showAlert,
  setAlertContent,
  reloadState
} from '../actions/actions';

class GrammarDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: false,
      hideButton: false
    }
  }
  click = async (e) => {
    console.log(this.props)
    let data = {user: this.props.uid, grammar: this.props.context._id}
    e.preventDefault();
    await this.props.addFavorite(data);
    await this.props.setAlertContent("Đã đánh dấu mẫu ngữ pháp");
    await this.props.showAlert();
    await this.props.reloadState();
    await this.props.fetchFavorite(this.props.uid);
    // this.setState({hideButton: true})
    // this.props.fetchFavorite(this.props.uid)
  }

  isNotFavorite = (context) => {
    console.log("aaaaaaaaa", context)
    const arr = this.props.favorites
    let check = arr.map(favorite =>
      favorite.grammar == context._id ? false : true
    )
    if (check.includes(false)) {
      return false
    } else {
      return true
    }
  }

  componentDidMount = () => {
    this.isNotFavorite(this.props.context)
  }
  render() {
    const { context } = this.props;
    return (
      <div>
        <Card>
          <Container>
            <Row>
              <Col>
                <br />
                {this.isNotFavorite(context)  && (<Button className="favorite pull-right" variant="success" size="sm"><span onClick={this.click}>Lưu</span></Button>)}
              </Col>
            </Row>
            <br />
            <Row className="title">
              <Col>
                <Jumbotron fluid>
                  <div><b>{context.title}</b></div>
                </Jumbotron>
              </Col>
            </Row>
            <br />
            <Row className="mean">
              <Col>
                <div>{context.mean}</div>
              </Col>
            </Row>
            <br />
            <Row className="explain">
              <Col>
                <div>{context.explain}</div>
              </Col>
            </Row>
            <br />
            <Row className="use">
              <Col>
                <div>
                  {context.use}
                </div>
              </Col>
            </Row>
            <br />
            <Row className="example">
              <ol>
                {context.examples.map((example, index) => (
                  <li key={index}>
                    <div>
                      {example.ja}
                    </div>
                    <div>
                      {example.vi}
                    </div>
                  </li>
                ))}
              </ol>
            </Row>
          </Container>
        </Card>
        <br />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    isShowModal: state.appReducer.isShowModal,
    uid: state.appReducer.uid,
    favorites: state.appReducer.favorites
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    showModal,
    closeModal,
    addFavorite,
    fetchFavorite,
    showAlert,
    setAlertContent,
    reloadState
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(GrammarDetail);
