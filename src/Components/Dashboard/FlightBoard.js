import React from "react";
import FlightTable from "./FlightTable";


const FlightBoard = () => {
    const flights = [
        {Airport: 'MRT', Time: '15:00 CST', Arriving: 50, Departing:32},
        {Airport: 'DFW', Time: '19:00 CST', Arriving: 50, Departing:32},
        {Airport: 'JHW', Time: '20:00 CST', Arriving: 50, Departing:32},
    ]

    return (
        <div>
            
            {flights.map((data) => {
                return <FlightTable Airport = {data.Airport} Time = {data.Time} Arriving = {data.Arriving} Departing = {data.Departing}/>
            })}
        </div>
    )
}


export default FlightBoard 