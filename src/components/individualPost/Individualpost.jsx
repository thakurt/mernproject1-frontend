import './individualpost.css'


import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../context/context'


export default function Individualpost() {
    
    
    const PF ="https://mernapi1.onrender.com/images/"
    //useLocation is used to find out the location of particular post
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const [post, setPost] = useState({})
    const {user} = useContext(Context)
    const [title, setTitle] = useState("")
    const [des, setDes] = useState("")
    const [updateMode, setUpdateMode] = useState(false)

    useEffect(()=>{
        const getPost = async()=>{
            const res = await axios.get("https://mernapi1.onrender.com/api/post/" + path)
            setPost(res.data)
            setTitle(res.data.title)
            setDes(res.data.des)
        }
        getPost()

    },[path])
    const handleDelete = async()=>{
        try {
            await axios.delete(`https://mernapi1.onrender.com/api/post/${post._id}`, 
            {
                data: {username:user.username},})
            window.location.replace("/")
        } catch (error) {
            
        }
    }

    const handleUpdate = async()=>{
        try {
            await axios.put(`/post/${post._id}`,{
                
                    username:user.username,
                    title,
                     des 
            })

            setUpdateMode(false)
            
        } catch (err) {
            
        }
    }
    
    return (
        <div className="individualPost">
            <div className="individualpostWraper">
            {
                post.photo && (
                    <img className='individualPostImg' src={PF + post.photo} alt="" />
                )
            }{
                updateMode ? <input type="text" value={title} className="" 
                onChange={(e)=>setTitle(e.target.value)}/>: (
            
                <h1 className="individualpostTitle">
                {title}
                {post.username === user?.username && (
                    
                    <div className="individualpostEdit">

                        <i className="indpostIcon fa-solid fa-pen-to-square" onClick={()=> setUpdateMode(true)}></i>

                        <i className="indpostIcon fa-solid fa-trash" onClick={handleDelete}></i>
                    </div> 
                )}
                </h1>
                
                )}
               
                <div className="indpostInfo">
               
                    <span className="indpostAuthor">
                 <b>
                    <Link className="link" to={`/?user=${post.username}`}>
                    {post.username}
                    </Link>
                       </b></span>
                       
                    <span className="indpostDate">{ new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode ?  (<textarea className='singlePostDesInput'  value={des} onChange={(e)=>setDes(e.target.value)}/>) :(
                    <p className='indpostDes'>{post.des}</p>
                )}
                

                   { updateMode &&  <button className="singlepostButton" onClick={handleUpdate}>
                        Update
                    </button>
}
            </div>

        </div>
    )
}
