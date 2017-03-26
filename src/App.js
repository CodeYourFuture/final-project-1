import React, { Component } from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import organisation1 from './pages/Organisation1';

=======
import { Link } from 'react-router';
import './App.css';
import logoSidebar from '../design/assets/logo-sidebar.svg';
>>>>>>> 736235d46f273f840899cd8438585beec4d3dd4c

class App extends Component {
 
  // constructor gets called once when the class is initiated
  constructor(props) {
    super(props);
    this.state = {
    orgData: {data: []}

    };
  }

  renderOrganisations = () => {
    const myData = this.state.orgData.data; 
     return myData.map(function(organisation) {
     return ( <organisation1
    website={organisation1.website}
     tel={organisation1.tel ? organisation.tel : 'None'}
     area={organisation1.area}
     process={organisation1.process}
     name={organisation1.organisation}
     clients={organisation1.clients}
     services={organisation1.services}
     borough={organisation1.borough}
     type={organisation1.type}
     day={organisation1.day}
     postcode = {organisation1.postcode}
     />);
   });
     
   }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
           <p className="App-head">Services In London</p>
        </div>
           <p className="App-intro"></p>
           
           <br/>

           
           {this.renderOrganisations()}
      </div>
   );            
}
getOrganizations = () => {
    const APIAddress = '';
    fetch(APIAddress)
    .then(function(response) {
    console.log(response) 
    return response.json();
    })
    .then((jsonData) => {
      this.setState({ orgData: jsonData });
    });

   
 }
  componentDidMount() {

    
  }
/*import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="App">
        <div className="Sidebar">
          <img src={logoSidebar} className="HBFLogoSidebar" alt="HBFLogo" />
          <h3 className="Sidebar-title"><a href="https://useless.bit.foo">Organisations</a></h3>
          <div className="Sidebar-link">
            <p><a href="https://useless.bit.foo">Debt</a></p>
            <p><a href="https://useless.bit.foo">YP Families</a></p>
            <p><a href="https://useless.bit.foo">Women DV</a></p>
            <p><a href="https://useless.bit.foo">Trafﬁcking</a></p>
            <p><a href="https://useless.bit.foo">Destitution</a></p>
            <p><a href="https://useless.bit.foo">Mental Health Services</a></p>
            <p><a href="https://useless.bit.foo">Healthcare</a></p>
            <p><a href="https://useless.bit.foo">Debt</a></p>
            <p><a href="https://useless.bit.foo">YP Families</a></p>
            <p><a href="https://useless.bit.foo">Women DV</a></p>
            <p><a href="https://useless.bit.foo">Trafﬁcking</a></p>
            <p><a href="https://useless.bit.foo">Destitution</a></p>
            <p><a href="https://useless.bit.foo">Mental Health Services</a></p>
            <p><a href="https://useless.bit.foo">Healthcare</a></p>
            <p><a href="https://useless.bit.foo">Debt</a></p>
            <p><a href="https://useless.bit.foo">YP Families</a></p>
            <p><a href="https://useless.bit.foo">Women DV</a></p>
            <p><a href="https://useless.bit.foo">Trafﬁcking</a></p>
          </div>
          <h3 className="Sidebar-title"><a href="https://useless.bit.foo">Users</a></h3>
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="App-navigation">
          <p>Example navigation:</p>

          <h3>Users:</h3>

          <ul>
            <li><Link to="/users">Users</Link></li>
          </ul>

          <h3>Categories (example):</h3>

          <ul>
            <li><Link to="/organisations/1">Organisation 1</Link></li>
            <li><Link to="/organisations/2">Organisation 2</Link></li>
            <li><Link to="/organisations/3">Organisation 3</Link></li>
          </ul>
        </div>

        {children}
      </div>
    );
  }
}

export default App;
*/
}
export default App;
