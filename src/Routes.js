import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import OrganisationPage from './pages/Organisation';
import UsersPage from './pages/Users';

class Routes extends Component {
  render() {
    return(
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="organisations/:id" component={OrganisationPage} />
          <Route path="users" component={UsersPage} />
        </Route>
      </Router>
    );
  }
}

export default Routes;
