import React, { Component } from 'react';
import '../App.css';

class SidebarElement extends Component {

  constructor(props) {
    super(props);
    this.returnService = this.returnService.bind(this);
  }

  returnService(event) {
    this.props.service(event.target.value);
  }

  render() {
    const categories = this.props.categories;
    return (
      <div className="Sidebar-link">
        {
          categories.map(category => (
            <button
              onClick={this.returnService}
              activeClassName="Sidebar-link-item-active"
              className="Sidebar-link-item"
              value={category}
            >
              {category}
            </button>))
        }
      </div>
    );
  }
}

export default SidebarElement;
