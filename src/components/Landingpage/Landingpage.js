import React, { Component } from 'react'
// import './Landingpage.css'
import Main from './Main/Main'
import MainSecondary from './MainSecondary/MainSecondary'
import ProductInfo from './ProductInfo/productInfo'
 class Landingpage extends Component {
    render() {
        return (
            <div className='landingpage'>
            <Main />
            <MainSecondary />
            <ProductInfo />
            </div>
        )
    }
}

export default Landingpage

