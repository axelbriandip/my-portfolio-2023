import React from "react";

// import img
import programmer_home from '../img/undraw_programmer1.svg';

const Home = () => {
    return (
        <section className="container-home">
            <div className="img-home">
                <img src={programmer_home} alt="programmer home"/>
            </div>
            <div className="text-home row">
                <i className="fa-solid fa-code col-12"></i>
                <h1 className="col-12">Desarrollador web full-stack</h1>
                <p className="col-12">
                    Soy un programador junior entusiasta y comprometido. Estoy emocionado por adquirir experiencia y aprender de cada proyecto. ¡Trabajemos juntos para crear soluciones innovadoras!
                </p>
                <a href="#goto-contact" class="btn btn-contact col-12">Contáctame</a>
            </div>
        </section>
    );
};

export default Home;