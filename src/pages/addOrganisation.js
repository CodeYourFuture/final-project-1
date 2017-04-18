import React, { Component } from 'react';

export default class AddOrganisation extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const categories = this.props.categories;
    const area = this.props.area;
    const borough = this.props.borough;
    return (
      <form>
        <div>
          Organisation Name <br/>
          <input type="text" name="Organisation Name" /><br>
          Process <br/>
          <input type="text" name="Process"><br>
          Website <br>
          <input type="text" name="Website"><br>
        </div>
        <div>
          Area<br>
          <select name="Area">
            {
              area.map((value, index) => {
                <option key={index} value={value} onChange="do some thing">{value}</option>
              })
            }
          </select> <br>
        </div>
        <div>
          Postcode <br>
          <input type="text" name="Postcode"><br>
          Telephone <br>
          <input type="text" name="Telephone"><br>
        </div>
        <div>
          Borough<br>
          <select name="">
            {
              borough.map((value, index) => {
                <option key={index} value={value} onChange="do some thing">{value}</option>
              })
            }
          </select><br>
          E-mail<br>
          <input type="text" name="E-mail">
        </div>
        <div>
          Day<br>
          <div>
            <select name="">
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="saturday">saturday</option>
              <option value="sunday">sunday</option>
            </select><br>
          </div>
        </div>
        <div><br>
          Categories<br>
          <div>
            <select name="">
              {
                categories.map((value, index) => {
                  <option key={index} value={value} onChange="do some thing">{value}</option>
                })
              }
            </select><br>
          </div>
          <div><br>
            Services<br>
            <input type="text" name="Services">
          </div><br>
          <div>
            <input type="Cancel" value="Cancel">
            <input type="Save Changes" value="Save Changes"> 
          </div>
        </div>
    </form>
    );
  }
}
