import React from 'react';
import './Card.css';

function Card(props) {
    // console.log(props.features)

    return (
        <div className="pricing-card__group">
            <div className="pricing-card">
    <p className="pricing-card__heading">Chamb Free</p>
                <p className="pricing-card__small">No binding</p>
                <hr className="pricing-card__hr"></hr>
                <div className="pricing-card__features">
                    {props.features}
                </div>
                <p className="pricing-card__amt">{props.cost}</p>
                <p className="pricing-card__btn">Sign Up</p>
            </div>
        </div>
    )
}

export default Card;