import React from 'react';
import Card from '../Card/Card';
import { cardDetails_1, cardDetails_2 } from '../FakeData';
// Import css files
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardContainer.css";
import { Button } from '@material-ui/core';
const CardContainer = () => {
  const settings = {

    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.04,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false
  };
  return (
    <div className="cardContainer">
      <div className="cardContainer__top">
        {
          cardDetails_1.map(x=><Card x={x}></Card>)
        }
      </div>
      <div className="cardContainer__top__mobile">
        <Slider {...settings}>
        {
          cardDetails_1.map(x=><Card x={x}></Card>)
        }
        </Slider>
      </div>

      <div className="bg-black">
          <div className="cardContainer__bottom__caption">
            <div>
              <h2>Online Experiences: Field Trips</h2>
              <p>Join interactive, global adventures with inspiring, kid-friendly hosts</p>
            </div>
            <div>
              <Button>Explore all</Button>
            </div>
          </div>

          <div className="cardContainer__bottom">
              <div className="grid__1">
                  <Card x={cardDetails_2[0]} num={1}></Card>
              </div>
              <div className="grid__2">
                  <div className="grid__2Top">
                      <div>
                          <Card x={cardDetails_2[1]} num={1}></Card>
                      </div>
                      <div>
                          <Card x={cardDetails_2[2]} num={1}></Card>
                      </div>
                  </div>
                  <div className="grid__2Bottom">
                      <Card x={cardDetails_2[3]} num={1}></Card>
                  </div>
              </div>
          </div>
          <div className="cardContainer__top__mobile__2">
            <Slider {...settings}>
            {
              cardDetails_2.map(x=><Card x={x} num={1}></Card>)
            }
            </Slider>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;