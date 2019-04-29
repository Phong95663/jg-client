import React, { Component } from 'react';
import { Form, Button, Container, Navbar, Nav, FormControl, NavItem } from 'react-bootstrap';
import firebase from "firebase";
import NavLink from 'react-bootstrap/NavLink';

class NavBarComponent extends Component {
  constructor(props) {
    super(props);
  }

  logOut = () => {
    console.log("****Logout")
    localStorage.clear();
    sessionStorage.clear();
  }

  logout = async () => {
    await firebase.auth().signOut();
  };

  render() {
    const logout = this.logout;
    const { isLogin } = this.props;
    return (
      <Container>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home"><h3><b>JGrammar</b></h3></Navbar.Brand>
          <Nav className="mr-auto">
          </Nav>
          {isLogin && (
            <Nav>
              <Nav.Link><Button variant="outline-primary"> Ngữ pháp đã lưu</Button></Nav.Link>
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

export default NavBarComponent;
