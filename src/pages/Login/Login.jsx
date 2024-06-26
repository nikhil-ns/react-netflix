import React from 'react'
import "./Login.css"
import logo from "../../assets/logo.png"
import { useState } from 'react'

const Login = () => {

  const [signState, setSignState] = useState("Sign In");

  const changeToSignIn = ()=>{
    setSignState("Sign In")
  }
  const changeToSignUp = ()=>{
    setSignState("Sign Up")
  }


  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? 
          <input type="text" placeholder='Your name' /> : <></> }
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id='rememberMe'/>
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ?
          <p>New to Netflix? <span onClick={changeToSignUp}>Sign Up Now</span></p> : 
          <p>Already have account? <span onClick={changeToSignIn}>Sign In Now</span></p> }
          
          
        </div>
      </div>
    </div>
  )
}

export default Login
