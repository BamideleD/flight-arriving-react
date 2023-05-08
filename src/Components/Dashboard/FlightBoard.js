import React from "react";
import FlightTable from "./FlightTable";
import styles from './FlightBoard.module.css';
import Search from "./Search";


const FlightBoard = () => {
    const flights = [
        {Airport: 'MRT', Time: '15:00 CST', Arriving: 50, Departing:32},
        {Airport: 'DFW', Time: '19:00 CST', Arriving: 50, Departing:32},
        {Airport: 'JHW', Time: '20:00 CST', Arriving: 50, Departing:32},
    ]

    return (
        <div className= {styles.board}>
            <Search />
            <FlightTable flights = {flights}/>
        </div>
    )
}


export default FlightBoard 