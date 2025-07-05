import React from 'react'
import flmain from '../../assets/images/fkheaderlogo_plus.svg'
import './navbar.css'
function Navbar(props) {

  return (
    <>
    <div className="navbar-main">
        <div className="navbar-item1">
            <img src={flmain} alt="Flipkart-main" />
        </div>
        <div className="navbar-item2">
            <button><i className="fa-solid fa-magnifying-glass" style={{color: "#c2c2c2"}}></i></button>
            <input type="search" name="search" id="search" placeholder='Search for prodeuct, Brands and more' />
        </div>
        <div className="navbar-item3">
            <button className='login-btn'>
                <i className="fa-regular fa-user"></i> {props.loginName}</button>
        </div>
        <div className="navbar-item4">
            <button className='cart-btn'>
                <i className="fa-solid fa-cart-shopping"></i> Cart</button>
        </div>
        <div className="navbar-item5">
            <button className="become-a-seller">
                <i className="fa-solid fa-bag-shopping"></i> Become a seller
            </button>
        </div>
        <div className="navbar-item6">
            <button className='options'>
                <i className="fa-solid fa-ellipsis-vertical"></i>
            </button>
            <div className="option-show">
                <div className="option-items"><a href="#"><i className="fa-solid fa-bell"></i>Notofication Preferences</a></div>
                <div className="option-items"><a href="#"><i className="fa-solid fa-headphones"></i>24/7 Customer Support</a></div>
                <div className="option-items"><a href="#"><i className="fa-solid fa-arrow-trend-up"></i>Advertise</a></div>
                <div className="option-items"><a href="#"><i className="fa-solid fa-download"></i>Download App</a></div>
            </div>
        </div>
    </div>
    </>
  )
}
export default Navbar