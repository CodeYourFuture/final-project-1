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

const style = {
  floatingLabelStyle: {
    color: '#37392e',
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
};

const items = [
  <MenuItem key={1} value={1} primaryText="Never" />,
  <MenuItem key={2} value={2} primaryText="Every Night" />,
  <MenuItem key={3} value={3} primaryText="Weeknights" />,
  <MenuItem key={4} value={4} primaryText="Weekends" />,
  <MenuItem key={5} value={5} primaryText="Weekly" />,
];

class Organisation extends Component {
  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleCancel() {
    this.props.updateDisplayStatus(false);
  }
  render() {
    const cat = this.props.category;
    const displayState = this.props.displayState;
    if (displayState) {
      return (
        <Card style={{ padding: 20, margin: 10 }}>
          <CardTitle title="Add New Organisation" style={{ width: 500 }} />
          <TextField
            hintText="Type text..."
            floatingLabelText="Organisation name"
            floatingLabelFixed
            floatingLabelStyle={style.floatingLabelStyle}
            floatingLabelFocusStyle={style.floatingLabelFocusStyle}
            errorText="This field is required."
          />
          <SelectField
            value={1}
            floatingLabelText="Area"
            floatingLabelStyle={style.floatingLabelStyle}
            floatingLabelFocusStyle={style.floatingLabelFocusStyle}
            errorText="This field is required."
          >
            {items}
          </SelectField>

          <SelectField
            value={1}
            floatingLabelText="Borough"
            floatingLabelStyle={style.floatingLabelStyle}
            floatingLabelFocusStyle={style.floatingLabelFocusStyle}
            errorText="This field is required."
          >
            {items}
          </SelectField>

          <Divider />
          <TextField
            hintText="Type text..."
            floatingLabelText="Process"
            floatingLabelFixed
            floatingLabelStyle={style.floatingLabelStyle}
            floatingLabelFocusStyle={style.floatingLabelFocusStyle}
          />
          <SelectField
            value={1}
            floatingLabelText="Day"
            floatingLabelStyle={style.floatingLabelStyle}
            floatingLabelFocusStyle={style.floatingLabelFocusStyle}
          >
            {items}
          </SelectField>
          <TextField
            hintText="Type text..."
            floatingLabelText="Postcode"
            floatingLabelFixed
            floatingLabelStyle={style.floatingLabelStyle}
            floatingLabelFocusStyle={style.floatingLabelFocusStyle}
            errorText="This field is required."
          />
          <Divider />
          <TextField
            hintText="http://"
            floatingLabelText="Website"
            floatingLabelFixed
            floatingLabelStyle={style.floatingLabelStyle}
            floatingLabelFocusStyle={style.floatingLabelFocusStyle}
          />
          <TextField
            hintText="Type text..."
            floatingLabelText="Telephone"
            floatingLabelFixed
            floatingLabelStyle={style.floatingLabelStyle}
            floatingLabelFocusStyle={style.floatingLabelFocusStyle}
            errorText="This field is required."
          />
          <TextField
            hintText="Type text..."
            floatingLabelText="E-mail"
            floatingLabelFixed
            floatingLabelStyle={style.floatingLabelStyle}
            floatingLabelFocusStyle={style.floatingLabelFocusStyle}
            errorText="This field is required."
          />
          <Divider style={{ display: 'flex' }} />
          <TextField
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
                cat.map(item =>
                  <GridTile key={item}><Checkbox label={item} /></GridTile>)
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
            />
            <FlatButton
              label="Save"
              backgroundColor="#28afb0"
              hoverColor="#8AA62F"
              style={{ width: 150, color: white }}
            />
          </CardActions>
        </Card>
      );
    }
    return null;
  }
}

export default Organisation;
