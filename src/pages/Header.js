import React from 'react';
import { CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

const Header = () => (
  <Paper style={{ height: 80 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <CardTitle
        title="Service Name"
        style={{ paddingBottom: 0 }}
      />
      <div style={{ paddingTop: 10 }}>Logged in as Camel
        <FlatButton label="Logout >" />
      </div>
    </div>
    <FlatButton label="+ Add New" style={{ top: 0, left: 2 }} primary />
  </Paper>
);

export default Header;
