import React,{useEffect,useState} from "react";
import { NewsCard, NewsHeader } from "../componet/MiniComponets";
import newImg from "../all-information/newsImg/new.png";
import  AOS  from "aos";
import "aos/dist/aos.css";
const News = () =>{

    


    
    const [newData,setNewData] = useState([]);

    useEffect(()=>{
        AOS.init();
        fetch("http://127.0.0.1:8000/postes/?format=json")
        .then(response => response.json())
        .then(json => setNewData([...json]))
    },[])
    return(
        <>
        <NewsHeader />
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
               <NewsCard data={newData} />  
          </section>
        </>
    )
}

export default News;