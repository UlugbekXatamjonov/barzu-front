import React,{useEffect,useState} from "react";
import { GaleryHeader, GaleryCard} from "../componet/MiniComponets";
import galerImg from "../all-information/galeryImg/gal.png";
import  AOS  from "aos";
import "aos/dist/aos.css";
const Galery = () =>{
    const [galery,setGalery] = useState([]);
    let galData = [
        {
            id:"0",
            img:galerImg,
            title:"title 1",
            desc:"lorem impusm ajhsdsdjsd"
        },
        {
            id:"1",
            img:galerImg,
            title:"title 2",
            desc:"lorem impusm ajhsdsdjsd"
        },
        {
            id:"2",
            img:galerImg,
            title:"title 3",
            desc:"lorem impusm ajhsdsdjsd"
        },
        {
            id:"3",
            img:galerImg,
            title:"title 4",
            desc:"lorem impusm ajhsdsdjsd"
        },
        {
            id:"4",
            img:galerImg,
            title:"title 5",
            desc:"lorem impusm ajhsdsdjsd"
        },
        {
            id:"5",
            img:galerImg,
            title:"title 6",
            desc:"lorem impusm ajhsdsdjsd"
        },
        {
            id:"6",
            img:galerImg,
            title:"title 7",
            desc:"lorem impusm ajhsdsdjsd"
        },
        {
            id:"7",
            img:galerImg,
            title:"title 8",
            desc:"lorem impusm ajhsdsdjsd"
        },
        {
            id:"8",
            img:galerImg,
            title:"title 9",
            desc:"lorem impusm ajhsdsdjsd"
        }
    ]
    useEffect(()=>{
        AOS.init();
        fetch("http://127.0.0.1:8000/tr/cardes/?format=json")
        .then(response => response.json())
        .then(json => setGalery([...json])
            )
    })
    return(
        <>
          <GaleryHeader />
          <section className="galPad">
              <h1
                 data-aos="fade-up"
                 data-aos-duration="2000" 
                 data-aos-delay="50"
              >Projects we have done</h1>
              <h3
                 data-aos="fade-up"
                 data-aos-duration="2000" 
                 data-aos-delay="150"
              >We are creating a sustainable <br /> society, for everyone.</h3>
               <GaleryCard data={galery} />    
          </section>
        </>
    )
}

export default Galery;