import React, { useState } from 'react'

import ModalCompTerms from '../modal/Modal'
import ModalCompRefund from '../modal/ModalRefund'
import Link from 'next/link';
import styles from './footer.module.css'

const Footer = () => {

    const [email, setEmail] = useState("Email Address")
    const handleClick = (e) => {
        if (e.target.value == "Email Address") {
            setEmail("")
        }

    }
    return (
        <div className={styles.footercontainer}>
            <div className={styles.footerwrappers}>
                <div className={styles.footerwrapper}>
                    <div className={styles.footerlinks}>
                        <a className={styles.footerlink} href="">Home</a>
                        <a className={styles.footerlink} href="">Services</a>
                        <a className={styles.footerlink} href="">Solutions</a>
                    </div>
                    <div className={styles.footerlinks}>
                        <a className={styles.footerlink} href="">Industries</a>
                        <a className={styles.footerlink} href="">Who We Are</a>
                        <div className={styles.footerlink} >   <Link className={styles.footerlink1} href="/getintouch"  >Get in Touch</Link>  </div>
                    </div>

                </div>
                <div className={styles.footerdivider} />
                <div className={styles.footerwrapper}>
                    <div className={styles.footerlinks}>
                        <div className={styles.footerlink} href=""> <ModalCompRefund /> </div>
                        <div className={styles.footerlink} href="">
                            <ModalCompTerms /> </div>
                        <a className={styles.footerlink} href="">Privacy Policy</a>
                        <a className={styles.footerlink} href="">Disclaimer</a>
                    </div>
                    <div className={styles.footerlinks}>
                        <a className={styles.footerlink} href="">Accessibilty</a>
                        <a className={styles.footerlink} href="">Copyright Policy</a>
                        <a className={styles.footerlink} href="">Customer Charter</a>
                    </div>

                </div>
                <div className={styles.footerdivider} />
                <div className={styles.footertxt}>
                    <div className={styles.footertxt1}>Stay Updated!
                        🔥
                    </div>
                    <div className={styles.footertxt2}>Get updates on new programs, tips and snippets on
                        the technology right in your inbox.
                    </div>
                    <div className={styles.inputgroup}>
                        <input type="email" onClick={handleClick} onChange={e => { setEmail(e.target.value) }} className={styles.emailinput} value={email} id="Email" name="Email" autocomplete="off" />
                        <div className={styles.buttonsubmit}  >
                            <img src="tick.svg" alt="tick" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer