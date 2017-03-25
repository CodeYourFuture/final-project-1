import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';
import logoSidebar from '../design/assets/logo-sidebar.svg';

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="App">
        <div className="Sidebar">
          <img src={logoSidebar} className="hbfLogo" alt="hbfLogo" />
          <h3 className="Sidebar-title"><a href="https://useless.bit.foo">Organisations</a></h3>
          <div className="Sidebar-link">
            <p><a href="https://useless.bit.foo">Debt</a></p>
            <p><a href="https://useless.bit.foo">YP Families</a></p>
            <p><a href="https://useless.bit.foo">Women DV</a></p>
            <p><a href="https://useless.bit.foo">Trafﬁcking</a></p>
            <p><a href="https://useless.bit.foo">Destitution</a></p>
            <p><a href="https://useless.bit.foo">Mental Health Services</a></p>
            <p><a href="https://useless.bit.foo">Healthcare</a></p>
            <p><a href="https://useless.bit.foo">Debt</a></p>
            <p><a href="https://useless.bit.foo">YP Families</a></p>
            <p><a href="https://useless.bit.foo">Women DV</a></p>
            <p><a href="https://useless.bit.foo">Trafﬁcking</a></p>
            <p><a href="https://useless.bit.foo">Destitution</a></p>
            <p><a href="https://useless.bit.foo">Mental Health Services</a></p>
            <p><a href="https://useless.bit.foo">Healthcare</a></p>
            <p><a href="https://useless.bit.foo">Debt</a></p>
            <p><a href="https://useless.bit.foo">YP Families</a></p>
            <p><a href="https://useless.bit.foo">Women DV</a></p>
            <p><a href="https://useless.bit.foo">Trafﬁcking</a></p>
            <p><a href="https://useless.bit.foo">Destitution</a></p>
            <p><a href="https://useless.bit.foo">Mental Health Services</a></p>
            <p><a href="https://useless.bit.foo">Healthcare</a></p>
          </div>
          <h3 className="Sidebar-title"><a href="https://useless.bit.foo">Users</a></h3>
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
