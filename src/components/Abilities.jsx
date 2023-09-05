import React from "react";
import CardAbitily from "./CardAbilities";

const Abilities = () => {
    return (
        <section className="container-abilities row" id="abilities">
            <div className="text-abilities col-12">
                <h2><i class="fa-brands fa-stack-overflow"></i> | Mis Habilidades</h2>
                <p>A continuación, te muestro parte de mis habilidades y herramientas que domino..</p>
            </div>
            <div className="container-cards col-12 row">
                <CardAbitily
                    icon="fa-brands fa-react"
                    name="React js"
                    description="Es una biblioteca de JavaScript para construir interfaces de usuario interactivas y reutilizables mediante componentes. Es eficiente y facilita la creación de aplicaciones complejas."
                />
                <CardAbitily
                    icon="fa-brands fa-node-js"
                    name="Node js"
                    description="Es conocido por su eficiencia y escalabilidad, y se utiliza ampliamente para desarrollar aplicaciones web en tiempo real, servidores API y herramientas de línea de comandos."
                />
                <CardAbitily
                    icon="fa-brands fa-python"
                    name="Python Django"
                    description="Es conocido por su enfoque en la reutilización de código y su énfasis en la seguridad. Es ampliamente utilizado para construir sitios web y aplicaciones robustas."
                />
                <CardAbitily
                    icon="fa-brands fa-css3-alt"
                    name="CSS"
                    description="Permite separar el contenido de la página web de su presentación visual, lo que facilita la creación de diseños personalizados y estilos para diferentes dispositivos y tamaños de pantalla."
                />
                <CardAbitily
                    icon="fa-brands fa-js"
                    name="Javascript"
                    description="Es utilizado principalmente para el desarrollo de aplicaciones web y la creación de interacciones dinámicas en sitios web."
                />
                <CardAbitily
                    icon="fa-brands fa-git-alt"
                    name="GIT"
                    description="Es un sistema de control de versiones distribuido que permite a los desarrolladores rastrear y gestionar los cambios en el código fuente de un proyecto."
                />
            </div>
        </section>
    );
};

export default Abilities;