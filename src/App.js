import React, { Component } from 'react';
import { Link } from 'react-router';
import myTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from './pages/Header';
import Organisation from './pages/Organisation';
import SidebarElement from './pages/SidebarElement';
import logoSidebar from '../public/assets/logo-sidebar.svg';
import APIs from './APIs';
// import OrganisationCard from './pages/OrganisationCard';
import Card from './pages/Card';

const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
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
      title: '',
    };
    this.setDisplayStatus = this.setDisplayStatus.bind(this);
    this.getSearchResult = this.getSearchResult.bind(this);
  }

  componentDidMount() {
    APIs.GetAPI('/api/organisation/services')
    .then(service => this.setState({ serviceList: service }));

    APIs.GetAPI('/api/organisation/postcode')
    .then(postcodes => this.setState({ postcodeList: postcodes }));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.category !== nextProps.params.category) {
      this.getSearchResult(nextProps.params.category);
    }
  }

  getSearchResult(searchText) {
    if (searchText[0] === 'Postcode') {
      const post = `?postcode=${searchText[1]}`;
      APIs.GetAPI(`/api/organisation/search${post}`)
      .then(organisation => this.setState({
        organisationList: organisation,
        serviceName: '',
      }));
    } else if (searchText[0] === 'Service') {
      const service = `?service=${searchText[1]}`;
      APIs.GetAPI(`/api/organisation/search${service}`)
      .then(organisation => this.setState({
        organisationList: organisation,
        serviceName: '',
      }));
    } else if (searchText[0] === 'Day') {
      const service = `?day=${searchText[1]}`;
      APIs.GetAPI(`/api/organisation/search${service}`)
      .then(organisation => this.setState({
        organisationList: organisation,
        serviceName: '',
      }));
    } else {
      APIs.GetAPI(`/api/organisation/services/${searchText}`)
      .then(organisation => this.setState({
        organisationList: organisation,
        serviceName: searchText,
      }));
    }
  }
  setDisplayStatus(status) {
    this.setState({
      displayOrgStatus: status,
      title: 'Exsisting Organisation',
    }, () => {
      APIs.GetAPI('/api/organisation/area')
      .then(area => this.setState({
        areaData: area,
      }));
      APIs.GetAPI('/api/organisation/borough')
      .then(borough => this.setState({
        boroughData: borough,
      }));
    });
  }

  render() {
    return (<MuiThemeProvider muiTheme={getMuiTheme(myTheme)}>
      <div className="App">
        <div className="Sidebar">
          <img src={logoSidebar} className="HBFLogoSidebar" alt="HBFLogo" />
          <h3 className="Sidebar-title">
            <Link
              to="/organisations"
              activeClassName="Sidebar-title-item-active"
              className="Sidebar-title-item"
            >Organisations
            </Link>
          </h3>

          <SidebarElement
            categories={this.state.serviceList}
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
              userName="Alex"
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
            <h3>{this.state.title}</h3>
            {
              this.state.organisationList.map(organisation =>
                <Card
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
