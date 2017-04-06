import React, { Component } from 'react';
import { Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import myTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AutoComplete from 'material-ui/AutoComplete';

import Header from './pages/Header';
import Organisation from './pages/Organisation';
import Card from './pages/Card';
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
    };
    this.getService = this.getService.bind(this);
    this.getSearchResult = this.getSearchResult.bind(this);
  }

  componentDidMount() {
    injectTapEventPlugin();
    APIs('/api/organisation/category')
    .then(categories => this.setState({ categoriesList: categories }));

    APIs('/api/organisation/postcode')
    .then(postcodes => this.setState({ postcodeList: postcodes }));
  }
  getSearchResult(searchText) {
    if (this.state.searchType === 'Postcode') {
      const post = `?Postcode=${searchText}`;
      APIs(`/api/organisation/search${post}`)
      .then(organisation => this.setState({ organisationList: organisation }));
    } else if (this.state.searchType === 'Service') {
      const service = `?Services=${searchText}`;
      APIs(`/api/organisation/search${service}`)
      .then(organisation => this.setState({ organisationList: organisation }));
    }
  }
  getService(service) {
    APIs(`/api/organisation/category/${service}`)
    .then(organisation => this.setState({ organisationList: organisation }));
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
          <SidebarElement categories={this.state.categoriesList} service={this.getService} />
        </div>
        <div className="Container">
          <div className="Header-container" >
            <Header />
            <div className="Search">
              <p>Search near </p>
              <AutoComplete
                hintText="Postcode"
                filter={AutoComplete.fuzzyFilter}
                dataSource={this.state.postcodeList}
                maxSearchResults={5}
                onNewRequest={this.getSearchResult}
                onUpdateInput={() => { this.setState({ searchType: 'Postcode' }); }}
              />
              <p>Services </p>
              <AutoComplete
                hintText="Services"
                filter={AutoComplete.fuzzyFilter}
                dataSource={this.state.categoriesList}
                maxSearchResults={5}
                onNewRequest={this.getSearchResult}
                onUpdateInput={() => { this.setState({ searchType: 'Service' }); }}
              />
            </div>
          </div>
          <div className="Result-container">
            <Organisation category={this.state.categoriesList} />
            {
              this.state.organisationList.map(organisation =>
                <Card {...organisation} key={organisation.id} />)
            }
          </div>
        </div>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
