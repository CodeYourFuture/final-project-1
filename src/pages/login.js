import React, { Component } from 'react';
import '../App.css';

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-sm-6 col-sm-offset-3">
          <h3>Helen Bamber Foundation </h3>
          <h4>Directory of services </h4>
          <form action="/login" method="post">
            <div className="form-group">
              <p>Email</p>
              <input type="text" className="form-control" name="email" />
            </div>
            <div className="form-group">
              <p>Password</p>
              <input type="password" className="form-control" name="password" />
            </div>
            <button type="submit" className="btn btn-warning btn-lg">Login</button>
          </form>
          <p>Need an account? <a href="/signup">Signup</a></p>
        </div>
      </div>
    );
  }
}

export default Login;
