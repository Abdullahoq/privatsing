import { useEffect } from 'react';
import '../scss/style.scss'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'aos/dist/aos.css'; 
// You can also use <link> for styles
import AOS from 'aos';

import Layout from "../layouts/MainLayout"
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return <Layout>
    <Component {...pageProps} />
  </Layout>
}
