import React,{useState,useEffect} from "react";

const Jivo = () =>{

    const [jivoHidden,setjivoHidden] = useState(true);
    const [jivoOp,setJivoOp] = useState(false);
    const jivoFun = () =>{
        setjivoHidden(!jivoHidden)
    }
        useEffect(()=>{
            setTimeout(()=>{
                setJivoOp(true);
            },3000)
        })
   
    return(
        <div className={jivoHidden ? "jivo activ" : "jivo"}>

            <div className={jivoOp ? "jivo_header opacity" : "jivo_header"} onClick={jivoFun}>
                Xabar Yuborishingiz mumkin
            </div>
            <div className="jivo_body">
               <div className="jiva_chat">
               <div className="jiva_data_massage">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vel omnis delectus, perspiciatis mollitia ut autem. Error magni obcaecati ab!
                    </p>

                </div>
                <div className="jivo_data_send">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, reprehenderit.
                    </p>
                </div>
                <div className="jivo_data_send">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, reprehenderit.
                    </p>
                </div>
                <form action="" method="post">
                    <div className="form">
                        <input type="text" placeholder="lastname" />
                        <input type="tel" placeholder="phone" />
                        <input type="email" placeholder="email" />
                        <button type="submit">Send</button>
                    </div>
                </form>
               </div>
               <div className="send">
                    <form action="">
                            <input type="text" placeholder="massage" />
                            <button><i className="fas fa-paper-plane"></i></button>
                    </form>
               </div>
            </div>
        </div>
    )
}


export default Jivo;

