import React from "react"

export const Sort = ({sort, handleSortChange}) => {

    return (
        <div className="sort">
            <select
                name=""
                id="sort"
                className="input"
                value={sort}
                onChange={handleSortChange}
            >
                <option value="">Relevance</option>
                <option value="ASC">ASC</option>
                <option value="DESC">DESC</option>
            </select>
        </div>
    )
}