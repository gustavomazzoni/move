import React from 'react'

import { Link } from './core/components'

import Event from './Event'

import './Events.scss'

const AddEventParagraph = () => (
  <p className="events__cta">Não encontrou seu evento favorito abaixo?&nbsp;
    <Link
      className='events__cta-link'
      color='black'
      href='https://github.com/minasdev/eventos/issues/new'
      target='_blank'>
      Adicione-o neste link
    </Link>
  </p>
)

const Events = ({ events }) => (
  <section className="events" id="events">
    <h1 className="events__title">
      <span className="events__title-icon">
      </span>
      <span className="events__title-text">
        Próximos Eventos
      </span>
      <span className="events__title-icon">
      </span>
    </h1>
    <AddEventParagraph />

    <ul className="events__list" id="events-list">
      {
        events && events.map(event => <Event key={event.id} {...event} />)
      }
    </ul>

    <AddEventParagraph />
  </section>
)

export default Events
