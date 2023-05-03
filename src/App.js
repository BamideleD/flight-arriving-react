import React from "react";
import styles from "./App.module.css";
import Login from "./Components/Login/Login";
import Info from "./Components/Login/Info";


const App = () => {
  return (
    <div className={styles.App}>
      <Info />
      <Login />
    </div>
    
  )
}

export default App;
