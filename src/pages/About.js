import React from "react";
import { AboutHeader, AllPartners, Comment, PartnersScroll } from "../componet/MiniComponets";
import PartnersCorusel from "../componet/PartnersCorusel";

const About = () =>{
    return(
        <>
        <AboutHeader/>
        <PartnersScroll />
        <AllPartners />
        <section>
          <PartnersCorusel />
        </section>
        <Comment/>
      
        </>
    )
}

export default About;