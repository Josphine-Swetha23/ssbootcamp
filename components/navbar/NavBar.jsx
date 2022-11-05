import React from 'react'
import NavBarSmall from './NavBarSmall'

import styles from './navbar.module.css'

const NavBar = () => {
    return (
        <div className={styles.container} >
            <div className={styles.logo}>

                <img className={styles.desktoplogo} src="sightspectrumlogo.svg" alt="sightspectrumlogo" />
            </div>


            <div className={styles.wrapper}>
                <a href="">Courses</a>

                <a href="">Free Assesment</a>
                <a href="">Hire from us </a>
                <a href="">Become a Mentor</a>
                <a href="">Blogs</a>
                <a href="">Contact</a>
                <div className={styles.button}>Login</div>
                <NavBarSmall />
            </div>
        </div>
    )
}

export default NavBar