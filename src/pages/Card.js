import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      style: {},
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    if (this.state.toggle === false) {
      this.setState({ toggle: true });
      const styles = {
        display: 'flex',
      };
      this.setState({ style: styles });
    } else {
      const styles = {
        display: 'none',
      };
      this.setState({ toggle: false });
      this.setState({ style: styles });
    }
  }
  render() {
    const Organisation = this.props;
    return (
      <div className="Cards">
        <div className="one">
          <div>
            <lable className="title" >{Organisation.Organisation}</lable>
          </div>
          <div>
            <lable >Delete</lable>
            <lable >Edit</lable>
          </div>
        </div>
        <div className="two">
          <div>
            <lable>Area: {Organisation.Area}</lable>
          </div> |
          <div>
            <lable>Borough: {Organisation.Borough}</lable>
          </div>
        </div>
        <div className="three">
          <ul>
            <li>- {Organisation.Services}</li>
          </ul>
        </div>
        {
          this.state.toggle ?
            <div style={this.state.styles} >
              <div>
                <div>
                  <lable>Process</lable>
                  <lable>{Organisation.Process}</lable>
                </div>
                <div>
                  <lable>Telephone</lable>
                  <lable>{Organisation.Tel}</lable>
                </div>
              </div>
              <div>
                <div>Day
                  <lable>{Organisation.Day}</lable>
                </div>
                <div>Email
                  <lable>{Organisation.email}</lable>
                </div>
              </div>
            </div>
        : null }
        <div className="five">
          <button onClick={this.handleToggle}> + Details </button>
        </div>
      </div>
    );
  }
}

export default Card;
