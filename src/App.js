import React, { Component } from 'react';
import { Link } from 'react-router';
import Card from './pages/Card';
import SidebarElement from './pages/SidebarElement';
import logoSidebar from '../public/assets/logo-sidebar.svg';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      organisationList: [],
      categoriesList: [],
    };

    this.APIs = this.APIs.bind(this);
    this.getService = this.getService.bind(this);
  }

  componentDidMount() {
    this.APIs('api/organisation/category')
    .then(categories => this.setState({ categoriesList: categories }));
  }

  getService(service) {
    this.APIs(`api/organisation/category/${service}`)
    .then(organisation => this.setState({ organisationList: organisation }));
  }

  APIs(URL) {
    return fetch(URL)
    .then(response => response.json())
    .then(data => data.data);
  }
  render() {
    return (
      <div className="App">
        <div className="Sidebar">
          <img src={logoSidebar} className="HBFLogoSidebar" alt="HBFLogo" />
          <h3 className="Sidebar-title">
            <Link
              to="/organisations/all"
              activeClassName="Sidebar-title-item-active"
              className="Sidebar-title-item"
            >Organisations
            </Link>
          </h3>
          <SidebarElement categories={this.state.categoriesList} service={this.getService} />
        </div>
        <div>
          {
            this.state.organisationList.map(organisation =>
              <Card {...organisation} key={organisation.id} />)
          }
        </div>
      </div>
    );
  }
}

export default App;
