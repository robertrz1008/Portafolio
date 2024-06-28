import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Skills from './components/skills'
import Proyects from './components/Proyects'
import { Social } from './components/Social'

function App() {

  return (
      <div>
        <Navbar/>
        <Profile/> 
        <div id='about' className="about">
          <h3>Sobre mí</h3>
          <h6>
            Me llamo Roberto Ramirez, y soy un desarrollador en formación.
            Actualmente estoy estudiando en la Universidad de Canindeyú, Paraguay,
            donde adquiero una base sólida en el area de la informática. 
            Ademas soy un autoridadcta comprometido. A lo lorgo de mi tiempo libre, 
            he dedicado horas a explorar nuevas tecnologías y mejorar mis habilidades en programación.
            Esta combinación de aprendizaje formal y autodidacta me ha permitido 
            desarrollar una gran comprención del mundo del software.
          </h6>
        </div>
        <Skills/>
        <Proyects/>
        <Social/>   
        <div style={{height: "30px"}}>
        </div>

        <footer>
          <div className='footer-line'></div>
          <p>© 2024 | Roberto Ramirez</p>
        </footer>
      </div>
  )
}

export default App
