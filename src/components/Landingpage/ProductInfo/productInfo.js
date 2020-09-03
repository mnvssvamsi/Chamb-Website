import React from 'react'
import './productInfo.css'
import exitingIcon1 from '../../../images/exciting_img-01.jpg'
import excitingIcon2 from '../../../images/exciting_img-02.jpg'

const ProductInfo = () => {
   return (
      <div className="products_exciting_box">
         <div className="container">
            <div className="row">
               <div className=" col-sm-12">
                  <div className="exciting_box f_pd">
                     <img src={exitingIcon1} className="icon-small" alt="exciting" />
                     <h4>Explore exciting and exotic products
                     tailored to you.
                  </h4>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                     quis nostrud exercitation ullamco laboris..
                  </p>
                  </div>
               </div>
               <div className=" col-sm-12">
                  <div className="exciting_box l_pd">
                     <img src={excitingIcon2} className="icon-small" alt="exciting" />
                     <h4><strong>List your products on</strong> chamb and grow connections.</h4>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                     quis nostrud exercitation ullamco laboris..
                  </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProductInfo
