import React from "react";

const Navbar = () => {
    return (
        <header className="header">
            <a href="#home" className="logo">Axel Brian Dip</a>

            <input type="checkbox" id="check" />

            <label for="check" className="icons">
                <i class="fa-solid fa-bars" id="menu-icon"></i>
                <i class="fa-solid fa-xmark" id="close-icon"></i>
            </label>

            <nav className="navbar">
                <a href="#home" className="nav-item">Inicio</a>
                <a href="#aboutme" className="nav-item">Sobre mi</a>
                <a href="#abilities" className="nav-item">Habilidades</a>
                <a href="#projects" className="nav-item">Proyectos</a>
                <a href="#contact" className="nav-item">Contacto</a>
            </nav>
        </header>
    );
};

export default Navbar;