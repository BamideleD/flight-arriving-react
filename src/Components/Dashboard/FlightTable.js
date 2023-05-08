import React from "react";
import styles from './FlightTable.module.css'

const FlightTable = (props) => {
  
 return (
    <div className={styles.table}>
        <table>
            <tbody>
                <tr>
                    <th>AIRPORT</th>
                    <th>TIME</th>
                    <th>ARRIVING</th>
                    <th>DEPARTING</th>
                </tr>
                {props.flights.map((data) => {
                    return (
                        <tr key={Math.random()}>
                            <th className={styles.data}>{data.Airport}</th>
                            <th className={styles.data}>{data.Time}</th>
                            <th className={styles.data}>{data.Arriving}</th>
                            <th className={styles.data}>{data.Departing}</th>
                        </tr>
                        
                    )   
                })}   
            </tbody>
        </table>
            
    </div>
 )
}


export default FlightTable;