import React from 'react'
import Navbar from '../Navbar/Navbar'
import '../assets/css/home.css'
import Anne from '../assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg'
import {Link} from "react-router-dom";

function Home() {
    return (
        <div>
            <Navbar />
            <div className="body">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <img src={Anne} alt="" />
                        </div>
                        <div className="col-md-7">
                            <div className="hy">
                                Hi, my name is
                            </div>
                            <div className="name">
                                Anne Sullivan
                            </div>
                            <div className="cap">
                                I build things for the web
                            </div>
                            
                            <Link to="/contact_us">
                                <div className='signup'>
                                    <p>Get In Touch</p>
                                </div>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Home
