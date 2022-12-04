import "./register.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export default function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = async (e) =>{
        e.preventDefault()// it will submit but not refresh the page
        setError(false)

        try {
        const res = await axios.post("https://mernapi1.onrender.com/api/auth/register", {
            username,
            email,
            password
        })
        // if registration becomes successful then will redirect to login page
        res.data && window.location.replace("https://mernapi1.onrender.com/api/login")
    }
        catch(err){
        setError(true)
        }
    }
    return (
        <div class="center">
        <h1>Register</h1>
        <hr/>
        <form method="post"  onSubmit={handleSubmit} >
  
          <div class="txt_field">
            <input className="registerInput" type="text" placeholder="Enter your username..." 
                  onChange={e=>setUsername(e.target.value)}/>
            <span></span>
           
          </div>
  
          <div class="txt_field">
            <input className="registerInput" type="text" placeholder="Enter your email..." 
            onChange={e=>setEmail(e.target.value)}/>
            <span></span>
           
          </div>
  
          <div class="txt_field">
            <input className="registerInput" type="password" placeholder="Enter your password..." 
                  onChange={e=>setPassword(e.target.value)}/>
           
          </div>
         
          <input type="submit" value="Register" />
         
        </form>
        <div class="signup_link">
            already registered? <a href='/register' ><Link className='link' to="/Login">LOGIN</Link></a>
          </div>
        {error && <span style={{color:"red", marginTop:"20px"}}>Something went wrong</span>}
      </div>
    )
}