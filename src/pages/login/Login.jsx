import React from 'react'
import './Login.css'
import  Logo from '../../assets/Logo.png'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const handleLogin= ()=>{
        navigate('/')
    }
  return (
      <div>
          <div className="container">
              <div className="loginBox">
                  <div className="loginLogo">
                      
                      <img src={Logo} alt="" />
                  </div>
                  <div className="Login_text">
                     
                      <p>TASLEEH</p>
                      <p>TRANSACTION FOLLOWING</p>
                  </div>
                  <div className="LoginInputs">
                      <div className="LoginInput">
                          {/* <label htmlFor="">Email</label> */}
                          
                      <input type="text" name="" id="" placeholder='Email' />
                      </div>
                      <div className="LoginInput">
                          {/* <label htmlFor="">Password</label> */}
                      <input type="password" name="" id="" placeholder='Password' />
                  <p className='note'>*please enter your valid email and password</p>
                      </div>
                  </div>
                  <div className="LoginButtonContainer">
                      <button className='btn' onClick={handleLogin}>Login</button>
                  </div>

              </div>
          </div>
    </div>
  )
}

export default Login