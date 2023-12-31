import React,{useState} from "react";
import {Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// import Register from "./Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import DashBoard from "../components/dashboard";
// import './login.css';
// import UserNavbar from "./usernavbar";
import UserDashBoard from "./userdashboard";
import axios from "axios";


function Signup() {
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
      e.preventDefault();
      let users = {
        "username":username,
        "password":password
      }
      axios.post('http://localhost:1260/adduser',{users}).then((res)=> {
        console.log(res.data)
      })
      // if((username=='sriram') && (password=='mb'))
      // {
      //     // history.push('/dash')
      //     // navigate('/components/Dashboard');
      //     // alert('Hello Sriram');
      //     window.history.pushState({}, '', '/dashboard');
      //     window.location.reload();
      //     // window.location.href = '/dash';
      //     // window.history.pushState({ username: 'sriram', password: 'mb' }, '', '/dash');         
      //   }
      // else if((username=='satwika') &&(password=='satwika'))
      // {
      //   // navigate('/userdash');
      //   // history.push('/userdash')
      //   alert('Hello Satwika');
      //   window.history.pushState({}, '', '/dashboard');
      // }
      // else if((username=='vijay') &&(password=='user'))
      // {
      //   // navigate('/userdash');
      //   // history.push('/userdash')
      //   alert('Hello vijay');
      //   window.history.pushState({}, '', '/userdashboard');
      // }
      // else if((username=='neeraja') &&(password=='neeraja'))
      // {
      //   // navigate('/userdash');
      //   // history.push('/userdash')
      //   alert('Hello neeraja');
      //   window.history.pushState({}, '', '/userdashboard');
      // }
    }
  return (
    <div className="row login_page">
      <div className="col-md-6 leftdiv">
        <center>
        {/* <h1>
            <b>Central Management System</b>
          </h1> */}
          <div className="login_in" style={{marginTop:'200px', marginLeft:'100px', backgroundColor:'gray'}}>
            <form onSubmit={handleSubmit}>
            <h3>Login Form</h3>
              <div className="container">
                <label for="uname">
                  <b>Username</b>
                </label>
                <input className="loglog"
                  type="text"
                  placeholder="Enter Username"
                  name="uname"
                  value={username} onChange={(e)=>setUsername(e.target.value)}
                />
                <label for="psw">
                  <b>Password</b>
                </label>
                <input
                className="loglog"
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  value={password} onChange={(e)=>setPassword(e.target.value)}
                />
                <p className="register" style={{textDecoration: "none"}}>
                  {" "}
                  <Link to="/register" style={{textDecoration:'none',color:'black'}}>Register here</Link>

                </p>
                <p className="login_forgot">
                  {" "}
                  <a href="#" style={{textDecoration:'none',color:'black'}}>Forgot password?</a>
                </p>
               <button type="submit" className="btn btn-danger loginsubmit"  >Login</button>
              </div>
            </form>
          </div>
        </center>
      </div>
      <div className="col-md-6 rightdiv" style={{marginTop:'-50px',padddingTop:'50px', borderRadiusLeft:''}}>
        <h1>Central Management System</h1>
        <div className="para">
        <p className="right-text"><b>A central management system (CMS) is a software platform designed to manage and monitor multiple systems, devices, or applications from a centralized location. This type of system is commonly used in large-scale enterprises, organizations, or networks, where there are numerous endpoints, such as servers, workstations, mobile devices, or IoT devices, that need to be monitored, configured, or updated.

The CMS provides a unified interface and dashboard to administrators or IT personnel to control and manage the connected devices and systems. This can include features such as inventory management, software deployment, patch management, remote access, security management, and reporting. The CMS can also automate routine tasks, such as backups, updates, and maintenance, to reduce manual effort and improve efficiency.
</b></p>
      </div>
      </div>
    </div>
  );
}
export default Signup;