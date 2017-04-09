import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import { Card, CardActions, CardTitle } from 'material-ui/Card';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import { blue500, white } from 'material-ui/styles/colors';
import Subheader from 'material-ui/Subheader';
import { GridList, GridTile } from 'material-ui/GridList';
import Dialog from 'material-ui/Dialog';
import APIs from '../APIs';

const style = {
  floatingLabelStyle: {
    color: '#37392e',
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
};

class Organisation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueBorough: 0,
      valueArea: 0,
      valueDay: [],
      area: '',
      borough: '',
      day: [],
      category: [],
      openDialog: false,
    };
    this.handleCancel = this.handleCancel.bind(this);
    this.setBoroughValue = this.setBoroughValue.bind(this);
    this.setAreaValue = this.setAreaValue.bind(this);
    this.setBoroughValue = this.setBoroughValue.bind(this);
    this.setDayValue = this.setDayValue.bind(this);
    this.setCategoriesValue = this.setCategoriesValue.bind(this);
    this.handelCloseDialog = this.handelCloseDialog.bind(this);
    this.prepareJsonData = this.prepareJsonData.bind(this);
    this.postData = this.postData.bind(this);
  }
  setBoroughValue(event, key, value) {
    this.setState({ valueBorough: value });
    this.setState({ borough: event.target.innerText });
  }
  setAreaValue(event, key, value) {
    this.setState({ valueArea: value });
    this.setState({ area: event.target.innerText });
  }
  setDayValue(event, index, valueDay) {
    this.setState({ valueDay });
    this.setState({ day: this.state.valueDay });
  }
  setCategoriesValue(event) {
    if (event.target.checked) {
      const newArray = [...this.state.category, event.target.id];
      this.setState({ category: newArray });
    } else {
      this.setState({
        category: this.state.category.filter(category =>
          category !== event.target.id),
      });
    }
  }
  handleCancel() {
    this.props.updateDisplayStatus(false);
  }
  handelOpenDialog() {
    this.setState({ openDialog: true });
  }
  handelCloseDialog() {
    this.setState({ openDialog: false });
  }
  prepareJsonData() {
    const data = {
      Organisation: this.orgNameElement.input.value,
      Clients: [],
      Area: this.state.area,
      Category: this.state.category,
      Email: this.emailElement.input.value,
      Website: this.websiteElement.input.value,
      Day: this.state.day,
      Tel: this.telElement.input.value,
      Process: this.processElement.input.value,
      Postcode: this.postCodeElement.input.value,
      Services: this.serviceElement.input.value,
      Borough: this.state.borough,
    };
    return data;
  }
  postData() {
    const options = {
      method: 'POST',
      body: JSON.stringify(this.prepareJsonData()),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    console.log(this.prepareJsonData());
    fetch('/api/organisation/post', options)
    .then((res) => {
      console.log(res.status);
    })
    .catch(() => console.log('not successful'));
  }
  render() {
    const { category, dataSourceArea, dataSourceBorough, dataSourceDays } = this.props;
    const { valueDay } = this.state;
    const actionsButtons = [
      <FlatButton
        label="No"
        primary
        onClick={this.handelCloseDialog}
      />,
      <FlatButton
        label="Yes"
        primary
        onClick={this.handelCloseDialog}
      />,
    ];
    return (
      <Card style={{ padding: 20, margin: 10 }}>
        <CardTitle title="Add New Organisation" style={{ width: 500 }} />
        <TextField
          ref={field => this.orgNameElement = field}
          hintText="Type text..."
          floatingLabelText="Organisation name"
          floatingLabelFixed
          floatingLabelStyle={style.floatingLabelStyle}
          floatingLabelFocusStyle={style.floatingLabelFocusStyle}
          errorText="This field is required."
          onChange={this.handleTextValue}
        />
        <SelectField
          value={this.state.valueArea}
          floatingLabelText="Area"
          floatingLabelStyle={style.floatingLabelStyle}
          floatingLabelFocusStyle={style.floatingLabelFocusStyle}
          errorText="This field is required."
          onChange={this.setAreaValue}
        >
          {
            dataSourceArea.map((area, index) =>
              <MenuItem key={area} value={index} primaryText={area} />)
          }
        </SelectField>

        <SelectField
          value={this.state.valueBorough}
          floatingLabelText="Borough"
          floatingLabelStyle={style.floatingLabelStyle}
          floatingLabelFocusStyle={style.floatingLabelFocusStyle}
          errorText="This field is required."
          onChange={this.setBoroughValue}
        >
          {
            dataSourceBorough.map((borough, index) =>
              <MenuItem key={borough} value={index} primaryText={borough} />)
          }
        </SelectField>

        <Divider />
        <TextField
          ref={field => this.processElement = field}
          id="process"
          hintText="Type text..."
          floatingLabelText="Process"
          floatingLabelFixed
          floatingLabelStyle={style.floatingLabelStyle}
          floatingLabelFocusStyle={style.floatingLabelFocusStyle}
        />
        <SelectField
          multiple
          hintText="Select a Day"
          value={valueDay}
          onChange={this.setDayValue}
        >
          {
            dataSourceDays.map(name => (
              <MenuItem
                key={name}
                insetChildren
                checked={valueDay && valueDay.includes(name)}
                value={name}
                primaryText={name}
              />))
          }
        </SelectField>
        <TextField
          ref={field => this.postCodeElement = field}
          hintText="Type text..."
          floatingLabelText="Postcode"
          floatingLabelFixed
          floatingLabelStyle={style.floatingLabelStyle}
          floatingLabelFocusStyle={style.floatingLabelFocusStyle}
          errorText="This field is required."
        />
        <Divider />
        <TextField
          ref={field => this.websiteElement = field}
          hintText="http://"
          floatingLabelText="Website"
          floatingLabelFixed
          floatingLabelStyle={style.floatingLabelStyle}
          floatingLabelFocusStyle={style.floatingLabelFocusStyle}
        />
        <TextField
          ref={field => this.telElement = field}
          hintText="Type text..."
          floatingLabelText="Telephone"
          floatingLabelFixed
          floatingLabelStyle={style.floatingLabelStyle}
          floatingLabelFocusStyle={style.floatingLabelFocusStyle}
          errorText="This field is required."
        />
        <TextField
          ref={field => this.emailElement = field}
          hintText="Type text..."
          floatingLabelText="E-mail"
          floatingLabelFixed
          floatingLabelStyle={style.floatingLabelStyle}
          floatingLabelFocusStyle={style.floatingLabelFocusStyle}
          errorText="This field is required."
        />
        <Divider style={{ display: 'flex' }} />
        <TextField
          ref={field => this.serviceElement = field}
          hintText="Type text..."
          floatingLabelText="Services"
          multiLine
          rows={5}
          floatingLabelStyle={style.floatingLabelStyle}
          floatingLabelFocusStyle={style.floatingLabelFocusStyle}
          errorText="This field is required."
        />

        <div style={{ float: 'right', marginRight: 20, border: blue500 }}>
          <Subheader>Categories</Subheader>
          <GridList
            cellHeight={20}
            style={{ width: 300, height: 100, overflowY: 'auto' }}
          >
            {
                category.map(categories =>
                  <GridTile key={categories}>
                    <Checkbox
                      id={categories}
                      label={categories}
                      key={categories}
                      onCheck={this.setCategoriesValue}
                    />
                  </GridTile>)
              }

          </GridList>
        </div>
        <Divider />
        <CardActions style={{ float: 'right' }}>
          <FlatButton
            label="Cancel"
            backgroundColor="#37392e"
            hoverColor="#8AA62F"
            style={{ width: 150, color: white }}
            onClick={this.handleCancel}
            labelStyle={{ fontWeight: 'bold' }}
          />
          <FlatButton
            label="Save"
            backgroundColor="#28afb0"
            hoverColor="#8AA62F"
            style={{ width: 150, color: white }}
            labelStyle={{ fontWeight: 'bold' }}
            onClick={this.handelOpenDialog}
          />
          <Dialog
            actions={actionsButtons}
            modal={false}
            open={this.state.openDialog}
            onRequestClose={this.handelCloseDialog}
          >
            Are you sure you want to save ?
        </Dialog>
        </CardActions>
      </Card>
    );
  }
}

export default Organisation;
