import React, { useState, useEffect } from 'react';
import './Pricing.css';
import Card from './Card/Card'
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios'
import Footer from '../../components/Footer/Footer';
function Pricing() {

    const [data, setData] = useState();
    const [cost, setCost] = useState();
    const [features, setFeatures] = useState();

    const [trans, setTrans] = useState();
    const [isMonthly, setIsMonthly] = useState(true);

    useEffect(() => {
        axios.get('https://5ed296ce717d5f0016518314.mockapi.io/api/v1/pricing-details')
            .then(response => {
                let data;
                data = response.data
                // console.log( data[0].monthly)
                let i;
                for(i=0; i<data.length; i++){
                    let innerData = data[i].monthly
                    console.log(innerData[0])
                    let typeFree = innerData[0].free;
                    setData(typeFree);
                    setCost(typeFree.price)
                     typeFree.features.map(feature => {
                        console.log(feature)
                       return setFeatures(feature)
                    })
                    // let typePro = innerData[0].pro;
                    // setData(typePro);
                    // setCost(typePro.price)
                    //  typePro.features.map(feature => {
                    //    return setFeatures(feature)
                    // })
                }
            })
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
            <Card  pricingData={data} features={features} cost={cost} isMonthly={isMonthly} />
            {/* <Card  isMonthly={isMonthly} features={features} cost={cost} /> */}
            {/* <Card pricingData={data} isMonthly={isMonthly} />
            <Card pricingData={data} isMonthly={isMonthly} /> */}
            <Footer />            
        </div>
    )
}

export default Pricing;