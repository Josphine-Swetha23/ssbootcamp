import React from 'react'
import styles from './card.module.css'

const Card = () => {
    return (


        <div className={styles.testimonialcard}>

            <img className={styles.testimonialimg} src="testimonial1.jpg" alt="" />

            <div className={styles.testimonialdesc}>Quibusdam ea voluptatem autem. Aut labore ducimus et qui cupiditate.  Dtnad molestiae modi velit quia adip adipisci minus. Quis et id itaque voluptas sed quas voluptatem. Accusamus quis et ut.</div>


            <div className={styles.testimonialname}>Winston Olson</div>
            <img className={styles.companylogo} src="googlelogo.svg" alt="" />
            <div className={styles.starbox}>
                <img className={styles.star} src="star.svg" alt="star" />
                <img className={styles.star} src="star.svg" alt="star" />
                <img className={styles.star} src="star.svg" alt="star" />
                <img className={styles.star} src="star.svg" alt="star" />
                <img className={styles.star} src="star.svg" alt="star" />
            </div>
        </div>



    )
}

export default Card