import React from "react";
import styles from './Info.module.css'


const Info = () => {
    return (
        <div className={styles.info}>
            <div className={styles.header}>
                <img url src= 'https://o.remove.bg/downloads/f4ddbf86-fcfa-4b2e-a8a2-c2e7659d5425/png-transparent-airplane-logo-aircraft-airplane-text-photography-logo-thumbnail-removebg-preview.png'  alt= 'logo' width='50' height='50' />
                <h1>OPENSKY</h1>
            </div>
            
        </div>
    )
}


export default Info;