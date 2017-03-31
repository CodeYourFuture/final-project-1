import React from 'react';
import '../App.css';

class SidebarElement extends React.Component {

  returnService(event) {
    this.props.service(event.currentTarget.textContent);
  }

  render() {
    const categories = this.props.categories;
    return (
      <div className="Sidebar-link">
        {
          categories.map(category =>
            <p onClick = {this.returnService.bind(this)} 
              activeClassName="Sidebar-link-item-active"
              className="Sidebar-link-item" role="button"
            >{category} </p>)
        }
      </div>
    );
  }
}

export default SidebarElement;
