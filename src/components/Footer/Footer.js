import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="main-footer">
                <div className="container">
                    <div className="footer-top clearfix">
                        <div className='row'>
                            <div className="col-md-2 col-sm-6">
                                <h2>Start a free account today</h2>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="form-box">
                                    <input type="text" placeholder="Enter your e-mail" />
                                    <button>Continue</button>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="help-box-f">
                                    <h4>Question? Call us on 12 34 56 78 for help</h4>
                                    <p>Easy setup - no payment fees - up to 100 products for free</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-link-box clearfix">
                                <div className='row'>
                                    <div className=" col col-sm-4">
                                        <h2>SELL ON CHAMB</h2>
                                        <ul>
                                            <li><Link to="pricing.html">Pricing</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col col-sm-4">
                                        <h2>BUY ON CHAMB</h2>
                                        <ul>
                                            <li><Link to="howitworks.html">How it works suppliers</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col col-sm-4">
                                        <h2>COMPANY</h2>
                                        <ul>
                                            <li><Link to="pricing.html">Contact us</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col col-sm-4">
                                        <h2>INDUSTRIES</h2>
                                        <ul className="col-sm-4">
                                            <li><Link to="#">Textiles</Link></li>
                                            <li><Link to="#">Furniture</Link></li>
                                        </ul>
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer