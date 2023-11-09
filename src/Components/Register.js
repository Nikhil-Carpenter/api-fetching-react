import React, { useRef } from "react";
function Register()
{
      var name = useRef()
      var email = useRef()
      var pass = useRef()
      var mobile = useRef()
      var gender = useRef()

   var getUserData = (event)=>{

        event.preventDefault();
        var nm = name.current.value;
        var uemail = email.current.value;
        var upass = pass.current.value;
        var umobile = mobile.current.value;
        var ugender = gender.current.value;
    
      //   console.log(nm+" : "+email+" : "+pass+" : "+mobile+" : "+gender);
        var obj = {name: nm,phone:umobile,email:uemail,password:upass,gender :ugender};
        
        fetch("http://apps.codebetter.in:8082/chatbuddy/auth/save",{
           method:"POST",
           headers:{ 'Content-Type' : 'application/json'},
           body:JSON.stringify(obj)
        }).then(response=>response.json()
        ).then((resp)=>{
            console.log("Response is : "+resp);
            console.log("Resonse : "+JSON.stringify(resp))
        }).catch((err)=>{
            console.log("Error Called... "+err)
        })
    }
 
        return<div className="container">
        <h1 style={{textAlign:'center',color:'red'}}>
        Register Here !</h1>
        <form onSubmit={getUserData}>
        <div className="form-group">
           <label>Enter Name</label>
           <input type="text" placeholder="Enter Name" ref={name}
           className="form-control"/>
        </div>
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
           <label>Enter Mobile</label>
           <input type="text" placeholder="Enter Mobile" ref={mobile}
           className="form-control"/>
        </div>
        <div className="form-group">
           <label>Select Gender</label>
          <select className="form-control" ref={gender}>
            <option value=''>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
           <input type="submit" value="Register" 
           className="btn btn-success form-control"/>
        </div>
        </form>
       </div>
    
}
export default Register