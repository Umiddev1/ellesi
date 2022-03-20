import React, { Component } from "react";
import Slider from "react-slick";
import '../../container/Hero/Hero.css';
import './HeroContent.css';
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
      <div className="hero">
        <div className="container">
         <div className="hero__dess">
          <div className="hero__des">
          <p className="hero__text">ELESSI STORE</p>
          <h2 className="hero__title">Fresh Hand-Picked<br/> Vegetables Everyday!</h2>
          <button className="hero__btn">SHOP NOW</button>
        </div>
       </div>
      </div>
      </div>
          </div>
          <div>
            <div className="hero__content-two">
              <div className="container">
                <div className="hero__dess">
                  <div className="hero__des"> 
                    <p className="hero__text hero__content-text">ELESSI STORE</p>
                   <h2 className="hero__title hero__content-title">Fresh vegetables<br/>Sale up to 30% Off</h2>
                  <button className="hero__btn hero__content-btn">SHOP NOW</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="hero__content-three">
              <div className="container">
                <div className="hero__dess">
                  <div className="hero__des">
                    <p className="hero__text">ELESSI STORE</p>
                    <h2 className="hero__title">Fresh Lemon<br/>discount up 40% off</h2>
                    <button className="hero__btn">SHOP NOW</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}