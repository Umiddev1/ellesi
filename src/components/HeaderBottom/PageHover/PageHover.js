import React from 'react'
import '../DemoHover/DemoHover.css';
import '../ShopHover/ShopHover.css';
import './PageHover.css';
function PageHover() {
  return (
    <div className="pagehover">
      <div className="pagehover__wrapper">
        <ul className="pagehover__list"> 
          <li className="demohover__item"><h3 className="demohover__title">Pages</h3></li>
          <li className="demohover__item"><a className="demohover__link" href="#">About us</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Contact us</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Designer</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">FAQ</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Terms & Conditions</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Returns & Exchanges</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Shipping & Delivery</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Privacy Policy</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Shortcode Page</a></li>
        </ul>
        <ul className="pagehover__list"> 
          <li className="demohover__item"><h3 className="demohover__title">Header</h3></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Header Design 1</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Header Design 2</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Header Design 3</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Header Design 3 <span className="demohover__new">new</span></a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Header Transparent</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Vertical Menu</a></li>
        </ul>
        <ul className="pagehover__list"> 
          <li className="demohover__item"><h3 className="demohover__title">Shop</h3></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Shopping Cart</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">My Account</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Track order</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Password Page</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">404 Not Found</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">With Product Listing</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">With Product Shop</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">With Lookbook <span className="shophover__hot">hot</span></a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">With Gallery</a></li>
        </ul>
      </div>
    </div>
  )
}

export default PageHover