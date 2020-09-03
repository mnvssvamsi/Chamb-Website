import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'
// import Aux from '../../hoc/Aux'
import './ProductDetails.css'
// import { Link } from 'react-router-dom'
class ProductDetails extends Component {
   state = {
      details: []
   }
   componentDidMount() {
      axios.get(`https://5ed296ce717d5f0016518314.mockapi.io/api/v1/products/${this.props.match.params.id}`)
         .then(response => {
            let result = response.data
            console.log(result)
            this.setState({
               details: result
            })
         })
   }
   render() {
      // console.log(this.props)
      return (
         <div>
            <Navbar />
            <div className="product-page-main">
               <div className="container">
                        <div className="prod-page-title">
                           <h2>{this.state.details.product_name}</h2>
                           <p>By Dex Morgan Mobilya</p>
                        </div>
                     </div>
                  </div>
                  <div className="preview">
                     <img src={this.state.details.preview_image} alt="product" />
                  </div>
         </div>
      )
   }
}
export default ProductDetails