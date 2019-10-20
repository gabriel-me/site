import React from 'react'
import List from './List/index'
import './styles.css'

const github = 'https://github.com/gabriel-me'
const linkedin = 'https://www.linkedin.com/in/gabrielmarquesdesouza/'
const facebook = 'https://www.facebook.com/people/Gabriel-Marques/100019155346643'

const listItens = [
  { name: 'Inicial', link: '/home' },
  { name: 'Sobre', link: '/about' },
  { name: 'Artigos', link: '/articles' },
  { name: 'Videos', link: '/videos' },
  { name: 'Repositórios', link: '/repositories' },
  { name: 'Contato', link: '/contact' }
]

export default () => 
  <aside className="menu">
    <header>
      <div>
        <img className="profile-photo" src="./images/me.jpg" alt="Gabriel Marques"/>
        <h1>Gabriel Marques</h1>
      </div>
      <ul>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <li>github</li>
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <li>LinkedIn</li>
        </a>
        <a href={facebook} target="_blank" rel="noopener noreferrer">
          <li>Facebook</li>
        </a>
      </ul>
    </header>
    <nav>
      <List itens={listItens} />
    </nav>
  </aside>