import Aos from "aos";
import React,{useEffect,useState} from "react";
import { useParams,useNavigate } from "react-router-dom";
import Moment from 'moment'

const AllNews = () =>{
    const {id} = useParams();
    const navig = useNavigate();
    const [data,setData] = useState({});
   const [otherData,setOtherData]=useState([]);
   
    useEffect(()=>{
        setData(JSON.parse(localStorage.getItem("newData")));

       Aos.init();
        fetch('http://127.0.0.1:8000/tr/postes/?format=json')
        .then(response => response.json())
        .then(json => {
            setOtherData([...json])
        })
        
    },[])
    window.scrollTo({top:0})
    // let masssiv = ["top","barzu"]
    console.log(typeof  data.tags);
 
    return(
        <div className="allNews">
            <div className="viewNewsGrid">
                <div className="viewChid">
                    <h1 
                    data-aos="fade-up"
                    data-aos-duration="2000" 
                    data-aos-delay="150"
                    >{data.title}</h1>
                    <div className="viewImg"
                    data-aos="fade-up"
                    data-aos-duration="2000" 
                    data-aos-delay="250">
                        <img src={data.image} alt="" />
                    </div>
                    <div className="view1"
                    data-aos="fade-up"
                    data-aos-duration="2000" 
                    data-aos-delay="150"
                    >
                        <p> <i className="fas fa-calendar-day"> </i> <span>{Moment(data.created).format('DD.MM.YYYY')}</span></p>
                        <p> <i className="far fa-eye"></i><span>{data.views}</span></p>
                    </div>
                    <div className="deck"
                    data-aos="fade-up"
                    data-aos-duration="2000" 
                    data-aos-delay="250"
                    >
                        <p
                        data-aos="fade-up"
                        data-aos-duration="2000" 
                        data-aos-delay="150"
                        >
                            {data.body}
                        </p>
                        <p
                        data-aos="fade-up"
                        data-aos-duration="2000" 
                        data-aos-delay="250"
                        >
                        
                           {/* {data.tags.map((al)=>(
                               <a href="#">#{al}</a>
                           ))} */}
                           {
                            //    [...data.tags].map((bol)=>(
                            //        <a href="">#{bol}</a>
                            //    ))
                            data.tags
                           }
                        </p>
                    </div>
                </div>
                <div className="viewChild viewChild2">
                    <h2
                    data-aos="fade-up"
                    data-aos-duration="2000" 
                    data-aos-delay="150"
                    >Oxirigi qo`shilgan yangiliklar</h2>
                     
                       {
                           otherData.map((base,i)=>(
                            i<3 ?  <div className="AllNewsMiniGrid" key={base.id}>
                            <div className="smalAllNewsChild"
                                data-aos="fade-up"
                                data-aos-duration="2000" 
                                data-aos-delay="150"
                                >
                                    <img src={base.image} alt="" />
                            </div>
                            <div className="smalMiniTextAllNews"
                                    data-aos="fade-up"
                                    data-aos-duration="2000" 
                                    data-aos-delay="150"
                                
                                >
                                <h4>{base.title}</h4>
                                <p>{base.body.split(" ").map((get,i)=>(
                                    i<10 ? get+" " : ""
                                ))}...</p>
                            </div>
                            </div> : ""    
                           ))
                       }
                      
                      
                    <div className="tag"
                    data-aos="fade-up"
                    data-aos-duration="2000" 
                    data-aos-delay="150"
                    
                    >
                        <button>#consectetur</button>
                        <button>#amet</button>
                        <button>#quasi</button>
                        <button>#labore</button>
                        <button>#quaerat</button>
                        <button>#expedita</button>
                        <button>#aperiam</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AllNews;