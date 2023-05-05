import React from "react";

const FlightTable = (props) => {
    return (
        <table>
            <tr>
                <th>AIRPORT</th>
                <th>TIME</th>
                <th>ARRIVING</th>
                <th>DEPARTING</th>
            </tr>
            <tr>
                <td>{props.Airport}</td>
                <td>{props.Time}</td>
                <td>{props.Arriving}</td>
                <td>{props.Departing}</td>
            </tr>
        </table>
    )
}


export default FlightTable;