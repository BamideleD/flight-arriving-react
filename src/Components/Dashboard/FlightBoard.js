import React from "react";
import FlightTable from "./FlightTable";
import styles from './FlightBoard.module.css';
import Search from "./Search";


const FlightBoard = (props) => {
    const flights = [
        {Airport: 'MRT', Time: '15:00 CST', Arriving: 50, Departing:32},
        {Airport: 'DFW', Time: '19:00 CST', Arriving: 50, Departing:32},
        {Airport: 'JHW', Time: '20:00 CST', Arriving: 50, Departing:32},
    ]

    return (
        <div className= {styles.board}>
            <button onClick={props.logoutHandler}> Log Out </button>
            <Search />
            <FlightTable flights = {flights}/>
        </div>
    )
}


export default FlightBoard 