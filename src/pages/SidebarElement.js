import React, { Component } from 'react';
import '../App.css';
// import{Link} from 'react-router';

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
              key={category}
              activeClassName="Sidebar-link-item-active"
              className="Sidebar-link-item"
              onClick={this.returnService}
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
