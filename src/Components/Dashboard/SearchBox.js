import React from "react";
import styles from './SearchBox.module.css';

const SearchBox = () => {
    return (
        <div className={styles.overall}>
            <div className={styles.searchbox}>
                <header>Search by Flight</header>
                <div className={styles.flightsearch}>
                    <div className={styles.line1}>
                        <input />
                        <input />
                    </div>

                    <input />
                    <div>
                        <button>Search</button>
                    </div>
                </div>
            </div>

            <div className={styles.searchbox}>
                <header>Search by Airport</header>
                <div className={styles.flightsearch}>
                    <div className={styles.line1}>
                        <input />
                        <input />
                    </div>

                    <input />
                    <div>
                        <button>Search</button>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default SearchBox;