import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const styles = {
  boxSizing: 'border-box',
  flexGrow: 1,
  flexBasis: 0,
  padding: 2,
};
const styles2 = {
  width: 410,
  margin: 5,
  alignSelf: 'flex-start',
};
const detailStyle = {
  subtitleStyle: {
    fontWeight: 'bold',
  },
  titleStyle: {
    fontWeight: 'bold',
  },
};
class OrganisationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      detailText: '+ Detail',
    };
    this.handleExpand = this.handleExpand.bind(this);
  }
  handleExpand() {
    if (this.state.expanded) {
      this.setState({ expanded: false });
      this.setState({ detailText: '+ Detail' });
    } else {
      this.setState({ expanded: true });
      this.setState({ detailText: '- Detail' });
    }
  }
  render() {
    const Organisation = this.props;
    return (
      <Card expanded={this.state.expanded} style={styles2}>
        <div style={styles}>
          <CardHeader
            title={Organisation.Organisation}
            subtitle={`Area: ${Organisation.Area} | Borough: ${Organisation.Borough}`}
            subtitleStyle={{ fontSize: 10 }}
            titleStyle={{ color: '#28afb0', fontSize: 22, fontWeight: 'bold' }}
          />
        </div>
        <CardText>
          - {Organisation.Services}
        </CardText>
        <CardText expandable>
          <div style={{ display: 'inline-flex', justifyContent: 'space-between' }}>
            <CardHeader
              subtitleStyle={detailStyle.subtitleStyle}
              titleStyle={detailStyle.titleStyle}
              title="Process"
              subtitle={Organisation.Process}
            />
            <CardHeader
              subtitleStyle={detailStyle.subtitleStyle}
              titleStyle={detailStyle.titleStyle}
              title="Day"
              subtitle={Organisation.Day}
            />
          </div>
          <div style={{ display: 'flex', flexFlow: 'wrap', justifyContent: 'space-between' }}>
            <CardHeader
              subtitleStyle={detailStyle.subtitleStyle}
              titleStyle={detailStyle.titleStyle}
              title="Telephone"
              subtitle={Organisation.Tel}
            />
            <CardHeader
              subtitleStyle={detailStyle.subtitleStyle}
              titleStyle={detailStyle.titleStyle}
              title="Email"
              subtitle={Organisation.Email}
            />
          </div>
          <a
            style={{ marginLeft: 15 }}
            href={`${Organisation.Website}`}
            target="blank"
          >{Organisation.Website}
          </a>
        </CardText>
        <div style={{ float: 'left' }}>
          <FlatButton label="Delete" primary />
          <FlatButton label="Edit" primary />
        </div>
        <FlatButton
          label={this.state.detailText}
          style={{ float: 'right' }}
          onClick={this.handleExpand}
        />
      </Card>
    );
  }
}
export default OrganisationCard;
