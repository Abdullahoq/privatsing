import Head from 'next/head'
import { useEffect } from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap'

import Link from 'next/link'

import { CgFacebook } from "react-icons/cg"
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

export default function Home() {

  useEffect(() => {
    // document.querySelector('video').playbackRate = .75;
  }, [])

  return (
    <div className="home-page">
      <Head>
        <title>PRIVATE SING - الأداء الخاص</title>
        <link rel="icon" href="/assets/images/fav.png" />
      </Head>

      {/* Start Hero section */}
      <div className="main-hero d-flex flex-column align-items-center justify-content-center ">
        <div className="container">
          <div className="content">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-10">
                <div className="main-title mb-5" data-aos="fade-left" data-aos-delay="300">
                  <img src="/assets/images/logo-hero.svg" alt="PRIVATE SING - الأداء الخاص" />
                </div>
                <p className="text mt-3 mb-2" data-aos="fade-left" data-aos-delay="600">
                  نترجم الهامك لنجعلها لغه عصريه فنيه ابتسامتها صورتك وصورتها تبلغ الافاق
                </p>
                <div className="d-flex align-items-center justify-content-between justify-content-sm-start mt-4">
                  <div className="" data-aos="fade-left" data-aos-delay="900">
                    <MainButton isLink linkTo='/contact-us' restClasses='px-4' >
                      تواصل معنا
                    </MainButton>
                  </div>
                  <div className="" data-aos="fade-left" data-aos-delay="1200">
                    <Link href='/works' >
                      <a className="works-link mx-5">
                        أعمالنا
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 d-flex justify-content-end col-md-2 ">
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








    </div>
  )
}
