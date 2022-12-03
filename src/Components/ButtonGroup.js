import React from 'react'
import Button from './Button'
const ButtonGroup = ({ click, buttons = [] }) => {
    let btns = buttons.map(value =>
        <Button value={value} id={value} key={value} click={() => click(value)} />
    );
    return (
        <div>
            {btns}
        </div>
    )
}

export default ButtonGroup