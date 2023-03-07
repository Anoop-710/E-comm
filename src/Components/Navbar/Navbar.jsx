import React from 'react'
import { AiOutlineLogin } from 'react-icons/ai';
import { FaUserPlus } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Navbar.css'
import Badge from '@mui/material/Badge';
// import { makeStyles } from "@material-ui/core/styles";

const Navbar = () => {

   
    
  return (
    <div>
        <div className='navbar'>
            <div className="container">
                <div className="left">Shop-Cart</div>
                <div className="center">
                <span>Home</span>
                <span>Product</span>
                <span>About</span>
                <span>Contact</span>
                </div>
                <div className="right">
                    <button> <AiOutlineLogin /> Login</button>
                    <button> <FaUserPlus /> Register</button>
                    <div>
                    <button> <AiOutlineShoppingCart />
                        <Badge badgeContent={4} color="primary" sx={{ fontSize: 2 }} className='badge'>
                            {/* <MailIcon color="action" /> */}
                        </Badge> Cart
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar