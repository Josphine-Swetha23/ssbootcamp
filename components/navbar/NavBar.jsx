import React from 'react'
import NavBarSmall from './NavBarSmall'

import styles from './navbar.module.css'
import Link from 'next/link'

const NavBar = () => {
    return (
        <div className={styles.container} >
            <Link href="/" >
                <div className={styles.logo}>

                    <img className={styles.desktoplogo} src="sightspectrumlogo.svg" alt="sightspectrumlogo" />
                </div>

            </Link>


            <div className={styles.wrapper}>
                <a className={styles.hidelink} href="">Courses</a>

                <div className={styles.hidelink} href=""> <Link href="/comingsoon">Free Assesment</Link > </div>
                <div className={styles.hidelink} href="">  <Link href="/getintouch" >Contact</Link> </div>
                <div className={styles.hidelink} href="">  <Link href="/comingsoon">Become a Mentor</Link> </div>
                <div className={styles.button}>  <Link href="/enroll" > Enroll Now</Link> </div>
                <NavBarSmall />
            </div>
        </div>
    )
}

export default NavBar



            // <a className={styles.hidelink} href="">Hire from us </a>
            // <a className={styles.hidelink} href="">Blogs</a>