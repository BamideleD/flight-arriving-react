import React, {useState} from "react";
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import styles from './SearchBox.module.css';

const SearchBox = (props) => {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className={styles.overall}>
            <div className={styles.searchbox}>
                <header onClick={props.onClick}>Search by Flight</header>
                <div className={styles.flightsearch}>
                    <div className={styles.line1}>
                        <div className={styles.input1}>
                            <label>Airline</label>
                            <input type="text" id="Airline" placeholder="Example: AA or American Airlines" />
                        </div>
                        <div className={styles.input1}>
                            <label>Flight Number</label>
                            <input type="number" id="Flight Number" placeholder="Example: 200" min="0" step="1"/>
                        </div>
                    </div>

                    <div className={styles.line4}>
                        <div>
                            <label>Date</label>
                        </div>
                        <div className={styles.datePicker}>
                            <DatePicker dateFormat="dd/MM/yyyy" selected={startDate} />
                        </div>
                    </div>
                    <div>
                        <button>Search</button>
                    </div>
                </div>
            </div>

            <div className={styles.searchbox}>
                <header onClick={props.onClick}>Search by Airport</header>
                <div className={styles.flightsearch}>
                    <div className={styles.line2}>
                        <div className={styles.input3}>
                            <label>Departure Airport</label>
                            <input />
                        </div>
                        <div className={styles.input3}>
                            <label>Arrival Airport</label>
                            <input />
                        </div>
                    </div>
                    <div className={styles.line3}>
                        <div className={styles.input3}>
                            <label>Airline</label>
                            <input />
                        </div>
                        <div className={styles.input3}>
                            <label>Time</label>
                            <input />
                        </div>
                    </div>
                    <div className={styles.line4}>
                        <div>
                            <label>Date</label>
                        </div>
                        <div>
                            <input />
                        </div>
                    </div>
                    <div>
                        <button>Search</button>
                    </div>
                </div>
            </div>

        </div>
        
    )
}

export default SearchBox;