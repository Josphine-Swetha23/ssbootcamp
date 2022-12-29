import React from "react";
import NavBarSmall from "./NavBarSmall";

import styles from "./navbar.module.css";
import Link from "next/link";

const NavBar = ({ scrollRef, course, home }) => {
  const executeScroll = () => scrollRef?.current.scrollIntoView();
  return (
    <div className={styles.container}>
      <Link href="/">
        <div className={styles.logo}>
          <img
            className={styles.desktoplogo}
            src="sightspectrumlogo.svg"
            alt="sightspectrumlogo"
          />
        </div>
      </Link>

      <div className={styles.wrapper}>
        {course ? (
          <div onClick={executeScroll} className={styles.hidelink}>
            Courses
          </div>
        ) : (
          ""
        )}
        {home ? (
          ""
        ) : (
          <div className={styles.hidelink} href="">
            {" "}
            <Link href="/">Home</Link>{" "}
          </div>
        )}

        <div className={styles.hidelink} href="">
          {" "}
          <Link href="/comingsoon">Free Assesment</Link>{" "}
        </div>
        <div className={styles.hidelink} href="">
          {" "}
          <Link href="/getintouch">Contact</Link>{" "}
        </div>
        <div className={styles.hidelink} href="">
          {" "}
          <Link href="/becomeamentor">Become a Mentor</Link>{" "}
        </div>
        <div className={styles.button}>
          {" "}
          <Link href="/enroll"> Enroll Now</Link>{" "}
        </div>
        <NavBarSmall
          home={home}
          course={course}
          executeScroll={executeScroll}
        />
      </div>
    </div>
  );
};

export default NavBar;

// <a className={styles.hidelink} href="">Hire from us </a>
// <a className={styles.hidelink} href="">Blogs</a>
