import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import login from './pages/login';

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={login}>
          <Route path="home" component={App} />
          <Route path="organisations" component={App} />
          <Route path="organisations/:category" component={App} />
        </Route>
      </Router>
    );
  }
}

export default Routes;
