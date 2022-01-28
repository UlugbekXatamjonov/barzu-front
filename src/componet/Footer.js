import React from "react";
import { Link } from "react-router-dom";
import Jivo from "./Jivo";
const Footer = () =>{
    return(
       <>
        <footer className="grid">
            <div className="footer-logo">
                <Link to="/">UzText</Link>
            </div>
            <ul className="footer-link">
                <h2 className="title-f">
                    Sahifalar
                </h2>
                <li>
                    <Link to="/" >Asosiy</Link>
                </li>
                <li>
                    <Link to="/news" >Yangilikar</Link>
                </li>
                <li>
                    <Link to="/about" >Biz haqimizda</Link>
                </li>
                <li>
                  <Link to="/galery" >Galery</Link>
                </li>
                <li>
                  <Link to="/contact" >Bog`lanish</Link>
                </li>
            </ul>
            <div className="soical-media">
            <h2 className="title-f">
                    Sahifalar
                </h2>
                <h2>
                <i className="fas fa-map-marker-alt"></i>
                   Lorem ipsum dolor sit amet.
                </h2>
                <h2>
                <i className="fas fa-phone"></i>
                +998991234567
                </h2>
                <div className="soical-network">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-telegram-plane"></i>
                </div>
              
            </div>

            <p className="footer__copyright-box">
                <small className="footer__copyright">
                ©
                2013 - 2021 
                <a href="https://4autoplus.com">
                4avtoplus.com
                </a>  | 
                <a href="http://uitc.uz" target="_blank">
                UITC
                </a>
                </small>
            </p>
        </footer>
      
       </>
    )
}

export default Footer;