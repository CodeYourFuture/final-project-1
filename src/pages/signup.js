import React, { Component } from 'react';
import '../App.css';

class Signup extends Component {
  render() {
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h3>Signup</h3>
        <form action="/signup" method="post">
          <div className="form-group">
            <p>Email</p>
            <input type="text" className="form-control" name="email" />
          </div>
          <div className="form-group">
            <p>Password</p>
            <input type="password" className="form-control" name="password" />
          </div>
          <div className="form-group">
            <p>Role</p>
            <input type="Role" className="form-control" name="Role" />
          </div>
          <button type="submit" className="btn btn-warning btn-lg">Signup</button>
        </form>
        <p>Already have an account? <a href="/login">Login</a></p>
      </div>
    );
  }
}
export default Signup;
