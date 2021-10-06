import React from 'react'

const Button = ({id,onClick,textcontent,className}) =>  {
    return (
       <button id={id} onClick={onClick} className={className}
       >{textcontent}
       </button>
    )
}

export default Button;
