import React, { useState } from 'react'
import Link from 'next/link'

import styles from './navbarsmall.module.css'
const NavBarSmall = () => {

    const [toggle, setToggle] = useState(false)
    return (
        <div className={styles.container}>
            <label for="check" className={styles.bar}>
                <input id="check" className={styles.hamburger} onClick={() => { setToggle(!toggle) }} type="checkbox" />

                <span className={styles.top}></span>
                <span className={styles.middle}></span>
                <span className={styles.bottom}></span>
            </label>

            {
                toggle && < div className={styles.links}>
                    <div className={styles.a} href="">Courses</div>

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