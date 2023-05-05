import React from "react";
import styles from './Info.module.css'


const Info = () => {
    return (
        <div className={styles.info}>
            <div className={styles.header}>
                <img src= 'https://drive.google.com/file/d/1yvDCb-HL3h3Qn8ChsKJUWSNNabydP8bE/view?usp=share_link'  alt= 'logo' width='50' height='50' />
                <h1>OPENSKY</h1>
            </div>
            
        </div>
    )
}


export default Info;