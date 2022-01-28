import React, { Component } from "react";
import Slider from "react-slick";
import partImg from "../all-information/PartnersScroll/partners.png";
export default class PartnersCorusel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
          <h1 className="worker_partnerss">
             Meet our team
          </h1>
          <p className="partners_title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse <br /> varius enim in eros elementum tristique.
          </p>
        <Slider {...settings}>
          <div>
               <div>
                    <div className="partners_soical">
                        <img src={partImg} alt="" />
                        <div className="partnersHover">
                            <h1>John Andry</h1>
                            <p className="job">Front-End</p>
                            <p className="worker_soical">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-telegram-plane"></i>
                            </p>
                        </div>
                    </div>
               </div>
          </div>
          <div>
               <div>
                    <div className="partners_soical">
                        <img src={partImg} alt="" />
                        <div className="partnersHover">
                            <h1>John Andry</h1>
                            <p className="job">Front-End</p>
                            <p className="worker_soical">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-telegram-plane"></i>
                            </p>
                        </div>
                    </div>
               </div>
          </div>
          <div>
               <div>
                    <div className="partners_soical">
                        <img src={partImg} alt="" />
                        <div className="partnersHover">
                            <h1>John Andry</h1>
                            <p className="job">Front-End</p>
                            <p className="worker_soical">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-telegram-plane"></i>
                            </p>
                        </div>
                    </div>
               </div>
          </div>
          <div>
               <div>
                    <div className="partners_soical">
                        <img src={partImg} alt="" />
                        <div className="partnersHover">
                            <h1>John Andry</h1>
                            <p className="job">Front-End</p>
                            <p className="worker_soical">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-telegram-plane"></i>
                            </p>
                        </div>
                    </div>
               </div>
          </div>
          <div>
               <div>
                    <div className="partners_soical">
                        <img src={partImg} alt="" />
                        <div className="partnersHover">
                            <h1>John Andry</h1>
                            <p className="job">Front-End</p>
                            <p className="worker_soical">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-telegram-plane"></i>
                            </p>
                        </div>
                    </div>
               </div>
          </div>
          <div>
               <div>
                    <div className="partners_soical">
                        <img src={partImg} alt="" />
                        <div className="partnersHover">
                            <h1>John Andry</h1>
                            <p className="job">Front-End</p>
                            <p className="worker_soical">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-telegram-plane"></i>
                            </p>
                        </div>
                    </div>
               </div>
          </div>
        </Slider>
      </div>
    );
  }
}