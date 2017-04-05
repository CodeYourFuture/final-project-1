import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      styleOuter: {},
      styleInner: {},
      detailText: '+ Detail',
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    if (this.state.toggle === false) {
      this.setState({ toggle: true });

      const innerDiv = {
        display: 'flex',
        justifyContent: 'always',
        flexDirection: 'column',
        width: '100%',
        padding: '0',
        // border: '1px solid blue',
      };

      const outerDiv = {
        display: 'flex',
        width: '100%',
        position: 'relative',
        marginTop: '5px',
        padding: '2px',
        // border: '1px solid blue',
      };

      this.setState({ styleOuter: outerDiv });
      this.setState({ styleInner: innerDiv });
      this.setState({ detailText: '- Detail' });
    } else {
      const outerDiv = {
        display: 'none',
      };
      this.setState({ toggle: false });
      this.setState({ styleOuter: outerDiv });
      this.setState({ detailText: '+ Detail' });
    }
  }
  render() {
    const Organisation = this.props;
    return (
      <div className="Cards">
        <div className="one">
          <div>
            <div className="title">{Organisation.Organisation}</div>
          </div>
          <div className="deleteEditContainer">
            <div className="delete">Delete</div>
            <div className="edit">Edit</div>
          </div>
        </div>
        <div className="two">
          <div>
            <div className="area-details">Area: {Organisation.Area}</div>
          </div> |
          <div>
            <div className="borough-details">Borough: {Organisation.Borough}</div>
          </div>
        </div>
        <div className="three">
          <div className="services">{Organisation.Services}</div>
        </div>
        {
          this.state.toggle ?
            <div style={this.state.styleOuter} >
              <div style={this.state.styleInner}>
                <div className="process">
                  <div className="process-title"><strong>Process </strong></div>
                  <div className="process-details">{Organisation.Process}</div>
                </div>
                <div >
                  <div className="telephone-title"><strong>Telephone </strong></div>
                  <div className="telephone-details">{Organisation.Tel}</div>
                </div>
              </div>
              <div style={this.state.styleInner}>
                <div>
                  <div className="day-title"><strong>Day </strong></div>
                  <div className="day-details">{Organisation.Day}</div>
                </div>
                <div>
                  <div className="email-title"><strong>Email </strong></div>
                  <div className="email-details">{Organisation.email}</div>
                </div>
              </div>
            </div>
        : null }
        <div className="five">
          <button onClick={this.handleToggle}>{ this.state.detailText }</button>
        </div>
      </div>
    );
  }
}

export default Card;
