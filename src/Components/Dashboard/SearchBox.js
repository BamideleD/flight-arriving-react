import React from "react";
import styles from './SearchBox.module.css';

const SearchBox = () => {
    return (
        <div className={styles.overall}>
            <div className={styles.searchbox}>
                <header>Search by Flight</header>
                <div className={styles.flightsearch}>
                    <div className={styles.line1}>
                        <div className={styles.input1}>
                            <label>Airline</label>
                            <input />
                        </div>
                        <div className={styles.input1}>
                            <label>Flight Number</label>
                            <input />
                        </div>
                    </div>

                    <div className={styles.input2}>
                        <label>Date</label>
                        <input />
                    </div>
                    <div>
                        <button>Search</button>
                    </div>
                </div>
            </div>

            <div className={styles.searchbox}>
                <header>Search by Airport</header>
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
                    <div className={styles.input2}>
                        <label>Date</label>
                        <input />
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