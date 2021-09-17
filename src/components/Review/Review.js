import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import "../assets/css/rev_mess.css"
import Dot from '../assets/img/img-dot.png'
import {Link} from "react-router-dom";

function Review() {
    const personal = useSelector((state) => state.personal.personal)
    const[data,setData] = useState(personal)
    // console.log(data.nama)
    return (
        <div>
            <div className="content-outer">
                <div className="content-inner">
                    <div className="data">
                        <p>Nama        : {data.nama}</p>
                        <p>Email       : {data.email}</p>
                        <p>Phone       : {data.phone}</p>
                        <p>Nationality : {data.nationality}</p>
                    </div>
                    
                    <div className="message">
                        <p>{data.message}</p>
                    </div>
                    <div className="underline">
                        
                    </div>
                    <div className="closing">
                        <p>Thanks for contacting us!</p>
                        <p>We will be in touch with you shortly.</p>
                    </div>
                    <Link to="/">
                        <div className='button-home'>
                            <p>Home</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="footer">
                <img src={Dot} alt="" />
            </div>
        </div>
    )
}

export default Review
