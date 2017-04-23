import React, { Component } from 'react';
import '../App.css';
import{Link} from 'react-router';

class SidebarElement extends Component {
  render() {
    const categories = this.props.categories;
    return (
      <div className="Sidebar-link">
        {
          categories.map(category => (
            <Link to={`/organisations/${category}`}
              key={category}
              className="Sidebar-link-item"
              value={category}
            >
              {category}
            </Link>))
        }
      </div>
    );
  }
}

export default SidebarElement;
