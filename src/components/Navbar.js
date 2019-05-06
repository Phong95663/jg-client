import React, { Component } from 'react';
import { Form, Button, Container, Navbar, Nav, FormControl, NavItem } from 'react-bootstrap';
import firebase from "firebase";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {
  setPageTitle,
  reloadState,
  fetchFavorite
} from '../actions/actions';
class NavBarComponent extends Component {
  constructor(props) {
    super(props);
  }

  logout = async () => {
    await firebase.auth().signOut();
  };

  changePage = async () => {
    if (this.props.title == 'Ngữ pháp đã lưu') {
      await this.props.setPageTitle("Phân tích ngữ pháp");
      // await this.props.reloadState();
      await this.props.fetchFavorite(this.props.uid);
      // this.props.getFavoritePage();
    } else {
      this.props.setPageTitle("Ngữ pháp đã lưu");
      // this.props
    }
  }
  render() {
    const logout = this.logout;
    const { isLogin, getFavoritePage } = this.props;
    return (
      <Container>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href=""><h3><b>JGrammar</b></h3></Navbar.Brand>
          <Nav className="mr-auto">
          </Nav>
          {isLogin && (
            <Nav>
              <Nav.Link><Button variant="outline-primary" onClick={this.changePage}>{this.props.title}</Button></Nav.Link>
            </Nav>
          )}
          {isLogin && (
            <Form inline onSubmit={logout}>
              <Button variant="outline-primary" type="submit">Đăng xuất</Button>
            </Form>
          )}
        </Navbar>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    isShowModal: state.appReducer.isShowModal,
    uid: state.appReducer.uid,
    title: state.appReducer.title
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setPageTitle,
    reloadState,
    fetchFavorite
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBarComponent);
