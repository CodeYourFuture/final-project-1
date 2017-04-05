import React from 'react';
import { CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

const Header = () => (
  <Paper style={{ height: 60, display: 'flex' }}>
    <CardTitle title="Organisation Name" style={{ float: 'left', position: 'relative' }} />
    <p> Logged in as Camel </p>
    <FlatButton label="Logout >" />
    <Divider />
    <FlatButton label="+ Add New" />
  </Paper>
);

export default Header;
