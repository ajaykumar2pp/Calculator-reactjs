import React from 'react'
const INVALID_EXPRESSION = "Can't divide by zero";
const Display=props=> {
  return (
    <div className="calculatorOutput">
    <input
      type="text"
      className="calculatorInput"
      value={props.equation}
      disabled
    />
    {/* ***************************   Display Error show and Answer Show *********************** */}
    {props.error === INVALID_EXPRESSION
      ? <div className="calculatorError">
          {props.error}
        </div>
        
      : <input
          type="text"
          className="calculatorAnswer"
          value={props.answer}
          disabled
        />}
  </div>
  )
}

export default Display