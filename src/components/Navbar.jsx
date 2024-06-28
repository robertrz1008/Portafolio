import React, { useState } from 'react'
import "../index.css"
import "../css/navBar.css"

export default function Navbar() {

  const [isActive, setIsActive] = useState("")

  return (
    <header>
        <div className="navbar">
            <div className="logo"><a href="">robertRz_dev</a></div>
            <ul className="links">
                <li><a href="#about">Sobre mí</a></li>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#social">Contáctame</a></li>
            </ul>
            <a href="#" className="action_btn"></a>
            <div
              onClick={() =>{
                if(!isActive){
                  setIsActive("open")
                }else{
                  setIsActive("")
                }
                console.log(isActive)
              }}
              className="toggle_btn">
                <i className={isActive? "fa-solid fa-xmark": "fa-solid fa-bars"}></i>
            </div>
        </div>

        <div className={`dropdown_menu ${isActive? "open" : ""}`}>
            <ul className="links">
                <li><a href="#about">Sobre mí</a></li>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#social">Conáactame</a></li>
            </ul>
      </div>
  </header>
  )
}
