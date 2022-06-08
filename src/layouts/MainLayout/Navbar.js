import Link from 'next/link';
import Image from "next/image"

import React, { useEffect, useRef, useState } from 'react'


import { RiInstagramFill } from "react-icons/ri"
import { CgFacebook } from "react-icons/cg"
import { SiTwitter, SiYoutube } from "react-icons/si"
import { IoIosArrowUp } from 'react-icons/io'

import { useRouter } from 'next/router';




const Navbar = (props) => {

    const router = useRouter();
    const [colorChange, setColorchange] = useState(false);
    const [openNav, setOpenNav] = useState(false);
    const [showToTopBtn, setShowToTopBtn] = useState(false);

    const changeNavbarColorAndToggleToTopBtn = () => {
        if (window.scrollY >= 60) {
            setColorchange(true);
            setShowToTopBtn(true);
        }
        else {
            setColorchange(false);
            setShowToTopBtn(false);
        }
    };


    useEffect(() => {
        window.addEventListener('scroll', changeNavbarColorAndToggleToTopBtn);
    }, [])

    const headerClasses = () => {
        return (
            `navContainer ${colorChange ? 'navScroll' : ''}`
        )
    }



    function handleLogout() {
        // console.log(isLogin);
        localStorage.removeItem('isLogin');
        localStorage.removeItem('userData');
        setUserData(null)
        router.push('/login')
    }


    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <nav className={headerClasses()}>

            <div className="container w-100 " >
                <div className="row align-items-center justify-content-between">
                    <div data-aos="fade-up-left" className="col-2">
                        <div className="navbar-logo">
                            <Link href='/'>
                                <a>
                                    <img src="/assets/images/logo.svg"
                                        alt="PRIVATE SING - الأداء الخاص" />
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div data-aos="fade-up-right" className="col-1  ">
                        <div className={`menuBtn d-flex flex-column align-items-end ${openNav ? 'closeMenu' : ''}`}
                            onClick={() => setOpenNav(!openNav)} >
                            <div className="btnLine"></div>
                            <div className="btnLine"></div>
                            <div className="btnLine"></div>
                        </div>
                        <div className='navContent align-items-center'>
                            <div className={`linksContainer m-0 d-flex flex-column px-0 justify-content-center align-items-center ${openNav ? "open-nav" : ''}`}>
                                <ul className="links list-unstyled w-100 d-flex flex-column align-items-center justify-content-between text-center">
                                    <li className='text-center ' onClick={() => setOpenNav(false)} >
                                        <Link href="/">
                                            <a className={`navLink ${router.pathname == "/" ? "active" : ""}`}>
                                                الرئيسية
                                            </a>
                                        </Link>
                                    </li>
                                    <li className='text-center ' onClick={() => setOpenNav(false)}>
                                        <Link href='/works' >
                                            <a className={`navLink ${router.pathname == "/works" ? "active" : ""}`}>اعمالنا</a>
                                        </Link>
                                    </li>

                                    <li className='text-center ' onClick={() => setOpenNav(false)}>
                                        <Link href='/services'>
                                            <a className={`navLink ${router.pathname == "/services" ? "active" : ""}`}>خدماتنا</a>
                                        </Link>
                                    </li>

                                    <li className='text-center ' onClick={() => setOpenNav(false)}>
                                        <Link href='/success-partners'>
                                            <a className={`navLink ${router.pathname == "/success-partners" ? "active" : ""}`}>شركاء النجاح</a>
                                        </Link>
                                    </li>

                                    <li className='text-center ' onClick={() => setOpenNav(false)} >
                                        <Link href="/contact-us">
                                            <a className={`navLink ${router.pathname == "/contact-us" ? "active" : ""}`}>
                                                اتصل بنا
                                            </a>
                                        </Link>
                                    </li>
                                </ul>


                                <div className="social-links">
                                    <ul className="list-unstyled d-flex align-items-center">
                                        <li className='mx-2'>
                                            <a href="https://www.facebook.com/privatesing" target='_blank'><CgFacebook color='#CBC3BB' size='1.5rem' /></a>
                                        </li>
                                        <li className='mx-2'>
                                            <a href="https://twitter.com/privatesing" target='_blank'><SiTwitter color='#CBC3BB' size='1.5rem' /></a>
                                        </li>
                                        <li className='mx-2'>
                                            <a href="https://www.youtube.com/user/privatesingsa" target='_blank'><SiYoutube color='#CBC3BB' size='1.5rem' /></a>
                                        </li>
                                        <li className='mx-2'>
                                            <a href="https://www.instagram.com/privatesing/" target='_blank'><RiInstagramFill color='#CBC3BB' size='1.5rem' /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



            <div onClick={scrollUp}
                className={`to-top d-flex justify-content-center align-items-center ${showToTopBtn ? "showToTopBtn" : ''}`}>
                <IoIosArrowUp color='#fff' size='1.2rem' />
            </div>
        </nav>
    )
}

export default Navbar
