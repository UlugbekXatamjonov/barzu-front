import React,{useState,useRef,useEffect } from "react";
import video from "../all-information/video/video.mp4";
import {useNavigate} from "react-router-dom";
import {Container,Row,Col,Card} from "reactstrap";
import sliderImg from "../all-information/sliderLogo/slider.svg";
import scrolImg from "../all-information/PartnersScroll/scrolls.svg";
import partners from "../all-information/PartnersScroll/allpartners.png";
import galImg from "../all-information/galeryImg/galerheader.png";
import newHead from "../all-information/newsImg/newsheader.png";
import Corusel from "./Corusel";
import CountUp from "react-countup";
import newImg from "../all-information/newsImg/new.png";
import SendComment from "./SendComment";
import  AOS  from "aos";
import "aos/dist/aos.css";
export const Header = () =>{
    const [modal,setModal] = useState(false);
    const stop = useRef(null);
    const modalFun = () =>{
        setModal(true);
    }
    const closeMOdal = (id) =>{
        setModal(false);
        stop.current.pause();
    }
    useEffect(()=>{
        AOS.init();
    })
    return(
        <header>
            <video src={video}   autoPlay loop muted></video>

           <div className="header-text">
                <h1
                    data-aos="fade-up"
                    data-aos-duration="2000" 
                    data-aos-delay="50"
                >
                    Save the environment <br /> today for a better <br /> tomorrow
                </h1>
                    <p
                    data-aos="fade-up"
                    data-aos-duration="2000" 
                    data-aos-delay="250"
                    >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.               
                    ‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    </p>
           </div>
                <button className="modal_btn" onClick={modalFun}>
                <i className="fas fa-play"></i>
                </button>
            <div className={modal ? "modal-header activ" : "modal-header"}>
                <div className="modal-body">
                    <video src={video} ref={stop}  controls></video>
                     <button className="close_modal" onClick={(e)=>closeMOdal(e)}><i className="fas fa-times"></i></button>
                </div>
            </div>
        </header>
    )
}

export const NewsCard = ({data,three}) =>{
    const navigate = useNavigate();
    useEffect(()=>{
        AOS.init();
    },[])

    function allNewData(data){
        localStorage.setItem("newData",JSON.stringify(data));
        navigate("/allnews");
    }

    return(
            <div className="newsCard grid"  >
                
                {
                    three == "three" ? data.map((dat,i)=>(
                        i < 3 ? <div className="miniCard grid-col" data-aos="fade-up" data-aos-duration="2000"  data-aos-delay={"100"+1+1*i}  key={dat.id}>
                            <div className="newsImg" >
                                    <img src={dat.image} alt="" />
                                </div>
                                <h1>{dat.title}</h1>
                                <p>
                                    {
                                        dat.body.split(" ").map((get,i)=>(
                                            i<40 ? get+" " : ""
                                        ))
                                    }...
                                </p>
                            <div className="hoverNews">
                                <button onClick={(e)=>allNewData(dat)}>See more</button>
                            </div>
                         </div> : ""
                    )): data.map((dat,i)=>(
                        <div className="miniCard grid-col" data-aos="fade-up" data-aos-duration="2000"  data-aos-delay={"100"+1+1*i}  key={dat.id}>
                                <div className="newsImg" >
                                    <img src={dat.image} alt="" />
                                </div>
                                <h1>{dat.title}</h1>
                                <p>
                                    {
                                        dat.body.split(" ").map((get,i)=>(
                                            i<40 ? get+" " : ""
                                        ))
                                    }...
                                </p>
                            <div className="hoverNews">
                                <button onClick={(e)=>allNewData(dat)}>See more</button>
                            </div>
                        </div>
                    ))
                }
                
                
                
                
                {/* {data.map((dat,i)=>(
                    <div className="miniCard grid-col" data-aos="fade-up" data-aos-duration="2000"  data-aos-delay={"100"+1+1*i}  key={dat.id}>
                            <div className="newsImg" >
                                <img src={dat.image} alt="" />
                            </div>
                            <h1>{dat.title}</h1>
                            <p>
                                {
                                    dat.body.split(" ").map((get,i)=>(
                                        i<40 ? get+" " : ""
                                    ))
                                }...
                            </p>
                        <div className="hoverNews">
                            <button onClick={(e)=>allNewData(dat)}>See more</button>
                        </div>
                    </div>
                ))}                */}
            </div>
        
    )
}

