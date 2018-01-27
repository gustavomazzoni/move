import React from 'react'

const Navigation = props => (
  <nav className="navigation header__navigation" id="navigation">
    <ul className="navigation__list">
      <li className="navigation__item">
        <a className="navigation__link" href="https://github.com/minasdev/manifesto" target="_blank" rel="noopener noreferrer">Manifesto</a>
      </li>
      <li className="navigation__item">
        <a className="navigation__link" href="https://github.com/minasdev/codigo-de-conduta" target="_blank" rel="noopener noreferrer">Código de Conduta</a>
      </li>
      <li className="navigation__item">
        <a className="navigation__link" href="https://slack.minasdev.org">slack.minasdev.org</a>
      </li>
      <li className="navigation__item">
        <ul className="contacts">
          <li className="contacts__item">
            <a className="contacts__link" href="https://github.com/minasdev" target="_blank" rel="noopener noreferrer">
              GitHub do Minas Dev
            </a>
          </li>
          <li className="contacts__item">
            <a className="contacts__link" href="https://www.facebook.com/minasdev" target="_blank" rel="noopener noreferrer">
              Facebook do Minas Dev
            </a>
          </li>
          <li className="contacts__item">
            <a className="contacts__link" href="https://twitter.com/minasdev" target="_blank" rel="noopener noreferrer">
              Twitter do Minas Dev
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
)

export default Navigation
