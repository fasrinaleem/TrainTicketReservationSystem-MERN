import React, { Component } from "react";
import { Slide } from "react-slideshow-image";

//importing the images
import slide1 from "../resources/slider1.jpg";
import slide2 from "../resources/slider3.jpg";
import slide3 from "../resources/slider11.jpg";

//save it to an array
const slideImages = [slide1, slide2, slide3];

//slider properties
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
};

export default class HomeSlider extends Component {
  render() {
    return (
      <div className="slider" style={{ width: 1350 }}>
        <Slide {...properties}>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(${slideImages[0]})`,
                height: 430
              }}
            >
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div
              style={{ backgroundImage: `url(${slideImages[1]})`, height: 430 }}
            >
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div
              style={{ backgroundImage: `url(${slideImages[2]})`, height: 400 }}
            >
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    );
  }
}
