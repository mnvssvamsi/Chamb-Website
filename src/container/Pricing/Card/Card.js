import React from 'react';
import './Card.css';

function Card(props) {    
    
    return (
        <div className="pricing-card__group">
            <div className="pricing-card">
                <p className="pricing-card__heading">Chamb Growth</p>
                <p className="pricing-card__small">No binding</p>
                <hr className="pricing-card__hr"></hr>
                <div className="pricing-card__features">
                    <p>Logo and Branding</p>
                    <p>Unlimited products</p>
                    <p>Analytics</p>
                </div>            
                <p className="pricing-card__amt">Free</p>
                <p className="pricing-card__btn">Sign Up</p>
            </div>    
            <div className="pricing-card">
                <p className="pricing-card__heading">Chamb Growth</p>
                <p className="pricing-card__small">No binding</p>
                <hr className="pricing-card__hr"></hr>
                <div className="pricing-card__features">
                    <p>Logo and Branding</p>
                    <p>Unlimited products</p>
                    <p>Analytics</p>
                </div>            
                <p className="pricing-card__amt">Free</p>
                <p className="pricing-card__btn">Sign Up</p>
            </div>                                
            <div className="pricing-card">
                <p className="pricing-card__tag">MOST POPULAR</p>
                <p className="pricing-card__heading">Chamb Growth</p>
                <p className="pricing-card__small">No binding</p>
                <hr className="pricing-card__hr"></hr>
                <div className="pricing-card__features">
                    <p>Logo and Branding</p>
                    <p>Unlimited products</p>
                    <p>Analytics</p>
                </div>            
                <p className="pricing-card__amt">Free</p>
                <p className="pricing-card__btn">Sign Up</p>
            </div> 
            <div className="pricing-card">
                <p className="pricing-card__heading">Chamb Growth</p>
                <p className="pricing-card__small">No binding</p>
                <hr className="pricing-card__hr"></hr>
                <div className="pricing-card__features">
                    <p>Logo and Branding</p>
                    <p>Unlimited products</p>
                    <p>Analytics</p>
                </div>            
                <p className="pricing-card__amt">Free</p>
                <p className="pricing-card__btn">Sign Up</p>
            </div> 
        </div>
    )
}

export default Card;