import React, { useState } from 'react'
import Link from 'next/link'

import styles from './navbarsmall.module.css'
const NavBarSmall = ({ executeScroll, course }) => {
    const [toggle, setToggle] = useState(false)
    const handleClick = () => {
        executeScroll()
        setToggle(!toggle)
    }
    const handleToggle = () => {

        setToggle(prev => !prev)
    }

    return (
        <div className={styles.container}>
            <label onClick={handleToggle} for="check" className={styles.bar}>
                <div id="check" className={toggle ? styles.closemenu : styles.hamburger} ></div>
                <span className={styles.top} ></span>
                <span className={styles.middle}></span>
                <span className={styles.bottom}></span>


            </label>

            {
                toggle && < div className={styles.links}>
                    <div className={styles.a} href="">  <Link href="/" >Home</Link> </div>
                    {course ? <div className={styles.a} href="/" onClick={handleClick}>Courses</div> : ''}

                    <div className={styles.a} href="">  <Link href="/comingsoon" >Free Assesment</Link> </div>
                    <div className={styles.a} href="">  <Link href="/comingsoon" >Become a Mentor</Link> </div>
                    <div className={styles.a} href=""> <Link href="/getintouch" >Contact</Link> </div>
                    <div className={styles.button}> <Link href="/enroll">Enroll Now</Link>  </div>
                </div>
            }



        </div >
    )
}

export default NavBarSmall
// <div className={styles.a} href="">Blogs</div>
                    // <div className={styles.a} href="">  Hire from us </div>