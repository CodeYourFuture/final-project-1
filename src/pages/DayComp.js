import React, { Component } from 'react';

const weekDays = ['Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

class DayComp extends Component {

  render() {
    return (
      <div className="Search-Fields">
        <select>
          {
            weekDays.map(day => <option value={day}>{day}</option>)
          }
        </select>
      </div>
    );
  }

}

export default DayComp;
