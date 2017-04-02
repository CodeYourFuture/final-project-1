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
        border: '1px solid blue',
      };

      const outerDiv = {
        display: 'flex',
        width: '100%',
        position: 'relative',
        marginTop: '5px',
        padding: '2px',
        border: '1px solid blue',
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
            <div className="title" >{Organisation.Organisation}</div>
          </div>
          <div>
            <div>Delete</div>
            <div >Edit</div>
          </div>
        </div>
        <div className="two">
          <div>
            <div>Area: {Organisation.Area}</div>
          </div> |
          <div>
            <div>Borough: {Organisation.Borough}</div>
          </div>
        </div>
        <div className="three">
          <div>- {Organisation.Services}</div>
        </div>
        {
          this.state.toggle ?
            <div style={this.state.styleOuter} >
              <div style={this.state.styleInner}>
                <div>
                  <div><b>Process </b></div>
                  <div>{Organisation.Process}</div>
                </div>
                <div>
                  <div><b>Telephone </b></div>
                  <p>{Organisation.Tel}</p>
                </div>
              </div>
              <div style={this.state.styleInner}>
                <div>
                  <div><b>Day </b></div>
                  <div>{Organisation.Day}</div>
                </div>
                <div>
                  <div><b>Email </b></div>
                  <div>{Organisation.email}</div>
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
