import React from 'react'

import { Link } from './core/components'

import './Event.scss'

const Event = ({ id, date, name, organizer, url }) => (
  <li className="event">
    <time className="event__date" dateTime={date}>{date}</time>
    <h2 className="event__name">{name}</h2>
    {
      organizer &&
      <p className="event__community">{organizer}</p>
    }
    <Link
      className='event__link'
      href={url}
      target='_blank'
    >
      Visite o site do evento
    </Link>
  </li>
)

export default Event
