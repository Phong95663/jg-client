import React from 'react';

const Login = props => {
  return (
  <div className="login">
    <p>Please click button below to sign in!</p>
    <button className="google" onClick={() => props.authenticate("Google")}>Log In With Google</button>
    <button className="facebook" onClick={() => props.authenticate("Facebook")}>Log In With Facebook</button>
  </div>
  )
}
export default Login;
