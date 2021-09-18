import React from 'react'
import '../assets/css/contact_us.css'
import sideImg from '../assets/img/charles-rRWiVQzLm7k-unsplash.jpg'
import Logo from '../assets/img/logo-ALTA-v2.png'
import swal from 'sweetalert';

import { useSelector, useDispatch } from 'react-redux';
import { handleEdit } from '../../store/FormSlice';
import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

function ContactUs() {
    const personal = useSelector((state) => state.personal.personal)
    const dispatch = useDispatch()

    const[data,setData] = useState(personal)
    // console.log(data)

    const [errMsgNama, setErrMsgNama] = useState("")
    const [errMsgEmail, setErrMsgEmail] = useState("")
    const [errMsgPhone, setErrMsgPhone] = useState("")
    const regexNama = /^[A-Za-z ]+$/
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    const regexPhone = /^[0-9]*$/

    const onChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        if(name === "nama"){
            if(value === ""){
                setErrMsgNama("Mohon isi data")
            }else{
                if(regexNama.test(value)){
                    setErrMsgNama("")
                }else{
                    setErrMsgNama("Nama Harus berupa Huruf")
                }
            }
        }

        if(name === "email"){
            if(value === ""){
                setErrMsgEmail("Mohon isi data")
            }else{
                if(regexEmail.test(value)){
                    setErrMsgEmail("")
                }else{
                    setErrMsgEmail("Email Kurang Sesuai")
                }
            }
        }
        
        if(name === "phone"){
            if(value === ""){
                setErrMsgPhone("Mohon isi data")
            }else{
                if(regexPhone.test(value)){
                    setErrMsgPhone("")
                }else{
                    setErrMsgPhone("No Handphone Harus Berupa Angka")
                }
            }
        }
        
        setData({...data,
            [name]:value
        })
    }

    const handleSubmit = (e) => {
        const IsEmpty = (data.nama || data.email || data.phone)
        // console.log(errMsgPhone)
        if(IsEmpty && !errMsgNama && !errMsgEmail && !errMsgPhone){
            const newData = {
                nama: data.nama,
                email: data.email,
                phone: data.phone,
                nationality: data.nationality,
                message: data.message
            }
            swal({
                title: "Success",
                text: "Data berhasil kami terima",
                icon: "success",
            });
            dispatch(handleEdit(newData));
        }else{
            e.preventDefault();
            swal({
                title: "Error",
                text: "Mohon isi data sesuai ketentuan",
                icon: "error",
            });
        }
    }

    useEffect(() => {
        setData(
            {
                nama: "",
                email: "",
                phone: "",
                nationality: "",
                message: "",
            }
        )
        dispatch(handleEdit(data));
    },[]);

    return (
        <div>
            <div className="main">
                <div className="side-img-container">
                    <img
                    className="image"
                    src={sideImg}
                    alt=""
                    />
                    <div className="image backrop-img"></div>
                    <img className="image logo" src={Logo} alt=""/>
                </div>
                <div className="content-form">
                    <h2>Contact Us</h2>
                        <div className="">
                            Full Name:
                            <input 
                                type="text" 
                                className={errMsgNama ? 'form-control form-control-sm error':'form-control form-control-sm '} 
                                placeholder="Your Full Name Here..." 
                                value={data.nama} 
                                name="nama" 
                                onChange={onChange} 
                                required 
                            />
                            <div className="errMsg">
                                {errMsgNama}
                            </div>
                        </div>
                        <div className="">
                            Email Address:
                            <input 
                                type="text" 
                                className={errMsgEmail ? 'form-control form-control-sm error':'form-control form-control-sm '} 
                                placeholder="example@domain.com" 
                                value={data.email} 
                                name="email" 
                                onChange={onChange} 
                                required 
                            />
                            <div className="errMsg">
                                {errMsgEmail}
                            </div>
                        </div>
                        <div className="">
                            Phone Number:
                            <input 
                                type="text" 
                                className={errMsgPhone ? 'form-control form-control-sm error':'form-control form-control-sm '} 
                                placeholder="085738900xxxxx" 
                                value={data.phone} 
                                name="phone" 
                                onChange={onChange} 
                                required 
                            />
                            <div className="errMsg">
                                {errMsgPhone}
                            </div>
                        </div>
                        
                        <label for="nationality" className='form-label'>Nationality:</label>
                        <select id="nationality" name="nationality" className='form-control form-control-sm' value={data.nationality} name="nationality" onChange={onChange}>
                            <option value="">Selected</option>
                            <option value="Indonesian">Indonesian</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="England">England</option>
                            <option value="Arab">Arab</option>
                        </select>
                        <label for="message" className='form-label'>Message</label>
                        <textarea rows="10" name="message" id="message" className='form-control form-control-sm' placeholder="Your Full Name Here..." value={data.message} name="message" onChange={onChange}></textarea>
                        <Link to="/review">
                            <input type="submit" value="Submit" className="submit" onClick={handleSubmit} />
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
