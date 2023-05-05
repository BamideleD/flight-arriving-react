import React from "react";
import styles from "./App.module.css";
import Login from "./Components/Login/Login";
import Info from "./Components/Login/Info";
import FlightBoard from "./Components/Dashboard/FlightBoard";


const App = () => {
  return (
    <div className={styles.App}>
      <Info />
      {/* <Login /> */}
      <FlightBoard />
    </div>
    
  )
}

export default App;
