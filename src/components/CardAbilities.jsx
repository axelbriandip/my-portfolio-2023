import React from "react";

const CardAbitily = props => {
    return (
        <div className="card col-3">
            <i className={props.icon} id="icon"></i>
            <div className="card__content">
                <p className="card__title"><i className={props.icon}></i> {props.name}</p>
                <p className="card__description">{props.description}</p>
            </div>
        </div>
    );
};

export default CardAbitily;
