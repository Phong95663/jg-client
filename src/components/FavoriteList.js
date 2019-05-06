import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import FavoriteCard from './FavoriteCard';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {
  fetchFavorite,
  fetchDetailFavorite,
  reloadState,
  clickFavorite,
  closeAlert,
  setAlertContent,
  showAlert,
  deleteFavorite
} from '../actions/actions';
import Alert from './Alert';

class FavoriteList extends Component {
  constructor(props) {
    super(props);

  }

  // componentDidMount() {
  //   console.log("--------------------------------mount")
  //   this.props.fetchFavorite(this.props.uid)
  // }

  clickContent = (grammar) => {
    this.props.clickFavorite(grammar)
  }


  chunk = (array, size) => {
    const chunked_arr = [];
    let copied = [...array]; // ES6 destructuring
    const numOfChild = Math.ceil(copied.length / size); // Round up to the nearest integer
    for (let i = 0; i < numOfChild; i++) {
      chunked_arr.push(copied.splice(0, size));
    }
    return chunked_arr;
  }

  onConfirmAlert = (id) => {
    // this.props.setAlertContent("Bạn muốn xóa mẫu ngữ pháp này?")
    // this.props.showAlert()
    this.props.deleteFavorite(id)
  }

  // onCancelAlert = () => {
  //   this.props.closeAlert()
  // }
  render() {
    const { grammar } = this.props;
    const chunkArr = this.chunk(grammar, 3)
    return (
      <Container>
        {chunkArr.map((chunk, index) => (
          <div key={index}>
          <Row>
            {chunk.map(favorite => (
              <Col md={4} key={favorite._id}>
                <FavoriteCard
                  grammarDetail={favorite}
                  // clickContent={this.clickContent(favorite)}
                  favorite_id={favorite.favorite_id}
                  remove={this.onConfirmAlert}
                  onConfirmAlert={this.onConfirmAlert}
                  onCancelAlert={this.onCancelAlert}
                />
              </Col>
            ))}
          </Row>
            <br />
          </div>
        ))}
        {/* <Alert
          isShowAlert={this.props.isShowAlert}
          text={this.props.contentAlert}
          onConfirm={this.onConfirmAlert}
          onCancel={this.onCancelAlert}
        /> */}
      </Container>
    )
  }
}
const mapStateToProps = state => {
  return {
    grammar: state.appReducer.grammar,
    favorites: state.appReducer.favorites,
    uid: state.appReducer.uid,
    isShowAlert: state.appReducer.isShowAlert,
    contentAlert: state.appReducer.contentAlert
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchFavorite,
    fetchDetailFavorite,
    reloadState,
    clickFavorite,
    // closeAlert,
    setAlertContent,
    showAlert,
    deleteFavorite
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);
