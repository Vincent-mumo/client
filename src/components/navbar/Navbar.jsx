import React from './Navbar.css'
import L from "../../images/luku.png"
import C from "../../images/cart.png"
import U from "../../images/user.png"
import Cart from '../cart/Cart'
import Orders from "../orders/Orders"
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux"
import { publicRequest } from '../../utils/requestMethods'

import Box from "../../images/box.png"

const Navbar = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const cart = useSelector((state) => state.cart);
  const [cartOpen,setCartOpen] = useState(false)
  const [ordersOpen,setOrdersOpen] = useState(false)
  const [ordersNumber,setOrdersNumber] = useState(0)

  const isMobile = window.matchMedia("(max-width:450px)").matches

  //cart click
  const cartClick = () => {
    setCartOpen(!cartOpen)
  }

  //orders click
  const ordersClick = () => {
    setOrdersOpen(!ordersOpen)
  }

  //getting the number of currentUser orders
   //finding currentUser orders 
 useEffect(() => {
  const customerOrdersCount = async () => {
    try{
      const res = await publicRequest.get(`orders/find/${currentUser._id}`)
      setOrdersNumber(res.data.length)

    }catch(err){}
  }
  customerOrdersCount()
 },[currentUser])



  return (
    <>
    <div className='navbar'>
      <div className="navContainer">
        <div className="navLeft">
          <img src={L} alt="" className="navImageLogo" />
          <Link to="/"><h2 className="logo">Lukuhub</h2></Link>
        </div>
        <div className="navRight">
          {isMobile ?<div className="mobile"  onClick={ordersClick}>
             <img src={Box} className='box'/>
             <h6 className='ordersNumber'>{ordersNumber}</h6>
          </div>:
          <div className="order">
               <span className="orders" onClick={ordersClick}>My Orders</span>
               <span className='numberOfOrders'>{ordersNumber}</span>
          </div>}
          <div className="shopping">
            <img src={C} alt="" className="navImageCart" onClick={cartClick} />
            <span className="cartTotal">{cart.quantity}</span>
          </div>
          {!currentUser ? <div className="credentials">
            <Link to="/login"><button className="credentialButton">Login</button></Link>
            <Link to="/register"><button className="credentialButton">Register</button></Link>
          </div>:
          <div className='user'>
            <p className="username">{currentUser.username}</p>
            <img src={currentUser.img} alt="" className="navImage" />
          </div>}
        </div>
      </div>
    </div>
    {cartOpen && <Cart click={cartClick}/>}
    {ordersOpen && <Orders closed={ordersClick}/>}
    </>
  )
}

export default Navbar