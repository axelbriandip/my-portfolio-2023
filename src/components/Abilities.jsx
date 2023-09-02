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
                    description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                />
                <CardAbitily
                    icon="fa-brands fa-node-js"
                    name="Node js"
                    description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                />
                <CardAbitily
                    icon="fa-brands fa-python"
                    name="Python Django"
                    description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                />
                <CardAbitily
                    icon="fa-brands fa-css3-alt"
                    name="CSS"
                    description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                />
                <CardAbitily
                    icon="fa-brands fa-js"
                    name="Javascript"
                    description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                />
                <CardAbitily
                    icon="fa-brands fa-git-alt"
                    name="GIT"
                    description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                />
            </div>
        </section>
    );
};

export default Abilities;