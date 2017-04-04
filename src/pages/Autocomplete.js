import React, { Component } from 'react';

class Autocomplete extends Component {

  constructor(props) {
    super(props);

    this.handleEnterKey = this.handleEnterKey.bind(this);
  }

  handleEnterKey(event) {
    if (event.charCode === 13) {
      //this.props.getUserInput(event.target.value);
      event.preventDefault();
    }
  }

  render() {
    const postcods = this.props.postcods;
    return (
      <div>
        <input
          onKeyPress={this.handleEnterKey}
          type="text"
          list="postcode"
          placeholder="search..."
        />
        <datalist id="postcode" >
          {
            postcods.map(item => (String(item).length < 9 ? <option>{item}</option> : null))
          }
        </datalist>
      </div>
    );
  }
}

export default Autocomplete;
