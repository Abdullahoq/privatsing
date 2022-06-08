import React from "react";




import { CgFacebook } from "react-icons/cg"
import { RiInstagramFill } from "react-icons/ri"
import { SiTwitter,SiYoutube } from "react-icons/si"

const Footer = () => {

  return (
    <footer>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6 order-2 order-md-1 my-3" data-aos="fade-left" data-aos-offset="15">
            <p className="text d-flex justify-content-center text-center m-0">
                 جميع الحقوق محفوظة - الاداء الخاص {new Date().getFullYear()} 
            </p>
          </div>
          <div className="col-md-6 order-1 order-md-2 d-flex justify-content-center justify-content-md-end my-3" data-aos="fade-right"  data-aos-offset="15">
            <div className="social-links">
              <ul className="list-unstyled d-flex align-items-center m-0">
                <li className=''>
                  <a href="https://www.facebook.com/privatesing" target='_blank'><CgFacebook color='#2d2a26' size='1.5rem' /></a>
                </li>
                <li className=''>
                  <a href="https://twitter.com/privatesing" target='_blank'><SiTwitter color='#2d2a26' size='1.5rem' /></a>
                </li>
                <li className=''>
                  <a href="https://www.youtube.com/user/privatesingsa" target='_blank'><SiYoutube color='#2d2a26' size='1.5rem' /></a>
                </li>
                <li className=''>
                      <a href="https://www.instagram.com/privatesing/" target='_blank'><RiInstagramFill color='#2d2a26' size='1.5rem' /></a>
                    </li>
              </ul>
            </div>
          </div>
        </div>


      </div>
    </footer>



  );
};

export default Footer;
