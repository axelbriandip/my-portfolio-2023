import React from "react";

import cv from '../cv-abd.pdf';

const Footer = () => {
    return (
        <footer className="container-footer">
            <div className="items-contact">
                <a href="https://www.linkedin.com/in/axelbriandip/" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href={cv} download='CV - Axel Brian Dip'>
                    <i className="fa-solid fa-file"></i>
                </a>
                <a href="https://github.com/axelbriandip" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-github"></i>
                </a>
            </div>
            <p> - Hecho por <a href="https://www.linkedin.com/in/axelbriandip/" target="_blank" rel="noreferrer">Axel Brian Dip</a>.</p>
        </footer>
    );
};

export default Footer;