import React, { useEffect, useState } from 'react'

import ModalCompTerms from '../modal/Modal'
import ModalCompRefund from '../modal/ModalRefund'
import Link from 'next/link';
import { useCollection } from "react-firebase-hooks/firestore"
import { db } from '../../firebase/clientApp'
import { collection, doc, getDoc, query, where, getDocs, addDoc } from "firebase/firestore";
import styles from './footer.module.css'
import { async } from '@firebase/util';

const Footer = () => {
    // const [dataExists, setDataExists] = useState("false")
    const [emailid, setEmail] = useState("Email Address")

    const handleClick = (e) => {
        if (e.target.value == "Email Address") {
            setEmail("")
        }

    }

    const addemail = async (email_id) => {
        await addDoc(collection(db, "email"), {
            email_id,
        })
    }

    const handleClickSubmit = async (e) => {


        var mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/



        if (emailid.match(mailformat)) {

            // const querySnapshot = await getDocs(collection(db, "email"));

            // querySnapshot.find((doc) => {
            //     const data = doc.data().email_id == emailid

            //     console.log(data);

            // });
            // const emailRef = collection(db, "email");

            // const q = query(emailRef, where("email_id", "==", emailid));

            // const querySnapshot = await getDocs(q);
            // querySnapshot.forEach((doc) => {
            //     setDataExists("true")
            // });

            // setTimeout(() => {

            //     if (dataExists == "true") {


            //         alert("email id already exist")
            //         return setDataExists("false")
            //     }
            //     else {
            addemail(emailid)
            alert("Succesfully Subscribed");
            setEmail("")

            //     }
            // }, 8000)














        } else {


            alert("Invalid email address!");





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
                        <input type="email" onClick={handleClick} onChange={e => { setEmail(e.target.value) }} className={styles.emailinput} value={emailid} id="Email" name="Email" autocomplete="off" />
                        <div onClick={handleClickSubmit} className={styles.buttonsubmit}  >
                            <img src="tick.svg" alt="tick" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer