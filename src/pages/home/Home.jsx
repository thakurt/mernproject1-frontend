import Header from "../../components/header/Header"
import Post from "../../components/posts/Post"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css"
import axios from 'axios'
import { useState } from "react"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Footer from "../../components/footer/Footer"

export default function Home() {
    const [posts, setPost] = useState([]) 
    const {search} = useLocation()

    //console.log(location)

    //useEffect is used for fetching the API data
    useEffect(()=>{
        const fetchPost = async ()=>{
           const res = await axios.get('https://mernapi1.onrender.com/api/post' + search)
           setPost(res.data)
        }
        fetchPost()
    },[search])


    return (
        <>
            <Header />
            <div className="home">
                <Post posts={posts} />
                <Sidebar />
            </div>
            <Footer/>
        </>

    )
}

