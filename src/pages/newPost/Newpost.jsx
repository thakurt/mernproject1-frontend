import './newpost.css'

import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useContext } from 'react'
import { Context } from '../../context/context'

export default function Newpost() {
    const [title, setTitle] = useState("")
    const [des, setDes] = useState("")
    const [file, setFile] = useState(null)
    const {user} = useContext(Context)
    

    const handleSubmit =  async(e)=>{
        e.preventDefault()
        const newPost = {
            username:user.username,
            title,
            des
        }
        if(file){
            const data =new FormData()
            const filename = Date.now() + file.name 
            data.append("name", filename)
            data.append("file", file)
            newPost.photo = filename
            try {
                await axios.post("https://mernapi1.onrender.com/api/upload", data)
                
            } catch (error) {
                console.log("this")
                
                
            }
        }
        try {
            const res =await axios.post("https://mernapi1.onrender.com/api/post",newPost)
            window.location.replace("/post/" + res.data._id)
            
        } catch (error) {
            
        }

    }

    return (
        <div className="newPost">
            {file && (
                <img src={URL.createObjectURL(file)} alt="" className='newPostImg'/>
            )}
            <form action="" className="newpostForm" onSubmit={handleSubmit}>
                <div className="newpostformGroup">

                    <label htmlFor="fileInput">
                        <i className="fileinputIcon fa-regular fa-plus"></i >
                    </label>

                    <input type="file" id='fileInput'  onChange={(e)=>setFile(e.target.files[0])}/>

                    <input
                        className="writeInput"
                        type="text"
                        placeholder='Title'
                        autoFocus={true} 
                        onChange={(e)=>setTitle(e.target.value)}/>

                </div>

                <div className="newpostformGroup">
                    <textarea className='writeInput writeText' type="text" placeholder='Write Your Story'
                    onChange={(e)=>setDes(e.target.value)}></textarea>
                </div>


                <button className='writeSubmit' type="submit">Publish</button>
            </form >

        </div >
    )
}


