import React, { useEffect, useState } from 'react';
import './Pricing.css';
import Card from './Card/Card'
import Navbar from '../../components/Navbar/Navbar';
function Pricing() {

    const [data, setData] = useState();
    const [trans, setTrans] = useState();
    const [isMonthly, setIsMonthly] = useState(true);

    useEffect(() => {
        let api = 'https://5ed296ce717d5f0016518314.mockapi.io/api/v1/pricing-details';
        fetch(api)
            .then((response) => {
                return response.json()
            }).then(data => {
                setData(data[0]);
            }).catch(err => {
                console.log(err);
            });
    }, []);

    const getMonthlyData = () => {
        setTrans('');
    }

    const getYearlyData = () => {
        setTrans('year-trans');
    }

    return (
        <div className="pricing">
            <Navbar />
            <h1 className="pricing--heading">Pricing on Chamb</h1>
            <p className="pricing--text">Get targeted distribution to Chamb's built-in network of global companies.<br></br>
                Choose the right one for you.
            </p>
            <div className="btn-month-year-group">
                <p className="btn-month-year-bg"></p>
                <span className={`clr ${trans}`}></span>
                <p className="btn-month-year">
                    <span className="btn-monthly" onClick={getMonthlyData}>Monthly</span>
                    <span className="btn-yearly" onClick={getYearlyData}>Yearly</span>
                </p>
            </div>
            <Card pricingData={data} isMonthly={isMonthly} />

        </div>
    )
}

export default Pricing;