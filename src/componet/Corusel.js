import React, { Component } from "react";
import Slider from "react-slick";

export default class Corusel extends Component {
  constructor(props){
    super(props);

  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="sliderss">
        <Slider {...settings} >
          {this.props.img.map((base)=>(
            <div key={base.id}>
               <div>
                   <img src={base.image} alt="" />
               </div>
            </div>
          ))}
         
         
        </Slider>
      </div>
    );
  }
}