import React from "react";
import styles from "./card.module.css";

const Card = ({ description, name, image }) => {
  return (
    <div className={styles.testimonialcard}>
      <img className={styles.testimonialimg} src={image} alt="" />

      <div className={styles.testimonialdesc}>{description}</div>

      <div className={styles.testimonialname}>{name}</div>
      <br />
    </div>
  );
};

export default Card;
