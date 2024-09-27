import React from 'react'
import "./Navbar.css"
import { FaBars } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

function Navbar() {
  return (
    <div className='Uzum'>
      <div className='Nav'>
        <h2 className='uzum'>UZUM MARKET</h2>
        <button className='btn1'>< FaBars /> Katalog</button>
        {/* <input type="text" placeholder="Enter " required> */}
        <h2 className='write'><CiUser /> Kirish</h2>
        <h2 className='write'><FaRegHeart /> Like</h2>
        <h2 className='write'><MdShoppingCart /> Shop</h2>
        
      </div>
    </div>
  )
}
export default Navbar