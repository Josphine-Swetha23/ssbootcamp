import React, { useState } from 'react'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/footer'
import { collection, addDoc } from "firebase/firestore";
import { app, db } from '../firebase/clientApp'
import { useRouter } from 'next/router'
import styles from '../styles/getintouch.module.css'

const GetInTouch = () => {
    const router = useRouter()
    const [getInTouchData, setGetInTouchData] = useState({
        name: "",

        email: "",

        mobilenumber: 0,
        howdidufindus: "",
        message: "",
        permission: false,
    })

    const handleClick = () => {
        if (getInTouchData.name.length == 0) {
            alert("Please fill in the appropriate fields")
        }

        else if (getInTouchData.email.length == 0) {
            alert("Please fill in the appropriate fields")
        }

        else if (getInTouchData.mobilenumber.length == 0) {
            alert("Please fill in the appropriate fields")
        }
        else if (getInTouchData.howdidufindus.length == 0) {
            alert("Please fill in the appropriate fields")
        }
        else if (getInTouchData.message.length == 0) {
            alert("Please fill in the appropriate fields")
        }
        else {
            addGetInTouchDocument(getInTouchData)
            router.push("/")
            alert("Succesfully contacted us")
        }
    }

    const addGetInTouchDocument = async (get_in_touch_data) => {
        await addDoc(collection(db, "get_in_touch_data"), {
            get_in_touch_data,
        })
    }

    const handleChange = (e, data) => {
        const { value } = e.target;

        setGetInTouchData({ ...getInTouchData, [data]: value })

    }
    const handleClickCheck = () => {
        setGetInTouchData((prev) => { return { ...getInTouchData, permission: !prev.permission } })
    }



    return (
        <div>
            <NavBar />
            <div className={styles.wrapper}>
                <div className={styles.title}>  Get in Touch 🙌  </div>
                <div className={styles.subtitle}>Our expert team will
                    answer all your questions.
                    Write an email to  <a href="mailto:hi@sightspectrum.com"> hi@sightspectrum.com</a> </div>
                <div className={styles.inputs}>
                    <div className={styles.inputlabel}>
                        <div className={styles.label}>Name</div>
                        <input onChange={(e) => { handleChange(e, "name") }} className={styles.input1} type="text" />
                    </div>
                    <div className={styles.inputlabel}>
                        <div className={styles.label}>Email</div>
                        <input onChange={(e) => { handleChange(e, "email") }} className={styles.input1} type="text" />
                    </div>

                </div>
                <div className={styles.inputs}>
                    <div className={styles.inputlabel}>
                        <div className={styles.label}>Mobile Number</div>
                        <input onChange={(e) => { handleChange(e, "mobilenumber") }} className={styles.input1} type="text" />
                    </div>
                    <div className={styles.inputlabel}>
                        <div className={styles.label}>How Did You
                            Find Us?</div>
                        <select onChange={(e) => { handleChange(e, "howdidufindus") }} className={styles.input1}  >
                            <option value="" selected="selected" disabled="disabled">-- select one --</option>
                            <option value="Search Engine">Search Engine</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Forums like reddit,quora">Forums like reddit,quora</option>

                            <option value="Recommendation from Friends or Family">Recommendation from Friends or Family</option>
                            <option value="Recommendation from Work, Co-Workers">Recommendation from Work, Co-Workers</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                </div>
                <div className={styles.inputs}>
                    <div className={styles.inputlabel2}>
                        <div className={styles.label}>Message</div>
                        <textarea onChange={(e) => { handleChange(e, "message") }} className={styles.input2} type="text" />
                    </div>

                </div>
                <div className={styles.flex}>
                    <input onClick={handleClickCheck} type="checkbox" />
                    <div className={styles.checkboxtxt}>I permit SightSpectrum and its
                        team to contact me with
                        updates and notifications via
                        Email, SMS, Whatsapp, and Call.</div>
                </div>
                <button disabled={getInTouchData.permission == false} onClick={handleClick} className={styles.button}>Submit</button>
            </div>


            <Footer />

        </div >
    )
}

export default GetInTouch