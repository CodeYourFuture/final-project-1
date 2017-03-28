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
          <img src={logoSidebar} className="HBFLogoSidebar" alt="HBFLogo" />
          <h3 className="Sidebar-title"><Link to="/organisations/all" activeClassName="Sidebar-title-item-active" className="Sidebar-title-item">Organisations</Link></h3>
          <div className="Sidebar-link">
            <p><Link to="/organisations/1" activeClassName="Sidebar-link-item-active" className="Sidebar-link-item">Benefits</Link></p>
            <p><Link to="/organisations/2" activeClassName="Sidebar-link-item-active" className="Sidebar-link-item">Debt</Link></p>
            <p><Link to="/organisations/3" activeClassName="Sidebar-link-item-active" className="Sidebar-link-item">Destitution</Link></p>
            <p><Link to="/organisations/4" activeClassName="Sidebar-link-item-active" className="Sidebar-link-item">Education</Link></p>
            <p><Link to="/organisations/5" activeClassName="Sidebar-link-item-active" className="Sidebar-link-item">Employment</Link></p>
            <p><Link to="/organisations/6" activeClassName="Sidebar-link-item-active" className="Sidebar-link-item">Families</Link></p>
            <p><Link to="/organisations/7" activeClassName="Sidebar-link-item-active" className="Sidebar-link-item">Gender Based Violence</Link></p>
            <p><Link to="/organisations/8" activeClassName="Sidebar-link-item-active" className="Sidebar-link-item">Healthcare</Link></p>
            <p><Link to="/organisations/9" activeClassName="Sidebar-link-item-active" className="Sidebar-link-item">Housing</Link></p>
            <p><Link to="/organisations/10" activeClassName="Sidebar-link-item-active" className="Sidebar-link-item">Immigration</Link></p>
            <p><Link to="/organisations/11" activeClassName="Sidebar-link-item-active" className="Sidebar-link-item">LGBTQI</Link></p>
            <p><Link to="/organisations/12" activeClassName="Sidebar-link-item-active" className="Sidebar-link-item">Mental Health Services</Link></p>
            <p><Link to="/organisations/13" activeClassName="Sidebar-link-item-active" className="Sidebar-link-item">Social and Other</Link></p>
            <p><Link to="/organisations/14" activeClassName="Sidebar-link-item-active" className="Sidebar-link-item">Trafficking</Link></p>
            <p><Link to="/organisations/17" activeClassName="Sidebar-link-item-active" className="Sidebar-link-item">Women</Link></p>
            <p><Link to="/organisations/17" activeClassName="Sidebar-link-item-active" className="Sidebar-link-item">Volunteering</Link></p>
            <p><Link to="/organisations/18" activeClassName="Sidebar-link-item-active" className="Sidebar-link-item">Young People and Children</Link></p>
          </div>
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
