import "./SingleProduct.css"
import B from "../../images/basket.png"
import { useState } from "react"
import {useDispatch} from "react-redux"
import {addProduct} from "../../redux/cartRedux"


const SingleProduct = ({item}) => {
  const dispatch = useDispatch()

  

 


 //function to push product into cart
 const handleClick = () => {
  dispatch(addProduct(item))
  
 }

  return (
    <div className="singleProduct">
        <img src={item.image} alt="" className="productImage" />
        <hr className="line" />
        <div className="productDesc">
            <div className="descItem">
              <h6>No:</h6>
              <h6>{item.size}</h6>
            </div>
            <div className="descItem">
              <h6>Price:</h6>
              <h6>Ksh {item.price}</h6>
          </div>
        </div>
        <button className="cartButton" onClick={handleClick}>Add to cart <img src={B} alt="" className="basket" /></button>
      </div>
  )
}

export default SingleProduct