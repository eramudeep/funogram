import React from 'react'
import Footer from '../../app/shared/Footer'
import Navbar from '../Navbar'
export default function GuestLayout(props) {
    return (
        <>
            <Navbar/>
                    {props.children}
            <Footer/>

        </>
    )
}
