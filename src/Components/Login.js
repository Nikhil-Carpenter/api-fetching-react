import React, { useRef } from "react";
import { Link} from "react-router-dom";
function Login()
{
   // state = {loginResponse:""}

   var email = useRef()
   var pass = useRef()

  var loginUser = (event)=>{
      event.preventDefault();
      var uemail = email.current.value;
      var upass = pass.current.value;
      // console.log(email+" : "+pass);
      var obj = {email:uemail,password:upass}
      // console.log("Object is : "+obj);
      fetch("http://apps.codebetter.in:8082/chatbuddy/auth/login",{
           method:"POST",
           headers:{'Content-Type' : 'application/json'},
           body:JSON.stringify(obj)
        }).then(response=>response.json()).then((resp)=>{
            console.log("Response is : "+resp);
            console.log("Resonse : "+JSON.stringify(resp))
            
            // if(resp.status)
            // {
            //      setState({loginResponse:true})
            // }  

        }).catch((err)=>{
            console.log("Error Called... "+err)
        })
   }
   
        return<div className="container">
        
         <h1 style={{textAlign:'center',color:'red'}}>
         Login Here !</h1>
        <form onSubmit={loginUser}>
         <div className="form-group">
            <label>Enter Email</label>
            <input type="text" placeholder="Enter Email" ref={email}
            className="form-control"/>
         </div>
         <div className="form-group">
            <label>Enter Password</label>
            <input type="text" placeholder="Enter Password" ref={pass}
            className="form-control"/>
         </div>
         <div className="form-group">
            <input type="submit" value="Login" 
            className="btn btn-success form-control"/>
         </div>
         <span>If you have not Register ?
            &nbsp;&nbsp;<Link to="/register">Click Here !</Link>
         </span>
         </form>
        </div>
    
}
export default Login