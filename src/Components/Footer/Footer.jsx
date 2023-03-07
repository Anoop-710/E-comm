import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="container-footer">
            <div className="eCart">
                <h4>E-cart</h4>
                <span>About us</span>
                <span>Terms and conditions</span>
                <span>Payments</span>
                <span>Return policy</span>
            </div>

            <div className="help">
                <h4>Help</h4>
                <span>Customer Care</span>
                <span>Refunds</span>
                <span>Track order</span>
                <span>Redeem coupons</span>
            </div>

            <div className="shop">
                <h4>Categories</h4>
                <span>Men</span>
                <span>Women</span>
                <span>Kids</span>
                <span>Ethnic wears</span>
            </div>

            <div className="follow">
                <h4>Follow us</h4>
                <span>Facebook</span>
                <span>Instagram</span>
                <span>Twitter</span>
                <span>Youtube</span>
            </div>
            
        </div>
    </div>
  )
}

export default Footer