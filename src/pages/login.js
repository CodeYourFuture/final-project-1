import React, { Component } from 'react';
import '../App.css';
import APIs from '../APIs';

// import LogoHomePage from '../public/assets/logo-homepage.svg'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    fetch('/api/session', {
      method: 'post',
      body: JSON.stringify(this.getState()),
    }).then(function (response) {
      console.log('I have a response for you', response)
      // let token = read from the response object
      // APIs.AuthToken = token;
    });

  }
  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    })
  }
  render() {
    return (
      <div className="login-container">
        <div className="login-dashboard">
          <h3 className="title-dashboard">Helen Bamber Foundation </h3>
          <h4 className="subtitle-dashboard">Directory of services </h4>
          <form onSubmit={this.handleSubmit}>
            <div className="email-container">
              <p>Email</p>
              <input value={this.state.email} onChange={this.handleEmailChange} type="text" className="form-control" name="email" />
            </div>
            <div className="email-container">
              <p>Password</p>
              <input value={this.state.password} onChange={this.handlePasswordChange} type="password" className="form-control" name="password" />
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
