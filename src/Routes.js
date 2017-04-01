import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import UsersPage from './pages/Users';

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="users" component={UsersPage} />
        </Route>
      </Router>
    );
  }
}

export default Routes;
