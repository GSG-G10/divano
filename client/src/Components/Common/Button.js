import React from 'react'

const Button = ({id,onClick,textcontent}) =>  {
    return (
       <button id={id} onClick={onClick} className="btn"
       >{textcontent}
       </button>
    )
}

export default Button;
