import React from "react";
import styles from './Login.module.css';


const Login = () => {

    return (
        <div className={styles.login}>
            <div>
                <label> Username </label>
                <input />
            </div>
            <div>
                <label> Password </label>
                <input />
            </div>        
        </div>
    )

}

export default Login;