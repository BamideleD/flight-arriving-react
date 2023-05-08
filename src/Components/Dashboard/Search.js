import React, { useState } from "react";
import styles from './Search.module.css';
import SearchBox from "./SearchBox";

const Search = () => {

    const [searchState, setSearchState] = useState (false)
    const [searchButton, setSearchButton] = useState (true)


    const searchClick = (event) => {
        event.preventDefault()
        setSearchState(prevState => !prevState)
        setSearchButton(false)
    }

    return (
        <div className={styles.search}>
            <div className={styles.button}>
                {searchButton && <button onClick={searchClick}>Search</button>}
                {searchState && <SearchBox />}
            </div>
        </div>
        
        
    )

}


export default Search;