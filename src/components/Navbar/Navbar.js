import React from 'react'
import './Navbar.css'
import Logo from '../../images/logo.png'
// import searchIcon from '../../images/search-icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav>
            <div className='nav-left'>
                <div className='Logo'>
                    <Link to='/'>
                    <img src={Logo} alt='Logo' />
                    </Link>
                </div>
                <div className='search'>
                    <input placeholder='Search for Products' />
                </div>
            </div>
            <div className='nav-right'>
                <ul className='NavigationItems pages'>
                    <li className='NavigationItem'>
                        <Link to='/howItWorks'>How it works</Link>
                    </li>
                    <li className='NavigationItem'>
                        <Link to='/pricing'>Pricing</Link>
                    </li>
                </ul>
                <ul className='NavigationItems'>
                    <li className='NavigationItem'>
                        <Link to='/'>Login</Link>
                    </li>
                    <li className='NavigationItem Signup'>
                        <Link to='/' >Sign Up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;