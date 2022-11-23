import React, { useState } from 'react'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/footer'
import { useCollection } from "react-firebase-hooks/firestore"
import { useRouter } from 'next/router'
import { collection, addDoc } from "firebase/firestore";
import styles from '../styles/enroll.module.css'
import { app, db } from '../firebase/clientApp'


const Enroll = () => {

    const router = useRouter()


    const [enrollData, setEnrollData] = useState({
        name: "",
        education: "",
        email: "",
        stream: "",
        mobilenumber: 0,
        howdidufindus: "",
        permission: false,
    })




    const addenrollDocument = async (enroll_data) => {
        await addDoc(collection(db, "enroll_data"), {
            enroll_data,
        })
    }
    const handleChange = (e, data) => {
        const { value } = e.target;

        setEnrollData({ ...enrollData, [data]: value })

    }
    const handleClick = () => {
        if (enrollData.name.length == 0) {
            alert("Please fill in the appropriate fields")
        }
        else if (enrollData.education.length == 0) {
            alert("Please fill in the appropriate fields")
        }
        else if (enrollData.email.length == 0) {
            alert("Please fill in the appropriate fields")
        }
        else if (enrollData.stream.length == 0) {
            alert("Please fill in the appropriate fields")
        }
        else if (enrollData.mobilenumber.length == 0) {
            alert("Please fill in the appropriate fields")
        }
        else if (enrollData.howdidufindus.length == 0) {
            alert("Please fill in the appropriate fields")
        }
        else {
            addenrollDocument(enrollData)
            router.push("/")
        }
    }
    const handleClickCheck = () => {
        setEnrollData((prev) => { return { ...enrollData, permission: !prev.permission } })
    }
    return (
        <div className={styles.container} >
            <NavBar />


            <div className={styles.wrapper}>
                <div className={styles.title}>Enroll 👍</div>
                <div className={styles.subtitle}>You are one step away to your dream job in <div className={styles.azurelogo}><img className={styles.alogotutor} src="azurelogo2.svg" alt="" />Azure</div> </div>

                <div className={styles.inputs}>
                    <div className={styles.inputlabel}>
                        <div className={styles.label}>Name</div>
                        <input onChange={(e) => { handleChange(e, "name") }} className={styles.input1} type="text" />
                    </div>
                    <div className={styles.inputlabel}>
                        <div className={styles.label}>Education</div>


                        <select onChange={(e) => { handleChange(e, "education") }} className={styles.input1} id="education" name="education">
                            <option value="" selected="selected" disabled="disabled">-- select one --</option>
                            <option value="No formal education">No formal education</option>
                            <option value="Primary education">Primary education</option>
                            <option value="Secondary education">Secondary education or high school</option>

                            <option value="Vocational qualification">Vocational qualification</option>
                            <option value="Bachelor's degree">Bachelor's degree</option>
                            <option value="Master's degree">Master's degree</option>
                            <option value="Doctorate or higher">Doctorate or higher</option>
                        </select>
                    </div>

                </div>

                <div className={styles.inputs}>
                    <div className={styles.inputlabel}>
                        <div className={styles.label}>Email</div>
                        <input onChange={(e) => { handleChange(e, "email") }} className={styles.input1} type="email" />
                    </div>
                    <div className={styles.inputlabel}>
                        <div className={styles.label}>Stream</div>
                        <input onChange={(e) => { handleChange(e, "stream") }} className={styles.input1} type="text" />
                    </div>

                </div>
                <div className={styles.inputs}>
                    <div className={styles.inputlabel}>
                        <div className={styles.label}>Mobile Number</div>
                        <input onChange={(e) => { handleChange(e, "mobilenumber") }} className={styles.input1} type="number" />
                    </div>
                    <div className={styles.inputlabel}>
                        <div className={styles.label}>How Did You
                            Find Us?</div>
                        <select onChange={(e) => { handleChange(e, "howdidufindus") }} className={styles.input1} id="howdidufindus" name="howdidufindus">
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





                <div className={styles.flex}>
                    <input onClick={handleClickCheck} type="checkbox" />
                    <div className={styles.checkboxtxt}>I permit SightSpectrum and its
                        team to contact me with
                        updates and notifications via
                        Email, SMS, Whatsapp, and Call.</div>
                </div>

                <button disabled={enrollData.permission == false} onClick={handleClick} className={styles.button}>Submit</button>


            </div>

            <Footer />

        </div>
    )
}

export default Enroll



// <div className={styles.inputs}>
// <div className={styles.inputlabel2}>
//     <div className={styles.label}>Resume</div>
//     <textarea className={styles.input2} type="text" />
// </div>

// </div>
