import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/TutCard.css"

const TutCard = (props) => {
    return (
        <div className="card-tut">
            <img className="tut-img" src={props.tut_img} alt=""/>
            <span className="tut-desc">{props.desc}</span>
            <Link to={props.tut_to} className="link-tut">{props.button_text}</Link>
        </div>
    )
}

export default TutCard
