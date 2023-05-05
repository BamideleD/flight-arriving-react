import React from "react";
import FlightTable from "./FlightTable";
import styles from './FlightBoard.module.css';


const FlightBoard = () => {
    const flights = [
        {Airport: 'MRT', Time: '15:00 CST', Arriving: 50, Departing:32},
        {Airport: 'DFW', Time: '19:00 CST', Arriving: 50, Departing:32},
        {Airport: 'JHW', Time: '20:00 CST', Arriving: 50, Departing:32},
    ]

    return (
        <div className={styles.table}>
            <table>
            <tr>
                <th>AIRPORT</th>
                <th>TIME</th>
                <th>ARRIVING</th>
                <th>DEPARTING</th>
            </tr>
           {flights.map((data) => {
                return (
                    <tr>
                        <th className={data}>{data.Airport}</th>
                        <th className={data}>{data.Time}</th>
                        <th className={data}>{data.Arriving}</th>
                        <th className={data}>{data.Departing}</th>
                    </tr>
                    
                )   
            })}
        
        </table>
            
        </div>
    )
}


export default FlightBoard 