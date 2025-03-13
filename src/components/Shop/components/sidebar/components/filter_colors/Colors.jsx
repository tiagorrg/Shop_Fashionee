import React, { useState } from "react";

export const Colors = ({selectedColors, onColorsChange}) => {
    const [colors, setColors] = useState([])

    const colorClickToggle = (e) => {
        const selectColor = e.target

        if (selectColor.checked){
            const newColors = [...colors, selectColor.value]

            setColors(newColors)
            onColorsChange(newColors)
        }

        if (!selectColor.checked){
            const removeColor = selectedColors.indexOf(selectColor.value)

            const newColors = [...selectedColors.slice(0, removeColor), ...selectedColors.slice(removeColor + 1)];

            setColors(newColors)
            onColorsChange(newColors)
        }
    }


    return (
        <div class="sidebar-item">
                    <div className="sidebar-title">
                        Colors
                    </div>
                    <div className="sidebar-content">
                        <div className="colors">
                            <div className="color">
                                <input type="checkbox" className="color-checkbox filter-color" id="black" name="black" 
                                value="Black" 
                                onChange={colorClickToggle}
                                />
                                <label for="black" className="color-name">Black</label>
                            </div>
                            <div className="color">
                                <input type="checkbox" className="color-checkbox filter-color" id="blue" name="blue" 
                                value="Blue" 
                                onChange={colorClickToggle}
                                />
                                <label for="blue" className="color-name">Blue</label>
                            </div>
                            <div className="color">
                                <input type="checkbox" className="color-checkbox filter-color" id="red" name="red" 
                                value="Red" 
                                onChange={colorClickToggle}
                                />
                                <label for="red" className="color-name">Red</label>
                            </div>
                            <div className="color">
                                <input type="checkbox" className="color-checkbox filter-color" id="yellow" name="yellow" 
                                value="Yellow"
                                onChange={colorClickToggle}
                                />
                                <label for="yellow" className="color-name">Yellow</label>
                            </div>
                            <div className="color">
                                <input type="checkbox" className="color-checkbox filter-color" id="green" name="green"
                                value="Green"
                                onChange={colorClickToggle}
                                />
                                <label for="green" className="color-name">Green</label>
                            </div>
                        </div>
                    </div>
                </div>
    )
}