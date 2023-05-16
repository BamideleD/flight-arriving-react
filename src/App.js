import React, { useEffect } from "react";
import styles from "./App.module.css";
import Login from "./Components/Login/Login";
import Info from "./Components/Login/Info";
import FlightBoard from "./Components/Dashboard/FlightBoard";
import { useState } from "react";


const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect((email, password) => {
    const storedInfo = localStorage.getItem('bamadboss@gmail.com');
    if (storedInfo === '0000000'){
      setIsLoggedIn(true)
    }
  }, [])

  const loginHandler = (email,password ) => {
    localStorage.setItem(email, password);
    setIsLoggedIn(true)
  }

  const logoutHandler = (email, password) => {
    localStorage.removeItem(email)
    setIsLoggedIn(false)
  }

  return (
    <div className={styles.App}>
      <Info />
      {!isLoggedIn && <Login loginHandler = {loginHandler} />}
      {isLoggedIn && <FlightBoard logoutHandler = {logoutHandler}/>}
    </div>
    
  )
}

export default App;
