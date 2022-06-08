import Head from 'next/head'
import { useEffect } from 'react';
import { Container, Row, Card, Button, Tab, Nav } from 'react-bootstrap'

import Link from 'next/link'

import { CgFacebook } from "react-icons/cg"
import { BsArrowLeft } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"

import { SiTwitter, SiYoutube } from "react-icons/si"


export default function successPartners() {

    return (
        <div className="success_partners-page">
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
                                    <h1 className="main-title mb-4"data-aos="fade-left" data-aos-delay="300">
                                        شركاء النجاح
                                    </h1>
                                    <p className="text mb-2"data-aos="fade-left" data-aos-delay="600">
                                        نهتـم بتفاصيـل عملهـم ونحترم رغبتهـم ونفخر باختيارهم فهم سـفراء تميزنا .
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
            <div className="main-content success_partners-content py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="row">
                              <div className="col-lg-2 col-4 d-flex justify-content-center align-items-center mb-5" data-aos="zoom-out-up" data-aos-offset="70">
                                  <img src='/assets/images/MBS.png' alt='MBS' className='img-fluid' />
                              </div>

                              <div className="col-lg-2 col-4 d-flex justify-content-center align-items-center mb-5" data-aos="zoom-out-up" data-aos-delay="500" data-aos-offset="70">
                                  <img src='/assets/images/rento.png' alt='rento' className='img-fluid' />
                              </div>

                              <div className="col-lg-2 col-4 d-flex justify-content-center align-items-center mb-5" data-aos="zoom-out-up" data-aos-delay="700" data-aos-offset="70">
                                  <img src='/assets/images/انسا.png' alt='انسا' className='img-fluid' />
                              </div>

                              <div className="col-lg-2 col-4 d-flex justify-content-center align-items-center mb-5" data-aos="zoom-out-up" data-aos-delay="900" data-aos-offset="70">
                                  <img src='/assets/images/amaad.png' alt='amaad' className='img-fluid' />
                              </div>

                              <div className="col-lg-2 col-4 d-flex justify-content-center align-items-center mb-5"  data-aos="zoom-out-up" data-aos-delay="1200" data-aos-offset="70">
                                  <img src='/assets/images/cafe.png' alt='cafe' className='img-fluid' />
                              </div>

                              <div className="col-lg-2 col-4 d-flex justify-content-center align-items-center mb-5"  data-aos="zoom-out-up" data-aos-delay="1500" data-aos-offset="70">
                                  <img src='/assets/images/national-blood-and-cancer.png' alt='national-blood-and-cancer' className='img-fluid' />
                              </div>

                              <div className="col-lg-2 col-4 d-flex justify-content-center align-items-center mb-5"  data-aos="zoom-out-up" data-aos-delay="700">
                                  <img src='/assets/images/nawras-villas.png' alt='nawras-villas' className='img-fluid' />
                              </div>

                              <div className="col-lg-2 col-4 d-flex justify-content-center align-items-center mb-5" data-aos="zoom-out-up" data-aos-delay="800">
                                  <img src='/assets/images/نادي-الهلال.png' alt='نادي-الهلال' className='img-fluid' />
                              </div>

                              <div className="col-lg-2 col-4 d-flex justify-content-center align-items-center mb-5" data-aos="zoom-out-up" data-aos-delay="900">
                                  <img src='/assets/images/elm.png' alt='elm' className='img-fluid' />
                              </div>

                              <div className="col-lg-2 col-4 d-flex justify-content-center align-items-center mb-5" data-aos="zoom-out-up" data-aos-delay="1000">
                                  <img src='/assets/images/مدارس-الشمس.png' alt='مدارس-الشمس' className='img-fluid' />
                              </div>

                              <div className="col-lg-2 col-4 d-flex justify-content-center align-items-center mb-5" data-aos="zoom-out-up" data-aos-delay="1100">
                                  <img src='/assets/images/وزارة-الثقافة-و-الأعلام.png' alt='وزارة-الثقافة-و-الأعلام' className='img-fluid' />
                              </div>

                              <div className="col-lg-2 col-4 d-flex justify-content-center align-items-center mb-5" data-aos="zoom-out-up" data-aos-delay="1200">
                                  <img src='/assets/images/ahwal.png' alt='ahwal' className='img-fluid' />
                              </div>
                            </div>
                        </div>

                        <div className='d-flex w-100 my-4' data-aos="zoom-in" data-aos-delay="1400">
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
