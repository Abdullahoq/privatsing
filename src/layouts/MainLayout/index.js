import React, { useEffect } from 'react'

import { useRouter } from 'next/router'

import Navbar from "./Navbar";
import Footer from "./Footer";



const index = ({ children }) => {
 const router = useRouter()

  return (
    <>
      <Navbar />
      <main >
        {children}
      </main>
      {router.pathname !== '/' && <Footer />}
    </>
  )
}

export default index