export const GaleryCard = ({data,three})=>{
    const [galModal,setGalModal] = useState(false);
    const [img,setImg] = useState([...data]);
    useEffect(()=>{
        AOS.init();
    })
    return(
        <>
        <div className="galeryCard grid"onClick={(e)=> setGalModal(true)} >
           
            {
                three == "three" ? data.map((da,i)=>(
                    i<3 ? <div className="galCard" key={da.id}  data-aos="fade-up" data-aos-duration="2000"  data-aos-delay={"100"+1+1*i}>
                    <img src={da.image} alt="" />
                    <div className="galeryHover">
                        <h1>{da.title}</h1>
                        <p>{da.body}</p>
                    </div>
                 </div> : ""
               )) :
               data.map((da,i)=>(
                <div className="galCard" key={da.id}  data-aos="fade-up" data-aos-duration="2000"  data-aos-delay={"100"+1+1*i}>
                   <img src={da.image} alt="" />
                   <div className="galeryHover">
                       <h1>{da.title}</h1>
                       <p>{da.body}</p>
                   </div>
                </div>
           ))

            }
            
        </div>

        <div className={galModal ? "modal-headers activ" : "modal-headers"}>
                <div className="modal-body">
              <Corusel  img={data} />
                        <div >
                        </div>
                     <button className="close_modal gal_close" onClick={(e)=>setGalModal(false)}><i className="fas fa-times"></i></button>
                </div>
            </div>
        </>
    )
}

export const  LogoSlider = () =>{
    useEffect(()=>{
        AOS.init();
    })
    return(
        <div className="container text">
            <h1 className="home-title"
            data-aos="fade-up"
            data-aos-duration="2000" 
            data-aos-delay="50"
            
            >Hamkorlarimiz</h1>

            <div className="scc_slider" 
            
            data-aos="fade-up"
            data-aos-duration="2000" 
            data-aos-delay="150">
              <div className="slide-track">
                  <div className="slide" >
                      <img src={sliderImg} />
                  </div>
                  <div className="slide" >
                      <img src={sliderImg} />
                  </div>
                  <div className="slide" >
                      <img src={sliderImg} />
                  </div>
                  <div className="slide" >
                      <img src={sliderImg} />
                  </div>
                  <div className="slide" >
                      <img src={sliderImg} />
                  </div>
                  <div className="slide" >
                      <img src={sliderImg} />
                  </div>
                  <div className="slide" >
                      <img src={sliderImg} />
                  </div>
                  <div className="slide" >
                      <img src={sliderImg} />
                  </div>
                  <div className="slide" >
                      <img src={sliderImg} />
                  </div>
                  <div className="slide" >
                      <img src={sliderImg} />
                  </div>
                  <div className="slide" >
                      <img src={sliderImg} />
                  </div>
                  <div className="slide" >
                      <img src={sliderImg} />
                  </div>
                  <div className="slide" >
                      <img src={sliderImg} />
                  </div>
                  <div className="slide" >
                      <img src={sliderImg} />
                  </div>
              </div>
          </div>
           
          </div>
    )
} 

export const Comment  = () =>{
    const location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d769741.0191106143!2d70.70215954202615!3d41.095197586431794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a4c708e5b54231%3A0x4e71cd6bb0e2df44!2z0J3QsNC80LDQvdCz0LDQvdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1642334353408!5m2!1sru!2s"
  
    useEffect(()=>{
        AOS.init();
    })
    return(
        <div className="comment">
            <div className="comment_child grid2"
             data-aos="fade-up"
             data-aos-duration="2000" 
             data-aos-delay="50"
            
            >
                <iframe src={location}  ></iframe>
                <SendComment />
            </div>
        </div>
    )
}

