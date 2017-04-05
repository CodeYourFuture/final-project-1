import React from 'react';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Header = () => (
  <Card style={{ height: '50px' }}>
    <CardTitle title="Organisation Name" style={{ float: 'left' }} />
    <CardActions style={{ float: 'left' }}>
      <FlatButton label="+ Add New" style={{ color: 'blue' }} />
    </CardActions>
    <CardText style={{ float: 'right' }}>
      Logged in as Camela
    </CardText>
    <CardActions style={{ float: 'right' }}>
      <FlatButton label="Logout >" style={{ color: 'blue' }} />
    </CardActions>

  </Card>
);

export default Header;
