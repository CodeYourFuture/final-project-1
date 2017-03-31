import React from 'react';

const Card = items => (
  <div className="Cards">
    <div className="Block-title-div">
      <lable className="title" >{items.Organisation}</lable>
    </div>
    <div className="Change">
      <lable >Delete</lable>
      <lable >Edit</lable>
    </div>
    <div className="Block-area-service">
      <div>
        <lable>Area: {items.Area}</lable>
      </div>
      <div>
        <lable>{items.Services}</lable>
      </div>
    </div>
    <div className="Detail">
      <button> + Details </button>
    </div>
  </div>
);

export default Card;
