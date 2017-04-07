import React, { Component } from 'react';
import { Link } from 'react-router';
import myTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from './pages/Header';
import OrganisationCard from './pages/OrganisationCard';
import Organisation from './pages/Organisation';
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
      searchType: '',
      serviceName: '',
      displayOrgStatus: false,
    };
    this.setDisplayStatus = this.setDisplayStatus.bind(this);
    this.getSearchResult = this.getSearchResult.bind(this);
  }

  componentDidMount() {
    APIs('/api/organisation/category')
    .then(categories => this.setState({ categoriesList: categories }));

    APIs('/api/organisation/postcode')
    .then(postcodes => this.setState({ postcodeList: postcodes }));
  }
  getSearchResult(searchText) {
    if (searchText[0] === 'Postcode') {
      const post = `?Postcode=${searchText[1]}`;
      APIs(`/api/organisation/search${post}`)
      .then(organisation => this.setState({ organisationList: organisation }));
    } else if (searchText[0] === 'Service') {
      const service = `?Services=${searchText[1]}`;
      APIs(`/api/organisation/search${service}`)
      .then(organisation => this.setState({
        organisationList: organisation,
        serviceName: searchText[1],
      }));
    } else if (searchText[0] === 'Day') {
      const service = `?Day=${searchText[1]}`;
      APIs(`/api/organisation/search${service}`)
      .then(organisation => this.setState({
        organisationList: organisation,
      }));
    } else {
      APIs(`/api/organisation/category/${searchText}`)
      .then(organisation => this.setState({
        organisationList: organisation,
        serviceName: searchText,
      }));
    }
  }
  setDisplayStatus(status) {
    this.setState({ displayOrgStatus: status });
  }
  render() {
    return (<MuiThemeProvider muiTheme={getMuiTheme(myTheme)}>
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
          <SidebarElement categories={this.state.categoriesList} service={this.getSearchResult} />
        </div>
        <div className="Container">
          <div className="Header-container" >
            <Header
              dataSourceServices={this.state.categoriesList}
              dataSourcePostcode={this.state.postcodeList}
              getSearchType={this.getSearchResult}
              getDisplayStatus={this.setDisplayStatus}
              serviceName={this.state.serviceName}
              userName="Sentayhu"
            />
          </div>
          <div className="Result-container">
            <Organisation
              displayState={this.state.displayOrgStatus}
              category={this.state.categoriesList}
              updateDisplayStatus={this.setDisplayStatus}
            />
            {
              this.state.organisationList.map(organisation =>
                <OrganisationCard {...organisation} key={organisation.Organisation} />)
            }
          </div>
        </div>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
