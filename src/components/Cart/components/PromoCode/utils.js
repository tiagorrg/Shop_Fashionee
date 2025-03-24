import { promoCodes } from "../../../../constants"

export const checkPromo = (inputValue) => {
    if (promoCodes.filter(currentPromo => inputValue === currentPromo).length !== 0){
        return true
    }
    
    return false
}