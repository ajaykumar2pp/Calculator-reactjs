import React from 'react'
const Button=props=> {
  return (
    <button type="button" id={props.id} onClick={props.click}>
    {props.value}
  </button>
  )
}

export default Button