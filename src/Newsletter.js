import React, { Component } from 'react'

import { Link } from './core/components'
import { Button, TextInput } from './core/form/components'
import { validateEmail } from './core/form/validators'

import './Newsletter.scss'

class Newsletter extends Component {
  constructor(props) {
    super(props)

    this._validateForm = this._validateForm.bind(this)
    this.state = {
      inputError: false
    }
  }

  _validateForm(e) {
    const error = validateEmail(this.input.value)
    if (error) {
      e.preventDefault()
      this.input.value = ''

      this.setState({ inputError: true })
      return false
    }
    this.setState({ inputError: false })
    return true
  }

  render() {
    const { inputError } = this.state

    return (
      <section className="newsletter" id="newsletter">
        <form
          className="newsletter__form"
          id="bookingadventure-newsletter-form"
          action="https://bookingadventure.us14.list-manage.com/subscribe/post?u=8151bfe84e709034b416ad844&amp;id=0b42fc5dde"
          method="post"
          onSubmit={this._validateForm}>
          <label className="newsletter__title" htmlFor='email'>Newsletter</label>
          <div className="newsletter__actions">
            <p className="newsletter__contribution-cta">
              <Link
                color='white'
                target='_blank'
                href='https://github.com/minasdev/newsletter/issues?utm_source=minasdevorg&utm_medium=cta&utm_campaign=minasdevorg'>
                Contribua para nossa newsletter
              </Link>, ou:
            </p>
            <TextInput
              className={`newsletter__email ${inputError ? 'newsletter__email--error' : ''}`}
              id='email'
              name='EMAIL'
              refCallback={(input) => this.input = input}
              placeholder='Digite seu email e fique sabendo dos próximos eventos'/>
          </div>
          <Button className='newsletter__signup-action' type='submit'>Cadastrar</Button>
        </form>
      </section>
    )
  }
}

export default Newsletter
