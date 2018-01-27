import React from 'react'

import './Button.scss'

const Button = props => (
  <button
    {...props}
    className={`button button--white ${props.className}`}
  >
    {props.children}
  </button>
)

export default Button