export const AboutHeader = () =>{
    useEffect(()=>{
        AOS.init();
    })
    return(
        <div className="aboutHeader ">
          <div className="grid2 pp">
          <h1
           data-aos="fade-up"
           data-aos-duration="2000" 
           data-aos-delay="50"
          >
                We are a nonprofit team working worldwide
            </h1>
            <div>
                <h2
                 data-aos="fade-up"
                 data-aos-duration="2000" 
                 data-aos-delay="150"
                >
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                </h2>
                <p 
                 data-aos="fade-up"
                 data-aos-duration="2000" 
                 data-aos-delay="250"
                >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim elementum tristique.
                </p>
            </div>
          </div>
            <div className="our">
            <div className="aboutVideo">
              <video src={video} controls 
               data-aos="fade-up"
               data-aos-duration="2000" 
               data-aos-delay="350"
              
              ></video>
            </div>
            <div className="grid2">
                <div className="small">
                    <h1
                     data-aos="fade-up"
                     data-aos-duration="2000" 
                     data-aos-delay="150"
                    >
                        our mission
                    </h1>
                    <h3
                     data-aos="fade-up"
                     data-aos-duration="2000" 
                     data-aos-delay="250"
                    >
                          We make the world we save our own environment
                    </h3>
                    <p
                     data-aos="fade-up"
                     data-aos-duration="2000" 
                     data-aos-delay="350"
                    >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    </p>
                </div>
                <div className="small">
                    <h1
                     data-aos="fade-up"
                     data-aos-duration="2000" 
                     data-aos-delay="150"
                    >
                        our mission
                    </h1>
                    <h3
                     data-aos="fade-up"
                     data-aos-duration="2000" 
                     data-aos-delay="250"
                    >
                          We make the world we save our own environment
                    </h3>
                    <p
                     data-aos="fade-up"
                     data-aos-duration="2000" 
                     data-aos-delay="350"
                    >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    </p>
                </div>
            </div>
          
               
          
            </div>
            <section>
               <LogoSlider  id="sliderAbout" />  
            </section>
        </div>
    )
}

export const PartnersScroll = () =>{
    useEffect(()=>{
        AOS.init();
        scrollFun();
    })
    const [scrolls,setScrolls] = useState(false);
    window.addEventListener("scroll",scrollFun);
   const nol = useRef(null);
    function scrollFun(){
        if(window.innerWidth<1400){
            if(window.scrollY>800){
                setScrolls(true);
            } else{
                setScrolls(false);
            }
        }   
    }
    
    return(
        <section>
            <h2 className="title-scroll "
             data-aos="fade-up"
             data-aos-duration="2000" 
             data-aos-delay="50"
            
            >
                Muvofiqiyatli ishlarmiz
            </h2>
            <div className="grid4">
                <div className="grid_child"
                 data-aos="fade-up"
                 data-aos-duration="2000" 
                 data-aos-delay="150"
                >
                    <img src={scrolImg} alt="" />
                    <h3>
                    {scrolls ? <CountUp duration={5} className="h3" end={2021} /> : "" } 
                    </h3>
                    <p>
                        Best NGO Award
                    </p>
                    <span>
                        Berlin, Germany
                    </span>
                </div>
                <div className="grid_child" 
                 data-aos="fade-up"
                 data-aos-duration="2000" 
                 data-aos-delay="250"
                >
                    <img src={scrolImg} alt="" />
                    <h3>
                    {scrolls ? <CountUp duration={5} className="h3" end={2021} /> : "" } 
                    </h3>
                    <p>
                        Best NGO Award
                    </p>
                    <span>
                        Berlin, Germany
                    </span>
                </div>
                <div className="grid_child"
                 data-aos="fade-up"
                 data-aos-duration="2000" 
                 data-aos-delay="350"
                >
                    <img src={scrolImg} alt="" />
                    <h3 ref={nol}>
                    {scrolls ? <CountUp duration={5} className="h3" end={2021} /> : "" } 
                    </h3>
                    <p>
                        Best NGO Award
                    </p>
                    <span>
                        Berlin, Germany
                    </span>
                </div>
                <div className="grid_child"
                 data-aos="fade-up"
                 data-aos-duration="2000" 
                 data-aos-delay="450"
                
                >
                    <img src={scrolImg} alt="" />
                    <h3>
                    {scrolls ? <CountUp duration={5} className="h3" end={2021} /> : "" } 
                    </h3>
                    <p>
                        Best NGO Award
                    </p>
                    <span>
                        Berlin, Germany
                    </span>
                </div>
            </div>
        </section>
    )
}

