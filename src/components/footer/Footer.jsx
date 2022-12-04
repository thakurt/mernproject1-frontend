import React from 'react'
import './footer.css'

export default function Footer() {
  return (

    <footer class="footer-distributed">

        <div class="footer-left">
            <h3>Sandip<span>Thakur</span></h3>

            <p class="footer-links">
                <a href="/">Home</a>
                |
                <a href="/about">About</a>
                |
               
            </p>

            <p class="footer-company-name">Copyright © 2022 <strong>MernDeveloper</strong> All rights reserved</p>
        </div>

        <div class="footer-center">
            <div>
                <i class="fa fa-map-marker"></i>
                <p><span>Pune</span>
                    Maharastra</p>
            </div>

            <div>
                <i class="fa fa-phone"></i>
                <p>+91 7547982058</p>
            </div>
            <div>
                <i class="fa fa-envelope"></i>
                <p><a href="mailto:thakursandip321@gmail.com">xyz@gmail.com</a></p>
            </div>
        </div>
        <div class="footer-right">
            <p class="footer-company-about">
                <span>About the Blog</span>
                <strong> This is a Story Blog</strong>where user can write their own story by registering themselves.
            </p>
            <div class="footer-icons">
                <a href="#"> <i className="topIcon fa-brands fa-facebook"></i></a>
                <a href="#"> <i className="topIcon fa-brands fa-linkedin"></i></a>
                <a href="#"> <i className="topIcon fa-brands fa-instagram"></i></a>
               
                   
                   
                
                
               
            </div>
        </div>
    </footer>


        
  )
}
