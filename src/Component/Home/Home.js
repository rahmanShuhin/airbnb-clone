import { Button } from '@material-ui/core';
import React from 'react';
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home__caption">
        <div>
          <h1>Go Near</h1>
          <p>Settle in somewhere new. Discover stays to live, work, or just relax.</p>
          <Button>Explore nearby</Button>
        </div>
      </div>
    </div>
  );
}
export default Home;