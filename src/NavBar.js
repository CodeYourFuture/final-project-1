import React, { Component } from 'react';
import SidebarElement from './pages/SidebarElement';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
       navItems: []
    }
  }
  renderNavItems = () => {
    const navItems = this.props.navItems;
    return navItems.map(function renderElement(category, index){
      return (
        <div 
          key={index} 
          className='displayElement'>
          <a href={'/category/' + category}>{category}</a>
        </div>
      )
    });
  }
  render() {
    console.info('here i am');
    return (
      <div className='navbar'>{this.renderNavItems()}</div>
    );
  }
}
export default NavBar;
