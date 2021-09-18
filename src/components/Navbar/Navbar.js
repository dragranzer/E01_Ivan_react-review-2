import React from 'react'
import '../assets/css/home.css'
import Logo from '../assets/img/logo-ALTA.png'
import {Link} from "react-router-dom";
import { useState, useEffect } from 'react';

function Navbar() {

    const [date, setDate] = useState(new Date());
  
    function refreshClock() {
        setDate(new Date());
    }
    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);

        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 shadow-sm">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarNavAltMarkup" 
                            aria-controls="navbarNavAltMarkup" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav me-auto "></ul>
                        
                        <ul className="navbar-nav">
                            <li className="nav-item px-2 ">
                            <Link className="nav-link my-active" aria-current="page" to="/">HOME</Link>
                            </li>
                            <li className="nav-item px-2 ">
                            <Link className="nav-link" aria-current="page" to="/news">NEWS</Link>
                            </li>
                            <li className="nav-item px-2">
                            <Link className="nav-link" aria-current="page" to="#">ABOUT</Link>
                            </li>
                            <li className="nav-item px-2">
                            <Link className="nav-link" aria-current="page" to="#">EXPERIENCE</Link>
                            </li>
                            <li className="nav-item px-2">
                            <Link className="nav-link" aria-current="page" to="/contact_us">CONTACT</Link>
                            </li>
                        </ul>
                        <div style={{marginLeft: "4%", fontSize:"30px"}}>{date.toLocaleTimeString()}</div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
