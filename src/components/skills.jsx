import React from 'react'
import logo from "../components/typescript.png"
import reactlogo from "../img/react.png"
import jsLogo from "../img/js.png"
import pgLogo from "../img/postgre.png"
import htmlLogo from "../img/html.png"
import cssLogo from "../img/css.png"
import nodeLogo from "../img/node-js.png"
import gitLogo from "../img/git.png"


function Skills() {
  return (
    <section className="tecnologyes">
        <center><h2>Tecnologias</h2></center>
        <div className='tec-con'>
           <div className='skils'>
              <div className='skils-item'>
                    <img src={logo} alt="" width={40} height={40}/>
                    <p>Typescript</p>
                </div>
                <div className='skils-item'>
                    <img src={htmlLogo} alt="" width={40} height={40}/>
                    <p>Html</p>
                </div>
                <div className='skils-item'>
                    <img src={cssLogo} alt="" width={40} height={40}/>
                    <p>CSS</p>
                </div>
                <div className='skils-item'>
                    <img src={reactlogo} alt="" width={40} height={40}/>
                    <p>React</p>
                </div>
                <div className='skils-item'>
                    <img src={jsLogo} alt="" width={40} height={40}/>
                    <p>JavaScript</p>
                </div>
                <div className='skils-item'>
                    <img src={pgLogo} alt="" width={40} height={40}/>
                    <p>Postgresql</p>
                </div>
                <div className='skils-item'>
                    <img src={nodeLogo} alt="" width={40} height={40}/>
                    <p>Node.js</p>
                </div>
                <div className='skils-item'>
                    <img src={gitLogo} alt="" width={40} height={40}/>
                    <p>Git</p>
                </div>
           </div>
        </div>

      </section>
  )
}

export default Skills