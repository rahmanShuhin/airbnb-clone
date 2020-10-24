import { Button } from '@material-ui/core';
import React from 'react';
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer__top">
           <div>
             <h2>We embrace a world where everyone belongs, and stand with #BlackLivesMatter.</h2>
             <Button>Learn More</Button>
           </div>
           <div>
             <p>We reject racism or bigotry of any kind. But now is a time for action rather than words. So we’d like to share with you, Project Lighthouse, a groundbreaking initiative launching in the United States to uncover, measure, and overcome discrimination when booking or hosting on Airbnb.</p>
             <Button>Learn More</Button>
           </div>
        </div>
        <div className="footer__bottom">
            <div>
              <small>No rights Reserved | shuhin | clone website | air bnb</small>
            </div>
        </div>
    </div>
  );
};

export default Footer;