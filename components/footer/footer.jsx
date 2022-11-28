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
                <ul className={styles.wrapper}>
                    <li className={`${styles.icon} ${styles.facebook}`}>
                        <span className={styles.tooltip}>Linked In</span>
                        <span>  <Link href="https://www.linkedin.com/company/sight-spectrum-llc/?originalSubdomain=in"><img className={styles.social} src='linkedin-in.svg' /></Link>   </span>
                    </li>
                    <li className={`${styles.icon} ${styles.twitter}
    `  }>
                        <span className={styles.tooltip}>Twitter</span>
                        <span> <Link href="https://twitter.com/SightSpectrumUS" ><img className={styles.social} src='twitter.svg' /></Link>  </span>
                    </li>
                    <li className={`${styles.icon} ${styles.instagram}`}>
                        <span className={styles.tooltip}>Instagram</span>
                        <span>  <Link href="https://www.instagram.com/sightspectrumus/" ><img className={styles.social} src='instagram.svg' /></Link> </span>
                    </li >
                </ul >
                <div className={styles.footerwrapper}>

                    <div className={styles.footerlinks}>
                        <div className={styles.footerlink} href="">  <Link href="/">Home</Link> </div>
                        <div className={styles.footerlink} href=""> <Link href="/comingsoon" >Who We Are</Link> </div>
                        <div className={styles.footerlink} >   <Link className={styles.footerlink1} href="/getintouch"  >Get in Touch</Link>  </div>
                    </div>

                </div>
                <div className={styles.footerwrapper}>
                    <div className={styles.footerdivider} />
                    <div className={styles.footerlinks}>
                        <div className={styles.footerlink} href=""> <ModalCompRefund /> </div>
                        <div className={styles.footerlink} href="">
                            <ModalCompTerms /> </div>
                        <div className={styles.footerlink} href=""> <Link href="/comingsoon" >Privacy Policy</Link> </div>

                    </div>



                </div>
                <div className={styles.footerwrapper}>
                    <div className={styles.footerdivider} />

                    <div className={styles.footerlinks}>
                        <div className={styles.footerlink} > <Link href="/comingsoon" >Accessibilty</Link> </div>
                        <div className={styles.footerlink} > <Link href="/comingsoon" >Copyright Policy</Link>  </div>

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

        </div >
    )
}

export default Footer