import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'
import Aux from '../../hoc/Aux'
import './ProductDetails.css'
import { Link } from 'react-router-dom'
 class ProductDetails extends Component {
     state={
         details: []
     }
    componentDidMount(){
        axios.get(`https://5ed296ce717d5f0016518314.mockapi.io/api/v1/products/${this.props.match.params.id}`)
        .then( response =>{
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
            <Aux>
            <Navbar />
            <div className="product-page-main">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <div className="prod-page-title">
                        <h2>{this.state.details.product_name}</h2>
                        <p>By <span>Dex Morgan Mobilya</span></p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-2 col-sm-4">
                     <div className="left-profile-box-m prod-page">
                        <div className="pro-img">
                           <img src="images/150x150.png" alt="person" />
                        </div>
                        <div className="pof-text">
                           <h3>Morgan Mobilya</h3>
                           <div className="check-box"></div>
                        </div>
                        <Link to="#">Visit store</Link>
                     </div>
                  </div>
                  <div className="col-md-7 col-sm-8">
                     <div className="md-prod-page">
                        <div className="md-prod-page-in">
                           <div className="page-preview">
                              <div className="preview">
                                 <div className="preview-pic tab-content">
                                    <div className="tab-pane active">
                                        <img src={this.state.details.preview_image} alt="product" />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         </Aux>
        )
    }
}
export default ProductDetails