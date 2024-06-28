import React from 'react'
import hotelSys from "../img/proyects/hotel.jpeg"
import chat from "../img/proyects/chat.jpeg"
import climaImg from "../img/proyects/clima.jpeg"
import "../css/projects.css"

function Proyects() {
  return (
    <section id='projects' className='proyect-section'>
        <h3>Proyectos</h3>
        <div className='projects-list'>
            <div className='proyects-con'>
                <div className='proyect-img-con pro-hotel'>
                    <img src={hotelSys} alt="" />
                </div>
                <div className='proyect-detail'>
                    <h4>Sistema de hotelería</h4>
                    <p>
                        Aplicacion de escritorio para gestion de hetelería para la realizacion de registro y reporte de transacciones. 
                    </p>
                    <div className='project-stacks'>
                        <span>electron</span>
                        <span>javascript</span>
                        <span>mySql</span>
                    </div>
                    <div className='line'></div>
                    <div className='btn-con'>
                        <div className='bnt-link'>
                            <a href="https://github.com/robertrz1008/hotel-desktop" target='_blank'>Codigo</a>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            <div className='proyects-con'>
                <div className='proyect-img-con pro-chat'>
                    <img src={chat} alt="" />
                </div>
                <div className='proyect-detail'>
                    <h4>App de chat</h4>
                    <p>
                        Aplicacion de mensajerias a tiempo real, cuenta con autenticación de usuario y edición de perfil. 
                    </p>
                    <div className='project-stacks'>
                        <span>express</span>
                        <span>react</span>
                        <span>postgresql</span>
                    </div>
                    <div className='line'></div>
                    <div className='btn-con'>
                        <div className='bnt-link'>
                            <a href="https://github.com/robertrz1008/hotel-desktop" target='_blank'>Codigo</a>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='proyects-con'>
                <div className='proyect-img-con pro-chat'>
                    <img src={climaImg} alt="" />
                </div>
                <div className='proyect-detail'>
                    <h4>App de clima</h4>
                    <p>
                        Una aplicación web para saber el clima y el pronostico de los proximos 3 dias de la ciudad deseada. 
                    </p>
                    <div className='project-stacks'>
                        <span>express</span>
                        <span>react</span>
                        <span>postgresql</span>
                    </div>
                    <div className='line'></div>
                    <div className='btn-con'>
                        <div className='bnt-link'>
                            <a href="https://github.com/robertrz1008/hotel-desktop" target='_blank'>Codigo</a>
                        </div>
                    </div>      
                </div>
            </div>
        </div>
    </section>
  )
}

export default Proyects