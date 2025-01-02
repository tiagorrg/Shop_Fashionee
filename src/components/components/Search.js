import React, { useState, useEffect } from 'react';
import search from "../../icons/search.svg"

const debounce = (func, ms) => {
    let timeout;
    return function() {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, arguments), ms);
    };
}

 export const Search = () => {
    const [searchValue, setSearchValue] = useState ('')

    useEffect ( () => {
        console.log(searchValue)
    }, [searchValue])

    return (
        <div className="search">
            <label>
                <input type="text" placeholder="Search" className="search-input" id="search-row" onChange={ debounce (e => setSearchValue(e.target.value), 500)}/>
                <img src={search} alt="Search" className="search-icon"/>
            </label>
        </div>
    );
}