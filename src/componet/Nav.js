import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import uz from "../all-information/langImg/uz.png";
import ru from "../all-information/langImg/ru.png";
import en from "../all-information/langImg/en.png";
import turk from "../all-information/langImg/turk.png";
import  AOS  from "aos";
import "aos/dist/aos.css";
const Nav = () =>{
    const [navs,setNavs] = useState(false);
    function NavborMenu(){
        setNavs(!navs)
    }
    useEffect(()=>{
        AOS.init();
    })

    const [leng,setLeng] = useState({leng:"uz",img:uz})
    return(
        <>
            <div className="nav-menu">
                <Link to="/" className="nav-logo">UzTex</Link>
                <button className="nav_btn" onClick={NavborMenu}><i className="fas fa-bars"></i></button>
            </div>
            <ul className={navs ? "nav-items active" : "nav-items"}>
                <li className="nav-links" >
                    <Link   to="/" onClick={NavborMenu} >Asosiy</Link>
                </li>
                <li className="nav-links" onClick={NavborMenu}>
                    <Link  to="/news" >Yangilikar</Link>
                </li>
                <li className="nav-links" onClick={NavborMenu}>
                    <Link to="/about" >Biz haqimizda</Link>
                </li>
                <li className="nav-links" onClick={NavborMenu}>
                    <Link to="/galery" >Galery</Link>
                </li>
                <li className="nav-links" onClick={NavborMenu}>
                    <Link to="/contact" >Bog`lanish</Link>
                </li>
                <div>
                    <div className="lang">
                    <div className="lang_header">
                    <div className="lengimg">
                           <img src={leng.img} alt="" />
                        </div>
                            {leng.leng}  
                    </div>
                    <div className="lang_body">
                        <p onClick={(e)=>setLeng({leng:"uz",img:uz})} >
                           <div className="lengimg">
                           <img src={uz} alt="" />
                           </div>
                            uz
                        </p>
                        <p onClick={(e)=>setLeng({leng:"ru",img:ru})} >
                        <div className="lengimg">
                           <img src={ru} alt="" />
                           </div>
                            ru
                        </p>
                        <p onClick={(e)=>setLeng({leng:"en",img:en})}>
                        <div className="lengimg">
                           <img src={en} alt="" />
                           </div>
                            en
                        </p>
                        <p onClick={(e)=>setLeng({leng:"tu",img:turk})}>
                        <div className="lengimg">
                           <img src={turk} alt="" />
                           </div>
                            tu
                        </p>
                    </div>
                    </div>
                </div>

            </ul>

            <button 
             data-aos="fade-up"
             data-aos-duration="1000" 
            className="top" onClick={(e)=>window.scrollTo({top:0,behavior:"smooth"})} >
            <i className="fas fa-arrow-to-top"></i>
            </button>
        </>
    )
}

export default Nav;