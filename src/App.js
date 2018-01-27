import React, { Component } from 'react';

import Header from './Header';
import Newsletter from './Newsletter';
import Events from './Events';

import './App.scss';

class App extends Component {
  render() {
    const events = [
      {
        id: 1,
        date: '28/01/2018',
        name: 'Pedalada na Lagoa',
        organizer: 'Marcelo Minto',
        url: 'https://github.com/minasdev/manifesto'
      },
      {
        id: 2,
        date: '29/01/2018',
        name: 'Corrida na Orla Ipanema/Leblon',
        organizer: 'Alana Sparemberger',
        url: 'https://github.com/minasdev/manifesto'
      },
      {
        id: 3,
        date: '30/01/2018',
        name: 'Surf no posto 11',
        organizer: 'Gustavo Mazzoni',
        url: 'https://github.com/minasdev/manifesto'
      },
      {
        id: 4,
        date: '02/02/2018',
        name: 'Futevôlei no posto 9',
        organizer: 'Gustavo Mazzoni',
        url: 'https://github.com/minasdev/manifesto'
      },
      {
        id: 5,
        date: '06/02/2018',
        name: 'Pedalada até o Cristo',
        organizer: 'Marcelo Minto',
        url: 'https://github.com/minasdev/manifesto'
      }
    ]

    return (
      <div className="App">
        <div className="parallax parallax--header">
          <Header />

          <main className="about" id="about">
            <h1 className="about__title">Comunidade Outdoor</h1>
            <p className="about__description">
              Se você quer experienciar a vida, explorar e viver o que de melhor o mundo tem a oferecer, construir uma memória cheia de histórias para contar e conhecer pessoas com os mesmos interesses enquanto faz tudo isso, você acaba de encontrar a sua galera!
            </p>
          </main>
        </div>

        <div className="parallax parallax--body">
          <Newsletter />

          <Events events={events} />
        </div>
      </div>
    );
  }
}

export default App;
