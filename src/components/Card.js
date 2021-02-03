import React from 'react';
import { Link, Switch } from 'react-router-dom';
import "./styles/Card.css"

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.img} className="card-img" alt=""/>
            <span className="desc">{props.desc}</span>
            <Switch>
                <Link to={props.buttonto} className="Button">{props.buttontext}</Link>
            </Switch>
        </div>
    )
}

export default Card
