import { useEffect } from "react"
import { useState } from "react"
import "./sidebar.css"
import axios from "axios"
import { Link } from "react-router-dom"

export default function Sidebar() {
    const [cats, setCats] = useState([])

    useEffect(()=>{
        const getCats = async()=>{
            const res = await axios.get("https://mernapi1.onrender.com/api/categories")
            setCats(res.data)
        }
        getCats()

    },[])
    return (
        <div className="sideBar">
            <div className="sidebarItem">
                <span className="sidebarTitle">AboutMe</span>
                <img className='sidebarImg' src="https://cdn.vectorstock.com/i/preview-1x/48/37/web-developer-design-vector-5884837.webp" alt="" />
               <h2>A Full Stack Mern Dev</h2>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    {
                        cats.map((c)=>(
                            <Link className="link" to={`/?cat=${c.name}`}>
                            <li className="sidebarlistItem">{c.name}</li>
                            </Link>
                        ))
                    }
                    
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                    <i className="topIcon fa-brands fa-facebook"></i>
                    <i className="topIcon fa-brands fa-linkedin"></i>
                    <i className="topIcon fa-brands fa-instagram"></i></div>

            </div>

        </div>

    )
}
