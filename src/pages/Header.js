import React, { Component } from 'react';
import { CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import AutoComplete from 'material-ui/AutoComplete';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchType: '',
      value: -1,
    };
    this.setDisplayStatus = this.setDisplayStatus.bind(this);
    this.getSearchParameter = this.getSearchParameter.bind(this);
    this.getDayValue = this.getDayValue.bind(this);
  }
  setDisplayStatus() {
    this.props.getDisplayStatus(true);
  }
  getSearchParameter(value) {
    const parameter = [this.state.searchType, value];
    this.props.getSearchType(parameter);
  }
  getDayValue(event, values) {
    this.setState({ searchType: 'Day' });
    this.setState({ value: values }, () => {
      const selectedDay = event.target.innerText;
      this.getSearchParameter(selectedDay);
    });
  }
  render() {
    const userName = this.props.userName;
    const serviceName = this.props.serviceName;
    const serviceData = this.props.dataSourceServices;
    const postcodeData = this.props.dataSourcePostcode;
    const days = this.props.dataSourceDays;

    return (
      <Paper style={{ height: 80 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <CardTitle
            title={serviceName}
            style={{ padding: 1 }}
          />
          <div style={{ paddingTop: 10 }}>Logged in as {userName}
            <FlatButton
              label="Logout >"
              primary
              labelStyle={{ fontWeight: 'bold' }}
            />
          </div>
        </div>
        <FlatButton
          label="+ Add New"
          onClick={this.setDisplayStatus}
          style={{ marginBottom: 3, left: 2 }}
          primary
          labelStyle={{ fontWeight: 'bold' }}
        />
        <Divider />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p className="Paragraph">Search near </p>
          <AutoComplete
            hintText="Postcode"
            filter={AutoComplete.fuzzyFilter}
            dataSource={postcodeData}
            maxSearchResults={5}
            onNewRequest={this.getSearchParameter}
            onUpdateInput={() => { this.setState({ searchType: 'Postcode' }); }}
          />
          <p className="Paragraph">Day </p>
          <SelectField
            value={this.state.value}
            onChange={this.getDayValue}
          >
            {
              days.map((day, index) => <MenuItem key={day} value={index} primaryText={day} />)
            }
          </SelectField>
          <p className="Paragraph">Services </p>
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
