import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Main.css'
import FurnitureItems from '../FurnitureItems/FurnitureItems'

class Main extends Component {
    render() {
        return (
            <div className='main content '>
                <div className='container '>
                <div className='row clearfix '>
                    <div className='find-box'>
                        <h1>Find your next product here</h1>
                        <h4>It has never been easier</h4>
                        <div className='content-items'>
                        <div className='col col-md-6 col-sm-12'>
                            <div className='form-sh'>
                                <input type="text" placeholder="Search something you want" />
                            </div>
                        </div>
                        <div className='col col-md-3 col-sm-6'>
                            <div className='form-sh'>
                                {/* <button className='btn-default'>Furniture</button> */}
                                <select className='btn btn-default'>
                                    <option>Furniture</option>
                                    <option>Appliances</option>
                                    <option>Stationary</option>
                                </select>
                            </div>
                        </div>
                        <div className='col col-md-3 col-sm-6'>
                            <div className='form-sh'>
                                <Link to='/' className='btn searchButton'>Search</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <FurnitureItems />
                </div>
            </div>
        )
    }
}
export default Main