import React from 'react';
import "./Guests.css";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
const Guests = () => {
  return (
    <div className="guests">
      <div className="guests__adult">
        <div>
          <h4>Adults</h4>
          <p>Ages 13 or above</p>
        </div>
        <div>
          <button><RemoveIcon></RemoveIcon></button>
          <span>0</span>
          <button><AddIcon></AddIcon></button>
        </div>
      </div>
      <div className="guests__children">
        <div>
          <h4>Children</h4>
          <p>Ages 2-12</p>
        </div>
        <div>
          <button><RemoveIcon></RemoveIcon></button>
          <span>0</span>
          <button><AddIcon></AddIcon></button>
        </div>
      </div>
      <div className="guests__infant">
        <div>
          <h4>Infants</h4>
          <p>Under 2</p>
        </div>
        <div>
          <button><RemoveIcon></RemoveIcon></button>
          <span>0</span>
          <button><AddIcon></AddIcon></button>
        </div>
      </div>
    </div>
  );
};

export default Guests;