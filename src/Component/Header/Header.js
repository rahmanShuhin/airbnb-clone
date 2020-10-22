import React, { useState } from "react";
import logo from "../../img/logo.png";
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LanguageIcon from '@material-ui/icons/Language';
import "./Header.css";
import { Button, Fade } from "@material-ui/core";
import Search_Date from "../Search_Date/Search_Date";
import Guests from "../Guests/Guests";
const Header = () => {
  const [showSearch,setShowSearch]=useState(false);
  const [showDate,setShowDate] =useState(false);
  const [showGuests,setShowGuests] =useState(false);

  const handleSearch=()=>{
    document.querySelector(".header").classList.toggle("inc__height");
    setShowSearch(!showSearch)
  }
  const handleDate=()=>{
    setShowDate(!showDate);
    setShowGuests(false)
    document.getElementById("date_picker").classList.toggle("active");
  }
  return (
    <div className="header">
        <img src={logo} alt="" className="header__icon" />
        <div className="header__center">
          {
            !showSearch ? 
            <div className="header__form" onClick={handleSearch}>
              <button>Start Your Search</button>
              <button>
                <SearchIcon></SearchIcon>
              </button>
            </div>
            :
            <div className="header__center__search">
              <div>
                <button>Places to stay</button>
                <button>Experiences</button>
                <button>Online Experiences</button>
              </div>
              <div className="header__center__searchBox">
                  <div>
                      <h5>Location</h5>
                      <p>Where are you going ?</p>
                  </div>
                  <div onClick={handleDate} id="date_picker">
                      <h5>Pick a Date</h5>
                      <h5>{new Date().toDateString()}</h5>
                  </div>
                  <div>
                    <div onClick={()=> {
                      setShowGuests(!showGuests)
                      setShowDate(false)
                    }}>
                      <h5>Guests</h5>
                      <p>Add guests</p>
                    </div>
                    <button>
                        <SearchIcon></SearchIcon>
                    </button>
                  </div>
              </div>
            {
             showDate && <Search_Date></Search_Date>
            }
            {
              showGuests && <Guests></Guests>
            }
            </div>
          }
        </div>
        <div className="header__right">
            <button>Become a host</button>
            <button>
              <LanguageIcon></LanguageIcon>
              <ExpandMoreIcon></ExpandMoreIcon>
            </button>
            <button>
              <MenuIcon></MenuIcon>
              <AccountCircleIcon></AccountCircleIcon>
            </button>
        </div>
    </div>
  );
};

export default Header;
