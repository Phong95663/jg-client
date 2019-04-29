import React, { Component } from 'react';
import { Modal, Button, Container } from 'react-bootstrap';
import '../style/login.css';
import NavBarComponent from './Navbar';
class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: true,
    };
  }
  render() {
    return (
      // <div className="login">
      //   <p>Please click button below to sign in!</p>
      //   <button className="google" onClick={() => props.authenticate("Google")}>Log In With Google</button>
      //   <button className="facebook" onClick={() => props.authenticate("Facebook")}>Log In With Facebook</button>
      // </div>
      <Container>
        <NavBarComponent isLogin={false}/>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title><h3 >Đăng Nhập</h3></Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <button className="google loginBtn loginBtn--google" onClick={() => this.props.authenticate("Google")}>
              Đăng nhập bằng tài khoản Google
          </button>
            <br />
            <br />
            <button className="facebook loginBtn loginBtn--facebook" onClick={() => this.props.authenticate("Facebook")}>
              Đăng nhập bằng tài khoản Facebook</button>
          </Modal.Body>
        </Modal.Dialog>
      </Container>
    )
  }
}
export default Login;
