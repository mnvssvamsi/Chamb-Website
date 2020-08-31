import React from 'react'
import { Link } from 'react-router-dom'
import './singleItem.css'
const SingleItem = (props) => {
    return (
        <div className='boxes  col-lg-3 col-sm-6 col-md-3'>
            <Link to={`/${props.id}`}>
                <div className='box-img'>
                    <h4>{props.name}</h4>
                    <img className='image' src={props.avatar} alt='avatar' />
                </div>
            </Link>
        </div>
    )
}

export default SingleItem