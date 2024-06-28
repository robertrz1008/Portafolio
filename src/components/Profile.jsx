import React from 'react'
import profileImg from "../img/profile.png"
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Profile() {
  return (
    <main>
        <div id='profile' className='profile'>
            <div className='profile-text'>
                  <h5>Hola soy</h5>
                    <h1>Roberto Ramirez</h1> 
                    <h6>Desarrollador de software y estudiante de Análisis de Sistemas</h6>
                    <div className='btn-cv-con'>
                        <button className='btn-cv'>Curriculum</button>
                    </div>
            </div>
            <div className='profile-img'>
              <img src={profileImg} alt="" width={250} height={250}/>
            </div>
        </div>
    </main>
  )
}
