import React from 'react'
import ButtonGroup from './ButtonGroup';
import '../App.css'
const Keypad = props => {
    const buttons = [7, 8, 9, 4, 5, 6, 1, 2, 3, ".", 0, "="];
    const operators = ["C", "DEL", "/", "*", "-", "+"];
    return (
        <div className="calculatorKeypad">
            <div className="calculatorOperator">
                {/* *****************  Math Operator Buttons ********** */}
                <ButtonGroup buttons={operators} click={props.click} />
            </div>
            <div className="calculatorButtons">
                 {/* ***************** Numbers Buttons ********** */}
                <ButtonGroup buttons={buttons} click={props.click} />
            </div>
        </div>
    )
}

export default Keypad