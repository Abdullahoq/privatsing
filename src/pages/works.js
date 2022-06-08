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


// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination, Mousewheel, Keyboard]);

import MainButton from "../components/shared/MainButton"

export default function works() {



    return (
        <div className="works-page">
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
                                        اعمالنا
                                    </h1>
                                    <p className="text mb-2" data-aos="fade-left" data-aos-delay="600">
                                        هنـا حكايـة بصريـة لأعمالنا ، سـترى معهـا بصمتنا المغايرة لـــــــتدرك من خــــالها : الأداء الخــاص
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-1 d-flex justify-content-end">
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
                        <div className="col-12 mb-3">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="logos">
                                <Nav variant="pills" className='w-100 mb-5 d-flex align-items-center'>
                                    <Swiper
                                        speed={500}
                                        autoplay={{
                                            delay: 2000,
                                        }}
                                        slidesPerView={6}
                                        spaceBetween={10}
                                        breakpoints={{
                                            1024: {
                                                slidesPerView: 6,
                                                spaceBetween: 5,
                                            },
                                            768: {
                                                slidesPerView: 4,
                                                spaceBetween: 5,
                                            },
                                            450: {
                                                slidesPerView: 3,
                                                spaceBetween: 0,
                                            },
                                            300: {
                                                slidesPerView: 3,
                                                spaceBetween: 0,
                                            },
                                        }}
                                        // navigation={true}
                                        // modules={[Pagination, Navigation]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <Nav.Item className='text-center' data-aos="flip-right" data-aos-delay="1400">
                                                <Nav.Link eventKey="logos">
                                                    شعارات
                                                </Nav.Link>
                                            </Nav.Item>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <Nav.Item className='text-center' data-aos="flip-right" data-aos-delay="1600">
                                                <Nav.Link eventKey="motion-graphic">
                                                    موشن جرافيك
                                                </Nav.Link>
                                            </Nav.Item>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Nav.Item className='text-center' data-aos="flip-right" data-aos-delay="1800">
                                                <Nav.Link eventKey="infografic">
                                                    انفوجرافيك
                                                </Nav.Link>
                                            </Nav.Item>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Nav.Item className='text-center' data-aos="flip-right" data-aos-delay="2000">
                                                <Nav.Link eventKey="architec">
                                                    معماري
                                                </Nav.Link>
                                            </Nav.Item>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Nav.Item className='text-center' data-aos="flip-right" data-aos-delay="2200">
                                                <Nav.Link eventKey="portrait">
                                                    بورتريه
                                                </Nav.Link>
                                            </Nav.Item>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Nav.Item className='text-center' data-aos="flip-right" data-aos-delay="2500">
                                                <Nav.Link eventKey="websites">
                                                    مواقع الكترونيه
                                                </Nav.Link>
                                            </Nav.Item>
                                        </SwiperSlide>
                                    </Swiper>
                                </Nav>

                                {/*  */}
                                <Tab.Content className='mt-3'>
                                    <Tab.Pane eventKey="logos">
                                        <div className='grid' data-aos="zoom-out">
                                            <div className="grid-item" >
                                                <img src="/assets/images/dnalee.png" className='img-fluid' alt="Dnalee" />
                                            </div>
                                            <div className="grid-item">
                                                <img src="/assets/images/SV.png" className='img-fluid'
                                                    alt="SV" />
                                            </div>

                                            <div className="grid-item">
                                                <img src="/assets/images/pizza-chess.png" className='img-fluid'
                                                    alt="pizza-chess" />
                                            </div>

                                            <div className="grid-item">
                                                <img src="/assets/images/msbc.png" className='img-fluid'
                                                    alt="msbc" />
                                            </div>

                                            <div className="grid-item">
                                                <div className="text text-center px-2 py-5 d-flex flex-column justify-content-center align-items-center">
                                                    <h3 className='mb-4'>
                                                        مشروعك هنا ؟
                                                    </h3>
                                                    <h3 className='mb-4'>
                                                        فقط قل مرحباً أو أرسل لنا طلب
                                                    </h3>

                                                    <MainButton isLink linkTo='/contact-us' restClasses='px-4'>
                                                        اتصل بنا
                                                    </MainButton>
                                                </div>
                                            </div>


                                            <div className="grid-item">
                                                <img src="/assets/images/design-maker.png" className='img-fluid'
                                                    alt="design-maker" />
                                            </div>

                                            <div className="grid-item">
                                                <img src="/assets/images/riyadah.png" className='img-fluid'
                                                    alt="riyadah" />
                                            </div>

                                            <div className="grid-item">
                                                <img src="/assets/images/RASAN.png" className='img-fluid'
                                                    alt="RASAN" />
                                            </div>

                                            <div className="grid-item">
                                                <img src="/assets/images/msbc.png" className='img-fluid'
                                                    alt="msbc" />
                                            </div>
                                        </div>

                                    </Tab.Pane>
                                    <Tab.Pane eventKey="motion-graphic">
                                        motion-graphic
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="infografic">
                                        infografic
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="architec">
                                        architec
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="portrait">
                                        portrait
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="websites">
                                        websites
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>

                        <div className='d-flex w-100 my-4' data-aos="fade-up"
                            data-aos-duration="2000">
                            <Link href='/contact-us' >
                                <a className='contact m-auto'>
                                    تواصل معنا
                                    <BsArrowLeft size="1.5rem" className="icon mx-3" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of main-content work */}








        </div>
    )
}
