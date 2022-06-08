import Head from 'next/head'
import { useEffect } from 'react';
import { Container, Row, Card, Button, Tab, Nav } from 'react-bootstrap'

import Link from 'next/link'

import { CgFacebook } from "react-icons/cg"
import { BsArrowLeft } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"

import { SiTwitter, SiYoutube } from "react-icons/si"

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
    Autoplay,
    Mousewheel,
    Keyboard,
} from "swiper/core";
// import required modules
// import { Pagination } from "swiper";
import { Pagination, Navigation }
    from "swiper";
import "swiper/css/effect-flip";

// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination, Mousewheel, Keyboard]);



import MainButton from "../components/shared/MainButton"

export default function services() {


    return (
        <div className="services-page">
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
                                        خدماتنا
                                    </h1>
                                    <p className="text mb-2" data-aos="fade-left" data-aos-delay="600">
                                        أن أعمالنا ستتضمن عناصر هامة كالجودة والابتكار والالتزام، لنكون الخيار الأمثل لتحقيق أهداف ورؤى الشركاء.
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
                {/* what we offer section */}
                <div className="what-offer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 my-4">
                                <div className="content">
                                    <h6 className="subtitle mb-2" data-aos="fade-up" data-aos-offset="150"
                                    >ماذا نقدم</h6>
                                    <h3 className="title" data-aos="fade-up" data-aos-offset="100" data-aos-delay="500">
                                        الهويات والشعارات
                                    </h3>
                                    <p className='text my-3' data-aos="fade-up" data-aos-offset="100" data-aos-delay="800">
                                        بلمسـات إبداعية متخصصة نرسـم لشـركائنا هوية بصرية لترسم لهـم طريقا يصلون به إلـى غاياتهم وأهدافهم.
                                    </p>
                                    <div className="d-flex my-3 align-items-center justify-content-between justify-content-sm-start mt-4">
                                        <div data-aos="fade-up"  data-aos-delay="1000">
                                            <MainButton primary isLink linkTo='/contact-us' restClasses='px-5'>
                                                اتصل الان
                                            </MainButton>
                                        </div>
                                        <div data-aos="fade-up"  data-aos-delay="1200">
                                            <Link href='/works' >
                                                <a className="works-link mx-5">
                                                    أعمالنا
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-5 d-none d-lg-flex justify-content-center my-4" data-aos="zoom-in" data-aos-offset="200"> 
                                <img src="/assets/images/private-sing-lap.png" className='img-fluid w-75' alt="private-sing-lap" />
                            </div>

                            {/* slider */}
                            <div className="col-12 my-4" data-aos="zoom-in-up">
                                <Swiper
                                    speed={500}
                                    autoplay={{
                                        delay: 2000,
                                    }}
                                    slidesPerView={4}
                                    spaceBetween={20}
                                    breakpoints={{
                                        1200: {
                                            slidesPerView: 4,
                                            spaceBetween: 20,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 10,
                                        },
                                        450: {
                                            slidesPerView: 1,
                                            spaceBetween: 0,
                                        },
                                        300: {
                                            slidesPerView: 1,
                                            spaceBetween: 0,
                                        },
                                    }}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        {({ isActive }) => (
                                            <div className={`service-card ${isActive ? 'show' : ''} py-4 px-2 text-center d-flex flex-column justify-content-center align-items-center`}>
                                                <div className="icon d-flex justify-content-center align-items-center">
                                                    <img src="/assets/images/brand-image.svg"
                                                        alt="brand-image" className='img-fluid' />
                                                </div>
                                                <h4 className="title my-4">
                                                    الهويات والشعارات Current slide is
                                                </h4>
                                                <p className='text'>
                                                    بلمسـات إبداعية متخصصة نرسـم لشـركائنا هوية بصرية لترسم لهـم طريقا يصلون به إلـى غاياتهم وأهدافهم.
                                                </p>
                                            </div>
                                        )}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {({ isActive }) => (
                                            <div className={`service-card ${isActive ? 'show' : ''} py-4 px-2 text-center d-flex flex-column justify-content-center align-items-center`}>
                                                <div className="icon d-flex justify-content-center align-items-center">
                                                    <img src="/assets/images/camera.svg"
                                                        alt="camera-image" className='img-fluid' />
                                                </div>
                                                <h4 className="title my-4">
                                                    التصوير الفوتغرافي
                                                </h4>
                                                <p className='text'>
                                                    مقدمو الحدمات لعملائهم يرغبون بصور تجعل من منتجهم محط إغراء , دورنا أن نقدمها بأفضل طريقة يمكن الوصول إليها
                                                </p>
                                            </div>
                                        )}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {({ isActive }) => (
                                            <div className={`service-card ${isActive ? 'show' : ''} py-4 px-2 text-center d-flex flex-column justify-content-center align-items-center`}>
                                                <div className="icon d-flex justify-content-center align-items-center">
                                                    <img src="/assets/images/website.svg"
                                                        alt="website-image" className='img-fluid' />
                                                </div>
                                                <h4 className="title my-4">
                                                    تطوير المواقع
                                                </h4>
                                                <p className='text'>
                                                    إنشاء مواقع الويب الإبداعية أو تطويرها
                                                    لتناسب علامتك التجارية.
                                                </p>
                                            </div>
                                        )}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {({ isActive }) => (
                                            <div className={`service-card ${isActive ? 'show' : ''} py-4 px-2 text-center d-flex flex-column justify-content-center align-items-center`}>
                                                <div className="icon d-flex justify-content-center align-items-center">
                                                    <img src="/assets/images/video.svg"
                                                        alt="video-image" className='img-fluid' />
                                                </div>
                                                <h4 className="title my-4">
                                                    الفيديو والموشن جرافيك
                                                </h4>
                                                <p className='text'>
                                                    نختصـر الوقـت لنوثق العمل والمنتـج بطريقة فنية ، تكون فكرتـه مميزة ، مواكبـة للتطلعات

                                                </p>
                                            </div>
                                        )}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {({ isActive }) => (
                                            <div className={`service-card ${isActive ? 'show' : ''} py-4 px-2 text-center d-flex flex-column justify-content-center align-items-center`}>
                                                <div className="icon d-flex justify-content-center align-items-center">
                                                    <img src="/assets/images/brand-image.svg"
                                                        alt="brand-image" className='img-fluid' />
                                                </div>
                                                <h4 className="title my-4">
                                                    الهويات والشعارات
                                                </h4>
                                                <p className='text'>
                                                    بلمسـات إبداعية متخصصة نرسـم لشـركائنا هوية بصرية لترسم لهـم طريقا يصلون به إلـى غاياتهم وأهدافهم.
                                                </p>
                                            </div>
                                        )}
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of main-content work */}








        </div>
    )
}
