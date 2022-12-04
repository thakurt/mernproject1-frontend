import './singlepost.css'
import {Link} from "react-router-dom"

import React from 'react'

export default function Singlepost({post}) {
    const PF = "https://mernapi1.onrender.com/images/"
    return (
       


        
            <a href="
            " className='news-box'>
                {
                    post.photo &&
                     <img src={ PF+post.photo }
                    alt=""/>
                }
           
           
                <h1 className='title'><Link to={`/post/${post._id}`} className="link" >
                    <span >{post.title}</span>
                    </Link></h1>
                <p className='para'>
                   {post.des}
                </p>

            </a>
              
    
    

      
        
    )
}
