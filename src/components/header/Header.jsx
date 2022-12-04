import { Link } from 'react-router-dom'
import React from './header.css'


export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <h1>Welcome To The Story Blog</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <button class="glow-on-hover" type="button"><Link className='link' to="/Newpost">CREATE YOUR STORY</Link></button>
                
            </div>
           <div className="headerImg">
            <div className="himg">
                <img src="https://cdn.vectorstock.com/i/preview-1x/44/18/male-developer-checking-internet-service-software-vector-42424418.webp" alt="" />
            </div>
           </div>
        </div>

    )
}
