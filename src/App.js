import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <div className="Sidebar">
          <h3 className="Sidebar-title"><a href="#">Organisations</a></h3>
          <div className="Sidebar-link">
            <p><a href="#">Debt</a></p>
            <p><a href="#">YP Families</a></p>
            <p><a href="#">Women DV</a></p>
            <p><a href="#">Trafﬁcking</a></p>
            <p><a href="#">Destitution</a></p>
            <p><a href="#">Mental Health Services</a></p>
            <p><a href="#">Healthcare</a></p>
            <p><a href="#">Debt</a></p>
            <p><a href="#">YP Families</a></p>
            <p><a href="#">Women DV</a></p>
            <p><a href="#">Trafﬁcking</a></p>
            <p><a href="#">Destitution</a></p>
            <p><a href="#">Mental Health Services</a></p>
            <p><a href="#">Healthcare</a></p>
            <p><a href="#">Debt</a></p>
            <p><a href="#">YP Families</a></p>
            <p><a href="#">Women DV</a></p>
            <p><a href="#">Trafﬁcking</a></p>
            <p><a href="#">Destitution</a></p>
            <p><a href="#">Mental Health Services</a></p>
            <p><a href="#">Healthcare</a></p>
          </div>
          <h3 className="Sidebar-title"><a href="#">Users</a></h3>
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="App-navigation">
          <p>Example navigation:</p>

          <h3>Users:</h3>

          <ul>
            <li><Link to="/users">Users</Link></li>
          </ul>

          <h3>Categories (example):</h3>

          <ul>
            <li><Link to="/organisations/1">Organisation 1</Link></li>
            <li><Link to="/organisations/2">Organisation 2</Link></li>
            <li><Link to="/organisations/3">Organisation 3</Link></li>
          </ul>
        </div>

        {children}
      </div>
    );
  }
}

export default App;
