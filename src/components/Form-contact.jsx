import React from "react";

const FormContact = () => {
    return (
        <form action="https://formsubmit.co/axelbriandip.rg@gmail.com" method="POST">
            <div className="group-input">
                <label htmlFor="">Nombre</label>
                <input type="text" placeholder="¿Cómo te llamas?" name="name" required/>
            </div>
            <div className="group-input">
                <label htmlFor="">Correo</label>
                <input type="email" placeholder="¿Cuál es tu correo electrónico?" name="mail" required/>
            </div>
            <div className="group-input">
                <label htmlFor="">Mensaje</label>
                <textarea placeholder="¿Qué quiere decirme?" id="" cols="30" rows="10" name="message" required></textarea>
            </div>
            <button class="btn btn-contact" type="submit">¡Enviar mensaje!</button>

            {/* cambiar template */}
            <input type="hidden" name="_template" value="box"/>
            {/* valor por default del asunto */}
            <input type="hidden" name="_subject" value="&#128235; ¡Nuevo mensaje del portafolio!"/>
            {/* ¿A dónde va? */}
            <input type="hidden" name='_next' value='https://axelbriandip.netlify.app/'/>
            {/* <input type="hidden" name='_next' value='http://localhost:3000/'/> */}
            {/* Sin captcha */}
            <input type="hidden" name='_captcha' value={false} />
        </form>
    );
};

export default FormContact;