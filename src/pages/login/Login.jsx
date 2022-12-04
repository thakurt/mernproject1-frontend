import './login.css'
import { Link } from 'react-router-dom'

import React, { useRef } from 'react'
import { useContext } from 'react'
import { Context } from '../../context/context'
import axios from 'axios'

export default function Login() {
    const userRef = useRef()
    const passwordRef = useRef()
    const {dispatch, isFetching} = useContext(Context)

    const handleSubmit = async (e)=>{
        e.preventDefault()
        dispatch({type:"LOGIN_START"});
        
        try {
            const res = await axios.post("https://mernapi1.onrender.com/api/auth/login", {
                username: userRef.current.value,
                password:passwordRef.current.value

            })
            dispatch({type:"LOGIN_SUCCESS", payload:res.data})
            
        } catch (error) {
            dispatch({type:"LOGIN_FAILURE"})
            
        }
    }
    
    return (
        <div class="center">
        <h1>Login</h1>
        <hr />
        <form method="post"  onSubmit={handleSubmit} >
          <div class="txt_field">
            <input type="text" required ref={userRef} />
            <span></span>
            <label>Username</label>
          </div>
          <div class="txt_field">
            <input type="password" required ref={passwordRef} />
            <span></span>
            <label>Password</label>
          </div>
         
          <input type="submit" value="Login" disabled={isFetching}  />
          <div class="signup_link">
            Not registered? <a href='/register' ><Link className='link' to="/Register">REGISTER</Link></a>
          </div>
        </form>
       
      </div>
      
    )
}