export const AllPartners = () =>{

    useEffect(()=>{
        AOS.init();
    })
    return(
        <section>
            <div className="grid2 partnersAll">
                <div className="partners_child">
                    <h1
                     data-aos="fade-up"
                     data-aos-duration="2000" 
                     data-aos-delay="150"
                    
                    
                    
                    >OUR JOURNEY </h1>
                    <h3
                     data-aos="fade-up"
                     data-aos-duration="2000" 
                     data-aos-delay="250"
                    
                    >How we raised 34M</h3>
                    <p
                     data-aos="fade-up"
                     data-aos-duration="2000" 
                     data-aos-delay="350"
                    >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh.
                    </p>
                    <div className="partnrs_grid">
                        <p
                         data-aos="fade-up"
                         data-aos-duration="2000" 
                         data-aos-delay="450"
                        >
                            <span>34M+</span>
                            <span>Donation Received</span>
                        </p>
                        <p
                         data-aos="fade-up"
                         data-aos-duration="2000" 
                         data-aos-delay="550"
                        >
                            <span>34M+</span>
                            <span>Donation Received</span>
                        </p>
                        <p
                         data-aos="fade-up"
                         data-aos-duration="2000" 
                         data-aos-delay="650"
                        >
                            <span>34M+</span>
                            <span>Donation Received</span>
                        </p>
                    </div>
                </div>
                <div className="partners_child">
                    <div className="partners_child_img11"
                     data-aos="fade-up"
                     data-aos-duration="2000" 
                     data-aos-delay="750"
                    >
                     <img src={partners} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export const  GaleryHeader = () =>{
    return(
        <div className="galery_header grid2">
            <div className="galer_child">
                <h1
                 data-aos="fade-up"
                 data-aos-duration="2000" 
                 data-aos-delay="150"
                >
                    We are working worldwide
                </h1>
                <p
                 data-aos="fade-up"
                 data-aos-duration="2000" 
                 data-aos-delay="250"
                >
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                </p>
            </div>
            <div className=" galer_child ">
               <div className="gal_img"
                data-aos="fade-up"
                data-aos-duration="2000" 
                data-aos-delay="350"
               >
                     <img src={galImg} alt="" />
               </div>
         
            </div>
        </div>
    )
}
export const NewsHeader = () =>{
    const [newData,setNewData] = useState([]);
    useEffect(()=>{
        AOS.init();
        fetch("http://127.0.0.1:8000/posts/?format=json")
        .then(response => response.json())
        .then(json => setNewData([...json]))
    },[])
    return(
        <div className="newsHeader">
            <div className="grid2">
                <div className="newsHeader1">
                    <h1
                     data-aos="fade-up"
                     data-aos-duration="2000" 
                     data-aos-delay="150"
                    >
                       Our goal is to make <br /> water available for <br /> everyone
                    </h1>
                    <p
                     data-aos="fade-up"
                     data-aos-duration="2000" 
                     data-aos-delay="250"
                    >
                     Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc <br /> ut sem vitae risus tristique posuere.
                    </p>
                    <button
                     data-aos="fade-up"
                     data-aos-duration="2000" 
                     data-aos-delay="350"
                    >Read more</button>
                </div>
                <div className="newsHeader2">
                        <div className="newsGrid">
                        {
                            newData.map((post,i)=>(
                                i<3 ? <div className="newsGridChild" key={post.id} >
                                <div className="newsImg1"
                                 data-aos="fade-up"
                                 data-aos-duration="2000" 
                                 data-aos-delay="150"
                                >
                                    <img src={newHead} alt="" />
                                </div>
                                <div className="newsText"
                                 data-aos="fade-up"
                                 data-aos-duration="2000" 
                                 data-aos-delay="250"
                                >
                                    <h1>{post.title}</h1>
                                    <p>{
                                    post.body.split(" ").map((base,i)=>(
                                            i < 10 ? base + " " : ""
                                    ))
                                    }...</p>
                                </div>
                                </div> : ""
                            ))
                        }
                        </div>
                </div>
            </div>
        </div>
    )
}

export const ContactHeader = () =>{
    const location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d769741.0191106143!2d70.70215954202615!3d41.095197586431794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a4c708e5b54231%3A0x4e71cd6bb0e2df44!2z0J3QsNC80LDQvdCz0LDQvdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1642334353408!5m2!1sru!2s"
   
   useEffect(()=>{
       AOS.init();
   })
    return(
        <>
        <div className="contactHeader">
            <div className="grid2">
                <div className="contactChild">
                    <h1
                     data-aos="fade-up"
                     data-aos-duration="2000" 
                     data-aos-delay="150"
                    >We'd love to hear <br /> from you</h1>
                    <p
                     data-aos="fade-up"
                     data-aos-duration="2000" 
                     data-aos-delay="250"
                    >
                    Have any question in mind or want to enquire? Please feel free to <br /> contact us through the form or the following details.
                    </p>
                </div>
                <div className="contactUser">
                    <h2
                     data-aos="fade-up"
                     data-aos-duration="2000" 
                     data-aos-delay="50"
                    >Let's talk! </h2>
                    <p
                     data-aos="fade-up"
                     data-aos-duration="2000" 
                     data-aos-delay="150"
                    >+1 23 456 789 <span>hello@finsweet.com</span></p>
                    <h2
                     data-aos="fade-up"
                     data-aos-duration="2000" 
                    
                    >Headoffice</h2>
                    <p
                     data-aos="fade-up"
                     data-aos-duration="2000" 
                     data-aos-delay="150"
                    
                    >
                    8 Brewery Drive, Hudson, NH 03051 <br /> USA
                    </p>
                    <h2
                     data-aos="fade-up"
                     data-aos-duration="2000" 
                     data-aos-delay="50"
                    >Branch Office</h2>
                    <p
                     data-aos="fade-up"
                     data-aos-duration="2000" 
                     data-aos-delay="150"
                    >
                    178 Marconi St., Venice, 34293 <br /> Italy
                    </p>
                    <div className="soicalM" 
                     data-aos="fade-right"
                     data-aos-duration="2000" 
                     data-aos-delay="50"
                    >
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-telegram-plane"></i>
                    </div>
                </div>
            </div>
        </div>
        <iframe
        
            data-aos="fade-left"
            data-aos-duration="2000" 
            data-aos-delay="50"
        src={location} className="iframe" ></iframe>
        </>
    )
} 

export const ContactPage  = () =>{
    useEffect(()=>{
        AOS.init();
    })
    return(
        <div className="comment contactPage">
        <div className="comment_child">
            <form action="" method="post"
            data-aos="fade-up"
            data-aos-duration="2000" 
            data-aos-delay="50"
            >
                <div className="grid2">
                    <input type="text" placeholder="First Name" />
                    <input type="email" placeholder="Email" />
                </div>
                <input type="text" placeholder="Subject" />
                <textarea name="" placeholder="Message" id="" cols="30" rows="10"></textarea>
                <button type="submit">Xabar yuborish</button>
            </form>
        </div>
    </div>
    )
}

