import React from "react";
import styles from './Info.module.css'


const Info = () => {
    return (
        <div className={styles.info}>
            <div className={styles.header}>
                <img src= 'https://github.com/BamideleD/flight-arriving-react/blob/master/public/logo.png?raw=true'  alt= 'logo' width='50' height='50' />
                <h1>OPENSKY</h1>
            </div>
            
        </div>
    )
}


export default Info;