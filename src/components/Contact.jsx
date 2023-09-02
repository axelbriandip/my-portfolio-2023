import React from "react";
import FormContact from "./Form-contact";

const Contact = () => {
    return (
        <section className="container-contact row" id='goto-contact'>
            <h2 className="hover-line col-12"><i class="fa-solid fa-message"></i> Contacto</h2>
            <div className="content-contact col-12">
                <div className="info-contact">
                    <p>
                    Espero que haya sido de tu agrado todo lo que viste en el portafolio y te haya despertado el interés en mi trabajo, ya que todo está hecho con muchísimo esfuerzo y dedicación.
                    <br /><br />
                    Si llegaste hasta acá y estas interesado/a en saber cómo puedo ayudar a tu empresa o tenes un proyecto en el que creas que pueda encajar, te invito a dejarme un mensaje y con gusto me pondré en contacto contigo a la brevedad.
                    <br /><br /><br />
                    <i class="fa-solid fa-location-dot"></i> Tierra del Fuego, Argentina<br />
                    <i class="fa-solid fa-phone"></i> +54 2964-569727<br />
                    <i class="fa-solid fa-envelope"></i> axelbriandip.rg@gmail.com
                    </p>
                </div>
                <div className="message-contact">
                    <FormContact/>
                </div>
            </div>
        </section>
    );
};

export default Contact;