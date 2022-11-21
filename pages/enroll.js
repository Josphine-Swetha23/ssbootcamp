import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/footer'

import styles from '../styles/enroll.module.css'


const Enroll = () => {
    return (
        <div className={styles.container} >
            <NavBar />
            <div className={styles.wrapper}>
                <div className={styles.title}>Enroll 👍</div>
                <div className={styles.subtitle}>You are one step away to your dream job in <div className={styles.azurelogo}><img className={styles.alogotutor} src="azurelogo2.svg" alt="" />Azure</div> </div>

                <div className={styles.inputs}>
                    <div className={styles.inputlabel}>
                        <div className={styles.label}>Name</div>
                        <input className={styles.input1} type="text" />
                    </div>
                    <div className={styles.inputlabel}>
                        <div className={styles.label}>Education</div>
                        <select className={styles.input1}  >
                            <option value="null" > Null</option>
                        </select>
                    </div>

                </div>

                <div className={styles.inputs}>
                    <div className={styles.inputlabel}>
                        <div className={styles.label}>Email</div>
                        <input className={styles.input1} type="text" />
                    </div>
                    <div className={styles.inputlabel}>
                        <div className={styles.label}>Stream</div>
                        <input className={styles.input1} type="text" />
                    </div>

                </div>
                <div className={styles.inputs}>
                    <div className={styles.inputlabel}>
                        <div className={styles.label}>Mobile Number</div>
                        <input className={styles.input1} type="text" />
                    </div>
                    <div className={styles.inputlabel}>
                        <div className={styles.label}>How Did You
                            Find Us?</div>
                        <select className={styles.input1}  >
                            <option value="null" > Null</option>
                        </select>
                    </div>

                </div>

                <div className={styles.inputs}>
                    <div className={styles.inputlabel2}>
                        <div className={styles.label}>Resume</div>
                        <textarea className={styles.input2} type="text" />
                    </div>

                </div>
                <div className={styles.flex}>
                    <input type="checkbox" />
                    <div className={styles.checkboxtxt}>I permit SightSpectrum and its
                        team to contact me with
                        updates and notifications via
                        Email, SMS, Whatsapp, and Call.</div>
                </div>

                <div className={styles.button}>Submit</div>


            </div>

            <Footer />

        </div>
    )
}

export default Enroll