import React from "react";

import CardProject from "./CardProject";

// photos
import pikachu from '../img/pikachu.png';
import ecommerce from '../img/ecommerce.png';
import rym from '../img/rym.png';

const Project = () => {
    return (
        <section className="container-projects" id="projects">
            <div className="text-projects col-12">
                <h2><i class="fa-solid fa-boxes-stacked"></i> | Mis proyectos</h2>
                <p>Estos son algunos de mis trabajos..</p>
            </div>
            <div className="cards-projects">
                <CardProject
                    photo={pikachu}
                    alt="pikachu"
                    title="Pokemon"
                    description="Encontrá tu pokemon favorito, ya sea por norme o tipo, y conocelo a detalle con este buscador."
                    link_github={'https://github.com/axelbriandip/pokedex'}
                    link_netlify={'https://pokedex-axelbriandip.netlify.app'}
                />
                <CardProject
                    photo={ecommerce}
                    alt="ecommerce"
                    title="Ecommerce"
                    description="Create un usuario, logueate, busca y compra el producto que más te interese en este ecommerce."
                    link_github={'https://github.com/axelbriandip/rickAndMorty'}
                    link_netlify={'https://rickandmorty-academlo.netlify.app/'}
                />
                <CardProject
                    photo={rym}
                    alt="rick & morty"
                    title="Rick & Morty"
                    description="Conocé, universo por universo, todos los personajes de esta maravillosa serie."
                    link_github={'https://github.com/axelbriandip/ecommerce'}
                    link_netlify={'https://ecommerce-axelbriandip.netlify.app/'}
                />
            </div>
        </section>
    );
};

export default Project;