import React, { Component } from 'react'
import { Container, Card, Row, Col, Button, Jumbotron, Modal } from 'react-bootstrap';
import { connect } from "react-redux";
import '../style/favoriteCard.css'
import { bindActionCreators } from 'redux';
import {
  fetchDetailFavorite,
  deleteFavorite,
  showModal,
  closeModal,
  fetchGrammarsByTitle,
  showAlert,
  fetchFavorite,
  // closeAlert,
  setAlertContent,
  reloadState
} from '../actions/actions';
import GrammarDetail from './GrammarDetail';
class FavoriteCard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    // console.log("------------------12", this.props.grammar)
    // this.props.fetchDetailFavorite(this.props.grammar_id);
    // console.log(this.props.grammar)
  }

  handleAlert = async () => {
    // this.props.setAlertContent("Bạn muốn xóa mẫu ngữ pháp này?")
    // this.props.showAlert()
    await this.props.deleteFavorite(this.props.favorite_id);
    // await this.props.reloadState();
    await this.props.fetchFavorite(this.props.uid);
  }

  showDetail = (e) => {
    e.preventDefault();
    this.props.showModal();
    let grammar = this.props.grammarDetail
    this.props.fetchGrammarsByTitle([grammar])
  }

  handleClose = () => {
    this.props.closeModal();
  }

  handleShow = () => {
    this.props.showModal();
  }
  render() {
    const { grammarDetail, isShowModal } = this.props;
    return (
      <Container >
        <Card>
          <div className="content" onClick={this.showDetail}>
            <div className="title"><b>{grammarDetail.title}</b></div>
            <div className="mean"><i>{grammarDetail.mean}</i></div>
          </div>
          <Button size='sm' variant="outline-danger" onClick={this.handleAlert}>Xóa</Button>
        </Card>
      </Container>
    )
  }
}
const mapStateToProps = state => {
  return {
    grammar: state.appReducer.grammar,
    favorites: state.appReducer.favorites,
    uid: state.appReducer.uid,
    isShowModal: state.appReducer.isShowModal
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchDetailFavorite,
    deleteFavorite,
    showModal,
    closeModal,
    fetchGrammarsByTitle,
    showAlert,
    fetchFavorite,
    // closeAlert,
    setAlertContent,
    reloadState
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCard);
