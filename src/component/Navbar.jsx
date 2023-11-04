import React from 'react'
import './Navbar.css'
import logo from "./Assets/9319774_4136934.svg";

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt=''/>
                <p>HealthAffairs</p>
            </div>
            <ul className="nav-menu">
                <li>Home</li>
                <li>Services</li>
                <li>Product</li>
                <li>Shop</li>
                <li>Register</li>
            </ul>
        </div>
      )
}
export default Navbar;
