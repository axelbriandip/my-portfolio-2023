import React from "react";

// import img
import photo_aboutme from '../img/undraw_programmer4.svg';

const About_me = () => {
    return (
        <section className="container-aboutme row" id="aboutme">
            <h2 className="col-12"><i class="fa-solid fa-person"></i> | Sobre mi</h2>
            <div className="content-aboutme col-12 row">
                <div className="text-aboutme col-12 col-md-6 col-lg-7">
                    <p>
                        ¡Hola! Soy Brian, un programador junior de Tierra del Fuego (Argentina) especializado en <span className="underline">React y Node</span>. Me apasiona el desarrollo de aplicaciones web y tengo una sólida comprensión de los conceptos fundamentales de programación.
                        <br /><br />
                        Desde mi primer encuentro con la programación, supe que había descubierto mi verdadera vocación. Cada línea de código que escribo es una oportunidad para dar vida a <span className="underline">ideas innovadoras y soluciones tecnológicas efectivas</span>.
                        <br /><br />
                        Además de mis habilidades técnicas, también destaco por mi <span className="underline">capacidad para trabajar en equipo y mi actitud positiva</span> hacia los desafíos. Me gusta colaborar con otros profesionales para desarrollar soluciones efectivas y superar obstáculos.
                        <br /><br />
                        Estoy listo para enfrentar desafíos emocionantes y aprovechar al máximo cada oportunidad que se presente. Si buscas a un programador junior comprometido, creativo y apasionado por el desarrollo web, ¡<span className="underline">no dudes en contactarme</span>!
                    </p>
                </div>
                <div className="img-aboutme col-12 col-md-6 col-lg-5">
                    <img src={photo_aboutme} alt="profile"/>
                </div>
            </div>
        </section>
    );
};

export default About_me;