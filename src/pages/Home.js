import React,{useEffect,useState} from "react";
import { Header,NewsCard,GaleryCard, LogoSlider, Comment } from "../componet/MiniComponets";
import newImg from "../all-information/newsImg/new.png";
import galerImg from "../all-information/galeryImg/gal.png";
import { useNavigate } from "react-router-dom";
import  AOS  from "aos";
import "aos/dist/aos.css";
const Home = () =>{
    const [resNewData,setResNewData] = useState([]);
    const [newData,setNewData] = useState([]);
    const [galery,setGalery] = useState([]);


        useEffect(()=>{
            AOS.init();
            fetch("http://127.0.0.1:8000/tr/postes/?format=json")
            .then(response => response.json())
            .then(json => setNewData([...json]))
            fetch("http://127.0.0.1:8000/tr/cardes/?format=json")
            .then(response => response.json())
            .then(json => 
                {console.log(json)
                    setGalery([...json])
                }
                )
               
        },[])

      
     
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
            title:"title 5",
            desc:"lorem impusm ajhsdsdjsd"
        },
        {
            id:"2",
            img:galerImg,
            title:"title 3",
            desc:"lorem impusm ajhsdsdjsd"
        }
    ]
    const navH = useNavigate();
    const navH1 = useNavigate();
 
    return(
      
        <>
        <Header  data-aos="fade-up" data-aos-duration="2000" /> 
        <section>
            <h1 className="home-title"
            data-aos="fade-up"
            data-aos-duration="2000" 
            data-aos-delay="50"
            ><span>Yangiliklar</span> <button onClick={(e)=>navH("/news")}>More</button></h1>
                
             <NewsCard  data={newData} three="three" />    
        </section>
        <section>
             <h1   className="home-title"
             data-aos="fade-up"
             data-aos-duration="2000" 
             data-aos-delay="50"
             ><span>Galery</span> <button onClick={(e)=>navH("/galery")}>More</button></h1>
             <GaleryCard data={galery} three="three" />    
        </section>
        <section>
           <LogoSlider />  
        </section>
        <section>
            <h1 className="home-title"
            data-aos="fade-up"
            data-aos-duration="2000" 
            data-aos-delay="50"
            
            >Izoh qoldirish</h1>
            <Comment />
        </section>
        </>
    )
}

export default Home;