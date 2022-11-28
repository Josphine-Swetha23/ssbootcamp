import React from 'react'
import Image from 'next/image'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/footer'


const ComingSoon = () => {
    return (

        <div className="">

            <NavBar />
            <div style={{ display: "flex", justifyContent: "center", paddingTop: "20px", background: "var(--color-background)" }} >
                <img src='comingsoon.png' style={{ width: "40%", height: "40%" }} />
            </div>
            <Footer />

        </div>

    )
}

export default ComingSoon