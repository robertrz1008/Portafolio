import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";

export function Social(){
    return(
        <section id="social" className="social-section">
            <div className="social-con">
                <div className="contactos">
                    <h5>Contactos</h5>
                    <h6><FaWhatsapp/> : +595 971 626 494</h6>
                    <h6><MdOutlineEmail/> : robert18carl@gmail.com</h6>
                </div>
                <div className="social-links-con">
                    <h5>Redes sociales</h5>
                    <div className="social-links">
                        <div>
                        <a href="https://github.com/robertrz1008" target="_blank"> <FaGithub /></a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/roberto-ramirez-230aa3283/" target="_blank"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}