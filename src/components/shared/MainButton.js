import React from 'react'
import Link from 'next/link'



const MainButton = ({ children, primary, isLink, linkTo, restClasses, loading, ...props }) => {

    return (
        <>
            {isLink ? <Link href={linkTo} 
            {...props}>
                <a className={`${restClasses} d-flex align-items-center justify-content-center main-btn ${primary ? 'primary-btn' : 'secondary-btn'}`} >
                    {children}
                </a>
            </Link>
                :
                <button {...props} className={` d-flex align-items-center justify-content-center main-btn  ${restClasses} ${primary ? 'primary-btn' : 'secondary-btn'}`}>
                    {children}
                </button>
            }
        </>
    )
}

export default MainButton
