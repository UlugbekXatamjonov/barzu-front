import React,{Component,useRef} from "react";
import axios from "axios";
class Register extends Component{


  state = {
    name:"",
    subject:"",
    email:"",
    text:"",
  }
  onName = async e =>{
    await this.setState({
      name:e.target.value
    })
  }
   onUsername = async e =>{
    await this.setState({
      username:e.target.value
    })
  }
  onSubject = async e =>{
    await this.setState({
      subject:e.target.value
    })
  }
  onEmail = async e =>{
    await this.setState({
      email:e.target.value
    })
  }
  onText = async e =>{
    await this.setState({
      text:e.target.value
    })
  }
 


  onsend = async e =>{
    e.preventDefault();
    
    if(this.state.password == this.state.forgetPasswort && this.state.capture == this.state.trueCapture){
      let formData = new FormData();    
    formData.append("name", this.state.name);
    formData.append("username", this.state.email);
    formData.append("subject", this.state.subject);
    formData.append("text", this.state.text);
//   api manzilini quyasizzzz
    axios.post('/api', formData, {
      params: { action: "update-user" },
      headers: { 'Content-Type': 'multipart/form-data' },
      baseURL: 'http://127.0.0.1:8000',
      }).then(data =>
        {
          console.log(data['data'])
          let datas = data['data'];
          console.log(typeof datas);
         
         
        }
      ).catch(err => {
          console.log(err)
          return null
      })
    } else{
      alert("xatolik bor");
    }
  
    

  }
  render(){
     
    return (
      
        <form onSubmit={this.onsend}  
        data-aos="fade-up"
        data-aos-duration="2000" 
        data-aos-delay="150"
       
       >
           <div className="grid2">
               <input type="text" placeholder="First Name" 
                value={this.state.name}  onChange={this.onName} 
               />
               <input type="email" placeholder="Email" 
                value={this.state.email}  onChange={this.onEmail} 
               />
           </div>
           <input type="text" placeholder="Subject" 
            value={this.state.subject}  onChange={this.onSubject} 
           />
           <textarea name="" placeholder="Message" id="" cols="30" rows="10"  onChange={this.onText}  >{this.state.text}</textarea>
           <button type="submit">Xabar yuborish</button>
       </form>
    );
  
  }
}

export default Register;