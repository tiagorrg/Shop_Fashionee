import React, {useContext} from "react";
import { AppContext } from "../../../context";

export const CountFromLS = (props) => {
    const {setCurrentPage} = useContext(AppContext)

    const setCartPage = () => {
        setCurrentPage("Cart")
    }

    return (
        <div className='header-icons' onClick={props.isBasket ? setCartPage : () => {return}}>
            <img src={props.urlIcon} alt={props.altIcon}/>
            <div className='counter'>
                {props.count}
            </div>
        </div>
    )
}