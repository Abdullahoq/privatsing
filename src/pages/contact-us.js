import Head from 'next/head'
import { useEffect, useState } from 'react';
import { Container, Row, Card, Button, Tab, Nav } from 'react-bootstrap'

import Link from 'next/link'

import { CgFacebook } from "react-icons/cg"
import { RiInstagramFill } from "react-icons/ri"

import { SiTwitter, SiYoutube } from "react-icons/si"





import MainButton from "../components/shared/MainButton"

export default function ContactUs() {
    const [filledInput, setFilledInput] = useState(false);
    const [formValues, setFormValues] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    })


    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }

    function handleSubmitForm(e) {
        e.preventDefault();
        console.log('formValues', formValues)
    }
    return (
        <div className="contact_us-page">
            <Head>
                <title>PRIVATE SING - الأداء الخاص </title>
                <link rel="icon" href="/assets/images/fav.png" />
            </Head>

            {/* Start Hero section */}
            <div className="main-hero d-flex flex-column align-items-center justify-content-center ">
                <div className="container">
                    <div className="content">
                        <div className="row align-items-end">
                            <div className="col-md-11 d-flex flex-column align-items-start align-items-md-end justify-content-center ">
                                <div className="content">
                                    <h1 className="main-title mb-4" data-aos="fade-left" data-aos-delay="300">
                                        اتصل بنا
                                    </h1>
                                    <p className="text mb-2" data-aos="fade-left" data-aos-delay="600">
                                        نرحب بتواصلك معنا
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-1 d-flex justify-content-end  ">
                                <div className="social-links">
                                <ul className="list-unstyled">
                                        <li className='mb-4' data-aos="fade-right" data-aos-delay="300">
                                            <a href="https://www.facebook.com/privatesing" target='_blank'><CgFacebook color='#CBC3BB' size='1.5rem' /></a>
                                        </li>
                                        <li className='mb-4' data-aos="fade-right" data-aos-delay="600">
                                            <a href="https://twitter.com/privatesing" target='_blank'><SiTwitter color='#CBC3BB' size='1.5rem' /></a>
                                        </li>
                                        <li className='mb-4' data-aos="fade-right" data-aos-delay="900">
                                            <a href="https://www.youtube.com/user/privatesingsa" target='_blank'><SiYoutube color='#CBC3BB' size='1.5rem' /></a>
                                        </li>
                                        <li className='mb-4' data-aos="fade-right" data-aos-delay="1200">
                                            <a href="https://www.instagram.com/privatesing/" target='_blank'><RiInstagramFill color='#CBC3BB' size='1.5rem' /></a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of Hero section */}


            {/* start main-content work */}
            <div className="main-content py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 my-4">
                            <form onSubmit={handleSubmitForm}>
                                <div className="input-container mb-5"  data-aos-offset="150" data-aos="fade-left" data-aos-delay="300">
                                    <input type="text" name='name' onChange={handleChange}
                                        className={`w-100 ${formValues.name ? 'filled' : ''} px-3`} required />
                                    <span className="placeholder">
                                        الاسم
                                    </span>
                                </div>

                                <div className="input-container mb-5" data-aos="fade-left" data-aos-delay="500">
                                    <input type="text" name='phone' onChange={handleChange}
                                        className={`w-100 ${formValues.phone ? 'filled' : ''} px-3`} required />
                                    <span className="placeholder">
                                        رقم الجوال
                                    </span>
                                </div>
                                <div className="input-container mb-5" data-aos="fade-left" data-aos-delay="700">
                                    <input type="email" name='email' onChange={handleChange}
                                        className={`w-100 ${formValues.email ? 'filled' : ''} px-3`} required />
                                    <span className="placeholder">
                                        البريد الالكتروني
                                    </span>
                                </div>
                                <div className="input-container mb-5" data-aos="fade-left" data-aos-delay="800">
                                    <textarea name='message'
                                        className={`w-100 ${formValues.message ? 'filled' : ''} px-3`} onChange={handleChange} cols="30" rows="5" required></textarea>
                                    <span className="placeholder">
                                        نص الرساله
                                    </span>
                                </div>

                                <MainButton primary restClasses='px-5' data-aos="fade-left" data-aos-delay="900">
                                    ارسال
                                </MainButton>

                            </form>

                        </div>

                        <div className="col-lg-6 my-4" data-aos="fade-right"  data-aos-offset="150" data-aos-delay="300">
                            <div className="map h-100">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3622.6281948651604!2d46.702816!3d24.773934!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeae9bb40c43b9bcd!2z2KfZhNij2K_Yp9ihINin2YTYrtin2LUgLSBQcml2YXRlc2luZw!5e0!3m2!1sen!2seg!4v1654623293078!5m2!1sen!2seg" 
                            width="100%" height="100%" style={{border: '0', minHeight: '250px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
            {/* End of main-content work */}








        </div>
    )
}
