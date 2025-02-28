import React from 'react';
import { debounce } from '../../../../../../constants';
import search from "./icons/search.svg";

export const Search = ({ setSearchValue }) => {
    return (
        <div className="search">
            <label>
                <input
                    type="text"
                    placeholder="Search"
                    className="search-input"
                    id="search-row"
                    onChange={debounce(e => setSearchValue(e.target.value), 500)}
                />
                <img src={search} alt="Search" className="search-icon" />
            </label>
        </div>
    );
};
