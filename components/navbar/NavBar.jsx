import React from 'react'


import styles from './navbar.module.css'

const NavBar = () => {
    return (
        <div className={styles.container} >
            <img src="sightspectrumlogo.svg" alt="sightspectrumlogo" />

            <div className={styles.wrapper}>
                <a href="">Courses</a>
                <a href="">Free Assesment</a>
                <a href="">Hire from us </a>
                <a href="">Become a Mentor</a>
                <a href="">Blogs</a>
                <a href="">Contact</a>
                <div className={styles.button}>Login</div>
            </div>
        </div>
    )
}

export default NavBar