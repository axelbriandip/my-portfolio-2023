import React from "react";

const CardProject = props => {
    return (
        <div class="card-project">
            <div className="img-card">
                <img src={props.photo} alt={props.alt}/>
            </div>
            <div className="text-card">
                <span className="title">{props.title}</span>
                <p className="description">{props.description}</p>
            </div>
            <div className="buttons-card">
                <a href={props.link_github}>Github</a>
                <a href={props.link_netlify}>Demo</a>
            </div>
        </div>
    );
};

export default CardProject;