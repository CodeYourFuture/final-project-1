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
    const lookup = this.props.lookup;
    return (
      <div className="Search-Fields">
        <input
          onKeyPress={this.handleEnterKey}
          type="text"
          list="postcode"
          placeholder="search..."
        />
        <datalist id="postcode">
          {
            lookup.map(item => (String(item).length < 9 ? <option>{item}</option> : null))
          }
        </datalist>
      </div>
    );
  }
}

export default Autocomplete;
