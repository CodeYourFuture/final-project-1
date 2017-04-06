import React, { Component } from 'react';
import { CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import AutoComplete from 'material-ui/AutoComplete';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const items = [
  <MenuItem key={1} value={1} primaryText="Monday" />,
  <MenuItem key={2} value={2} primaryText="Tuesday" />,
  <MenuItem key={3} value={3} primaryText="Wednesday" />,
  <MenuItem key={4} value={4} primaryText="Thursday" />,
  <MenuItem key={5} value={5} primaryText="Friday" />,
  <MenuItem key={6} value={6} primaryText="Saturday" />,
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchType: '',
      value: 0,
    };
    this.setDisplayStatus = this.setDisplayStatus.bind(this);
    this.getSearchParameter = this.getSearchParameter.bind(this);
    this.getDayValue = this.getDayValue.bind(this);
  }
  setDisplayStatus() {
    this.props.getDisplayStatus(true);
  }
  getSearchParameter(value) {
    console.log(this.state.searchType);
    const parameter = [this.state.searchType, value];
    this.props.getSearchType(parameter);
  }
  getDayValue(event, key, values) {
    const selectedDay = event.nativeEvent.target.innerText;
    this.setState({ searchType: 'Day' });
    this.setState({ value: values });
    this.getSearchParameter(selectedDay);
  }
  render() {
    const userName = this.props.userName;
    const serviceName = this.props.serviceName;
    const serviceData = this.props.dataSourceServices;
    const postcodeData = this.props.dataSourcePostcode;
    return (
      <Paper style={{ height: 80 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <CardTitle
            title={serviceName}
            style={{ paddingBottom: 0 }}
          />
          <div style={{ paddingTop: 10 }}>Logged in as {userName}
            <FlatButton
              label="Logout >"
              primary
            />
          </div>
        </div>
        <FlatButton
          label="+ Add New"
          onClick={this.setDisplayStatus}
          style={{ top: 0, left: 2 }}
          primary
        />
        <Divider />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>Search near </p>
          <AutoComplete
            hintText="Postcode"
            filter={AutoComplete.fuzzyFilter}
            dataSource={postcodeData}
            maxSearchResults={5}
            onNewRequest={this.getSearchParameter}
            onUpdateInput={() => { this.setState({ searchType: 'Postcode' }); }}
          />
          <p>Day </p>
          <SelectField
            value={this.state.value}
            onChange={this.getDayValue}
          >
            {items}
          </SelectField>
          <p>Services </p>
          <AutoComplete
            hintText="Services"
            filter={AutoComplete.fuzzyFilter}
            dataSource={serviceData}
            maxSearchResults={5}
            onNewRequest={this.getSearchParameter}
            onUpdateInput={() => { this.setState({ searchType: 'Service' }); }}
          />
        </div>
      </Paper>
    );
  }
}

export default Header;
