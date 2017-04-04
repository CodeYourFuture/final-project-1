import React, { Component } from 'react';
import { Link } from 'react-router';
import Card from './pages/Card';
import Autocomplete from './pages/Autocomplete';
import Days from './pages/DayComp';
import SidebarElement from './pages/SidebarElement';
import logoSidebar from '../public/assets/logo-sidebar.svg';

const APIs = URL => fetch(URL)
  .then(response => response.json())
  .then(data => data.data);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      organisationList: [],
      categoriesList: [],
      postcodeList: [],
    };
    this.getService = this.getService.bind(this);
  }

  componentDidMount() {
    APIs('/api/organisation/category')
    .then(categories => this.setState({ categoriesList: categories }));

    APIs('/api/organisation/postcode')
    .then(postcodes => this.setState({ postcodeList: postcodes }));
  }

  getService(service) {
    APIs(`/api/organisation/category/${service}`)
    .then(organisation => this.setState({ organisationList: organisation }));
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
        <div className="Container">
          <div className="Header-container" >
            <div className="Search">
              Search near <Autocomplete postcods={this.state.postcodeList} />
              Day <Days />
              Services<Autocomplete postcods={this.state.postcodeList} />
            </div>
          </div>
          <div className="Result-container">
            {
              this.state.organisationList.map(organisation =>
                <Card {...organisation} key={organisation.id} />)
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
