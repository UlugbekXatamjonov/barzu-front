import React,{useEffect} from "react";
import { ContactHeader, ContactPage } from "../componet/MiniComponets";
import  AOS  from "aos";
import "aos/dist/aos.css";
const Contact = () =>{
    useEffect(()=>{
        AOS.init();
    })
    
    return(
        <>
        <ContactHeader />
        <section className="galPad cotactAllls">
              <h3
                 data-aos="fade-up"
                 data-aos-duration="2000" 
                 data-aos-delay="50"
              >Bog`lanish</h3>
              <ContactPage />
          </section>
      
        
        </>
    )
}

export default Contact;