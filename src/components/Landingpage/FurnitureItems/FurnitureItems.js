import React, { Component } from 'react'
import axios from 'axios'
import SingleItem from './singleItem/singleItem'
import './FurnitureItems.css'
// import Aux from '../../../hoc/Aux'
class FurnitureItems extends Component {
    state = {
        products: []
    }
    componentDidMount() {
        axios.get('https://5ed296ce717d5f0016518314.mockapi.io/api/v1/homepage-data')
            .then(response => {
                const result = response.data[0].landingSection
                //    console.log(response.data[0].landingSection)
                this.setState({
                    products: result
                })
            })
    }
    render() {
        return (
            <div className='FurnitureItems'>
                    {this.state.products.map(product => {
                        return <SingleItem
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            avatar={product.preview_image}
                        />
                    })}
            </div>
        )
    }
}
export default FurnitureItems;