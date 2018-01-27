import React, { Component } from 'react'

import './TextInput.scss'

class TextInput extends Component {
  render() {
    const { id, className, type, placeholder, color, refCallback } = this.props
    const inputProps = { id, className, type, placeholder }

    return (
      <input
        {...inputProps}
        className={`input input--outline input--${color || 'white'} ${className}`}
        type={type || 'text'}
        aria-label={placeholder}
        ref={refCallback} />
    )
  }
}

export default TextInput
