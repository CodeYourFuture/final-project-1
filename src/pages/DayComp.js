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
      <select  >
        {
          weekDays.map(day => <option  value={day}>{day}</option>)
        }
      </select>
    );
  }

}

export default DayComp;
