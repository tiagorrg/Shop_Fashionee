import React from "react";

export const CountFromLS = (props) => {
    return (
        <div className='header-icons'>
            <img src={props.urlIcon} alt={props.altIcon}/>
            <div className='counter'>{props.count}</div>
        </div>
    )
}