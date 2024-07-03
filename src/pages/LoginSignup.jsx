// import React from 'react'
// import './CSS/LoginSignup.css'
// import { useState } from 'react'
// export const LoginSignup = () => {
//   const [state,setState]=useState("Sign Up");
//   const [formData,setFormData]=useState({
//     username:"",
//     password:"",
//     email:""
//   })
//   const changeHandler=(e)=>{
//     setFormData({...formData,[e.target.name]:e.target.value})
//   }

//   const login=async()=>{
//     console.log("Login Function Executed",formData);
//     console.log("Login Function Executed",formData);
//     let responseData;
//     await fetch('http://localhost:5000/api/user/login',{
//       method:'POST',
//       headers:{
//         Accept:'application/form-data',
//         'Content-Type':'application/json',
//       },
//       body:JSON.stringify(formData)
//     }).then((response)=> response.json()).then((data)=>{responseData=data})
//     if(responseData.success)
//     {
//       localStorage.setItem('auth-token',responseData.token);
//       window.location.replace("/")
//     }
//     else{
//       alert(responseData.errors)
//     }
//   }
//   const signup=async()=>{
//     console.log("Login Function Executed",formData);
//     let responseData;
//     await fetch('http://localhost:5000/api/user/signup',{
//       method:'POST',
//       headers:{
//         Accept:'application/form-data',
//         'Content-Type':'application/json',
//       },
//       body:JSON.stringify(formData)
//     }).then((response)=> response.json()).then((data)=>{responseData=data})
//     if(responseData.success)
//     {
//       localStorage.setItem('auth-token',responseData.token);
//       window.location.replace("/")
//     }
//     else{
//       alert(responseData.errors)
//     }
//   }

//   return (
//     <div className="loginsignup">
//       <div className="loginsignup-container">
//         <h1>{state}</h1>
//         <div className="loginsignup-fields">
//          {state==="Sign Up" ?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your name'/>:<></>}
//           <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address'/>
//           <input  name='password' value={formData.password} onChange={changeHandler}type="password" placeholder="Password"/>
//         </div>
//         <button onClick={()=>{state==="Login"?login():signup()}}>Continue
//         </button>
//         {state==="Sign Up" ?<p className='loginsignup-login'>Already have an Account <span onClick={()=>{setState("Login")}}>Login here</span></p>
//         :<p className='loginsignup-login'>Create an Account<span onClick={()=>{setState("Sign Up")}}>Register here</span ></p>
//         }
        

//       <div className="loginsignup-agree">
//         <input type="checkbox"name=''id=''/>
//         <p>By continuing,I agree to the terms of use & privacy policy</p>
//       </div>
//       </div>
//     </div>
//   )
// }
// export default LoginSignup;

import React, { useState } from 'react';
import './CSS/LoginSignup.css';

export const LoginSignup = () => {
  const [state, setState] = useState("Sign Up");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login Function Executed", formData);
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      const responseData = await response.json();
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } catch (error) {
      console.error('Login Error:', error);
      alert('Login failed');
    }
  };

  const signup = async () => {
    console.log("Signup Function Executed", formData);
    try {
      const response = await fetch('http://localhost:5000/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Signup failed');
      }
      const responseData = await response.json();
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } catch (error) {
      console.error('Signup Error:', error);
      alert('Signup failed');
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" && <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your name' />}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
        </div>
        <button onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>
        {state === "Sign Up" ?
          <p className='loginsignup-login'>Already have an Account <span onClick={() => { setState("Login") }}>Login here</span></p> :
          <p className='loginsignup-login'>Create an Account <span onClick={() => { setState("Sign Up") }}>Register here</span></p>
        }
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
