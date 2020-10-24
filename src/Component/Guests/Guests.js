import React, { useState } from 'react';
import "./Guests.css";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
const Guests = () => {
  const [adult,setAdult]=useState(0);
  const [children,setChildren]=useState(0);
  const [infant,setInfant]=useState(0);
  const handlePlus=(ki)=>{
    if(ki==="adult"){
      setAdult(adult+1)
    }
    else if(ki==="children"){
      setChildren(children+1)
    }
    else{
      setInfant(infant+1)
    }
  }
  const handleMinus=(ki)=>{
    if(ki==="adult"){
      setAdult(adult-1)
    }
    else if(ki==="children"){
      setChildren(children-1)
    }
    else{
      setInfant(infant-1)
    }
  }
  return (
    <div className="guests">
      <div className="guests__adult">
        <div>
          <h4>Adults</h4>
          <p>Ages 13 or above</p>
        </div>
        <div>
          {
            adult === 0 ? <button disabled style={{cursor:"not-allowed"}}><RemoveIcon></RemoveIcon></button>:<button onClick={()=>handleMinus("adult")}><RemoveIcon></RemoveIcon></button>
          }
            <span>{adult}</span>
          <button onClick={()=>handlePlus("adult")}><AddIcon></AddIcon></button>
        </div>
      </div>
      <div className="guests__children">
        <div>
          <h4>Children</h4>
          <p>Ages 2-12</p>
        </div>
        <div>
          {
            children === 0 ? <button disabled style={{cursor:"not-allowed"}}><RemoveIcon></RemoveIcon></button>:<button onClick={()=>handleMinus("children")}><RemoveIcon></RemoveIcon></button>
          }
              <span>{children}</span>
          <button onClick={()=>handlePlus("children")}><AddIcon></AddIcon></button>
        </div>
      </div>
      <div className="guests__infant">
        <div>
          <h4>Infants</h4>
          <p>Under 2</p>
        </div>
        <div>
          {
            infant === 0 ? <button disabled style={{cursor:"not-allowed"}}><RemoveIcon></RemoveIcon></button>:<button onClick={()=>handleMinus("infant")}><RemoveIcon></RemoveIcon></button>
          }
            <span>{infant}</span>
          <button onClick={()=>handlePlus("infant")}><AddIcon></AddIcon></button>
        </div>
      </div>
    </div>
  );
};

export default Guests;