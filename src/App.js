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
import APIs from './APIs';

const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      organisationList: [],
      serviceList: [],
      postcodeList: [],
      areaData: [],
      boroughData: [],
      searchType: '',
      serviceName: '',
      displayOrgStatus: false,
    };
    this.setDisplayStatus = this.setDisplayStatus.bind(this);
    this.getSearchResult = this.getSearchResult.bind(this);
  }

  componentDidMount() {
    APIs.API('/api/organisation/services')
    .then(service => this.setState({ serviceList: service }));

    APIs.API('/api/organisation/postcode')
    .then(postcodes => this.setState({ postcodeList: postcodes }));
  }
  getSearchResult(searchText) {
    if (searchText[0] === 'Postcode') {
      const post = `?postcode=${searchText[1]}`;
      APIs.API(`/api/organisation/search${post}`)
      .then(organisation => this.setState({
        organisationList: organisation,
        serviceName: '',
      }));
    } else if (searchText[0] === 'Service') {
      const service = `?service=${searchText[1]}`;
      APIs.API(`/api/organisation/search${service}`)
      .then(organisation => this.setState({
        organisationList: organisation,
        serviceName: '',
      }));
    } else if (searchText[0] === 'Day') {
      const service = `?day=${searchText[1]}`;
      APIs.API(`/api/organisation/search${service}`)
      .then(organisation => this.setState({
        organisationList: organisation,
        serviceName: '',
      }));
    } else {
      APIs.API(`/api/organisation/services/${searchText}`)
      .then(organisation => this.setState({
        organisationList: organisation,
        serviceName: searchText,
      }));
    }
  }
  setDisplayStatus(status) {
    this.setState({ displayOrgStatus: status });
    APIs.API('/api/organisation/area')
    .then(area => this.setState({
      areaData: area,
    }));
    APIs.API('/api/organisation/borough')
    .then(borough => this.setState({
      boroughData: borough,
    }));
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

          <SidebarElement
            categories={this.state.serviceList}
            service={this.getSearchResult}
          />
        </div>
        <div className="Container">
          <div className="Header-container" >

            <Header
              dataSourceServices={this.state.serviceList}
              dataSourcePostcode={this.state.postcodeList}
              getSearchType={this.getSearchResult}
              getDisplayStatus={this.setDisplayStatus}
              serviceName={this.state.serviceName}
              userName="Sentayhu"
              dataSourceDays={weekDays}
            />
          </div>
          <div className="Result-container" >

            {
              this.state.displayOrgStatus ?
                <Organisation
                  displayState={this.state.displayOrgStatus}
                  category={this.state.serviceList}
                  updateDisplayStatus={this.setDisplayStatus}
                  dataSourceDays={weekDays}
                  dataSourceArea={this.state.areaData}
                  dataSourceBorough={this.state.boroughData}
                /> : null
            }

            {
              this.state.organisationList.map(organisation =>
                <OrganisationCard
                  {...organisation}
                  key={organisation[1]}
                />)
            }
          </div>
        </div>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
