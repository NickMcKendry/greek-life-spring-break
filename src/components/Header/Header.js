import React, { Component } from 'react';
import Logo from './logo.png';
import './Header.css';
import Slider from 'react-slick';




export default class Home extends Component {

  render(){
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <div>
          <div className="nav-container">
            <img src={Logo} className="logo" alt="" />
            <nav className="navbar navbar-expand-lg right">
              <div className="navbar-nav center">
                <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link" href="#">Pre Order</a>
                <a className="nav-item nav-link" href="#">Careers</a>
              </div>
            </nav>
          </div>
          <Slider {...settings}>
            <div
              className="bg-image-container text-box slide-1">
              <div className="container">
                <h1 className="center-text">2019 Spring Break <br />
                  All of Greek Life In One Hotel! <br />
                  One Incredible Greeks Only Super Party!!</h1>
              </div>
            </div>
            <div
              className="bg-image-container text-box slide-2">
              <div className="container">
                <h1 className="center-text">On Day 1 enjoy a 2 hour open bar and appetizer welcome mixer</h1>
              </div>
            </div>
            <div
              className="bg-image-container text-box slide-3">
              <div className="container">
                <h1 className="center-text">On Day 2 we'll have you Meet your Greek, a speed dating event</h1>
              </div>
            </div>
            <div
              className="bg-image-container text-box slide-4">
              <div className="container">
                <h1 className="center-text">On Day 3 you hit the beach for an 8 hour bash</h1>
              </div>
            </div>
            <div
              className="bg-image-container text-box slide-5">
              <div className="container">
                <h1 className="center-text">On Day 4/5 The hugest Greek God/Goddess Competion</h1>
              </div>
            </div>
            <div
              className="bg-image-container text-box slide-6">
              <div className="container">
                <h1 className="center-text">On Day 6 An all white blacklight party where you get to glow in Punta Cana with your brothers and sisters and say good bye.</h1>
              </div>
            </div>
            <div
              className="bg-image-container text-box slide-7">
              <div className="container">
                <h1 className="center-text">On Day 7 We love you bye-bye.</h1>
              </div>
            </div>
          </Slider>
      </div>

    )
  }
}
