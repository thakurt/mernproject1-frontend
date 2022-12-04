import './topbar2.css'

import React from 'react'
import { Link } from 'react-router-dom'


import { useContext } from 'react'
import { Context } from '../../context/context'

export default function Topbar2() {
    const {user, dispatch} =useContext(Context)
    const handleLogout =()=>{
        dispatch({ type:"LOGOUT"})
    }
    const PF = "https://mernapi1.onrender.com/images/"
  return (
    <>
        <nav>
	<input id="nav-toggle" type="checkbox"/>
	<div class="logo"><Link className='link' to="/">STORY<strong>BLOG</strong></Link></div>
	<ul class="links">
		<li><a href={`/`} ><Link className='link' to="/">HOME</Link></a></li>
		<li><a href={`/about`} ><Link className='link' to="/About">ABOUT</Link></a></li>
		<li><a href={`/newpost`} ><Link className='link' to="/Newpost">CREATE</Link></a></li>

        <li><a href={`/login`} onClick={handleLogout} style={{cursor:"pointer"}}>{user && "LOGOUT"}</a></li>
        {
            user ? (
                <li className='link'><a href={`/settings`} ><Link className='link' to="/settings">
                <img className='topImg' src={PF + user.profilepic} alt="" />
               </Link></a></li>
            ):(

                
                   <>
                    <li><a href={`/login`} ><Link className="link" to="/login"> LOGIN </Link></a></li>
		      <li><a href={`/register`} ><Link className="link" to="/register"> REGISTER </Link></a></li></>
                
            )
        }

		
	</ul>
	<label for="nav-toggle" class="icon-burger">
		<div class="line"></div>
		<div class="line"></div>
		<div class="line"></div>
	</label>
</nav>


</>

  )
}
