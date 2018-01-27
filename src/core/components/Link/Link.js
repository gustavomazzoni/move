import React from 'react'

import './Link.scss'

const Link = props => (
  <a
    {...props}
    className={`link link--${props.color || 'primary'} ${props.className}`}
    rel={props.target === '_blank' ? 'noopener noreferrer' : ''}
  >
    {props.children}
  </a>
)

export default Link
